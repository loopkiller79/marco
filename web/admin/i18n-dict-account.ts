// Account settings on the account page (sections/Account.tsx, features.accountSettings: Marco Cloud) and their
// settings search entries. Spanish key; [es, en, pt, nl, da].
// ROWS_ACCOUNT feeds EN and PT (i18n-dict.ts); NL_ACCOUNT and DA_ACCOUNT are spread into NL and DA.
export const DE_ACCOUNT: Record<string, string> = {
  'Tu cuenta, cómo entras y el hogar que gestionas desde este panel.': 'Dein Konto, wie du dich anmeldest und der Haushalt, den du über dieses Panel verwaltest.',
  'En Marco desde el {date}': 'Bei Marco seit dem {date}',
  'La contraseña no puede ser tu email': 'Das Passwort darf nicht deine E-Mail-Adresse sein',
  'Ahora mismo no se pueden enviar correos. Inténtalo más tarde.': 'Im Moment können keine E-Mails gesendet werden. Versuche es später erneut.',
  'Al entrar, además de la contraseña, el enlace por email o Google, se pide un código de una app de autenticación del móvil.': 'Beim Anmelden wird zusätzlich zu Passwort, E-Mail-Link oder Google ein Code aus einer Authentifizierungs-App auf dem Handy abgefragt.',
  'Tus datos': 'Deine Daten',
  'Descarga una copia de todo lo que guardamos sobre tu cuenta, en un archivo JSON.': 'Lade eine Kopie aller Daten, die wir zu deinem Konto speichern, als JSON-Datei herunter.',
  'Descargar mis datos': 'Meine Daten herunterladen',
  'La configuración de las pantallas se exporta aparte, en Copias de seguridad.': 'Die Einstellungen deiner Bildschirme werden separat unter Backups exportiert.',
  'El de este panel y el de los correos que te enviamos.': 'Für dieses Panel und für die E-Mails, die wir dir senden.',
  'Contraseña cambiada. Hemos cerrado la sesión en tus otros dispositivos.': 'Passwort geändert. Du wurdest auf deinen anderen Geräten abgemeldet.',
  'Contraseña guardada. Ya puedes entrar también con ella.': 'Passwort gespeichert. Du kannst dich ab jetzt auch damit anmelden.',
  'Al cambiarla se cierra la sesión en tus otros dispositivos.': 'Beim Ändern wirst du auf deinen anderen Geräten abgemeldet.',
  'Ahora entras con un enlace por email o con Google. Si quieres, pon también una contraseña.': 'Derzeit meldest du dich per E-Mail-Link oder mit Google an. Wenn du möchtest, kannst du zusätzlich ein Passwort festlegen.',
  'Poner contraseña': 'Passwort festlegen',
  '¿Desconectar Google de tu cuenta de Marco?': 'Google von deinem Marco-Konto trennen?',
  'Podrás seguir entrando con tu contraseña o con un enlace por email.': 'Du kannst dich weiterhin mit deinem Passwort oder per E-Mail-Link anmelden.',
  'Podrás seguir entrando con un enlace por email.': 'Du kannst dich weiterhin per E-Mail-Link anmelden.',
  'Desconectar': 'Trennen',
  'Google desconectado': 'Google getrennt',
  'Conectada': 'Verbunden',
  'Sin conectar': 'Nicht verbunden',
  'Puedes entrar con la cuenta de Google {email}. Si la desconectas y vuelves a usar «Continuar con Google» con esa dirección, se conecta otra vez.': 'Du kannst dich mit dem Google-Konto {email} anmelden. Wenn du es trennst und später wieder „Weiter mit Google“ mit dieser Adresse nutzt, wird es erneut verbunden.',
  'Si usas «Continuar con Google» con {email} al entrar, se conecta sola.': 'Wenn du beim Anmelden „Weiter mit Google“ mit {email} verwendest, wird es automatisch verbunden.',
  'Sesión cerrada': 'Abgemeldet',
  '¿Cerrar sesión en todos los dispositivos?': 'Auf allen Geräten abmelden?',
  'También en este. Tendrás que volver a entrar.': 'Auch auf diesem Gerät. Du musst dich danach erneut anmelden.',
  'Cerrar todas': 'Überall abmelden',
  'Dónde tienes la sesión abierta. Cierra la de cualquier dispositivo que no reconozcas.': 'Wo du aktuell angemeldet bist. Melde jedes Gerät ab, das du nicht erkennst.',
  'No se pudieron cargar las sesiones.': 'Die Sitzungen konnten nicht geladen werden.',
  'Este dispositivo': 'Dieses Gerät',
  'Última actividad {when}': 'Zuletzt aktiv {when}',
  '¿Eliminar tu cuenta?': 'Dein Konto löschen?',
  'Se borran al momento tu cuenta, tu hogar, sus pantallas y sus fotos. No se puede deshacer.': 'Dein Konto, dein Haushalt, seine Bildschirme und Fotos werden sofort gelöscht. Dies kann nicht rückgängig gemacht werden.',
  'Eliminar mi cuenta': 'Mein Konto löschen',
  'Escribe tu contraseña para confirmarlo': 'Gib dein Passwort zur Bestätigung ein',
  'Te hemos enviado un enlace de confirmación por email. Caduca a los 15 minutos.': 'Wir haben dir einen Bestätigungslink per E-Mail gesendet. Er ist 15 Minuten gültig.',
  'Prefiero confirmarlo con un enlace por email': 'Lieber per E-Mail-Link bestätigen',
  'Enviarme el enlace para eliminarla': 'Link zum Löschen per E-Mail senden',
  'Idioma de la cuenta': 'Kontosprache',
};

export const ROWS_ACCOUNT: [string, string, string][] = ROWS.map(([es, en, pt]) => [es, en, pt]);
export const NL_ACCOUNT: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[3]]));
export const DA_ACCOUNT: Record<string, string> = Object.fromEntries(ROWS.map((r) => [r[0], r[4]]));
