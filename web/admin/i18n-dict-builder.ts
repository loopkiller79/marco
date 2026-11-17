// Personalizado (the screen builder, layout 'canvas'): admin text keyed by the Spanish string t() takes.
// Each row is [es, en, pt, nl, da]. ROWS_BUILDER feeds EN and PT (i18n-dict.ts); NL_BUILDER and DA_BUILDER are
// spread into NL and DA.
export const DE_BUILDER: Record<string, string> = {
  // Personalizado (the screen builder, layout 'canvas')
  'Personalizado': 'Individuell',
  'Coloca tú los widgets en una cuadrícula: relojes, calendarios, el tiempo, fotos y más, cada uno con su tamaño y su aspecto.':
    'Platziere die Widgets selbst in einem Raster: Uhren, Kalender, Wetter, Fotos und mehr, jedes in eigener Größe und eigenem Stil.',

  // Familia y hogar
  'Familia y hogar': 'Familie und Zuhause',
  'Tareas de hoy': 'Heutige Aufgaben',
  'Menú de hoy': 'Heutiger Speiseplan',
  'Cumpleaños próximos': 'Kommende Geburtstage',
  'Lo destacado de hoy': 'Highlights heute',
  'Aviso en pantalla': 'Hinweis auf dem Bildschirm',
  'Las caras de la familia, con sus estrellas y lo que llevan hecho hoy.':
    'Die Gesichter der Familie mit ihren Sternen und dem, was sie heute schon geschafft haben.',
  'Las rutinas de hoy de una persona o de todos. Se pueden marcar tocando la pantalla si lo permites en Familia.':
    'Die heutigen Routinen einer Person oder aller. Sie lassen sich durch Tippen auf den Bildschirm abhaken, wenn du es unter Familie erlaubst.',
  'Quién lleva más estrellas.': 'Wer die meisten Sterne hat.',
  'El próximo premio de cada uno y cuánto le falta.':
    'Die nächste Belohnung jeder Person und wie viel noch dazu fehlt.',
  'Todo lo que queda por hacer hoy, con la cara de quién lo hace.':
    'Alles, was heute noch ansteht, mit dem Gesicht der zuständigen Person.',
  'El desayuno, la comida y la cena de hoy.':
    'Frühstück, Mittagessen und Abendessen für heute.',
  'Los menús de la semana, con hoy resaltado.':
    'Der Speiseplan der Woche, mit dem heutigen Tag hervorgehoben.',
  'Los cumpleaños del próximo mes, del calendario Cumpleaños.':
    'Die Geburtstage des nächsten Monats aus dem Kalender Geburtstage.',
  'El próximo evento, lo que pasa ahora, entradas y salidas y los cumpleaños de hoy.':
    'Der nächste Termin, was gerade läuft, An- und Abreisen sowie die heutigen Geburtstage.',
  'El aviso que esté en pantalla. Si no hay ninguno, la tarjeta no se ve.':
    'Der Hinweis, der auf dem Bildschirm angezeigt wird. Wenn keiner vorhanden ist, bleibt die Karte unsichtbar.',

  // Editor, palette, inspector, templates
  'Rehecho': 'Wiederhergestellt',
  'Añadido: {name}': 'Hinzugefügt: {name}',
  'Eliminado: {name}': 'Entfernt: {name}',
  'Duplicado': 'Dupliziert',
  'Movido a la barra lateral': 'In die Seitenleiste verschoben',
  'Movido al área principal': 'In den Hauptbereich verschoben',
  'Quitar la barra lateral': 'Seitenleiste entfernen',
  'Los widgets de la barra lateral pueden pasar al área principal o borrarse.':
    'Die Widgets in der Seitenleiste können in den Hauptbereich verschoben oder gelöscht werden.',
  'Borrarlos': 'Löschen',
  'Moverlos al área principal': 'In den Hauptbereich verschieben',
  '¿Empezar con esta plantilla?': 'Mit dieser Vorlage starten?',
  'Los widgets de ahora se quitan. Puedes deshacerlo.':
    'Die aktuellen Widgets werden entfernt. Du kannst das rückgängig machen.',
  'Usar la plantilla': 'Vorlage verwenden',
  'Plantilla aplicada': 'Vorlage angewendet',
  '¿Copiar a {name}?': 'Nach {name} kopieren?',
  'Esa pantalla pasa a Personalizado con estos widgets. Se guarda con el resto de cambios.':
    'Dieser Bildschirm wechselt mit diesen Widgets zu Individuell. Das wird zusammen mit den übrigen Änderungen gespeichert.',
  'Copiado a {name}. Se guarda al pulsar Guardar.':
    'Nach {name} kopiert. Wird beim Tippen auf Speichern gesichert.',
  'Hay un problema en {name}: {msg}': 'Es gibt ein Problem in {name}: {msg}',
  'la página': 'der Seite',
  'Tamaño cambiado': 'Größe geändert',
  'Movido a la columna {x}, fila {y}': 'In Spalte {x}, Zeile {y} verschoben',
  'Movido': 'Verschoben',
  'Editor': 'Editor',
  'Rehacer': 'Wiederholen',
  'Plantillas': 'Vorlagen',
  'Los cambios del editor se perderán.': 'Die Änderungen im Editor gehen verloren.',
  'Añadir widgets': 'Widgets hinzufügen',
  'Tienes cambios sin guardar de hace {n} min. ¿Recuperarlos?':
    'Du hast ungespeicherte Änderungen von vor {n} Min. Wiederherstellen?',
  'Recuperar': 'Wiederherstellen',
  'Toca dónde quieres poner «{name}»': 'Tippe dorthin, wo du „{name}“ platzieren möchtest',
  'En el primer hueco': 'Auf den ersten freien Platz',
  'En vertical los widgets se ordenan solos a partir del horizontal.':
    'Im Hochformat ordnen sich die Widgets automatisch anhand des Querformats an.',
  'Editar en vertical': 'Im Hochformat bearbeiten',
  'Así se ve en la pantalla. Pulsa Esc para seguir editando.':
    'So sieht es auf dem Bildschirm aus. Drücke Esc, um weiterzubearbeiten.',
  'Añadido': 'Hinzugefügt',
  '{n} widgets no caben enteros': '{n} Widgets passen nicht vollständig',
  '{n} de {max} widgets': '{n} von {max} Widgets',
  'Sin cambios': 'Keine Änderungen',
  'También se guardarán los cambios de otras secciones':
    'Änderungen aus anderen Bereichen werden ebenfalls gespeichert',
  'Mover al área principal': 'In den Hauptbereich verschieben',
  'Mover a la barra lateral': 'In die Seitenleiste verschieben',
  'Ocultar sin borrar': 'Ausblenden, ohne zu löschen',
  'Tamaño': 'Größe',
  'No hay sitio para este tamaño': 'Für diese Größe ist kein Platz',
  'Foto': 'Foto',
  'Animado': 'Animiert',
  'Oscurecer foto': 'Foto abdunkeln',
  'Se cambian en la sección Fondo de esta pantalla.':
    'Wird im Bereich Hintergrund dieses Bildschirms geändert.',
  'Fotos de tu galería.': 'Fotos aus deiner Galerie.',
  'Fotos de tu galería y de stock.': 'Fotos aus deiner Galerie und Archivfotos.',
  'Fotos de tus álbumes de Immich.': 'Fotos aus deinen Immich-Alben.',
  'Fotos de stock ({topic}).': 'Archivfotos ({topic}).',
  'Fotos de stock.': 'Archivfotos.',
  'Color del fondo': 'Hintergrundfarbe',
  'Sin color, el del tema de la pantalla.': 'Ohne Farbe wird die des Bildschirm-Designs verwendet.',
  'Barra lateral': 'Seitenleiste',
  'Izq.': 'Links',
  'Der.': 'Rechts',
  'Anchura de la barra': 'Breite der Seitenleiste',
  'Estrecha': 'Schmal',
  'Ancha': 'Breit',
  'Relleno de la barra': 'Füllung der Seitenleiste',
  'Sólida': 'Deckend',
  'La foto ya está de fondo en toda la pantalla.':
    'Das Foto liegt bereits als Hintergrund über dem gesamten Bildschirm.',
  'Estilo por defecto de las tarjetas': 'Standardstil der Karten',
  'Sin tarjeta': 'Ohne Karte',
  'Esquinas': 'Ecken',
  'Suaves': 'Sanft',
  'Rectas': 'Eckig',
  'Redondeadas': 'Abgerundet',
  'Muy redondeadas': 'Stark abgerundet',
  'En Raspberry Pi y Fire TV se usa un fondo sólido.':
    'Auf Raspberry Pi und Fire TV wird ein deckender Hintergrund verwendet.',
  'Permitir tocar en la pantalla': 'Tippen auf dem Bildschirm erlauben',
  'Cualquiera que toque la pantalla podrá usar estos controles.':
    'Jeder, der den Bildschirm berührt, kann diese Steuerelemente bedienen.',
  'Rendimiento': 'Leistung',
  'Ahorro quita el desenfoque y las animaciones en esta pantalla, para televisores y placas lentas.':
    'Der Sparmodus schaltet Weichzeichner und Animationen auf diesem Bildschirm ab, ideal für langsame Fernseher und Einplatinencomputer.',
  'Ahorro': 'Sparmodus',
  'El vertical tiene su propio orden. Lo que añadas o quites vale para los dos.':
    'Das Hochformat hat eine eigene Anordnung. Was du hinzufügst oder entfernst, gilt für beide.',
  'Volver a automático': 'Zurück zu automatisch',
  'No caben en vertical': 'Passen nicht ins Hochformat',
  'Volver a una plantilla': 'Neu mit einer Vorlage starten',
  'Copiar a otra pantalla': 'Auf anderen Bildschirm kopieren',
  'Elige una pantalla': 'Bildschirm auswählen',
  'Oculto: no se ve en la pantalla, pero guarda su sitio.':
    'Ausgeblendet: Auf dem Bildschirm nicht sichtbar, behält aber seinen Platz.',
  'El contenido no cabe entero; prueba un tamaño mayor':
    'Der Inhalt passt nicht vollständig; wähle eine größere Darstellung',
  'No cabe en vertical. Hazle sitio o ponlo más pequeño en horizontal.':
    'Passt nicht ins Hochformat. Schaffe Platz oder verkleinere es im Querformat.',
  'Título': 'Titel',
  'Icono': 'Symbol',
  'Mostrar el título': 'Titel anzeigen',
  'No se ve en la pantalla y guarda su sitio para cuando lo vuelvas a mostrar.':
    'Auf dem Bildschirm nicht sichtbar und behält seinen Platz, bis du es wieder einblendest.',
  'En vertical automático los tamaños son los del horizontal.':
    'Im automatischen Hochformat entsprechen die Größen denen des Querformats.',
  'Alto en la barra': 'Höhe in der Seitenleiste',
  'Tamaño del texto': 'Textgröße',
  'Tarjeta': 'Karte',
  'Como el resto': 'Wie die übrigen',
  'Restablecer estilo': 'Stil zurücksetzen',
  'Buscar widgets': 'Widgets suchen',
  'Aquí salen las imágenes, páginas y precios que crees en Widgets.':
    'Hier erscheinen die Bilder, Seiten und Preise, die du unter Widgets erstellst.',
  'Ir a Widgets': 'Zu Widgets',
  'Ningún widget se llama así.': 'Kein Widget heißt so.',
  'Página web': 'Webseite',
  'Cambiar de sitio': 'Platz tauschen',
  'No cabe en la barra lateral': 'Passt nicht in die Seitenleiste',
  'Guarda la pantalla una vez para ver aquí cómo queda. Mientras tanto puedes colocar los widgets.':
    'Speichere den Bildschirm einmal, um hier zu sehen, wie er aussieht. Bis dahin kannst du die Widgets platzieren.',
  'Oculto': 'Ausgeblendet',
  'No cabe': 'Passt nicht',
  'Cambiar el alto': 'Höhe ändern',
  'Cambiar el tamaño': 'Größe ändern',
  'Más': 'Mehr',
  '{n} widgets': '{n} Widgets',
  'Elige cómo empezar': 'Wähle, wie du starten möchtest',
  'Copiar mi diseño actual': 'Mein aktuelles Layout kopieren',
  'Para empezar': 'Zum Starten',
  'Como los diseños de siempre': 'Wie die gewohnten Layouts',
  'Calendario y tiempo': 'Kalender und Wetter',
  'Mitad y mitad': 'Halb und halb',
  'Solo calendario': 'Nur Kalender',

  // Diseño of the usual designs
  'Avisos bajo la fecha': 'Hinweise unter dem Datum',
  'El próximo evento, los cumpleaños y las entradas y salidas de hoy.':
    'Der nächste Termin, Geburtstage sowie heutige An- und Abreisen.',
  'Panel de casa': 'Zuhause-Übersicht',
  'Bento': 'Bento',
  'Cinemático': 'Kino',
  'En blanco': 'Leer',
  '{n} min': '{n} Min.',
  '{n} s': '{n} Sek.',
  'Añadir ciudad': 'Stadt hinzufügen',
  'Esta pantalla no tiene calendarios. Elígelos en Calendarios.':
    'Diesem Bildschirm sind keine Kalender zugewiesen. Wähle sie unter Kalender aus.',
  'Añade a la familia en la sección Familia.':
    'Füge Familienmitglieder im Bereich Familie hinzu.',
  'Segundos': 'Sekunden',
  'Mostrar la fecha': 'Datum anzeigen',
  'Larga': 'Lang',
  'Corta': 'Kurz',
  'Grosor': 'Strichstärke',
  'Delgada': 'Dünn',
  'Gruesa': 'Fett',
  'Esfera': 'Zifferblatt',
  'Clásica': 'Klassisch',
  'Mínima': 'Minimalistisch',
  'Puntos': 'Punkte',
  'Números': 'Zahlen',
  'Aguja de los segundos': 'Sekundenzeiger',
  'En la Raspberry Pi (modo ligero) no se muestra.':
    'Wird auf dem Raspberry Pi (Leichtmodus) nicht angezeigt.',
  'Ciudades': 'Städte',
  'Relojes de agujas': 'Zeigeruhren',
  'Hoja de calendario': 'Kalenderblatt',
  'Una línea': 'Eine Zeile',
  'Número de semana': 'Kalenderwoche',
  'Salida y puesta del sol': 'Sonnenauf- und -untergang',
  'Semanas': 'Wochen',
  'Eventos por día como mucho': 'Maximale Termine pro Tag',
  'Ocultar lo que ya ha pasado': 'Vergangenes ausblenden',
  'Empieza': 'Beginnt',
  'El lunes': 'Am Montag',
  'Compacta': 'Kompakt',
  'Cuántos eventos': 'Anzahl der Termine',
  'Cuánto falta': 'Verbleibende Zeit',
  'Por ejemplo «en 25 min».': 'Zum Beispiel „in 25 Min.“.',
  'Cada persona sale con el calendario que tiene asignado en Familia.':
    'Jede Person erscheint mit dem Kalender, der ihr unter Familie zugewiesen ist.',
  'Cuántas como mucho': 'Maximal wie viele',
  'Las cuentas atrás se crean en su propia sección.':
    'Countdowns werden in ihrem eigenen Bereich erstellt.',
  'Ir a Cuentas atrás': 'Zu Countdowns',
  'Sensación térmica': 'Gefühlte Temperatur',
  'Viento y humedad': 'Wind und Luftfeuchtigkeit',
  'Horas': 'Stunden',
  'Orden': 'Anordnung',
  'En fila': 'Nebeneinander',
  'En columna': 'Untereinander',
  'Alineación': 'Ausrichtung',
  'Centro': 'Mitte',
  'El texto se escribe en la sección Mensaje.':
    'Der Text wird im Bereich Nachricht eingegeben.',
  'Ir a Mensaje': 'Zu Nachricht',
  'Filas como mucho': 'Maximale Zeilen',
  'Mostrar las hechas': 'Erledigte anzeigen',
  'Las tareas se escriben en la sección Tareas.':
    'Aufgaben werden im Bereich Aufgaben eingetragen.',
  'Ir a Tareas': 'Zu Aufgaben',
  'Cambiar de titular cada': 'Schlagzeile wechseln alle',
  'Cambiar de foto cada': 'Foto wechseln alle',
  'Encaje': 'Einpassen',
  'Llenar la tarjeta': 'Karte ausfüllen',
  'Foto entera': 'Gesamtes Foto',
  'Pie de foto': 'Bildunterschrift',
  'Un hueco que no se ve. Sirve para dejar libre una parte de la pantalla.':
    'Ein unsichtbarer Platzhalter. Damit hältst du einen Teil des Bildschirms frei.',
  'De quién': 'Von wem',
  'Cuántos como mucho': 'Maximal wie viele',
  'Los avisos se mandan desde Avisos.':
    'Hinweise werden über Hinweise gesendet.',
  'Ir a Avisos': 'Zu Hinweise',
  'Reloj y fecha': 'Uhr und Datum',
  'Casa': 'Zuhause',
  'Mis widgets': 'Meine Widgets',
  'Avanzado': 'Erweitert',
  'Reloj digital': 'Digitaluhr',
  'La hora en grande, con la fecha si quieres.':
    'Die Uhrzeit in großer Schrift, auf Wunsch mit Datum.',
  'Reloj analógico': 'Analoguhr',
  'Un reloj de agujas, con varias esferas.':
    'Eine Zeigeruhr mit verschiedenen Zifferblättern.',
  'Reloj de paletas': 'Klappzahlenuhr',
  'Las cifras giran como en un reloj antiguo de estación.':
    'Die Ziffern klappen um wie bei einer alten Bahnhofsuhr.',
  'Relojes del mundo': 'Weltzeituhren',
  'La hora de hasta cuatro ciudades.':
    'Die Uhrzeit von bis zu vier Städten.',
  'El día de hoy, con la semana y la salida y puesta del sol.':
    'Das heutige Datum mit Kalenderwoche sowie Sonnenauf- und -untergang.',
  'El calendario del mes, o de las semanas que elijas.':
    'Der Monatskalender oder die von dir gewählten Wochen.',
  'Semana': 'Woche',
  'Siete días en columnas, desde hoy o desde el lunes.':
    'Sieben Tage in Spalten, ab heute oder ab Montag.',
  'Los próximos eventos agrupados por día.':
    'Die kommenden Termine nach Tagen gruppiert.',
  'Hoy hora a hora': 'Heute Stunde für Stunde',
  'El día de hoy con una línea que marca la hora.':
    'Der heutige Tag mit einer Linie, die die aktuelle Uhrzeit markiert.',
  'Próximo evento': 'Nächster Termin',
  'Lo siguiente que toca, y cuánto falta.':
    'Was als Nächstes ansteht und wie lange es noch dauert.',
  'Una columna por persona de la familia.':
    'Eine Spalte pro Familienmitglied.',
  'Los días que faltan para lo que esperáis.':
    'Die verbleibenden Tage bis zu dem Ereignis, auf das ihr euch freut.',
  'La temperatura y el cielo de este momento.':
    'Die aktuelle Temperatur und Wetterlage.',
  'Próximas horas': 'Nächste Stunden',
  'El tiempo de las próximas horas.':
    'Das Wetter für die nächsten Stunden.',
  'Próximos días': 'Nächste Tage',
  'La previsión de los próximos días.':
    'Die Vorhersage für die nächsten Tage.',
  'El mensaje de esta pantalla.': 'Die Nachricht dieses Bildschirms.',
  'Las tareas de la lista de esta pantalla.':
    'Die Aufgaben auf der Liste dieses Bildschirms.',
  'Los titulares de tus fuentes de noticias.':
    'Die Schlagzeilen deiner Nachrichtenquellen.',
  'Un pase de fotos dentro de una tarjeta.':
    'Eine Diashow innerhalb einer Karte.',
  'Valor': 'Wert',
  'Un número que envías desde otro programa.':
    'Eine Zahl, die du aus einem anderen Programm sendest.',
  'Espacio': 'Abstand',
  'Un hueco vacío, por ejemplo para dejar ver la foto.':
    'Ein leerer Bereich, zum Beispiel um das Hintergrundfoto sichtbar zu lassen.',
  'Entidad': 'Entität',
  'Cualquier cosa de Home Assistant, con su estado.':
    'Beliebiges Element aus Home Assistant mitsamt seinem Zustand.',
  'Luz': 'Licht',
  'Encender, apagar y regular una luz.':
    'Eine Lampe ein- und ausschalten sowie dimmen.',
  'Interruptor': 'Schalter',
  'Un enchufe, un interruptor o un ventilador.':
    'Eine Steckdose, ein Schalter oder ein Ventilator.',
  'Clima': 'Klima',
  'La calefacción o el aire, con su temperatura.':
    'Heizung oder Klimaanlage mit ihrer Temperatur.',
  'Persiana': 'Rollladen',
  'Subir, parar y bajar una persiana.':
    'Einen Rollladen hochfahren, stoppen und herunterfahren.',
  'Sensor': 'Sensor',
  'Un valor en grande: temperatura, humedad, consumo.':
    'Ein großer Einzelwert: Temperatur, Luftfeuchtigkeit, Verbrauch.',
  'Habitación': 'Raum',
  'Varias cosas de una habitación en una tarjeta.':
    'Mehrere Elemente eines Raums auf einer Karte.',
  'Gráfica': 'Diagramm',
  'Cómo ha cambiado un sensor en las últimas horas.':
    'Wie sich ein Sensor in den letzten Stunden verändert hat.',
  'Cámara': 'Kamera',
  'La imagen de una cámara, renovada cada pocos segundos.':
    'Ein Kamerabild, das alle paar Sekunden aktualisiert wird.',
  'Multimedia': 'Medien',
  'Lo que suena en un altavoz o una tele.':
    'Was gerade auf einem Lautsprecher oder Fernseher läuft.',
  'Escenas': 'Szenen',
  'Botones para lanzar escenas o scripts.':
    'Schaltflächen zum Starten von Szenen oder Skripten.',
  'HTML propio': 'Eigenes HTML',
  'Una tarjeta con tu propio HTML y CSS.':
    'Eine Karte mit deinem eigenen HTML und CSS.',
  'Mini': 'Mini',
  'Ancho': 'Breit',
  'Alto': 'Hoch',
  'Muy grande': 'Sehr groß',
  'Banda': 'Streifen',
  'Lo que quede': 'Restfläche',
  'Solo en la versión instalada en casa':
    'Nur in der selbst gehosteten Version',
  'Solo en Marco instalado en casa':
    'Nur wenn Marco zu Hause installiert ist',
  'Bolsa necesita una clave de Finnhub que este servidor no tiene todavía.':
    'Börse benötigt einen Finnhub-Schlüssel, der auf diesem Server noch nicht hinterlegt ist.',
  'No disponible en este servidor': 'Auf diesem Server nicht verfügbar',
  'Llega en una próxima versión': 'Kommt in einer der nächsten Versionen',
  'Ya hay {n} widgets, el máximo en una pantalla':
    'Es sind bereits {n} Widgets vorhanden, das Maximum für einen Bildschirm',
  'No caben más widgets de este tipo en una pantalla':
    'Es passen keine weiteren Widgets dieses Typs auf einen Bildschirm',
  'Este widget no puede ir en la barra lateral':
    'Dieses Widget kann nicht in die Seitenleiste gesetzt werden',
  'Este widget no está en la barra lateral':
    'Dieses Widget befindet sich nicht in der Seitenleiste',
  'El vertical se ordena solo. Pulsa «Editar en vertical» para moverlo a mano.':
    'Das Hochformat ordnet sich automatisch an. Tippe auf „Im Hochformat bearbeiten“, um es manuell anzupassen.',
  'El cristal de las tarjetas que no tienen su propio estilo.':
    'Die Glasoptik für Karten, die keinen eigenen Stil haben.',
  'Los widgets de esta pantalla, colocados por ti.':
    'Die Widgets dieses Bildschirms, von dir platziert.',
  'Abrir editor': 'Editor öffnen',
  'Todavía no hay widgets': 'Noch keine Widgets',
  'fondo': 'Hintergrund',
  'sin barra lateral': 'ohne Seitenleiste',
  'barra lateral a la izquierda': 'Seitenleiste links',
  'barra lateral a la derecha': 'Seitenleiste rechts',
  'barra lateral arriba': 'Seitenleiste oben',
  'barra lateral abajo': 'Seitenleiste unten',
  'foto': 'Foto',
  'animado': 'animiert',
  'color': 'Farbe',

  // Estilo tab
  'Igual que el resto': 'Wie die übrigen',
  'Apágalo para darle a esta tarjeta su propio cristal.':
    'Schalte dies aus, um dieser Karte eine eigene Glasoptik zu geben.',
  'Este widget se muestra sin desenfoque para ir fluido':
    'Dieses Widget wird ohne Weichzeichner angezeigt, damit alles flüssig läuft',
  'Claro u oscuro según la parte de la foto que queda detrás.':
    'Hell oder dunkel, je nach dem Bildausschnitt dahinter.',
  'Color de la tarjeta': 'Kartenfarbe',
  'Sin color, el de las demás tarjetas.':
    'Ohne Farbe wird die der übrigen Karten verwendet.',
  'Dónde oscurecer': 'Wo abdunkeln',
  'Toda la foto': 'Gesamtes Foto',
  'Arriba y abajo': 'Oben und unten',
  'Bordes': 'Ränder',
  'Sin color, el de la pantalla.': 'Ohne Farbe wird die des Bildschirms verwendet.',
  'Color de la hora': 'Farbe der Uhrzeit',
  'Color de la fecha': 'Farbe des Datums',
  'Automático: el color de siempre.': 'Automatisch: die gewohnte Farbe.',
  'El día de la semana sigue con el color de acento.':
    'Der Wochentag behält die Akzentfarbe.',
  'También el día de la semana, mientras la tarjeta no tenga color de acento.':
    'Auch der Wochentag, solange die Karte keine eigene Akzentfarbe hat.',

  // Casa: Home Assistant cards
  'Sin habitación': 'Kein Raum',
  'No encontrada': 'Nicht gefunden',
  'Elige una entidad': 'Entität auswählen',
  'Vacío: el nombre que tiene en Home Assistant.':
    'Leer: der Name, den sie in Home Assistant hat.',
  'Decimales': 'Dezimalstellen',

  // Estilo de la gráfica
  'Curva de hoy': 'Heutige Kurve',
  'Estilo de la gráfica': 'Diagrammstil',
  'De fondo': 'Im Hintergrund',
  'Debajo: la curva bajo el precio. De fondo: la curva llena la tarjeta de borde a borde, detrás del precio; en una lista, cada moneda lleva la suya detrás.':
    'Darunter: die Kurve unter dem Preis. Im Hintergrund: die Kurve füllt die Karte randlos hinter dem Preis aus; in einer Liste hat jede Währung ihre eigene dahinter.',
  'De fondo: la curva de cada valor detrás de su fila, de borde a borde.':
    'Im Hintergrund: die Kurve jedes Werts randlos hinter seiner Zeile.',
  'De fondo: la curva llena la parte de abajo de la tarjeta, detrás del valor. Debajo: en una franja propia bajo el valor.':
    'Im Hintergrund: die Kurve füllt den unteren Teil der Karte hinter dem Wert aus. Darunter: in einem eigenen Streifen unter dem Wert.',
  'De fondo: las barras de las horas llenan la tarjeta de borde a borde, detrás del precio de ahora.':
    'Im Hintergrund: die Stundenbalken füllen die Karte randlos hinter dem aktuellen Preis aus.',
  'De fondo: la gráfica llena la tarjeta de borde a borde bajo la leyenda, sin ejes.':
    'Im Hintergrund: das Diagramm füllt die Karte randlos unter der Legende ohne Achsen aus.',
  'Cómo ha cambiado en las últimas 24 horas, con el mínimo y el máximo.':
    'Wie sich der Wert in den letzten 24 Stunden entwickelt hat, mit Tiefst- und Höchstwert.',
  'Colores según el valor': 'Farben nach Wert',
  'Verde por debajo del primero, amarillo entre los dos y rojo por encima del segundo.':
    'Grün unter dem ersten Wert, gelb dazwischen und rot über dem zweiten.',
  'Al revés': 'Umgekehrt',
  'Color si está activo': 'Farbe wenn aktiv',
  'Color si no': 'Farbe wenn inaktiv',
  'Verde': 'Grün',
  'Amarillo': 'Gelb',
  'Rojo': 'Rot',
  'Abierto, encendido o detectado. Automático: el color de Home Assistant.':
    'Geöffnet, eingeschaltet oder erkannt. Automatisch: die Farbe von Home Assistant.',
  'Cerrado, apagado o sin nada detectado.':
    'Geschlossen, ausgeschaltet oder nichts erkannt.',
  'Abierto o detectado. Automático: el color de Home Assistant.':
    'Geöffnet oder erkannt. Automatisch: die Farbe von Home Assistant.',
  'Cerrado o sin nada detectado.': 'Geschlossen oder nichts erkannt.',
  'Encendido. Automático: el color de Home Assistant.':
    'Eingeschaltet. Automatisch: die Farbe von Home Assistant.',
  'Apagado.': 'Ausgeschaltet.',
  'Texto si está activo': 'Text wenn aktiv',
  'Texto si no': 'Text wenn inaktiv',
  'Por ejemplo Enchufado o Abierta. Vacío: lo que dice Home Assistant.':
    'Zum Beispiel Eingesteckt oder Geöffnet. Leer: was Home Assistant angibt.',
  'Por ejemplo Desenchufado o Cerrada. Vacío: lo que dice Home Assistant.':
    'Zum Beispiel Ausgesteckt oder Geschlossen. Leer: was Home Assistant angibt.',
  'Por ejemplo En marcha. Vacío: Encendido.':
    'Zum Beispiel Läuft. Leer: Eingeschaltet.',
  'Por ejemplo Parado. Vacío: Apagado.':
    'Zum Beispiel Gestoppt. Leer: Ausgeschaltet.',
  'Rojo por debajo y verde por encima, por ejemplo para la batería.':
    'Rot darunter und grün darüber, zum Beispiel für den Akkustand.',
  'Usar colores': 'Farben verwenden',
  'Nombre de la habitación': 'Raumname',
  'Filas': 'Zeilen',
  'Añadir fila': 'Zeile hinzufügen',
  'Sensores': 'Sensoren',
  'Añadir sensor': 'Sensor hinzufügen',
  'Periodo': 'Zeitraum',
  '1 h': '1 Std.',
  '6 h': '6 Std.',
  '24 h': '24 Std.',
  '7 días': '7 Tage',
  'Área': 'Fläche',
  'Barras': 'Balken',
  'Reproductor': 'Player',
  'Activa Home Assistant en su sección para elegir entidades.':
    'Aktiviere Home Assistant im entsprechenden Bereich, um Entitäten auszuwählen.',
  'En las pantallas': 'Auf den Bildschirmen',
  'Conectado en directo': 'Live verbunden',
  'Modo consulta': 'Abfrage alle paar Sekunden',
  'Sin conexión': 'Keine Verbindung',
  'Falta la URL o el token': 'URL oder Token fehlt',
  'ahora mismo': 'gerade eben',
  'hace {n} min': 'vor {n} Min.',
  'hace {n} h': 'vor {n} Std.',
  'Última actualización {when}': 'Zuletzt aktualisiert {when}',
  '{n} entidades': '{n} Entitäten',
  'Esta versión de Node no tiene WebSocket: Marco pregunta cada 15 segundos.':
    'Diese Node-Version unterstützt kein WebSocket: Marco fragt alle 15 Sekunden ab.',
  'Tu Home Assistant es anterior a 2022.4: Marco pregunta cada 15 segundos.':
    'Dein Home Assistant ist älter als 2022.4: Marco fragt alle 15 Sekunden ab.',
  'Home Assistant no acepta el token.': 'Home Assistant akzeptiert das Token nicht.',
  'No se puede conectar con Home Assistant.':
    'Verbindung zu Home Assistant nicht möglich.',
  'Marco sigue en directo solo las entidades que muestran tus pantallas Personalizado y el tiempo, nunca toda la casa. Las pantallas no ven nunca el token ni los nombres internos de las entidades.':
    'Marco verfolgt live nur die Entitäten, die auf deinen individuellen Bildschirmen und beim Wetter angezeigt werden, niemals das ganze Haus. Die Bildschirme sehen weder das Token noch die internen Namen der Entitäten.',
  'Usado en pantallas': 'Auf Bildschirmen verwendet',
  'Ninguna pantalla muestra todavía tarjetas de Casa. Añádelas en Diseño, con el estilo Personalizado.':
    'Noch zeigt kein Bildschirm Zuhause-Karten. Füge sie unter Layout mit dem Stil Individuell hinzu.',
  'Para probar otra URL, escribe también su token.':
    'Um eine andere URL zu testen, gib auch das zugehörige Token ein.',
  'El token guardado es de otra URL. Guárdalo otra vez para esta.':
    'Das gespeicherte Token gehört zu einer anderen URL. Speichere es für diese erneut.',
  'Esa dirección redirige a otra. Escribe la dirección final de Home Assistant.':
    'Diese Adresse leitet auf eine andere weiter. Gib die endgültige Adresse von Home Assistant ein.',
  'Apagado': 'Aus',
  'Calor': 'Heizen',
  'Frío': 'Kühlen',
  'Calor y frío': 'Heizen und Kühlen',
  'Deshumidificar': 'Entfeuchten',
  'Ventilador': 'Ventilator',
  'Humedad': 'Luftfeuchtigkeit',
  'Modos': 'Modi',
  'Los que se pueden elegir en la pantalla.':
    'Die Modi, die auf dem Bildschirm ausgewählt werden können.',
  'Los modos del ventilador, en el tamaño alto.':
    'Die Lüfterstufen in der hohen Kartengröße.',
  'Climatización': 'Klimatisierung',
  'Persiana o toldo': 'Rollladen oder Markise',
  'Las puertas de garaje y las cancelas solo se muestran: no se pueden abrir desde una pantalla.':
    'Garagentore und Hoftore werden nur angezeigt: Sie lassen sich nicht über einen Bildschirm öffnen.',
  'Tono de la luz': 'Lichtton',
  'Una barra para el brillo, desde el tamaño mediano.':
    'Ein Regler für die Helligkeit, ab der mittleren Größe.',
  'Cálida, neutra o fría, en el tamaño grande, si la luz lo permite.':
    'Warm, neutral oder kalt in der großen Darstellung, sofern die Lampe das unterstützt.',
  'Botones': 'Schaltflächen',
  'Añadir botón': 'Schaltfläche hinzufügen',
  'Tocar la pantalla': 'Bildschirm berühren',
  'Para usar estos controles en la pantalla, activa «Permitir tocar en la pantalla» en Página.':
    'Um diese Steuerelemente auf dem Bildschirm zu nutzen, aktiviere „Tippen auf dem Bildschirm erlauben“ unter Seite.',
  'En modo abierto los controles no funcionan: vincula la pantalla o ábrela con su enlace privado.':
    'Im offenen Modus funktionieren die Steuerelemente nicht: Kopple den Bildschirm oder öffne ihn über seinen privaten Link.',
  'Se puede usar tocando la pantalla':
    'Kann durch Tippen auf den Bildschirm bedient werden',
  'Parece que abre una puerta, una cancela o una cerradura. En la pantalla pedirá siempre dos toques.':
    'Scheint eine Tür, ein Tor oder ein Schloss zu öffnen. Auf dem Bildschirm wird immer zweimaliges Tippen verlangt.',
  'Entiendo que cualquiera en la habitación podrá usarlo':
    'Ich verstehe, dass jeder im Raum dies bedienen kann',
  'Sin esta marca, la tarjeta solo muestra el estado.':
    'Ohne dieses Häkchen zeigt die Karte nur den Zustand an.',
  'Pedir dos toques': 'Zweimaliges Tippen verlangen',
  'El primero avisa y el segundo lo hace, para que no se active sin querer.':
    'Das erste Tippen warnt, das zweite führt die Aktion aus, damit nichts versehentlich ausgelöst wird.',
  'Lo hace de verdad en Home Assistant, aunque no hayas guardado.':
    'Wird tatsächlich in Home Assistant ausgeführt, auch wenn du noch nicht gespeichert hast.',
  'Encender o apagar': 'Ein- oder ausschalten',
  'Ejecutar': 'Ausführen',
  'Parar': 'Stoppen',
  'Reproducir o pausar': 'Wiedergeben oder pausieren',
  'Mandar la misma temperatura': 'Dieselbe Temperatur senden',
  'Probando…': 'Wird getestet…',
  'Hecho. Mira el dispositivo.': 'Erledigt. Prüfe das Gerät.',
  'No ha funcionado.': 'Das hat nicht funktioniert.',
  'Esta tarjeta no puede hacer eso con esa entidad.':
    'Diese Karte kann das mit dieser Entität nicht ausführen.',
  'Ese valor no vale para esta entidad.':
    'Dieser Wert ist für diese Entität nicht gültig.',
  'Home Assistant no responde.': 'Home Assistant antwortet nicht.',
  'Home Assistant no lo ha aceptado.': 'Home Assistant hat das nicht akzeptiert.',
  'Demasiadas pruebas seguidas. Espera un momento.':
    'Zu viele Tests hintereinander. Warte einen Moment.',
  'Elige antes una entidad.': 'Wähle zuerst eine Entität aus.',
  'Home Assistant: {service} en {entity}':
    'Home Assistant: {service} für {entity}',
  'desde el editor': 'aus dem Editor',
  'parece una puerta': 'scheint eine Tür zu sein',

  // Cámara
  'Cada pocos segundos': 'Alle paar Sekunden',
  'En directo': 'Live',
  'En directo se ve fluido en las cámaras que envían MJPEG. La mayoría de las demás (Reolink, Tapo, UniFi y otras que llegan a Home Assistant por RTSP) se ven a unas dos imágenes por segundo. Solo una cámara en directo por pantalla, y nunca en el modo ligero ni en esta vista previa.':
    'Live läuft flüssig bei Kameras, die MJPEG senden. Die meisten anderen (Reolink, Tapo, UniFi und andere, die per RTSP an Home Assistant angebunden sind) zeigen etwa zwei Bilder pro Sekunde. Nur eine Live-Kamera pro Bildschirm und niemals im Leichtmodus oder in dieser Vorschau.',
  'Nueva imagen cada': 'Neues Bild alle',
  'Imagen entera': 'Gesamtes Bild',
  'Nombre de la cámara': 'Kameraname',
  'Mostrar solo cuando': 'Nur anzeigen wenn',
  'Por ejemplo un sensor de movimiento o el timbre: la tarjeta se ve solo mientras está activo.':
    'Zum Beispiel ein Bewegungsmelder oder die Türklingel: Die Karte ist nur sichtbar, solange das Gerät aktiv ist.',
  'Siempre': 'Immer',
  'Cámaras solo en la red de casa': 'Kameras nur im Heimnetz',
  'Las tarjetas de cámara solo se ven en pantallas conectadas directamente a la red de casa. Una pantalla que llega desde fuera o a través de un proxy no las ve. Si lo desactivas, cualquier pantalla con su enlace privado las ve.':
    'Kamerakarten werden nur auf Bildschirmen angezeigt, die direkt mit dem Heimnetz verbunden sind. Bildschirme von außerhalb oder über einen Proxy sehen sie nicht. Wenn du dies deaktivierst, sieht sie jeder Bildschirm mit seinem privaten Link.',

  // HTML propio
  'css plantilla código': 'css vorlage code',
  'Home Assistant': 'Home Assistant',
  'La hora': 'Die Uhrzeit',
  'La fecha': 'Das Datum',
  'El tiempo': 'Das Wetter',
  'El próximo evento': 'Der nächste Termin',
  'Un valor enviado': 'Ein gesendeter Wert',
  'Temperatura grande': 'Große Temperatur',
  'Lista de habitaciones': 'Raumliste',
  'Una cita': 'Ein Zitat',
  'Línea {line}: <{el}> no se puede usar.':
    'Zeile {line}: <{el}> darf nicht verwendet werden.',
  'Línea {line}: el atributo {attr} de <{el}> no se puede usar.':
    'Zeile {line}: Das Attribut {attr} von <{el}> darf nicht verwendet werden.',
  'Línea {line}: el atributo {attr} está repetido en <{el}>.':
    'Zeile {line}: Das Attribut {attr} kommt in <{el}> doppelt vor.',
  'Línea {line}: las imágenes van dentro del HTML como data:image (PNG, JPEG, WebP o GIF).':
    'Zeile {line}: Bilder werden im HTML als data:image (PNG, JPEG, WebP oder GIF) eingebettet.',
  'Línea {line}: url() no se puede usar en {attr}.':
    'Zeile {line}: url() darf in {attr} nicht verwendet werden.',
  'Línea {line}: el estilo de <{el}> no puede llevar {detail}.':
    'Zeile {line}: Der Stil von <{el}> darf kein {detail} enthalten.',
  'CSS: no se puede usar {detail}.':
    'CSS: {detail} darf nicht verwendet werden.',
  'Línea {line}: falta cerrar {detail}.':
    'Zeile {line}: {detail} wurde nicht geschlossen.',
  'Línea {line}: {detail} no se puede usar.':
    'Zeile {line}: {detail} darf nicht verwendet werden.',
  'Línea {line}: tres llaves seguidas no se pueden usar.':
    'Zeile {line}: Drei geschweifte Klammern hintereinander sind nicht erlaubt.',
  'Línea {line}: {detail} no es un dato bien escrito.':
    'Zeile {line}: {detail} ist kein gültiger Wertname.',
  'Línea {line}: {detail} no existe. Detrás del nombre puede ir .unit, .ago, .on, .name o .time.':
    'Zeile {line}: {detail} existiert nicht. Nach dem Namen sind .unit, .ago, .on, .name oder .time möglich.',
  'Línea {line}: el filtro {detail} no existe.':
    'Zeile {line}: Den Filter {detail} gibt es nicht.',
  'Línea {line}: los datos solo pueden ir en el texto y en class, title, data-* y style.':
    'Zeile {line}: Werte dürfen nur im Text sowie in class, title, data-* und style stehen.',
  'Línea {line}: dentro de style un dato necesita | num, | pct o | clamp.':
    'Zeile {line}: Innerhalb von style benötigt ein Wert | num, | pct oder | clamp.',
  'Línea {line}: la sección {detail} no está bien cerrada.':
    'Zeile {line}: Der Abschnitt {detail} ist nicht korrekt geschlossen.',
  'Línea {line}: {detail} no está entre los datos de la tarjeta. Añádelo abajo.':
    'Zeile {line}: {detail} gehört nicht zu den Werten der Karte. Füge ihn unten hinzu.',
  'Despejado': 'Klar',
  'Cena con los abuelos': 'Abendessen bei den Großeltern',
  'Ejemplo': 'Beispiel',
  'Encendido': 'Ein',
  'No disponible': 'Nicht verfügbar',
  '¿Cambiar el HTML y el CSS de esta tarjeta por el ejemplo?':
    'HTML und CSS dieser Karte durch das Beispiel ersetzen?',
  'Lo mejor de la casa es quien la habita.':
    'Das Beste an einem Zuhause sind die Menschen, die darin leben.',
  'Solo en Marco instalado en casa. Se muestra aislado: no puede ejecutar código ni leer tus datos ni tu sesión.':
    'Nur wenn Marco zu Hause installiert ist. Es wird isoliert angezeigt: Es kann weder Code ausführen noch deine Daten oder deine Sitzung auslesen.',
  'Empezar con un ejemplo': 'Mit einem Beispiel starten',
  'Sin scripts, enlaces ni imágenes de internet. Cada dato se escribe con su nombre entre llaves dobles.':
    'Keine Skripte, Links oder Bilder aus dem Internet. Jeder Wert wird mit seinem Namen in doppelten geschweiften Klammern geschrieben.',
  'Sin @import, @font-face ni url() de internet.':
    'Kein @import, @font-face oder url() aus dem Internet.',
  'Y {n} más.': 'Und {n} weitere.',
  'Sin errores.': 'Keine Fehler.',
  'Datos de la tarjeta': 'Werte der Karte',
  'Cada dato tiene un nombre para usarlo en el HTML. Hasta 8.':
    'Jeder Wert hat einen Namen für die Verwendung im HTML. Bis zu 8.',
  'Añadir dato': 'Wert hinzufügen',
  'Ocultar la ayuda': 'Hilfe ausblenden',
  'Qué se puede escribir': 'Was geschrieben werden kann',
  'el valor': 'der Wert',
  'su unidad': 'seine Einheit',
  'cuándo cambió': 'wann er sich geändert hat',
  'su nombre': 'sein Name',
  'la hora del evento': 'die Uhrzeit des Termins',
  'decimales': 'Dezimalstellen',
  'un número para style': 'eine Zahl für style',
  'solo si está encendido': 'nur wenn eingeschaltet',
  'solo si está apagado': 'nur wenn ausgeschaltet',
  'una barra que sigue un valor': 'ein Balken, der einem Wert folgt',
  'Colores de Marco': 'Farben von Marco',
  'Etiquetas': 'Tags',
  'Atributos': 'Attribute',
  'y los de dibujo en SVG': 'und die Zeichenattribute in SVG',
  'Con el estado real de Home Assistant cuando lo hay; si no, con datos de ejemplo.':
    'Mit dem echten Zustand aus Home Assistant, sofern vorhanden; sonst mit Beispielwerten.',
  'Corrige los errores para verla.': 'Behebe die Fehler, um die Vorschau zu sehen.',
  'Escribe algo de HTML o empieza con un ejemplo.':
    'Schreibe etwas HTML oder starte mit einem Beispiel.',
  'Para la hora y el tiempo pasado. Los cambios de Home Assistant se ven antes.':
    'Für die Uhrzeit und vergangene Zeitangaben. Änderungen aus Home Assistant erscheinen früher.',

  // Valor, token scopes and Home Assistant push helper
  'Un número o un texto que envías desde Home Assistant u otro programa.':
    'Eine Zahl oder ein Text, den du aus Home Assistant oder einem anderen Programm sendest.',
  'Vacío: el que llega con el valor, o la clave.':
    'Leer: der Name, der mit dem Wert gesendet wird, oder der Schlüssel.',
  'Vacía: la que llega con el valor.':
    'Leer: die Einheit, die mit dem Wert gesendet wird.',
  'Emoji': 'Emoji',
  'En gris pasados': 'Ausgegraut nach',
  'Se envía con POST /api/hooks/values. En API y webhooks tienes el ejemplo para Home Assistant.':
    'Wird per POST /api/hooks/values gesendet. Unter API und Webhooks findest du das Beispiel für Home Assistant.',
  'Abrir API y webhooks': 'API und Webhooks öffnen',
  'Solo letras minúsculas sin acentos, números y los signos _ . -':
    'Nur Kleinbuchstaben ohne Akzente, Zahlen und die Zeichen _ . -',
  'Ahora: {value}, {ago}.': 'Aktuell: {value}, {ago}.',
  'Todavía no ha llegado nada con esta clave.':
    'Für diesen Schlüssel ist noch nichts eingegangen.',
  'Escribe una clave o elige una de las que ya han llegado.':
    'Gib einen Schlüssel ein oder wähle einen bereits eingegangenen aus.',
  'La clave con la que Home Assistant u otro programa envía el valor a /api/hooks/values.':
    'Der Schlüssel, mit dem Home Assistant oder ein anderes Programm den Wert an /api/hooks/values sendet.',
  'Qué puede hacer': 'Berechtigungsumfang',
  'Qué puede hacer “{name}”': 'Berechtigungen von „{name}“',
  'Todo lo que permite la API, también lo que se añada más adelante.':
    'Alles, was die API erlaubt, einschließlich künftiger Erweiterungen.',
  'Elige al menos una cosa.': 'Wähle mindestens eine Berechtigung aus.',
  'Recargar y modo noche': 'Neu laden und Nachtmodus',
  'Valores': 'Werte',
  'Permisos': 'Berechtigungen',
  'Permisos guardados': 'Berechtigungen gespeichert',
  'Cambiar lo que puede hacer': 'Berechtigungen ändern',
  'Permisos del token {name} cambiados':
    'Berechtigungen des Tokens {name} geändert',
  'Webhook rechazado (el token no tiene permiso para {endpoint})':
    'Webhook abgelehnt (das Token hat keine Berechtigung für {endpoint})',
  'Conectar desde Home Assistant': 'Von Home Assistant aus verbinden',
  'Envía el estado de tus sensores a las tarjetas Valor de Personalizado. Una sola automatización manda todas las claves juntas.':
    'Sendet den Zustand deiner Sensoren an die Wert-Karten von Individuell. Eine einzige Automatisierung übermittelt alle Schlüssel gemeinsam.',
  'Entidad de Home Assistant': 'Home Assistant-Entität',
  'Se envía como': 'Wird gesendet als',
  'Número': 'Zahl',
  'Texto': 'Text',
  'Encendido o apagado': 'Ein oder aus',
  'Añadir clave': 'Schlüssel hinzufügen',
  'Se envía cuando cambia alguna de las entidades, cada 15 minutos y al arrancar Home Assistant, como mucho una vez cada 5 segundos. El token necesita el permiso Valores.':
    'Wird gesendet, wenn sich eine der Entitäten ändert, alle 15 Minuten sowie beim Start von Home Assistant, höchstens einmal alle 5 Sekunden. Das Token benötigt die Berechtigung Werte.',
  'Valores para Marco': 'Werte für Marco',
  'Valores para las tarjetas Valor': 'Werte für die Wert-Karten',
  'Terminado': 'Fertig',
  'Valores recibidos': 'Empfangene Werte',
  'Todavía no ha llegado ningún valor': 'Es sind noch keine Werte eingegangen',
  'Actualizado': 'Aktualisiert',
  'Valor borrado': 'Wert gelöscht',

  // Import notes on Marco Cloud
  'Las tarjetas de Home Assistant y las cámaras de las pantallas Personalizado no se importan: Marco Cloud no puede conectarse a tu red de casa. Pantallas: {list}.':
    'Home Assistant-Karten und Kameras auf individuellen Bildschirmen werden nicht importiert: Marco Cloud kann sich nicht mit deinem Heimnetz verbinden. Bildschirme: {list}.',
  'Las tarjetas con HTML propio no se importan, aquí no están disponibles. Pantallas: {list}.':
    'Karten mit eigenem HTML werden nicht importiert, da sie hier nicht verfügbar sind. Bildschirme: {list}.',

  // Casa: Indicador, Estadística, Sección and Mostrar solo si
  'Indicador': 'Anzeige',
  'Un valor sobre una barra de mínimo a máximo, con colores según lo alto que esté.':
    'Ein Wert auf einem Balken von Minimum bis Maximum, farblich abgestuft nach Höhe.',
  'gauge barra nivel porcentaje': 'anzeige pegel balken stufe prozent',
  'Estadística': 'Statistik',
  'Lo gastado hoy, esta semana o este mes, o la media, el mínimo o el máximo de un sensor.':
    'Der Verbrauch heute, diese Woche oder diesen Monat oder Durchschnitt, Minimum oder Maximum eines Sensors.',
  'energía consumo media estadística': 'energie verbrauch durchschnitt statistik',
  'Sección': 'Abschnitt',
  'Un título con emoji para agrupar las tarjetas que tiene debajo.':
    'Eine Überschrift mit Emoji, um die darunterliegenden Karten zu gruppieren.',
  'título encabezado grupo': 'titel überschrift gruppe',
  'Cualquier cosa de Home Assistant, con su estado y, si quieres, sus controles debajo.':
    'Beliebiges Element aus Home Assistant mit seinem Zustand und auf Wunsch Steuerelementen darunter.',
  'válvula aspirador robot selector número actualización':
    'ventil staubsauger roboter auswahl zahl aktualisierung',
  'Debajo': 'Darunter',
  'Una fila en los tamaños pequeño y ancho, dos en el mediano. En el mini no se ven.':
    'Eine Zeile in den Größen Klein und Breit, zwei in Mittel. In Mini werden sie nicht angezeigt.',
  'La barra empieza en': 'Der Balken beginnt bei',
  'La barra termina en': 'Der Balken endet bei',
  'Mínimo': 'Minimum',
  'Máximo': 'Maximum',
  'Un sensor con estadísticas en Home Assistant, como los de energía o de temperatura.':
    'Ein Sensor mit Langzeitstatistik in Home Assistant, etwa für Energie oder Temperatur.',
  'Qué': 'Was',
  'Media': 'Durchschnitt',
  'Total': 'Gesamt',
  'Cuándo': 'Wann',
  'Este mes': 'Dieser Monat',
  'Línea debajo': 'Zeile darunter',
  'Encender y apagar': 'Ein- und ausschalten',
  'Subir, parar y bajar': 'Hoch, Stopp und Runter',
  'Abrir y cerrar': 'Öffnen und schließen',
  'Opciones': 'Optionen',
  'Empezar, pausa y base': 'Start, Pause und Basis',
  'Barra': 'Regler',
  'Esta entidad solo muestra su estado.': 'Diese Entität zeigt nur ihren Zustand an.',
  'Nada para esta entidad.': 'Keine Steuerelemente für diese Entität.',
  'Es': 'Ist',
  'No es': 'Ist nicht',
  'Más de': 'Über',
  'Menos de': 'Unter',
  'Según Home Assistant': 'Je nach Home Assistant',
  'Según un valor': 'Je nach Wert',
  'Puede verse solo cuando algo de casa esté de una manera, por ejemplo la lavadora terminada o una puerta abierta.':
    'Kann nur angezeigt werden, wenn zu Hause ein bestimmter Zustand herrscht, zum Beispiel wenn die Waschmaschine fertig oder eine Tür offen ist.',
  'Cuando': 'Wenn',
  'Solo cuenta si el estado es un número.':
    'Zählt nur, wenn der Zustand eine Zahl ist.',
  'Como lo escribe Home Assistant: on, off, open, home, playing…':
    'So wie Home Assistant es schreibt: on, off, open, home, playing…',
  'Como llega: un número, un texto, o true y false.':
    'So wie es ankommt: eine Zahl, ein Text oder true und false.',
  'Ahora no se ve en la pantalla: no se cumple la condición.':
    'Wird derzeit nicht auf dem Bildschirm angezeigt: Die Bedingung ist nicht erfüllt.',
  'Oculto ahora': 'Derzeit ausgeblendet',
  'Mandar la misma opción': 'Dieselbe Option senden',
  'Mandar el mismo valor': 'Denselben Wert senden',
  'Volver a la base': 'Zurück zur Basis',
  'Es una llave de paso del agua. En la pantalla pedirá siempre dos toques.':
    'Dies ist ein Wasserabsperrventil. Auf dem Bildschirm wird immer zweimaliges Tippen verlangt.',
  'Condición': 'Bedingung',

  // Datos: Cripto, Deportes y Bolsa
  'Datos': 'Daten',
  'Cripto': 'Krypto',
  'Deportes': 'Sport',
  'Bolsa': 'Börse',
  'El precio de hasta seis criptomonedas, con lo que han subido o bajado y su curva de 1, 7 o 30 días.':
    'Der Kurs von bis zu sechs Kryptowährungen mit Veränderung und Verlauf über 1, 7 oder 30 Tage.',
  'Resultados en directo, próximos partidos y últimos resultados de tus equipos o competiciones.':
    'Live-Ergebnisse, kommende Spiele und letzte Resultate deiner Teams oder Wettbewerbe.',
  'Cotizaciones de acciones y fondos, en una línea que se desplaza o en lista.':
    'Kurse von Aktien und Fonds als Laufschrift oder in einer Liste.',
  'Monedas': 'Währungen',
  'Cómo': 'Darstellung',
  'En lista': 'Als Liste',
  'Una en grande': 'Eine groß',
  'En grande, si hay varias monedas se van turnando cada 10 segundos.':
    'In großer Ansicht wechseln mehrere Kryptowährungen alle 10 Sekunden ab.',
  '30 días': '30 Tage',
  'Curva': 'Kurve',
  'Línea': 'Linie',
  'Sin curva': 'Ohne Kurve',
  'Precios de CoinGecko. Este servidor los pide cada dos minutos y los comparte con todas las pantallas.':
    'Kurse von CoinGecko. Dieser Server ruft sie alle zwei Minuten ab und teilt sie mit allen Bildschirmen.',
  'Equipos y competiciones': 'Teams und Wettbewerbe',
  'Qué partidos': 'Welche Spiele',
  'Últimos': 'Letzte',
  'Automático: el partido en directo o, si no hay, el último resultado y el siguiente partido de cada equipo.':
    'Automatisch: das laufende Spiel oder, falls keines stattfindet, das letzte Ergebnis und das nächste Spiel jedes Teams.',
  'Partidos como mucho': 'Maximale Spiele',
  'Escudos': 'Wappen',
  'Aviso de resultados atrasados': 'Hinweis bei verzögerten Ergebnissen',
  'La línea «Actualizado hace…» que sale cuando los resultados no llegan a tiempo.':
    'Die Zeile „Aktualisiert vor…“, die erscheint, wenn Ergebnisse nicht rechtzeitig eintreffen.',
  'Resultados de ESPN, cada minuto mientras se juega. Un equipo se sigue en una competición: para verlo también en la Champions, añádelo otra vez con esa competición.':
    'Ergebnisse von ESPN, jede Minute während eines Spiels. Ein Team wird in einem Wettbewerb verfolgt: Um es auch in der Champions League zu sehen, füge es erneut mit diesem Wettbewerb hinzu.',
  'Acciones y fondos': 'Aktien und Fonds',
  'Línea que se mueve': 'Laufschrift',
  'Se dibuja con las cotizaciones que este servidor va leyendo, así que tarda unas horas en llenarse.':
    'Wird aus den Kursen gezeichnet, die dieser Server laufend abruft, daher dauert es ein paar Stunden, bis sie gefüllt ist.',
  'Busca una moneda: bitcoin, eth…': 'Kryptowährung suchen: bitcoin, eth…',
  'Buscar moneda': 'Kryptowährung suchen',
  'Seis monedas como mucho por tarjeta.': 'Maximal sechs Kryptowährungen pro Karte.',
  'Buscando…': 'Suche läuft…',
  'Nada con ese nombre.': 'Nichts mit diesem Namen gefunden.',
  'Guarda primero la clave de Finnhub, más abajo.':
    'Speichere zuerst weiter unten den Finnhub-Schlüssel.',
  'El servicio pide esperar un poco. Prueba dentro de un minuto.':
    'Der Dienst bittet um etwas Geduld. Versuche es in einer Minute erneut.',
  'No se ha podido buscar ahora. Prueba otra vez en un momento.':
    'Die Suche hat gerade nicht geklappt. Versuche es gleich noch einmal.',
  'Cuatro como mucho por tarjeta.': 'Maximal vier pro Karte.',
  'Añadir toda la competición': 'Gesamten Wettbewerb hinzufügen',
  'O busca un equipo de esta competición':
    'Oder suche ein Team dieses Wettbewerbs',
  'Buscar equipo': 'Team suchen',
  'Cargando equipos…': 'Teams werden geladen…',
  'Toda la competición': 'Gesamter Wettbewerb',
  'Competición': 'Wettbewerb',
  'Fútbol': 'Fußball',
  'Baloncesto': 'Basketball',
  'Fútbol americano': 'American Football',
  'Hockey sobre hielo': 'Eishockey',
  'Béisbol': 'Baseball',
  'Otros': 'Sonstige',
  'Busca un valor: Apple, MSFT…': 'Wertpapier suchen: Apple, MSFT…',
  'Buscar valor': 'Wertpapier suchen',
  'Doce valores como mucho por tarjeta.': 'Maximal zwölf Wertpapiere pro Karte.',
  'Añadir {s} tal cual': '{s} direkt hinzufügen',
  'Bolsa necesita una clave gratuita de Finnhub (finnhub.io). Se guarda en este servidor y nunca llega a las pantallas.':
    'Börse benötigt einen kostenlosen Finnhub-Schlüssel (finnhub.io). Er wird auf diesem Server gespeichert und gelangt niemals auf die Bildschirme.',
  'Clave guardada, termina en {x}.': 'Schlüssel gespeichert, endet auf {x}.',
  'Nueva clave': 'Neuer Schlüssel',
  'Clave de Finnhub': 'Finnhub-Schlüssel',
  'Clave guardada. Finnhub la ha aceptado.':
    'Schlüssel gespeichert. Finnhub hat ihn akzeptiert.',
  'Clave guardada. No se ha podido probar ahora.':
    'Schlüssel gespeichert. Konnte gerade nicht geprüft werden.',
  'Clave quitada.': 'Schlüssel entfernt.',
  'Finnhub no acepta esta clave.': 'Finnhub akzeptiert diesen Schlüssel nicht.',
  'No se ha podido guardar la clave.':
    'Der Schlüssel konnte nicht gespeichert werden.',

  // Horario, hidden reasons, screen orientation & export/import
  'Solo en estas franjas': 'Nur in diesen Zeitfenstern',
  'Puede salir solo unas horas o unos días, por ejemplo el menú por la mañana o el tráfico entre semana.':
    'Kann nur zu bestimmten Stunden oder an bestimmten Tagen erscheinen, zum Beispiel der Speiseplan am Morgen oder der Verkehr unter der Woche.',
  'Todas las franjas están en pausa: se ve siempre.':
    'Alle Zeitfenster sind pausiert: Wird immer angezeigt.',
  'No sale en vertical': 'Nicht im Hochformat',
  'Ahora no se ve en la pantalla: está fuera de su horario.':
    'Wird derzeit nicht auf dem Bildschirm angezeigt: liegt außerhalb des Zeitplans.',
  'Este widget no está disponible en esta versión de Marco, así que la pantalla no lo muestra.':
    'Dieses Widget ist in dieser Version von Marco nicht verfügbar und wird daher auf dem Bildschirm nicht angezeigt.',
  'Orientación de la pantalla': 'Bildschirmausrichtung',
  'Lo mismo que Orientación en los ajustes de la pantalla.':
    'Entspricht der Ausrichtung in den Bildschirmeinstellungen.',
  'Siempre horizontal': 'Immer Querformat',
  'Siempre vertical': 'Immer Hochformat',
  'Archivo': 'Datei',
  'Guarda esta pantalla en un archivo para usarla en otra pantalla o en otro Marco. No lleva tus calendarios, personas, entidades de Home Assistant ni widgets: al importarla se eligen de nuevo.':
    'Speichere diesen Bildschirm in einer Datei, um ihn auf einem anderen Bildschirm oder einem anderen Marco zu verwenden. Kalender, Personen, Home Assistant-Entitäten und Widgets sind nicht enthalten und werden beim Importieren neu ausgewählt.',
  'Exportar esta pantalla': 'Diesen Bildschirm exportieren',
  'Importar una pantalla': 'Bildschirm importieren',
  'Pantalla exportada': 'Bildschirm exportiert',
  'El archivo es demasiado grande': 'Die Datei ist zu groß',
  'Ese archivo no es una pantalla de Marco':
    'Diese Datei ist kein Marco-Bildschirm',
  'Ese archivo es de una versión más nueva de Marco':
    'Diese Datei stammt aus einer neueren Version von Marco',
  'Hay un problema en el archivo: {msg}':
    'Es gibt ein Problem in der Datei: {msg}',
  '¿Importar esta pantalla?': 'Diesen Bildschirm importieren?',
  'Pantalla importada': 'Bildschirm importiert',
  'Elige de nuevo lo que falta en las tarjetas marcadas.':
    'Wähle auf den markierten Karten neu aus, was noch fehlt.',
  '{n} widgets no están disponibles aquí y se han dejado fuera.':
    '{n} Widgets sind hier nicht verfügbar und wurden ausgelassen.',
  'Las condiciones de Home Assistant se han quitado.':
    'Die Bedingungen von Home Assistant wurden entfernt.',
  '¿Guardar así?': 'So speichern?',
  'Algunas tarjetas importadas aún no tienen sus calendarios, personas, entidades o widget. Un widget sin elegir no se guarda.':
    'Einige importierte Karten haben noch keine Kalender, Personen, Entitäten oder kein Widget. Eine Widget-Karte ohne Auswahl wird nicht gespeichert.',
  '{n} tarjetas importadas tienen que elegir algo de nuevo.':
    'Bei {n} importierten Karten muss noch etwas neu ausgewählt werden.',
  'Esta tarjeta viene de un archivo. Elige de nuevo lo que es de tu casa:':
    'Diese Karte stammt aus einer Datei. Wähle neu aus, was zu deinem Zuhause gehört:',
  'Elige los calendarios': 'Kalender auswählen',
  'Elige las personas': 'Personen auswählen',
  'Elige las entidades': 'Entitäten auswählen',
  'Elige un widget': 'Widget auswählen',
  'Dejar así': 'So lassen',
  'Todos los de esta pantalla': 'Alle auf diesem Bildschirm',

  // Empty/hidden card placeholders on the stage
  'En ese hueco está: {names}': 'Auf diesem Platz liegt: {names}',
  'Sustituido el espacio vacío': 'Leerer Platz ersetzt',
  '{name} no mostraba nada y ha pasado al hueco libre más cercano':
    '{name} zeigte nichts an und wurde auf den nächsten freien Platz verschoben',
  'Ocupa el sitio de una tarjeta vacía': 'Belegt den Platz einer leeren Karte',
  'Sustituye el espacio vacío': 'Ersetzt den leeren Platz',
  'No tiene nada que mostrar ahora, así que en la pantalla no se ve, pero ocupa su sitio. Suelta otra tarjeta encima para usar el hueco.':
    'Zeigt derzeit nichts an und ist daher auf dem Bildschirm nicht sichtbar, hält aber seinen Platz frei. Ziehe eine andere Karte darauf, um den Platz zu nutzen.',
  'Un hueco vacío. Suelta otra tarjeta encima para usar el sitio.':
    'Ein leerer Platz. Ziehe eine andere Karte darauf, um ihn zu belegen.',

  // Home Assistant off
  'Casa (Home Assistant)': 'Zuhause (Home Assistant)',
  'Home Assistant no está conectado': 'Home Assistant ist nicht verbunden',
  'Conéctalo para elegir qué muestra esta tarjeta. Tus cambios del editor no se pierden.':
    'Verbinde es, um auszuwählen, was diese Karte anzeigt. Deine Änderungen im Editor bleiben erhalten.',
  'Ir a Home Assistant': 'Zu Home Assistant',
  'Estas tarjetas necesitan Home Assistant, que ahora está desactivado.':
    'Diese Karten benötigen Home Assistant, das derzeit deaktiviert ist.',
  'Tus cambios del editor siguen aquí: al volver a abrirlo podrás recuperarlos.':
    'Deine Änderungen im Editor bleiben gespeichert: Wenn du ihn wieder öffnest, kannst du sie wiederherstellen.',
  '{n} de {total} entidades': '{n} von {total} Entitäten',

  // Home Assistant section: weather & indoors
  'Tiempo e interior': 'Wetter und Innenbereich',
  'Para la tarjeta del tiempo de todos los diseños: el tiempo de Home Assistant (si lo eliges como fuente en Tiempo) y la temperatura y humedad de dentro de casa. Las pantallas Personalizado eligen sus entidades en el editor.':
    'Für die Wetterkarte aller Layouts: das Wetter aus Home Assistant (wenn du es unter Wetter als Quelle wählst) sowie Temperatur und Luftfeuchtigkeit im Haus. Individuelle Bildschirme wählen ihre Entitäten direkt im Editor.',

  // Entity picker dropdown search
  'Buscar entidad': 'Entität suchen',
  'Ninguna entidad coincide': 'Keine passende Entität gefunden',
  'No hay entidades de este tipo': 'Keine Entitäten dieses Typs vorhanden',
  'Escribe para ver más ({n} en total)':
    'Tippen, um mehr zu sehen ({n} insgesamt)',

  // Home Assistant token status
  '•••••••• (guardado)': '•••••••• (gespeichert)',
  'Pega aquí el token': 'Token hier einfügen',
  'Falta el token: pégalo abajo y pulsa Guardar token.':
    'Das Token fehlt: Füge es unten ein und tippe auf Token speichern.',
  'El token guardado es de otra dirección. Guárdalo de nuevo para esta.':
    'Das gespeicherte Token gehört zu einer anderen Adresse. Speichere es für diese erneut.',

  // Clock date position & Fecha weekday
  'Posición de la fecha': 'Position des Datums',
  'Día de la semana': 'Wochentag',
  'En la hoja de calendario.': 'Auf dem Kalenderblatt.',
  'El vertical vuelve a ordenarse solo a partir del horizontal.':
    'Das Hochformat ordnet sich wieder automatisch anhand des Querformats an.',
  'Ajustes de la página': 'Seiteneinstellungen',

  // View as
  'Ver como': 'Anzeigen als',
  'Pantalla 16:9': '16:9-Bildschirm',
  'Pantalla 9:16': '9:16-Bildschirm',
  'Pantalla conectada': 'Verbundener Bildschirm',
  'El editor dibuja la pantalla con la forma de esta ventana, para que se vea como allí.':
    'Der Editor stellt den Bildschirm im Format dieses Fensters dar, damit er genauso aussieht wie dort.',

  // Cuadrícula, Densidad & Rotativa
  'Cuadrícula': 'Raster',
  'Densidad': 'Dichte',
  'Compacta junta más las tarjetas y deja menos margen dentro de ellas.':
    'Kompakt rückt die Karten näher zusammen und verringert den Innenabstand.',
  'Rotativa': 'Wechselkarte',
  'Varias tarjetas en un mismo hueco, una tras otra cada pocos segundos.':
    'Mehrere Karten auf demselben Platz, die alle paar Sekunden nacheinander wechseln.',
  'Se ven una tras otra en el mismo hueco, de {min} a {max}. No hace falta tocar la pantalla.':
    'Sie erscheinen nacheinander auf demselben Platz, von {min} bis {max}. Kein Tippen auf den Bildschirm nötig.',
  'Una Rotativa tiene al menos {n} tarjetas.':
    'Eine Wechselkarte benötigt mindestens {n} Karten.',
  'Añadir una tarjeta': 'Karte hinzufügen',
  'Ya tiene {n} tarjetas, el máximo.':
    'Es sind bereits {n} Karten enthalten, das Maximum.',
  'La pantalla ya tiene todas las tarjetas que caben.':
    'Auf dem Bildschirm sind bereits alle Karten untergebracht, die Platz haben.',
  'Las tarjetas de una Rotativa solo se ven: no se pueden tocar en la pantalla.':
    'Die Karten einer Wechselkarte werden nur angezeigt: Sie lassen sich auf dem Bildschirm nicht antippen.',
  'Cambiar cada': 'Wechseln alle',
  'Mostrar puntos': 'Punkte anzeigen',
  'Unos puntos pequeños abajo dicen qué tarjeta se ve.':
    'Kleine Punkte unten zeigen an, welche Karte gerade zu sehen ist.',
  'Transición': 'Übergang',
  'Con Ahorro, en modo ligero o si el aparato pide menos movimiento, cambia de golpe.':
    'Im Sparmodus, im Leichtmodus oder wenn das Gerät weniger Bewegung anfordert, erfolgt der Wechsel ohne Animation.',

  // Divisas
  'Divisas': 'Währungen',
  'El cambio de hasta seis pares de monedas del Banco Central Europeo, con lo que ha variado desde el día anterior y su curva de 7 días, 30 días o un año.':
    'Der Wechselkurs von bis zu sechs Währungspaaren der Europäischen Zentralbank mit Veränderung zum Vortag und Verlauf über 7 Tage, 30 Tage oder ein Jahr.',
  'Pares': 'Paare',
  'Uno en grande': 'Eines groß',
  'En grande, si hay varias pares se van turnando cada 10 segundos.':
    'In großer Ansicht wechseln mehrere Paare alle 10 Sekunden ab.',
  '1 año': '1 Jahr',
  'Debajo: la curva bajo el cambio. De fondo: la curva llena la tarjeta de borde a borde, detrás del cambio; en una lista, cada par lleva la suya detrás.':
    'Darunter: die Kurve unter dem Kurs. Im Hintergrund: die Kurve füllt die Karte randlos hinter dem Kurs aus; in einer Liste hat jedes Paar seine eigene dahinter.',
  'De fondo: la curva llena la tarjeta de borde a borde, detrás del cambio; en una lista, cada par lleva la suya detrás.':
    'Im Hintergrund: die Kurve füllt die Karte randlos hinter dem Kurs aus; in einer Liste hat jedes Paar seine eigene dahinter.',
  'Cambios de referencia del Banco Central Europeo, de Frankfurter. Se publican una vez al día laborable, hacia las 16:00; este servidor los pide unas pocas veces al día y los comparte con todas las pantallas.':
    'Referenzkurse der Europäischen Zentralbank über Frankfurter. Sie werden einmal pro Werktag gegen 16:00 Uhr veröffentlicht; dieser Server ruft sie mehrmals täglich ab und teilt sie mit allen Bildschirmen.',
  'Moneda de origen': 'Ausgangswährung',
  'Moneda de destino': 'Zielwährung',
  'Dar la vuelta': 'Umkehren',
  'Elige dos monedas distintas.': 'Wähle zwei verschiedene Währungen aus.',
  'Busca: EUR/HUF, forinto, dólar…': 'Suche: EUR/HUF, Forint, Dollar…',
  'Buscar divisa': 'Währung suchen',
  'Seis pares como mucho.': 'Maximal sechs Paare.',
  'Cambio de divisas': 'Wechselkurse',
  'Añade al menos un par': 'Füge mindestens ein Paar hinzu',
  'El cambio de monedas del Banco Central Europeo. Lo consulta este servidor unas pocas veces al día; las pantallas no llaman a ninguna web.':
    'Die Wechselkurse der Europäischen Zentralbank. Dieser Server ruft sie mehrmals täglich ab; die Bildschirme greifen auf keine externe Website zu.',
  'Finnhub no tiene datos de {s} con la clave gratuita.':
    'Finnhub hat mit dem kostenlosen Schlüssel keine Daten für {s}.',
  'Para el cambio {p}, usa la tarjeta Divisas.':
    'Für den Wechselkurs {p} verwende die Karte Währungen.',
  'La clave gratuita de Finnhub no tiene divisas. Para el cambio {p}, usa la tarjeta Divisas.':
    'Der kostenlose Finnhub-Schlüssel enthält keine Währungen. Für den Kurs {p} verwende die Karte Währungen.',

  // Rotativa conditions & groups
  'La Rotativa necesita un hueco mayor para esa tarjeta y no hay sitio alrededor. Haz sitio o quita la tarjeta.':
    'Die Wechselkarte benötigt für diese Karte einen größeren Bereich und außen herum ist kein Platz. Schaffe Platz oder entferne die Karte.',
  'Ahora la Rotativa se salta esta tarjeta: no se cumple la condición.':
    'Die Wechselkarte überspringt diese Karte derzeit: Die Bedingung ist nicht erfüllt.',
  'Para cambiar una tarjeta por otra según Home Assistant: añade las dos y elige en cada una, en «Mostrar», cuándo se ve.':
    'Um eine Karte je nach Home Assistant durch eine andere zu ersetzen: Füge beide hinzu und wähle bei jeder unter „Anzeigen“, wann sie sichtbar ist.',
  'Para cambiar una tarjeta por otra según un valor: añade las dos y elige en cada una, en «Mostrar», cuándo se ve.':
    'Um eine Karte je nach Wert durch eine andere zu ersetzen: Füge beide hinzu und wähle bei jeder unter „Anzeigen“, wann sie sichtbar ist.',
  'Cambiar según Casa': 'Je nach Zuhause wechseln',
  'Dos tarjetas en el mismo hueco: se ve una u otra según Home Assistant. En cada una eliges cuándo se ve.':
    'Zwei Karten auf demselben Platz: Je nach Home Assistant wird die eine oder die andere angezeigt. Bei jeder legst du fest, wann sie erscheint.',
  'Añadir grupo': 'Gruppe hinzufügen',
  'Grupo': 'Gruppe',
  'Columnas': 'Spalten',
  'Colocación': 'Anordnung',
  'Cada tarjeta ocupa una parte igual del hueco.':
    'Jede Karte nimmt einen gleich großen Teil des Platzes ein.',
  'Tarjetas del grupo': 'Karten der Gruppe',
  'De {min} a {max} tarjetas, cada una con sus opciones.':
    '{min} bis {max} Karten, jede mit ihren eigenen Einstellungen.',
  'Un grupo tiene al menos {min} tarjetas.':
    'Eine Gruppe benötigt mindestens {min} Karten.',
  'Añadir una tarjeta al grupo': 'Karte zur Gruppe hinzufügen',
  'El grupo ya tiene {max} tarjetas, el máximo.':
    'Die Gruppe enthält bereits {max} Karten, das Maximum.',
  'Ahora la Rotativa se salta este grupo: no se cumple la condición.':
    'Die Wechselkarte überspringt diese Gruppe derzeit: Die Bedingung ist nicht erfüllt.',
  'Un grupo pone de {min} a {max} tarjetas en el hueco de una, en filas o en columnas, y se ve o se salta entero según su «Mostrar».':
    'Eine Gruppe platziert {min} bis {max} Karten in Zeilen oder Spalten auf dem Platz einer einzigen Karte und wird je nach ihrer „Anzeigen“-Bedingung als Ganzes eingeblendet oder übersprungen.',
  'Cambiar un espacio según Casa': 'Bereich je nach Zuhause wechseln',
  'Una cámara y un grupo de tres tarjetas en el mismo hueco: la cámara cuando hay movimiento, las tres tarjetas cuando no.':
    'Eine Kamera und eine Gruppe aus drei Karten auf demselben Platz: die Kamera bei Bewegung, die drei Karten wenn keine Bewegung erkannt wird.',
  'Añadir una Rotativa al grupo': 'Wechselkarte zur Gruppe hinzufügen',
  'Una Rotativa dentro de un grupo pasa sus tarjetas una tras otra en su parte del hueco. Dentro no puede haber grupos ni otra Rotativa.':
    'Eine Wechselkarte innerhalb einer Gruppe zeigt ihre Karten nacheinander in ihrem Teilbereich an. Darin können keine Gruppen und keine weitere Wechselkarte liegen.',

  // Rutas (commute)
  'Rutas': 'Routen',
  'Cuánto se tarda ahora en llegar a tus sitios en coche, en transporte público, en bici o a pie, con el tráfico de Google Maps.':
    'Wie lange du aktuell mit dem Auto, öffentlichen Verkehrsmitteln, dem Fahrrad oder zu Fuß zu deinen Zielen brauchst, inklusive Verkehrslage von Google Maps.',
  'Automático elige según el tamaño de la tarjeta y cuántas rutas hay.':
    'Automatisch wählt die Darstellung passend zur Kartengröße und Anzahl der Routen.',
  'Solo el tiempo': 'Nur die Fahrzeit',
  'km': 'km',
  'mi': 'mi',
  '10 min': '10 Min.',
  '15 min': '15 Min.',
  '30 min': '30 Min.',
  '60 min': '60 Min.',
  'Cada ruta que se ve es una consulta a Google en cada actualización. Fuera de su horario no se consulta.':
    'Jede sichtbare Route löst bei jeder Aktualisierung eine Anfrage an Google aus. Außerhalb ihres Zeitplans erfolgt keine Abfrage.',
  'Falta el origen': 'Startpunkt fehlt',
  'Falta el destino': 'Ziel fehlt',
  'Escribe las direcciones': 'Adressen eingeben',
  'Hay demasiadas rutas en uso ahora. Prueba de nuevo en unos minutos.':
    'Derzeit sind zu viele Routen gleichzeitig aktiv. Versuche es in ein paar Minuten erneut.',
  'Demasiadas pruebas seguidas. Espera un minuto y vuelve a probar.':
    'Zu viele Tests hintereinander. Warte eine Minute und versuche es erneut.',
};

