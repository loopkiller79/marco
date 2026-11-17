// Microsoft To Do lists on the Tareas page (#15) and their activity entries. Admin text keyed by the Spanish string t()
// takes. Each row is [es, en, pt, nl, da]. ROWS_TODO feeds EN and PT (i18n-dict.ts); NL_TODO and DA_TODO are spread
// into NL and DA. Microsoft names the app "Microsoft To Do" in every language.
export const DE_TODO: Record<string, string> = {
  'Listas de Microsoft To Do': 'Microsoft To Do-Listen',
  'Las tareas pendientes de las listas que elijas salen junto a las de aquí, con su fecha y una estrella si son importantes. Se actualizan cada 5 minutos.': 'Offene Aufgaben aus den ausgewählten Listen erscheinen zusammen mit den hiesigen Aufgaben, inklusive Fälligkeitsdatum und Stern bei wichtigen Aufgaben. Aktualisierung alle 5 Minuten.',
  'Ninguna cuenta de Microsoft vinculada': 'Kein Microsoft-Konto verknüpft',
  'Vincula tu cuenta de Microsoft en': 'Verknüpfe dein Microsoft-Konto unter',
  'Vuelve a vincular la cuenta para ver tus listas de To Do.': 'Verknüpfe das Konto erneut, um deine To Do-Listen zu sehen.',
  'Volver a vincular': 'Erneut verknüpfen',
  'No se pudieron leer las listas de To Do. Inténtalo más tarde.': 'Die To Do-Listen konnten nicht geladen werden. Versuche es später erneut.',
  'Esta cuenta no tiene listas de To Do.': 'Dieses Konto hat keine To Do-Listen.',
  'Compartida': 'Geteilt',
  'Una tarea de To Do tocada en la pantalla se marca como hecha también en Microsoft. Es el mismo ajuste que el de las rutinas de Familia. No funciona en modo privado.': 'Eine auf dem Bildschirm angetippte To Do-Aufgabe wird auch bei Microsoft als erledigt markiert. Dies nutzt dieselbe Einstellung wie die Familienroutinen. Funktioniert nicht im Privatmodus.',
  'Estas listas solo se pueden leer: vuelve a vincular la cuenta para poder marcarlas desde la pantalla.': 'Diese Listen können nur gelesen werden: Verknüpfe das Konto erneut, um Aufgaben auf dem Bildschirm abhaken zu können.',
  'Esa es otra cuenta. Entra como {email}.': 'Das ist ein anderes Konto. Melde dich als {email} an.',
  'Esa es otra cuenta. Entra con la cuenta que querías volver a vincular.': 'Das ist ein anderes Konto. Melde dich mit dem Konto an, das du erneut verknüpfen wolltest.',
  'Tarea hecha: {task}': 'Aufgabe erledigt: {task}',
  'Tarea desmarcada: {task}': 'Aufgabe wieder geöffnet: {task}',
  'Listas': 'Listen',
  'Tareas escritas en Marco': 'In Marco eingetragene Aufgaben',
  'Lista sin nombre': 'Unbenannte Liste',
  'Las listas de Microsoft To Do se eligen en la sección Tareas.': 'Microsoft To Do-Listen werden im Bereich Aufgaben ausgewählt.',
  'Vacío: «Tareas», o el nombre de la lista cuando eliges solo una.': 'Leer: „Aufgaben“ oder der Name der Liste, wenn nur eine ausgewählt ist.',
  'Sin icono: ✅.': 'Kein Symbol: ✅.',
  'Qué tareas': 'Welche Aufgaben',
  'Importantes': 'Wichtig',
  'Para hoy': 'Heute fällig',
  '«Para hoy»: las que vencen hoy o ya vencieron. Las tareas escritas en Marco no tienen estrella ni fecha, así que solo salen con «Todas».': '„Heute fällig“: Aufgaben, die heute fällig oder überfällig sind. In Marco eingetragene Aufgaben haben weder Stern noch Datum und erscheinen daher nur bei „Alle“.',
  'Qué listas y qué tareas muestra la lista de tareas de esta pantalla, con su título.': 'Welche Listen und Aufgaben die Aufgabenliste dieses Bildschirms anzeigt, samt Titel.',
  'En una pantalla Personalizado, cada tarjeta de tareas tiene estos ajustes en el editor. Puedes poner varias, por ejemplo «Compra» y «Casa».': 'Auf einem benutzerdefinierten Bildschirm hat jede Aufgabenkarte diese Einstellungen im Editor. Du kannst mehrere anlegen, z. B. „Einkauf“ und „Haushalt“.',
};

export const ROWS_TODO: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_TODO: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_TODO: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
