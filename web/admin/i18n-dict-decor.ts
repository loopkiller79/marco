// Seasonal decorations and the HTML overlay of a screen (#24, Pantalla → Ajustes). Admin text keyed by the Spanish
// string t() takes. Each row is [es, en, pt, nl, da, pl]. ROWS_DECOR feeds EN and PT (i18n-dict.ts); NL_DECOR,
// DA_DECOR and PL_DECOR are spread into NL, DA and PL.
export const DE_DECOR: Record<string, string> = {
  'Decoración de temporada': 'Saisonale Dekoration',
  'Luces, nieve o confeti que dibuja Marco, sin código. Se quedan en el borde de arriba y no tapan nada importante.': 'Lichter, Schnee oder Konfetti, die Marco ganz ohne Code zeichnet. Sie bleiben am oberen Rand und verdecken nichts Wichtiges.',
  'Decoración': 'Dekoration',
  'Automática (según la fecha)': 'Automatisch (nach Datum)',
  'Halloween': 'Halloween',
  'Año Nuevo': 'Silvester & Neujahr',
  'Nieve': 'Schnee',
  'Unos pocos copos que caen despacio, con las luces de Navidad.': 'Ein paar langsam fallende Schneeflocken zusammen mit den Weihnachtslichtern.',
  'En modo ligero, en Ahorro o con menos movimiento, las luces se quedan quietas y no hay nieve ni confeti.': 'Im Lite-Modus, im Sparmodus oder bei reduzierter Bewegung bleiben die Lichter still und es gibt weder Schnee noch Konfetti.',
  'HTML sobre la pantalla': 'HTML über dem Bildschirm',
  'Tu propio HTML y CSS, dibujado encima de toda la pantalla (por ejemplo, unas luces en diciembre).': 'Dein eigenes HTML und CSS, das über den gesamten Bildschirm gezeichnet wird (zum Beispiel Lichterketten im Dezember).',
  'Cada año entre dos fechas': 'Jedes Jahr zwischen zwei Daten',
  '{used} de {max} caracteres': '{used} von {max} Zeichen',
  'Fechas de cada una': 'Zeiträume der Dekorationen',
  'Cada año, los dos días incluidos. Si dos coinciden, gana Año Nuevo, luego Navidad y luego Halloween.': 'Jedes Jahr, beide Tage inklusive. Wenn sich zwei überschneiden, gewinnt Silvester & Neujahr, dann Weihnachten und dann Halloween.',
  'Volver a las fechas de siempre': 'Auf Standarddaten zurücksetzen',
  'Puedes tener hasta {n}, cada uno con sus fechas; los que coinciden se ven a la vez. Los scripts no se ejecutan y solo se cargan imágenes https o data:. No reciben toques: la pantalla sigue funcionando debajo.': 'Du kannst bis zu {n} anlegen, jeweils mit eigenen Daten; sich überschneidende werden gleichzeitig angezeigt. Skripte werden nicht ausgeführt und es werden nur https- oder data:-Bilder geladen. Sie fangen keine Berührungen ab: Der Bildschirm darunter bleibt normal bedienbar.',
  '{used} de {max} KB entre todos.': '{used} von {max} KB insgesamt.',
  'Nombre, p. ej. Luces de Navidad': 'Name, z. B. Weihnachtsbeleuchtung',
  'Añadir HTML': 'HTML hinzufügen',
  'Añadir otro HTML': 'Weiteres HTML hinzufügen',
};
export const ROWS_DECOR: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_DECOR: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_DECOR: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
export const PL_DECOR: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[5]]));