export const ROWS_BUILDER: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_BUILDER: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_BUILDER: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));

/** Singular forms (t() with n = 1): Spanish key → [es, en, pt, nl, da]. */
const ONE: [string, string, string, string, string, string][] = [
  ['{n} widgets', '1 widget', '1 widget', '1 widget', '1 widget', '1 widget'],
  ['{n} entidades', '1 entidad', '1 entity', '1 entidade', '1 entiteit', '1 enhed'],
  ['{n} widgets no caben enteros', '1 widget no cabe entero', '1 widget does not fit', '1 widget não cabe inteiro', '1 widget past niet helemaal', '1 widget er der ikke plads til'],
  ['{n} widgets no están disponibles aquí y se han dejado fuera.', '1 widget no está disponible aquí y se ha dejado fuera.', '1 widget is not available here and was left out.', '1 widget não está disponível aqui e ficou de fora.', '1 widget is hier niet beschikbaar en is weggelaten.', '1 widget findes ikke her og er udeladt.'],
  ['{n} tarjetas importadas tienen que elegir algo de nuevo.', '1 tarjeta importada tiene que elegir algo de nuevo.', '1 imported card needs something picked again.', '1 cartão importado precisa de escolher algo de novo.', '1 geïmporteerde kaart moet opnieuw iets kiezen.', '1 importeret kort skal have valgt noget igen.'],
];
export const SINGULAR_BUILDER: Record<string, [string, string, string]> = Object.fromEntries(ONE.map(([k, es, en, pt]) => [k, [es, en, pt]]));
export const NL_SINGULAR_BUILDER: Record<string, string> = Object.fromEntries(ONE.map((r) => [r[0], r[4]]));
export const DA_SINGULAR_BUILDER: Record<string, string> = Object.fromEntries(ONE.map((r) => [r[0], r[5]]));
export const DE_SINGULAR_BUILDER: Record<string, string> = {
  '{n} widgets': '1 Widget',
  '{n} entidades': '1 Entität',
  '{n} widgets no caben enteros': '1 Widget passt nicht vollständig',
  '{n} widgets no están disponibles aquí y se han dejado fuera.':
    '1 Widget ist hier nicht verfügbar und wurde ausgelassen.',
  '{n} tarjetas importadas tienen que elegir algo de nuevo.':
    'Bei 1 importierten Karte muss noch etwas neu ausgewählt werden.',
};
