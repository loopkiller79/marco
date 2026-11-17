// "Fondos especiales" (#14): the special background rules of a screen (Fondo page) and their gallery picker. Admin
// text keyed by the Spanish string t() takes. Each row is [es, en, pt, nl, da]. ROWS_BGRULES feeds EN and PT
// (i18n-dict.ts); NL_BGRULES and DA_BGRULES are spread into NL and DA.
export const DE_BGRULES: Record<string, string> = {
  'Fondos especiales': 'Besondere Hintergründe',
  'Otras fotos en fechas señaladas o cuando hay cierto evento. Gana la primera regla que coincide; si ninguna coincide, se usa el fondo normal.': 'Andere Fotos an besonderen Tagen oder bei bestimmten Terminen. Die erste zutreffende Regel gewinnt; trifft keine zu, wird der normale Hintergrund gezeigt.',
  'Añadir regla': 'Regel hinzufügen',
  'Por ejemplo, fotos de Navidad del 1 al 31 de diciembre, o de la playa los días con un evento «Vacaciones».': 'Zum Beispiel Weihnachtsfotos vom 1. bis 31. Dezember oder Strandfotos an Tagen mit einem Termin „Urlaub“.',
  'Evento de hoy con…': 'Heutiger Termin mit…',
  'Entre dos fechas': 'Zwischen zwei Daten',
  'Un solo día': 'Ein einzelner Tag',
  'Un cumpleaños': 'Ein Geburtstag',
  'Palabras del título, separadas por comas, p. ej. Navidad, Reyes': 'Wörter im Titel, durch Kommas getrennt, z. B. Weihnachten, Ostern',
  'Calendarios de esta pantalla': 'Kalender dieses Bildschirms',
  'al': 'bis',
  'Cuando alguien de Cumpleaños cumple años hoy.': 'Wenn jemand aus Geburtstage heute Geburtstag hat.',
  'Elegir fotos': 'Fotos auswählen',
  'Elige un álbum': 'Album auswählen',
  'Como siempre ({interval})': 'Wie immer ({interval})',
  'Como siempre': 'Wie immer',
  'Elegidas: {count} de {max}': 'Ausgewählt: {count} von {max}',
  'No hay fotos en la galería': 'Keine Fotos in der Galerie vorhanden',
  'Sube fotos en Galería': 'Lade unter Galerie Fotos hoch',
  'Elige al menos una foto': 'Wähle mindestens ein Foto aus',
  'Fotos de la galería': 'Galeriefotos',
  'Todas en rotación': 'Alle im Wechsel',
  'Solo las elegidas': 'Nur ausgewählte',
  'Una sola foto: el fondo no cambia.': 'Ein einzelnes Foto: Der Hintergrund wechselt nicht.',
  'Solo pasan estas fotos.': 'Es werden nur diese Fotos gezeigt.',
};

export const ROWS_BGRULES: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_BGRULES: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_BGRULES: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
