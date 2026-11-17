// The Entidad card (ha.tile) of Personalizado: admin text keyed by the Spanish string t() takes.
// Each row is [es, en, pt, nl, da]. ROWS_TILE feeds EN and PT (i18n-dict.ts); NL_TILE and DA_TILE are spread into NL
// and DA.
export const DE_TILE: Record<string, string> = {
  'Una fila en los tamaños pequeño y ancho, dos en el mediano. En el mini y en la línea no se ven. Toca el icono para encender o apagar.': 'Eine Zeile bei den Größen Klein und Breit, zwei bei Mittel. Bei Mini und Zeile werden sie nicht angezeigt. Tippe auf das Symbol zum Ein- oder Ausschalten.',
  'Mostrar nombre': 'Name anzeigen',
  'Mostrar estado': 'Status anzeigen',
  'La línea que dice cómo está (Encendido, Abierta, 21 °C).': 'Die Zeile mit dem aktuellen Zustand (Ein, Offen, 21 °C).',
  'Los que se pueden elegir en la pantalla. Automático: apagado y los dos que más se usan de los que tiene.': 'Die Modi, die auf dem Bildschirm gewählt werden können. Automatisch: Aus sowie die zwei meistgenutzten verfügbaren Modi.',
  'En los tamaños mediano y alto.': 'Bei den Größen Mittel und Hoch.',
  'Ajustar tamaño': 'Größe anpassen',
  'No hay sitio para un tamaño mayor. Haz sitio a su alrededor o elige otro tamaño.': 'Kein Platz für eine größere Darstellung. Schaffe Platz rundherum oder wähle eine andere Größe.',
  'El contenido no cabe entero; selecciónalo y pulsa Ajustar tamaño': 'Der Inhalt passt nicht vollständig; wähle die Karte aus und drücke Größe anpassen',
  'En pantallas lentas se muestra sin desenfoque': 'Auf langsamen Bildschirmen ohne Weichzeichner',
  'Nada': 'Nichts',
  'Cuadrado': 'Quadratisch',
  'Toca el icono para encender o apagar.': 'Tippe auf das Symbol zum Ein- oder Ausschalten.',
  'Desde el tamaño pequeño. Automático: los colores si la luz los tiene. En los tamaños cuadrado, mediano y alto, también el brillo.': 'Ab Größe Klein. Automatisch: Farben, sofern die Lampe sie unterstützt. Bei Quadratisch, Mittel und Hoch zusätzlich die Helligkeit.',
  'Este widget no puede ser más grande ni más pequeño en ese sentido': 'Dieses Widget kann in diese Richtung nicht größer oder kleiner gemacht werden',
  'Tamaño {w}×{h}': 'Größe {w}×{h}',
  'máximo': 'maximal',
  'mínimo': 'minimal',
  'Altura': 'Höhe',
  'En cuadros de la cuadrícula. Este widget va de {min} a {max}.': 'In Rasterfeldern. Dieses Widget reicht von {min} bis {max}.',
  'El contenido no cabe entero. Pulsa para ajustar el tamaño.': 'Der Inhalt passt nicht vollständig. Tippe, um die Größe anzupassen.',
};

export const ROWS_TILE: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_TILE: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_TILE: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
