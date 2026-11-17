// A Personalizado photo card and the sidebar's photo with photos of their own (#41): the Fondo's photo options in the
// editor. Admin text keyed by the Spanish string t() takes. Each row is [es, en, pt, nl, da, pl]. ROWS_PHOTOSOURCE
// feeds EN and PT (i18n-dict.ts); NL_PHOTOSOURCE, DA_PHOTOSOURCE and PL_PHOTOSOURCE are spread into NL, DA and PL.
export const DE_PHOTOSOURCE: Record<string, string> = {
  'Como el Fondo de la pantalla': 'Wie der Hintergrund des Bildschirms',
  'Propias': 'Eigene',
  'Empieza con las opciones del Fondo de la pantalla.': 'Startet mit den Einstellungen des Bildschirmhintergrunds.',
  'Se ve en la pantalla al guardar.': 'Wird nach dem Speichern auf dem Bildschirm angezeigt.',
  'Lluvia o nieve sobre esta foto según el tiempo actual. No se muestra con Ahorro ni con ?lite=1.': 'Regen oder Schnee über diesem Foto passend zum aktuellen Wetter. Wird im Sparmodus und mit ?lite=1 nicht angezeigt.',
  'Lluvia, nieve, niebla y sol sobre esta foto, sin gotas en el cristal.': 'Regen, Schnee, Nebel und Sonne über diesem Foto, ohne Tropfen auf der Scheibe.',
  'La barra lateral o una tarjeta Foto de esta pantalla tiene sus propias fotos. Se cambian en el editor.': 'Die Seitenleiste oder eine Fotokarte dieses Bildschirms verwendet eigene Fotos. Sie werden im Editor geändert.',
};

export const ROWS_PHOTOSOURCE: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_PHOTOSOURCE: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_PHOTOSOURCE: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
export const PL_PHOTOSOURCE: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[5]]));
