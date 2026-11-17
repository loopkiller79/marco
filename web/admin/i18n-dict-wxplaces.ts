// Weather places (#11: a screen's own place, a weather card's place, "Tiempo en varias ciudades") and the birthday
// titles of the Filtros preview and the Cumpleaños page (#10). Admin text keyed by the Spanish string t() takes.
// Each row is [es, en, pt, nl, da]. ROWS_WXPLACES feeds EN and PT (i18n-dict.ts); NL_WXPLACES and DA_WXPLACES are
// spread into NL and DA.
export const DE_WXPLACES: Record<string, string> = {
  'Cumpleaños reconocido': 'Geburtstag erkannt',
  'Sin mayúsculas': 'Großschreibung geglättet',
  'Renombrado por la regla #{n}': 'Umbenannt durch Regel #{n}',
  'título original': 'Originaltitel',
  'Marco deja solo el nombre junto al 🎂. Puedes cambiarlo en Cumpleaños, «Ordenar los títulos de cumpleaños».': 'Marco zeigt nur den Namen neben dem 🎂 an. Du kannst das unter Geburtstage, „Geburtstagstitel bereinigen“, ändern.',
  'Ordenar los títulos de cumpleaños': 'Geburtstagstitel bereinigen',
  'Los cumpleaños de tus calendarios (por ejemplo «Cumpleaños de Ana» o «Ana\'s Birthday») se muestran solo con el nombre junto al 🎂. Desactívalo para ver el título tal como viene del calendario.': 'Geburtstage aus deinen Kalendern (z. B. „Geburtstag von Anna“ oder „Ana\'s Birthday“) werden nur mit dem Namen neben dem 🎂 angezeigt. Deaktiviere dies, um den Originaltitel aus dem Kalender zu sehen.',
  'Ubicación de esta pantalla': 'Standort dieses Bildschirms',
  'Todas las vistas de esta pantalla (y sus pasos en un carrusel) muestran el tiempo de este lugar.': 'Alle Ansichten dieses Bildschirms (und seine Schritte in einem Karussell) zeigen das Wetter dieses Ortes.',
  'La de casa': 'Zuhause',
  'Otro lugar': 'Anderer Ort',
  'Igual que la pantalla': 'Wie der Bildschirm',
  'Lugar': 'Ort',
  'Lugares': 'Orte',
  'Añadir lugar': 'Ort hinzufügen',
  'Hacen falta al menos {n} lugares.': 'Es werden mindestens {n} Orte benötigt.',
  'Hasta {n} lugares.': 'Bis zu {n} Orte.',
  'De {min} a {max} lugares. Una pantalla muestra como mucho 8 lugares además del suyo.': 'Von {min} bis {max} Orte. Ein Bildschirm zeigt zusätzlich zu seinem eigenen maximal 8 Orte an.',
  'Máxima y mínima de hoy': 'Höchst- und Tiefstwert heute',
  'Tiempo en varias ciudades': 'Wetter in mehreren Städten',
  'El tiempo de ahora en dos a ocho lugares.': 'Das aktuelle Wetter an zwei bis acht Orten.',
};

export const ROWS_WXPLACES: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_WXPLACES: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_WXPLACES: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
