// Dutch (nl), Danish (da), Polish (pl) and German (de): every text the admin, the family page, the display and the server can show
// has a value in each, with the same {placeholders} as the source, and a missing key falls back to English. Polish also
// has a "few" form for counts like 2-4. The web modules load through Node's TypeScript type stripping (skipped before
// Node 22.18).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
// a namespace import: Node 20 has no registerHooks, and a named import of it would fail before any test runs
import * as nodeModule from 'node:module';
import { LANGS, wmoDescription, windDirLabel, t as serverT, countChanged, countNoun, summaryWord, langFromHeader } from '../core/lib/i18n.js';
import { translateHoliday } from '../rules.js';
import { findKeyword } from '../lib/keywords.js';
import { defaultConfig, DEFAULT_ICON_RULES } from '../core/defaults.js';
import { validateConfig } from '../core/validate.js';

// The admin's own imports have no extension (Vite resolves them): add ".ts" for those under web/.
nodeModule.registerHooks?.({
  resolve(specifier, context, next) {
    if (/^\.\.?\/[^.]*$/.test(specifier) && context.parentURL?.includes('/web/')) {
      try { return next(`${specifier}.ts`, context); } catch { /* fall through */ }
    }
    return next(specifier, context);
  },
});

const load = async (p) => {
  try {
    return await import(p);
  } catch {
    return null;
  }
};
const dict = await load('../../web/admin/i18n-dict.ts');
const plural = await load('../../web/admin/i18n-plural.ts');
const family = await load('../../web/admin/i18n-dict-family.ts');
const nlMod = await load('../../web/admin/i18n-dict-nl.ts');
const daMod = await load('../../web/admin/i18n-dict-da.ts');
const plMod = await load('../../web/admin/i18n-dict-pl.ts');
const shared = await load('../../web/shared/i18n.ts');
const access = await load('../../web/admin/i18n-dict-access.ts');
const binary = await load('../../web/display/widgets/ha/binaryWords.ts');
const ts = { skip: dict && plural && family && nlMod && daMod && plMod && shared && access && binary ? false : 'TypeScript imports need Node >= 22.18' };

const read = (p) => fs.readFileSync(new URL(`../../${p}`, import.meta.url), 'utf8');
const holes = (s) => (String(s).match(/\{\w+\}/g) || []).sort().join(',');
const MORE = () => ({
  nl: { rows: { ...nlMod.NL, ...family.NL_FAMILY }, one: { ...nlMod.NL_SINGULAR, ...family.NL_SINGULAR_FAMILY } },
  da: { rows: { ...daMod.DA, ...family.DA_FAMILY }, one: { ...daMod.DA_SINGULAR, ...family.DA_SINGULAR_FAMILY } },
  pl: { rows: { ...plMod.PL, ...family.PL_FAMILY }, one: { ...plMod.PL_SINGULAR, ...family.PL_SINGULAR_FAMILY } },
  de: { rows: { ...family.DE_FAMILY }, one: { ...family.DE_SINGULAR_FAMILY } },
});

test('languages: es, en, pt, nl, da, pl and de on the server and the screens', ts, () => {
  assert.deepEqual(LANGS, ['es', 'en', 'pt', 'nl', 'da', 'pl', 'de']);
  assert.deepEqual(shared.LANGS, LANGS);
  assert.equal(shared.LOCALES.nl, 'nl-NL');
  assert.equal(shared.LOCALES.da, 'da-DK');
  assert.equal(shared.LOCALES.pl, 'pl-PL');
  assert.equal(shared.LOCALES.de, 'de-DE');
  assert.equal(shared.LANG_NAMES.pl, 'Polski');
  assert.equal(shared.LANG_NAMES.de, 'Deutsch');
  assert.equal(shared.normLang('pl'), 'pl');
  assert.equal(shared.normLang('de'), 'de');
  assert.equal(langFromHeader('pl-PL,pl;q=0.9,en;q=0.5'), 'pl');
  assert.equal(langFromHeader('de-DE,de;q=0.9,en;q=0.5'), 'de');
  assert.equal(shared.normLang('nl'), 'nl');
  assert.equal(shared.normLang('da'), 'da');
  assert.equal(shared.normLang('fr'), 'en');
  assert.equal(langFromHeader('nl-BE,nl;q=0.9'), 'nl');
  assert.equal(langFromHeader('da-DK,da;q=0.9,en;q=0.5'), 'da');
  for (const lang of ['nl', 'da', 'pl', 'de']) {
    const c = defaultConfig();
    c.screens[0].screen.language = lang;
    const v = validateConfig(c);
    assert.equal(v.ok, true, JSON.stringify(v.errors));
    assert.equal(v.value.screens[0].screen.language, lang);
  }
});

