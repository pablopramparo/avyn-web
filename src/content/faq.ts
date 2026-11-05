import type { Locale } from "@/i18n/config";
import type { GuideId } from "./guide-paths";

/**
 * An answer line may contain [text](https://…) links; they open in a new tab. The FAQ has its own content: it answers what someone asks before installing, in plain words. The guides keep the
 * step by step and their own topic questions. A link, when there is one, points to where the detail lives.
 */
export type FaqLink = { guide: GuideId; label: string } | { path: string; label: string };
export type FaqItem = { q: string; a: string[]; link?: FaqLink };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

const es: FaqGroup[] = [
  {
    id: "empezar",
    title: "Para empezar",
    items: [
      {
        q: "¿Qué es Avyn, en una frase?",
        a: [
          "El control remoto de tu PC con Windows, en tu teléfono Android. Controlás la película, mandás archivos, movés el mouse, escribís o abrís programas sin levantarte del sillón (el sillón es, oficialmente, parte de la red local).",
        ],
      },
      {
        q: "¿Qué necesito para usarlo?",
        a: [
          "Tres cosas: Avyn Agent en la PC, la app Avyn Remote en el teléfono, y que los dos estén en la misma red (o conectados por tu VPN, si estás afuera). Sin cuenta, sin registro.",
        ],
        link: { path: "/download/", label: "Descargar Avyn" },
      },
      {
        q: "¿Por qué son dos programas y no uno solo?",
        a: [
          "Porque cada uno vive donde tiene que vivir. El Agent está en la PC: es quien mueve el mouse, abre los programas y le habla a Windows, y un teléfono no puede hacer eso solo. La app está en tu mano: es el control remoto.",
          "Es como una tele y su control: uno sin el otro no hace mucho. Por suerte el Agent se queda quietito en la bandeja de Windows y no molesta.",
        ],
      },
      {
        q: "¿Cómo los conecto?",
        a: [
          "Se vinculan una sola vez: la app encuentra tu PC, los dos muestran el mismo código y vos aprobás en la PC. Nada de escribir contraseñas.",
        ],
        link: { guide: "pair-phone", label: "Vincular el celular paso a paso" },
      },
    ],
  },
  {
    id: "gratis",
    title: "Gratis y de pago",
    items: [
      {
        q: "¿Avyn es gratis?",
        a: [
          "Lo esencial, sí. El Agent es gratis, la app es gratis y no hay anuncios, suscripciones ni cuenta Avyn. Además hay algunas funciones avanzadas que forman parte de una compra única (más abajo te cuento cuáles).",
        ],
      },
      {
        q: "¿Qué incluye lo gratis?",
        a: [
          "Lo de todos los días: touchpad y teclado, volumen, controles multimedia (con integración completa con Auren), abrir programas del menú Inicio, ver, enfocar, minimizar, maximizar y cerrar ventanas, encender la PC con Wake-on-LAN, bloquear, suspender, reiniciar y apagar, rutinas hechas con pasos gratuitos, y enviar archivos a la PC o compartirlos desde Android.",
          "También es gratis todo Kantaria (el karaoke) y, siempre, la seguridad: nunca se cobra por estar protegido ni por las actualizaciones y arreglos.",
        ],
      },
      {
        q: "¿Y qué sería de pago?",
        a: [
          "Las funciones avanzadas, con una única compra:",
          "• Desbloquear la PC desde el teléfono.",
          "• Ver la pantalla de la PC en vivo y dibujar sobre ella.",
          "• Ver en la TV lo que reproducís.",
          "• Mover ventanas entre monitores.",
          "• Encender y apagar monitores y TV Samsung.",
          "• Explorar, descargar y abrir archivos de la PC desde el teléfono (enviar archivos a la PC sigue siendo gratis).",
          "• Vincular más de una PC (la primera es gratis).",
          "Esta es la división prevista hoy: todavía no hay un precio publicado y puede ajustarse antes del lanzamiento. Si ves un candado en una función, es una de estas.",
        ],
      },
      {
        q: "¿Es una suscripción?",
        a: [
          "No. Es una compra única en Google Play: sin cuenta Avyn, sin servidor nuestro y sin renovaciones. Una vez que Google la confirma, sigue funcionando aunque no tengas Internet.",
        ],
      },
      {
        q: "¿Y las extensiones del navegador?",
        a: [
          "Las extensiones son gratis. Qué controles del navegador quedan en lo gratuito y cuáles en lo avanzado todavía no está decidido, y no vamos a prometer algo que después cambie.",
        ],
        link: { guide: "extensions", label: "Para qué sirven las extensiones" },
      },
    ],
  },
  {
    id: "confiabilidad",
    title: "Confianza y confiabilidad",
    items: [
      {
        q: "¿Y si se corta el Wi-Fi o reinicio la PC?",
        a: [
          "La app reintenta sola y se reconecta cuando la PC vuelve. Si fuiste vos quien la suspendió o apagó desde Avyn, la app deja de insistir (no va a gritarle a una PC dormida) hasta que le pidas encenderla.",
        ],
      },
      {
        q: "¿Se actualiza sola? ¿Puede romperme algo?",
        a: [
          "El Agent se actualiza en segundo plano y espera para reiniciarse a que nadie esté conectado ni transfiriendo, así que no te corta una película a la mitad. Si la app trae una función que tu Agent todavía no tiene, te avisa en lugar de fallar en silencio.",
        ],
      },
      {
        q: "¿Qué cosas no funcionan siempre?",
        a: [
          "Preferimos decírtelo antes que sorprenderte:",
          "• Encender la PC con Wake-on-LAN depende de la PC y de la red; por Wi-Fi suele ser limitado, y desde una suspensión es más confiable que desde un apagado completo.",
          "• Un monitor principal conectado por DisplayPort no se puede apagar de verdad desde el software (la app te lo explica junto a esa pantalla).",
          "• Los botones propios de cada sitio de video pueden dejar de funcionar si el sitio se rediseña.",
          "Cuando algo no se puede hacer, la app y el Agent dicen por qué, en vez de hacer como que funcionó.",
        ],
      },
      {
        q: "¿Puedo apagar lo que no uso?",
        a: [
          "Sí. Desde Avyn Agent podés desactivar por separado los programas, el acceso a archivos, la pantalla en vivo, el desbloqueo y las vistas previas. Es tu PC: las llaves las tenés vos.",
        ],
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y permisos",
    items: [
      {
        q: "¿Es seguro dejar que el teléfono controle mi PC?",
        a: [
          "Está pensado para que lo sea: la conexión va cifrada, la PC solo acepta teléfonos que aprobaste con un código de verificación, y el teléfono solo le habla a tu PC (recuerda su certificado y no acepta otro). Podés revocar cualquier teléfono cuando quieras.",
          "Y no tenés que creernos: la página Verificar explica cómo comprobarlo con herramientas de Windows.",
        ],
        link: { path: "/security/", label: "Cómo cuida Avyn tu PC" },
      },
      {
        q: "¿Por qué el Agent no me pide ser administrador?",
        a: [
          "Porque no lo necesita. Avyn Agent corre con tu usuario de Windows y solo hace lo que vos podrías hacer sentado frente a la PC. La única pieza que pide permisos elevados es el desbloqueo, que es opcional.",
        ],
      },
      {
        q: "¿Por qué el desbloqueo sí pide permisos de administrador?",
        a: [
          "Porque la pantalla de inicio de sesión de Windows está protegida: solo un servicio del sistema puede escribir ahí. Instalarlo requiere el permiso de administrador una única vez, al activarlo en Ajustes.",
          "Es un servicio aparte y chiquito: solo escribe tu PIN en esa pantalla (y en ningún otro lugar), solo atiende teléfonos que registraste, usa un desafío de un solo uso y permite pocos intentos. Se desinstala desde el mismo lugar, y si nunca lo activás, Avyn no pide permisos elevados.",
        ],
      },
      {
        q: "¿Avyn guarda mi PIN o mi contraseña de Windows?",
        a: [
          "En la PC, nunca. Si usás el desbloqueo, el PIN queda guardado solo en tu teléfono, protegido por tu huella o tu bloqueo de pantalla. Y si tu PC no tiene PIN, hay una opción \"Esta PC no tiene PIN\" para que no tengas que inventar uno.",
        ],
      },
      {
        q: "¿Qué pasa si me roban el teléfono?",
        a: [
          "Entrás a Avyn Agent en la PC, abrís Dispositivos y revocás ese teléfono: pierde el acceso al instante, desbloqueo incluido. Además, para desbloquear la PC el teléfono pide huella o bloqueo de pantalla, así que un teléfono bloqueado no sirve.",
        ],
      },
      {
        q: "¿Avyn me espía o manda datos a algún lado?",
        a: [
          "No. No hay servidores de Avyn en el medio, ni cuentas, ni analítica, ni publicidad. Lo único que sale a Internet es la búsqueda de actualizaciones del Agent (en la versión que descargás directo; la de Microsoft Store no se conecta por sí sola).",
        ],
        link: { path: "/verify/", label: "Verificalo vos mismo" },
      },
    ],
  },
  {
    id: "conexion",
    title: "En casa y fuera de casa",
    items: [
      {
        q: "¿Necesito Internet?",
        a: [
          "No para usar Avyn. El teléfono y la PC se hablan directamente, sin pasar por ningún servidor nuestro (no tenemos). Internet solo entra para bajar las apps y actualizar el Agent.",
        ],
      },
      {
        q: "¿Funciona fuera de casa?",
        a: [
          "Sí, con tu propia VPN. Como Avyn no tiene servidores en el medio, para llegar a tu PC desde afuera el teléfono tiene que \"estar en tu red\", y eso lo hace una VPN (por ejemplo [Tailscale](https://tailscale.com), que es gratis para uso personal). En la app guardás la dirección de tu PC dentro de la VPN y listo.",
        ],
        link: { guide: "vpn", label: "Controlar la PC fuera de casa" },
      },
      {
        q: "Entonces, ¿es solo local o no?",
        a: [
          "Es directo y privado: sin nube y sin intermediarios. En casa va por tu red; afuera, por tu VPN. La palabra \"local\" describe que nada pasa por nosotros, no que estés atado a tu living.",
          "Hay dos cosas que sí quedan solo en casa, a propósito: vincular un teléfono nuevo y desbloquear la PC desde la pantalla de inicio de sesión. Son las más delicadas, y las hacés delante de la PC. Y Wake-on-LAN (encender la PC) tampoco cruza la VPN.",
        ],
      },
      {
        q: "¿Puedo usar más de un teléfono o más de una PC?",
        a: [
          "Más de un teléfono con la misma PC, sí: cada uno se aprueba y se revoca por separado. Más de una PC desde el mismo teléfono también, y es una de las funciones avanzadas (la primera PC es gratis).",
        ],
      },
    ],
  },
  {
    id: "extensiones",
    title: "Extensiones de Edge y Chrome",
    items: [
      {
        q: "¿Para qué sirve la extensión?",
        a: [
          "Para que el teléfono controle los videos del navegador con todo detalle: pantalla completa, velocidad, subtítulos y pista de audio, y los botones propios del sitio, como \"saltar intro\", \"siguiente episodio\" o el \"¿Seguís mirando?\" de Netflix.",
          "Sin ella, Avyn igual maneja play, pausa y volumen de lo que se reproduce, pero no puede tocar los botones que cada página pone en su reproductor.",
        ],
        link: { guide: "extensions", label: "Guía de la extensión" },
      },
      {
        q: "¿Es obligatoria?",
        a: [
          "No. Es opcional y solo la necesitás si mirás videos en Edge o Chrome. Si hay un video y no la tenés, la app te sugiere instalarla y te manda el enlace para abrirlo en la PC (y podés ocultar ese aviso para siempre).",
        ],
      },
      {
        q: "¿Qué ve la extensión?",
        a: [
          "Solo las pestañas que tienen un video: el sitio, el título, si se está reproduciendo, la velocidad y qué botones del reproductor se ven. Todo eso va únicamente al Agent de tu propia PC. No lee contraseñas ni historial, y no manda nada a Internet.",
        ],
        link: { path: "/security/", label: "Seguridad y privacidad" },
      },
      {
        q: "¿También necesita permisos de administrador?",
        a: [
          "No. El Agent la registra solo para tu usuario, la mantiene actualizada con cada versión y la extensión se recarga sola cuando cambia.",
        ],
      },
      {
        q: "¿Con qué sitios funciona?",
        a: [
          "Reconoce YouTube, Netflix, Disney+, Apple TV, HBO Max y Prime Video, y también funciona con la mayoría de las páginas que tienen un video. Elegir subtítulos y audio desde el teléfono está disponible en YouTube, Netflix, Disney+, HBO Max, Apple TV y Prime Video. Los botones propios dependen de cada sitio, y si un sitio cambia su diseño pueden dejar de aparecer hasta que lo actualicemos.",
        ],
      },
      {
        q: "¿Dónde la instalo?",
        a: [
          "En la Chrome Web Store o en Edge Add-ons, según tu navegador. Los enlaces están en la página de descargas.",
        ],
        link: { path: "/download/", label: "Ir a descargas" },
      },
    ],
  },
  {
    id: "problemas",
    title: "Cuando algo no anda",
    items: [
      {
        q: "La app no encuentra mi PC. ¿Qué hago?",
        a: [
          "Revisá cuatro cosas, en este orden: que Avyn Agent esté abierto en la PC (su ícono está junto al reloj); que el teléfono y la PC estén en el mismo Wi-Fi (una red de invitados o los datos móviles no sirven); que Windows tenga esa red como Privada y no como Pública; y que el Firewall de Windows no haya bloqueado al Agent. Después tocá \"Escanear de nuevo\".",
          "Si igual no aparece, tocá \"Conectar por IP\" en la app (desde la versión 1.1.3) y escribí la IP que muestra Avyn Agent en su pantalla de Estado, por ejemplo 192.168.0.81: algunos routers no dejan pasar la búsqueda automática, pero sí la conexión directa.",
        ],
        link: { guide: "pair-phone", label: "Qué revisar si la PC no aparece" },
      },
      {
        q: "Los códigos de verificación son distintos en cada equipo.",
        a: [
          "Tendrían que ser idénticos. Si difieren, rechazá la solicitud: algo en la red podría estar interponiéndose. Es una de esas veces en las que desconfiar es de buena educación.",
        ],
      },
      {
        q: "La PC no se enciende desde el teléfono.",
        a: [
          "Wake-on-LAN tiene que estar activado en la PC (en el BIOS y en el adaptador de red) y funciona mejor por cable. Si la PC está suspendida, es mucho más confiable que si está apagada del todo.",
        ],
      },
      {
        q: "La pantalla en vivo dice que otro teléfono la está usando.",
        a: [
          "Solo un teléfono puede mirar la PC a la vez, y Avyn nunca le saca la pantalla a quien ya la tiene. Esperá a que termine o pedile que corte desde su teléfono, o desde la bandeja del Agent.",
        ],
        link: { guide: "screen", label: "Pantalla en vivo" },
      },
    ],
  },
];

const en: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        q: "What is Avyn, in one sentence?",
        a: [
          "The remote control for your Windows PC, on your Android phone. You control the movie, send files, move the mouse, type or open programs without leaving the couch (the couch is, officially, part of the local network).",
        ],
      },
      {
        q: "What do I need to use it?",
        a: [
          "Three things: Avyn Agent on the PC, the Avyn Remote app on the phone, and both on the same network (or connected through your VPN when you're away). No account, no sign-up.",
        ],
        link: { path: "/download/", label: "Download Avyn" },
      },
      {
        q: "Why are there two programs instead of one?",
        a: [
          "Because each one lives where it has to. The Agent is on the PC: it moves the mouse, opens programs and talks to Windows, and a phone can't do that alone. The app is in your hand: it's the remote.",
          "Like a TV and its remote: one without the other doesn't do much. Luckily the Agent sits quietly in the Windows tray and stays out of your way.",
        ],
      },
      {
        q: "How do I connect them?",
        a: [
          "You pair them once: the app finds your PC, both show the same code and you approve on the PC. No passwords to type.",
        ],
        link: { guide: "pair-phone", label: "Pairing step by step" },
      },
    ],
  },
  {
    id: "free",
    title: "Free and paid",
    items: [
      {
        q: "Is Avyn free?",
        a: [
          "The essentials, yes. The Agent is free, the app is free, and there are no ads, no subscriptions and no Avyn account. There are also some advanced features that are part of a one-time purchase (see below).",
        ],
      },
      {
        q: "What does the free part include?",
        a: [
          "Everyday things: touchpad and keyboard, volume, media controls (with full Auren integration), opening Start menu programs, listing, focusing, minimizing, maximizing and closing windows, turning the PC on with Wake-on-LAN, lock, sleep, restart and shut down, routines made of free steps, and sending files to the PC or sharing them from Android.",
          "All of Kantaria (the karaoke) is free too, and so is security, always: you are never charged to be protected, or for updates and fixes.",
        ],
      },
      {
        q: "And what would be paid?",
        a: [
          "The advanced features, with a single purchase:",
          "• Unlock the PC from your phone.",
          "• Watch the PC screen live and draw on it.",
          "• Play on TV what you're watching.",
          "• Move windows between monitors.",
          "• Turn monitors and Samsung TVs on and off.",
          "• Browse, download and open the PC's files from the phone (sending files to the PC stays free).",
          "• Pair more than one PC (the first one is free).",
          "This is the split planned today: there is no published price yet and it may be adjusted before launch. If you see a lock on a feature, it is one of these.",
        ],
      },
      {
        q: "Is it a subscription?",
        a: [
          "No. It's a one-time purchase on Google Play: no Avyn account, no server of ours and no renewals. Once Google confirms it, it keeps working even without Internet.",
        ],
      },
      {
        q: "What about the browser extensions?",
        a: [
          "The extensions are free. Which browser controls stay free and which are advanced is not decided yet, and we won't promise something that later changes.",
        ],
        link: { guide: "extensions", label: "What the extensions are for" },
      },
    ],
  },
  {
    id: "reliability",
    title: "Trust and reliability",
    items: [
      {
        q: "What if the Wi-Fi drops or I restart the PC?",
        a: [
          "The app retries on its own and reconnects when the PC is back. If you were the one who put it to sleep or shut it down from Avyn, the app stops trying (it won't shout at a sleeping PC) until you ask it to turn it on.",
        ],
      },
      {
        q: "Does it update by itself? Can it break something?",
        a: [
          "The Agent updates in the background and waits to restart until nobody is connected or transferring, so it won't cut a movie in half. If the app has a feature your Agent doesn't have yet, it tells you instead of failing silently.",
        ],
      },
      {
        q: "What doesn't always work?",
        a: [
          "We'd rather tell you than surprise you:",
          "• Turning the PC on with Wake-on-LAN depends on the PC and the network; over Wi-Fi it is usually limited, and from sleep it's more reliable than from a full shutdown.",
          "• A main monitor connected over DisplayPort can't truly be turned off from software (the app explains it next to that display).",
          "• Each video site's own buttons can stop working if the site is redesigned.",
          "When something can't be done, the app and the Agent say why instead of pretending it worked.",
        ],
      },
      {
        q: "Can I turn off what I don't use?",
        a: [
          "Yes. In Avyn Agent you can separately turn off programs, file access, the live screen, unlocking and previews. It's your PC: you hold the keys.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security and permissions",
    items: [
      {
        q: "Is it safe to let a phone control my PC?",
        a: [
          "It's designed to be: the connection is encrypted, the PC only accepts phones you approved with a verification code, and the phone only talks to your PC (it remembers its certificate and accepts no other). You can revoke any phone whenever you want.",
          "And you don't have to take our word: the Verify page explains how to check it with Windows tools.",
        ],
        link: { path: "/security/", label: "How Avyn protects your PC" },
      },
      {
        q: "Why doesn't the Agent ask for administrator rights?",
        a: [
          "Because it doesn't need them. Avyn Agent runs as your Windows user and only does what you could do sitting at the PC. The only piece that asks for elevated permissions is unlocking, which is optional.",
        ],
      },
      {
        q: "Why does unlocking ask for administrator permission?",
        a: [
          "Because the Windows sign-in screen is protected: only a system service can type there. Installing it needs administrator permission once, when you turn it on in Settings.",
          "It's a separate, small service: it only types your PIN on that screen (nowhere else), only serves phones you registered, uses a one-time challenge and allows few attempts. It is removed from the same place, and if you never turn it on, Avyn never asks for elevated permissions.",
        ],
      },
      {
        q: "Does Avyn store my PIN or Windows password?",
        a: [
          "On the PC, never. If you use unlocking, the PIN is kept only on your phone, protected by your fingerprint or screen lock. And if your PC has no PIN, there's a \"This PC has no PIN\" option so you don't have to make one up.",
        ],
      },
      {
        q: "What if my phone is stolen?",
        a: [
          "Open Avyn Agent on the PC, go to Devices and revoke that phone: it loses access instantly, unlocking included. Also, to unlock the PC the phone asks for your fingerprint or screen lock, so a locked phone is useless.",
        ],
      },
      {
        q: "Does Avyn spy on me or send data anywhere?",
        a: [
          "No. There are no Avyn servers in the middle, no accounts, no analytics and no ads. The only thing that reaches the Internet is the Agent's update check (in the version you download directly; the Microsoft Store one doesn't connect on its own).",
        ],
        link: { path: "/verify/", label: "Check it yourself" },
      },
    ],
  },
  {
    id: "connection",
    title: "At home and away",
    items: [
      {
        q: "Do I need Internet?",
        a: [
          "Not to use Avyn. The phone and the PC talk directly, through no server of ours (we have none). Internet only comes in to download the apps and update the Agent.",
        ],
      },
      {
        q: "Does it work away from home?",
        a: [
          "Yes, with your own VPN. Since Avyn has no servers in the middle, to reach your PC from outside the phone has to \"be on your network\", and a VPN does that (for example [Tailscale](https://tailscale.com), which is free for personal use). In the app you save your PC's address inside the VPN and that's it.",
        ],
        link: { guide: "vpn", label: "Control the PC away from home" },
      },
      {
        q: "So, is it local-only or not?",
        a: [
          "It's direct and private: no cloud and no middlemen. At home it goes over your network; away, over your VPN. \"Local\" describes that nothing passes through us, not that you're tied to your living room.",
          "Two things do stay at home on purpose: pairing a new phone and unlocking the PC from the sign-in screen. They're the most delicate, and you do them in front of the PC. Wake-on-LAN (turning the PC on) doesn't cross the VPN either.",
        ],
      },
      {
        q: "Can I use more than one phone or more than one PC?",
        a: [
          "More than one phone with the same PC, yes: each is approved and revoked separately. More than one PC from the same phone too, and that's one of the advanced features (the first PC is free).",
        ],
      },
    ],
  },
  {
    id: "extensions",
    title: "Edge and Chrome extensions",
    items: [
      {
        q: "What is the extension for?",
        a: [
          "So your phone can control browser videos in detail: full screen, speed, subtitles and audio track, and the site's own buttons, like \"skip intro\", \"next episode\" or Netflix's \"Are you still watching?\".",
          "Without it, Avyn still handles play, pause and volume of what's playing, but it can't press the buttons each page puts in its player.",
        ],
        link: { guide: "extensions", label: "Extension guide" },
      },
      {
        q: "Is it required?",
        a: [
          "No. It's optional and you only need it if you watch videos in Edge or Chrome. If there's a video and you don't have it, the app suggests installing it and sends you the link to open on the PC (and you can hide that notice forever).",
        ],
      },
      {
        q: "What does the extension see?",
        a: [
          "Only tabs that have a video: the site, the title, whether it's playing, the speed and which player buttons are visible. All of it goes only to the Agent on your own PC. It doesn't read passwords or history, and it sends nothing to the Internet.",
        ],
        link: { path: "/security/", label: "Security and privacy" },
      },
      {
        q: "Does it need administrator permissions too?",
        a: [
          "No. The Agent registers it for your user only, keeps it up to date with every version and the extension reloads itself when it changes.",
        ],
      },
      {
        q: "Which sites does it work with?",
        a: [
          "It recognizes YouTube, Netflix, Disney+, Apple TV, HBO Max and Prime Video, and it also works with most pages that have a video. Picking subtitles and audio from the phone is available on YouTube, Netflix, Disney+, HBO Max, Apple TV and Prime Video. The site-specific buttons depend on each site, and if a site changes its design they may stop appearing until we update.",
        ],
      },
      {
        q: "Where do I install it?",
        a: [
          "From the Chrome Web Store or Edge Add-ons, depending on your browser. The links are on the downloads page.",
        ],
        link: { path: "/download/", label: "Go to downloads" },
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "When something doesn't work",
    items: [
      {
        q: "The app can't find my PC. What do I do?",
        a: [
          "Check four things, in this order: that Avyn Agent is open on the PC (its icon is next to the clock); that the phone and the PC are on the same Wi-Fi (a guest network or mobile data won't work); that Windows has that network set to Private, not Public; and that Windows Firewall hasn't blocked the Agent. Then tap \"Scan again\".",
          "If it still doesn't show up, tap \"Connect by IP\" in the app (version 1.1.3 and later) and type the IP address Avyn Agent shows on its Status screen, for example 192.168.0.81: some routers drop the automatic search but let the direct connection through.",
        ],
        link: { guide: "pair-phone", label: "What to check if the PC doesn't show up" },
      },
      {
        q: "The verification codes are different on each device.",
        a: [
          "They should be identical. If they differ, reject the request: something on the network could be getting in the way. This is one of those times when being suspicious is just good manners.",
        ],
      },
      {
        q: "The PC doesn't turn on from the phone.",
        a: [
          "Wake-on-LAN has to be enabled on the PC (in the BIOS and on the network adapter) and works best over a cable. A sleeping PC is far more reliable than one that is fully off.",
        ],
      },
      {
        q: "The live screen says another phone is using it.",
        a: [
          "Only one phone can watch the PC at a time, and Avyn never takes the screen away from whoever already has it. Wait for them to finish, or ask them to stop from their phone or from the Agent's tray.",
        ],
        link: { guide: "screen", label: "Live screen" },
      },
    ],
  },
];

export const faqGroups: Record<Locale, FaqGroup[]> = { es, en };
