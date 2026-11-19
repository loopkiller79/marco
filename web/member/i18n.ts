import type { Lang } from '../shared/types';
import { DE_ACCESS, ROWS_ACCESS_ALL } from '../admin/i18n-dict-access';

const COLUMN: { [K in Exclude<Lang, 'es' | 'de'>]: number } & Record<string, number> = { en: 1, pt: 2, nl: 3, da: 4, pl: 5 };
const LANGS = ['es', ...Object.keys(COLUMN), 'de'] as Lang[];
const DICTS: Partial<Record<Lang, Record<string, string>>> = { de: DE_ACCESS };
for (const l of LANGS) {
  if (l === 'es' || l === 'de') continue;
  const d: Record<string, string> = {};
  for (const row of ROWS_ACCESS_ALL) if (row[COLUMN[l]]) d[row[0]] ??= row[COLUMN[l]];
  DICTS[l] = d;
}

const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

let current: Lang = 'en';
const LS_LANG = 'marco.member.lang';

/**
 * The household language: from the address (?lang=, which the private link and the code screen carry), else the one
 * the page used last time, else the browser's, else English.
 */
export function initialLang(): Lang {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (isLang(q)) return q;
  } catch {
    /* ignore */
  }
  try {
    const v = localStorage.getItem(LS_LANG);
    if (isLang(v)) return v;
  } catch {
    /* ignore */
  }
  try {
    for (const l of navigator.languages ?? [navigator.language]) {
      const base = String(l).slice(0, 2).toLowerCase();
      if (isLang(base)) return base;
    }
  } catch {
    /* ignore */
  }
  return 'en';
}

export function setLang(l: Lang) {
  if (!isLang(l)) return;
  current = l;
  document.documentElement.lang = l;
  try {
    localStorage.setItem(LS_LANG, l);
  } catch {
    /* ignore */
  }
}

export const getLang = () => current;

export function t(key: string, vars?: Record<string, string | number>): string {
  let s = current === 'es' ? key : DICTS[current]?.[key] ?? DICTS.en?.[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
  return s;
}

const LOCALE: Record<string, string> = { es: 'es-ES', en: 'en-GB', pt: 'pt-PT', nl: 'nl-NL', da: 'da-DK', pl: 'pl-PL', de: 'de-DE' };
export const locale = () => LOCALE[current] ?? 'en-GB';