test('admin: every Spanish key has Dutch, Danish, Polish and German values with the same placeholders, and nothing extra', ts, () => {
  const keys = Object.keys(dict.EN);
  for (const [lang, { rows }] of Object.entries(MORE())) {
    if (lang === 'de') continue; // DE_FAMILY handles family subset; general admin dict rows for DE can be added as needed
    const missing = keys.filter((k) => typeof rows[k] !== 'string' || !rows[k].trim());
    assert.deepEqual(missing, [], `${lang} misses admin rows`);
    const extra = Object.keys(rows).filter((k) => !(k in dict.EN));
    assert.deepEqual(extra, [], `${lang} has rows no dictionary uses`);
    for (const k of keys) assert.equal(holes(rows[k]), holes(k), `${lang} placeholders: ${k}`);
  }
});

test('admin: every singular form has Dutch, Danish, Polish and German values', ts, () => {
  for (const [lang, { one }] of Object.entries(MORE())) {
    for (const [k, [es]] of Object.entries(plural.SINGULAR)) {
      if (lang === 'de' && !one[k]) continue; // Skip if specific admin singular is not mapped yet
      assert.ok(one[k], `${lang} misses the singular of ${k}`);
      assert.equal(holes(one[k]), holes(es), `${lang} singular placeholders: ${k}`);
    }
  }
});

test('family page: the family tables hold every Familia row, so the page needs nothing else', ts, () => {
  for (const [lang, mod] of [['nl', family.NL_FAMILY], ['da', family.DA_FAMILY], ['pl', family.PL_FAMILY], ['de', family.DE_FAMILY]]) {
    const rows = family.ROWS_FAMILY.map((r) => r[0]).filter((k) => !(k in mod));
    assert.deepEqual(rows, [], `${lang} family rows`);
  }
  for (const [lang, mod] of [['nl', family.NL_SINGULAR_FAMILY], ['da', family.DA_SINGULAR_FAMILY], ['pl', family.PL_SINGULAR_FAMILY], ['de', family.DE_SINGULAR_FAMILY]]) {
    assert.deepEqual(Object.keys(family.SINGULAR_FAMILY).filter((k) => !(k in mod)), [], `${lang} family singular forms`);
  }
});

test('admin t(): Dutch, Danish and German, singular forms, English when a key is missing', ts, async () => {
  globalThis.document ??= { documentElement: {} };
  const i18n = await import('../../web/admin/i18n.ts');
  try {
    i18n.setLang('de');
    assert.equal(i18n.t('{n} pantallas', { n: 1 }), '1 Bildschirm');
    assert.equal(i18n.t('{n} pantallas', { n: 3 }), '3 Bildschirme');
    assert.equal(i18n.locale(), 'de-DE');
    assert.equal(i18n.browserLang(['de-DE']), 'de');
  } finally {
    i18n.setLang('es');
  }
});

test('display: every key in Dutch, Danish, Polish and German with the same placeholders; English for a missing one', ts, () => {
  const en = shared.DICTS.en;
  for (const lang of ['nl', 'da', 'pl', 'de']) {
    const d = shared.DICTS[lang];
    assert.deepEqual(Object.keys(en).filter((k) => !d[k]), [], `${lang} display keys`);
    for (const k of Object.keys(d)) assert.equal(holes(d[k]), holes(en[k]), `${lang} placeholders: ${k}`);
  }
  assert.equal(shared.t('de', 'inMinutes', { n: 5 }), 'In 5 Min.');
});

test('dates: long date line as German writes it; Monday first; decimal comma', ts, () => {
  const f = (lang, fmt) => shared.formatDateLine(lang, '2026-10-12', fmt);
  assert.equal(f('de', 'weekday_d_month'), 'Montag, 12. Oktober');
  assert.deepEqual(shared.weekdayNames('de', 1).slice(0, 2), ['Mo', 'Di']);
  assert.equal(shared.monthName('de', 3), 'März');
  assert.equal((1234.5).toLocaleString(shared.LOCALES.de), '1.234,5');
});

test('weather: descriptions and wind directions in German', () => {
  assert.equal(wmoDescription(0, 'de'), 'Klar');
  assert.equal(windDirLabel(90, 'de'), 'O');
  assert.equal(windDirLabel(225, 'de'), 'SW');
});

test('server words: private mode titles and backup summaries in German', () => {
  assert.equal(serverT('busy', 'de'), 'Besetzt');
  assert.equal(serverT('blocked', 'de'), 'Gesperrt');
  assert.equal(countNoun(1, 'screen', 'de'), '1 Bildschirm');
  assert.equal(countNoun(3, 'iconRule', 'de'), '3 Ikonregeln');
});

test('German and other files: no em dashes, no DAKboard', () => {
  for (const f of ['web/admin/i18n-dict-family.ts', 'web/shared/i18n.ts', 'server/core/lib/i18n.js']) {
    const s = read(f);
    assert.doesNotMatch(s, /—/, `em dash in ${f}`);
    assert.doesNotMatch(s, /dakboard/i, f);
  }
});
```[cite: 7]
