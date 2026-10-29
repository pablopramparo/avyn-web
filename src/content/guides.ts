import type { Locale } from "@/i18n/config";
import { guideSlugs, type GuideId } from "./guide-paths";

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "note"; text: string };

export type Guide = {
  /** Shared between languages so each guide can point to its translation. */
  id: GuideId;
  slug: string;
  title: string;
  description: string;
  intro: string;
  updated: string;
  /** Social image used by the guide: "home", "kantaria" or "auren". */
  image: "home" | "kantaria" | "auren";
  sections: { heading: string; blocks: GuideBlock[] }[];
  faq: { q: string; a: string }[];
  /** Product and site pages worth reading next, by locale-free path. */
  related: { path: string; label: string }[];
};

const es: Guide[] = [
  {
    id: "control-pc",
    slug: guideSlugs["control-pc"].es,
    title: "Cómo controlar tu PC con Windows desde el celular Android",
    description:
      "Guía para controlar tu PC con Windows desde un teléfono Android por tu red local: mouse, teclado, ventanas, volumen, archivos y apagado, sin nube ni cuentas.",
    intro:
      "Con Avyn podés usar el teléfono Android como control remoto de tu PC con Windows, sin levantarte del sillón y sin depender de Internet. Esta guía explica qué necesitás, cómo se vinculan los dos equipos y qué podés hacer desde el teléfono.",
    updated: "2026-10-22",
    image: "home",
    sections: [
      {
        heading: "Qué necesitás",
        blocks: [
          {
            type: "list",
            items: [
              "Una PC con Windows de 64 bits, con Avyn Agent instalado.",
              "Un teléfono Android con la app Avyn Remote.",
              "Los dos dispositivos en la misma red local, por Wi-Fi o por cable.",
            ],
          },
          {
            type: "p",
            text: "No hace falta crear una cuenta ni usar un servicio en la nube: el teléfono y la PC se hablan directamente dentro de tu red.",
          },
          {
            type: "note",
            text: "Avyn Agent ya está en Microsoft Store. Avyn Remote está en Google Play en beta cerrada: solo se instala si sos tester. Para sumarte, escribinos a avyn.remote@gmail.com.",
          },
        ],
      },
      {
        heading: "Paso a paso: vincular el teléfono con la PC",
        blocks: [
          {
            type: "steps",
            items: [
              "Instalá Avyn Agent en la PC. Queda en la bandeja del sistema y se inicia con Windows.",
              "Abrí la app Avyn en el teléfono, con ambos equipos en la misma red. La app encuentra la PC en tu red local.",
              "Elegí la PC y pedí la vinculación. En la pantalla de la PC aparece una solicitud para aprobarla o rechazarla, con un código de verificación que podés comparar con el del teléfono.",
              "Aprobá la solicitud en la PC. Desde ese momento el teléfono se reconecta solo, y podés revocarlo cuando quieras desde la sección Dispositivos de Avyn Agent.",
            ],
          },
        ],
      },
      {
        heading: "Qué podés hacer desde el teléfono",
        blocks: [
          {
            type: "list",
            items: [
              "Mouse y teclado: mover el puntero, hacer clic, desplazar, escribir texto y usar teclas y atajos como Enter, Esc, las flechas o Ctrl.",
              "Multimedia y volumen: pausar, pasar al siguiente, buscar una posición y subir, bajar o silenciar el volumen del sistema.",
              "Ventanas: ver las ventanas abiertas, traer una al frente, minimizarla, maximizarla, cerrarla o moverla a otra pantalla.",
              "Programas: abrir los programas del menú Inicio con un toque.",
              "Archivos: explorar las carpetas que compartiste, buscar archivos, abrirlos en la PC, y enviar o descargar archivos entre el teléfono y la PC.",
              "Energía y rutinas: bloquear la sesión, suspender, reiniciar o apagar la PC, y ejecutar rutinas guardadas de varios pasos.",
            ],
          },
          {
            type: "p",
            text: "En la app, estas funciones están organizadas en pestañas: Control, Ventanas, Archivos y Acciones.",
          },
        ],
      },
      {
        heading: "Encender y desbloquear la PC",
        blocks: [
          {
            type: "p",
            text: "Si tu PC lo admite, el teléfono puede encenderla con Wake-on-LAN. Que funcione depende del equipo y de su configuración de red.",
          },
          {
            type: "p",
            text: "El desbloqueo desde el teléfono es opcional y viene desactivado. Si lo activás desde Ajustes en Avyn Agent, Windows te pide permisos de administrador para instalar un pequeño servicio aparte. Tu PIN o contraseña de Windows nunca se guarda en la PC.",
          },
        ],
      },
      {
        heading: "Qué viaja por tu red y cómo comprobarlo",
        blocks: [
          {
            type: "p",
            text: "La comunicación entre el teléfono y la PC va cifrada. La PC solo acepta teléfonos que aprobaste en su pantalla, y cada uno puede revocarse en cualquier momento. Avyn no usa cuentas ni un servidor propio, y no incluye analítica ni publicidad.",
          },
          {
            type: "p",
            text: "No tenés por qué creernos: la página Verificar Avyn explica cómo inspeccionar las conexiones de red del Agent con herramientas de Windows.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Necesito Internet para usar Avyn?",
        a: "No para el uso diario: el teléfono y la PC se comunican dentro de tu red local. La descarga directa del Agent consulta GitHub para buscar actualizaciones; la versión de Microsoft Store no se conecta a Internet por sí sola.",
      },
      {
        q: "¿Funciona fuera de mi casa?",
        a: "Avyn está pensado para la red local: el teléfono y la PC tienen que estar en la misma red.",
      },
      {
        q: "¿Puedo controlar más de una PC?",
        a: "Sí. El teléfono puede guardar varias PC vinculadas y elegís a cuál conectarte.",
      },
      {
        q: "¿Puedo vincular más de un teléfono a la misma PC?",
        a: "Sí. Cada teléfono se aprueba por separado en la PC y se revoca de forma independiente.",
      },
    ],
    related: [
      { path: "/guias/vincular-celular-android-con-avyn-agent/", label: "Vincular el celular con Avyn Agent" },
      { path: "/download/", label: "Descargar Avyn" },
      { path: "/security/", label: "Cómo funciona la seguridad" },
      { path: "/verify/", label: "Verificar Avyn" },
    ],
  },
  {
    id: "pair-phone",
    slug: guideSlugs["pair-phone"].es,
    title: "Cómo vincular tu celular Android con Avyn Agent",
    description:
      "Guía paso a paso para conectar la app Avyn Remote de Android con Avyn Agent en Windows: encontrar la PC, comparar el código de verificación, aprobar y resolver los problemas de conexión más comunes.",
    intro:
      "La vinculación se hace una sola vez por teléfono. La app encuentra tu PC en la red local, los dos equipos muestran el mismo código de verificación y vos aprobás la solicitud en la PC. Esta guía recorre cada paso y qué revisar si la PC no aparece.",
    updated: "2026-10-29",
    image: "home",
    sections: [
      {
        heading: "Antes de empezar",
        blocks: [
          {
            type: "list",
            items: [
              "Una PC con Windows de 64 bits con Avyn Agent instalado. Es gratis y está en Microsoft Store o como descarga directa desde la página de descarga.",
              "Un teléfono Android con la app Avyn Remote.",
              "Los dos equipos en la misma red local. Una red de invitados o los datos móviles no sirven.",
            ],
          },
          {
            type: "p",
            text: "Abrí Avyn Agent en la PC y dejalo corriendo. Su ícono queda junto al reloj; si no está, iniciá el programa desde el menú Inicio.",
          },
        ],
      },
      {
        heading: "Paso a paso",
        blocks: [
          {
            type: "steps",
            items: [
              "En el teléfono, abrí Avyn Remote. En la pantalla \"Prepará tu PC\", tocá \"Buscar mi PC\". Si todavía no instalaste el Agent, \"Enviarme el enlace de descarga\" comparte el enlace por mail o chat para abrirlo en la PC.",
              "Esperá unos segundos en \"Buscando tu PC\". La app escanea la red local.",
              "En \"Elegir PC\", elegí tu PC de la lista (muestra su nombre y su dirección) y tocá \"Vincular\". Si esa PC ya estaba vinculada, el botón dice \"Conectar\".",
              "El teléfono muestra \"Emparejando con\" y el nombre de tu PC, con un código de verificación grande con el formato XXXX-XXXX-XXXX-XXXX.",
              "En la PC aparece una ventana \"Solicitud de vinculación\" por encima de todo, incluso si Avyn Agent está minimizado en la bandeja. Muestra el nombre del teléfono y su propio código de verificación.",
              "Compará los dos códigos. Tocá \"Aprobar\" solamente si son idénticos. Si difieren, tocá \"Rechazar\": significa que algo más en la red puede estar interponiéndose entre el teléfono y la PC.",
              "La app se conecta sola y abre la pantalla de control, con las pestañas Control, Ventanas, Archivos y Acciones.",
            ],
          },
          {
            type: "note",
            text: "El código no se escribe en ningún lado: solo se compara. Cada equipo lo calcula a partir del certificado de la PC y nunca viaja de uno al otro.",
          },
        ],
      },
      {
        heading: "Si la PC no aparece",
        blocks: [
          {
            type: "p",
            text: "Cuando no encuentra nada, la app muestra \"No se encontró ninguna PC\" y sigue buscando cada pocos segundos. Esto es lo que conviene revisar, de lo más frecuente a lo menos:",
          },
          {
            type: "list",
            items: [
              "Avyn Agent no está abierto. Buscá su ícono junto al reloj en la PC.",
              "Redes distintas. El teléfono tiene que estar en el mismo Wi-Fi que la PC, no con datos móviles ni en una red de invitados. Algunos routers también aíslan los dispositivos Wi-Fi de los conectados por cable.",
              "Red Pública en Windows. Avyn Agent solo recibe conexiones en redes privadas. Si tu red está como Pública, cambiala a Privada en la configuración de Windows, en Red e Internet: es una causa frecuente de \"No se encontró ninguna PC\", y Windows no avisa de nada.",
              "Firewall de Windows. Con la versión de Microsoft Store las reglas se crean solas para redes privadas. Con la descarga directa, Windows muestra su aviso la primera vez que abrís Avyn Agent: marcá redes privadas y permití el acceso. Si lo cerraste o lo rechazaste, el teléfono no va a poder conectarse hasta que lo permitas.",
              "Una VPN activa en el teléfono o en la PC. Desactivala mientras vinculás.",
            ],
          },
          {
            type: "p",
            text: "Después tocá \"Escanear de nuevo\" en la app. La vinculación solo funciona por el descubrimiento automático en la red local: no hay código QR ni forma de escribir una dirección a mano.",
          },
        ],
      },
      {
        heading: "Otros mensajes que podés ver",
        blocks: [
          {
            type: "list",
            items: [
              "\"Pairing was declined\": la solicitud se rechazó en la PC. Tocá \"Probar de nuevo\" y esta vez aprobala.",
              "\"Se emparejó, pero falló la conexión de control\": la vinculación funcionó pero la conexión no se abrió. Probá de nuevo.",
              "\"Actualizá la app\" o \"Actualizá Avyn Agent\": las versiones no son compatibles. En la PC, abrí Avyn Agent, después Acerca de y Buscar actualizaciones. La vinculación se conserva.",
              "\"Reconectando con tu PC\": se cortó la conexión. La app reintenta sola y se reconecta apenas la PC vuelve.",
            ],
          },
        ],
      },
      {
        heading: "Volver a vincular, cambiar de PC y revocar",
        blocks: [
          {
            type: "list",
            items: [
              "Reconexión: una vez vinculado, el teléfono se reconecta solo cada vez que abrís la app. Si la PC cambia de IP, la app la vuelve a encontrar sola.",
              "Más de una PC: usá \"Cambiar de PC\" en la app para pasar de una a otra, o \"Agregar PC\" para vincular otra. Vincular varias PC es una función Premium.",
              "Más de un teléfono: podés vincular todos los teléfonos que quieras con la misma PC, aprobando cada uno por separado.",
              "Revocar un teléfono: en Avyn Agent, abrí Dispositivos, tocá el menú de ese teléfono y elegí Revocar. El teléfono pierde el acceso y la app olvida la PC.",
              "Olvidar una PC en el teléfono: en la app, tocá \"Cambiar de PC\" y después el ícono de papelera de la PC. Esto solo la quita del teléfono, así que quitá también el teléfono en Avyn Agent, en Dispositivos, si querés que la PC deje de reconocerlo.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Tengo que escribir un código?",
        a: "No. Solo comparás el código de verificación que aparece en el teléfono con el de la Solicitud de vinculación en la PC, y aprobás si coinciden.",
      },
      {
        q: "¿Puedo vincular con un código QR o con la IP de la PC?",
        a: "No. La app encuentra la PC con el descubrimiento automático en la red local.",
      },
      {
        q: "¿Por qué el código se ve distinto en cada equipo?",
        a: "Tendría que ser idéntico. Si los dos códigos difieren, rechazá la solicitud: algo en la red puede estar interceptando la conexión.",
      },
      {
        q: "¿Necesito una cuenta o Internet para vincular?",
        a: "No. La vinculación ocurre directamente entre el teléfono y la PC dentro de tu red local.",
      },
    ],
    related: [
      { path: "/guias/controlar-pc-windows-desde-android/", label: "Controlar tu PC desde el celular" },
      { path: "/download/", label: "Descargar Avyn" },
      { path: "/security/", label: "Cómo funciona la seguridad" },
    ],
  },
  {
    id: "karaoke",
    slug: guideSlugs["karaoke"].es,
    title: "Cómo cantar karaoke con canciones UltraStar en Windows",
    description:
      "Guía para armar una noche de karaoke en tu PC con Windows: Kantaria, canciones en formato UltraStar, micrófonos, puntuación y modo invitados desde el celular.",
    intro:
      "Con Kantaria podés convertir tu PC con Windows en un karaoke con puntuación en tiempo real, varios micrófonos y canciones en formato UltraStar. Esta guía explica qué necesitás, de dónde salen las canciones y cómo sumar a tus invitados desde el celular.",
    updated: "2026-10-22",
    image: "kantaria",
    sections: [
      {
        heading: "Qué es el formato UltraStar",
        blocks: [
          {
            type: "p",
            text: "UltraStar es un formato abierto de canciones de karaoke. Cada canción es un archivo de texto (.txt) con la letra, los tiempos y las notas, más un archivo de audio y, opcionalmente, un video. El programa usa esas notas para comparar lo que cantás con la melodía y calcular el puntaje.",
          },
          {
            type: "p",
            text: "Kantaria lee canciones en ese formato desde las carpetas que elijas y no modifica tus archivos.",
          },
        ],
      },
      {
        heading: "Qué necesitás",
        blocks: [
          {
            type: "list",
            items: [
              "Una PC con Windows 10 u 11 de 64 bits.",
              "Kantaria, que es gratis y está en Microsoft Store.",
              "Uno o más micrófonos. Podés explorar la biblioteca sin ellos, pero para cantar hace falta al menos uno.",
              "Tus propias canciones en formato UltraStar.",
            ],
          },
          {
            type: "note",
            text: "Kantaria no incluye canciones. Usá solo música que tengas derecho a usar.",
          },
        ],
      },
      {
        heading: "De dónde salen las canciones",
        blocks: [
          {
            type: "p",
            text: "Como Kantaria no trae canciones, las aportás vos. Algunas opciones:",
          },
          {
            type: "list",
            items: [
              "Crearlas a partir de tu música y su letra con UltraSongs, una herramienta gratuita y de código abierto que separa las voces, detecta las notas y te deja ajustarlas en un editor visual. Todo se procesa en tu computadora.",
              "Usar canciones que ya tengas en formato UltraStar.",
              "Usar canciones que sus autores hayan publicado con una licencia que permita compartirlas.",
            ],
          },
        ],
      },
      {
        heading: "Paso a paso",
        blocks: [
          {
            type: "steps",
            items: [
              "Instalá Kantaria desde Microsoft Store.",
              "Indicá las carpetas donde tenés tus canciones UltraStar. Kantaria arma la biblioteca sin tocar tus archivos.",
              "Conectá tus micrófonos. Kantaria admite hasta cuatro a la vez, cada uno con su jugador, su carril y su nivel de entrada en pantalla.",
              "Elegí los cantantes y una canción. Podés sumar canciones a la cola.",
              "Cantá. La puntuación se calcula en tiempo real, con tres niveles de dificultad y soporte para dúos.",
              "Al terminar, mirá los resultados. Kantaria guarda jugadores, partidas, historial y rankings en tu PC.",
            ],
          },
        ],
      },
      {
        heading: "Que tus invitados elijan canciones desde el celular",
        blocks: [
          {
            type: "p",
            text: "Kantaria tiene un modo invitados, desactivado por defecto. Al activarlo, el menú principal y la lista de canciones muestran un código QR. Tus invitados lo escanean con el celular, buscan canciones, eligen quién canta y las agregan a la cola, sin instalar nada.",
          },
          {
            type: "p",
            text: "Funciona solo en tu red local, sin Internet, con una clave compartida de acceso. Los invitados pueden buscar canciones y armar la cola, y nada más.",
          },
        ],
      },
      {
        heading: "Manejá la fiesta desde Avyn",
        blocks: [
          {
            type: "p",
            text: "Kantaria también puede controlarse desde Avyn, una integración opcional que viene desactivada. Cuando Kantaria está abierto con el control remoto activado, la app de Avyn muestra una pestaña Kantaria con lo que está sonando, las canciones, la cola y la gente, para que quien tenga el celular maneje la fiesta sin tocar la PC.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Kantaria incluye canciones?",
        a: "No. Tenés que aportar tus propias canciones en formato UltraStar.",
      },
      {
        q: "¿Es gratis?",
        a: "Sí, Kantaria es gratis.",
      },
      {
        q: "¿Cuántos micrófonos puedo usar?",
        a: "Hasta cuatro al mismo tiempo, cada uno con su propio jugador.",
      },
      {
        q: "¿Necesito Internet?",
        a: "No. Kantaria funciona en tu PC y en tu red local, sin cuentas ni servicios en la nube.",
      },
    ],
    related: [
      { path: "/kantaria/", label: "Conocer Kantaria" },
      { path: "/guias/controlar-pc-windows-desde-android/", label: "Controlar tu PC desde el celular" },
    ],
  },
  {
    id: "tv",
    slug: guideSlugs["tv"].es,
    title: "Cómo ver las películas de tu PC en la TV desde el celular",
    description:
      "Guía para reproducir en la TV un video de tu PC con Windows y manejarlo desde el teléfono Android: pantalla completa, audio, subtítulos y volumen con Avyn y Auren.",
    intro:
      "Si tu PC con Windows está conectada a la TV, Avyn puede llevar la ventana del reproductor a esa pantalla y dejarte manejarla desde el teléfono: pausar, buscar, subir el volumen y, con Auren, elegir audio y subtítulos. Esta guía muestra cómo dejarlo listo.",
    updated: "2026-10-22",
    image: "auren",
    sections: [
      {
        heading: "Qué necesitás",
        blocks: [
          {
            type: "list",
            items: [
              "Una PC con Windows conectada a la TV como pantalla adicional (por ejemplo, por HDMI).",
              "Avyn Agent en la PC y la app Avyn Remote en un teléfono Android, ambos en la misma red local.",
              "Un reproductor de video. Auren Player, gratuito, tiene la integración más completa, pero otros reproductores también pueden controlarse.",
            ],
          },
        ],
      },
      {
        heading: "Marcá cuál es la TV",
        blocks: [
          {
            type: "p",
            text: "En Avyn Agent, la sección Pantallas lista los monitores conectados. Ahí podés ponerles un nombre legible y marcar cuál cumple el rol de TV. Las acciones de reproducción usan esa pantalla.",
          },
        ],
      },
      {
        heading: "Paso a paso",
        blocks: [
          {
            type: "steps",
            items: [
              "Abrí el video en la PC con tu reproductor, o elegí el archivo desde la pestaña Archivos de la app: Avyn lo abre con la aplicación predeterminada.",
              "Usá la acción Reproducir en TV desde el teléfono.",
              "Avyn lleva la ventana del reproductor a la pantalla de la TV, la maximiza y le da el foco. Si el reproductor es Auren, activa la pantalla completa real.",
              "Controlá la reproducción desde el teléfono: pausar, saltar, buscar una posición y manejar el volumen.",
            ],
          },
          {
            type: "p",
            text: "Si la TV se puede encender por el método disponible, Avyn intenta encenderla primero. También podés elegir apagar las demás pantallas que puedan apagarse. Con una TV Samsung vinculada, el Agent puede apagarla y, en los modelos que lo permiten, encenderla por la red.",
          },
          {
            type: "note",
            text: "Encender o apagar la TV desde la PC depende del modelo y de su configuración. Si la TV no se puede encender sola, Avyn te avisa que hay que encenderla a mano.",
          },
        ],
      },
      {
        heading: "Audio, subtítulos y sincronización con Auren",
        blocks: [
          {
            type: "p",
            text: "Con Auren Player, Avyn muestra controles propios sin necesidad de una pantalla aparte: pantalla completa, pistas de audio, pistas de subtítulos (y la opción de desactivarlos) y el ajuste del desfase de audio y de subtítulos.",
          },
        ],
      },
      {
        heading: "Videos en el navegador",
        blocks: [
          {
            type: "p",
            text: "Con la extensión de Avyn para Chrome o Edge, el teléfono también puede controlar videos del navegador, como los de YouTube, Netflix, HBO Max, Disney+, Prime Video o Apple TV: reproducción, pantalla completa, velocidad, subtítulos, pista de audio, retroceder o adelantar 10 segundos y los botones que la página muestre, como saltar la intro o pasar al siguiente episodio. Las acciones disponibles dependen de cada sitio y de cada video.",
          },
        ],
      },
      {
        heading: "Si algo no sale como esperabas",
        blocks: [
          {
            type: "p",
            text: "Avyn informa de forma concreta cuando no puede completar la acción:",
          },
          {
            type: "list",
            items: [
              "No hay una pantalla marcada como TV.",
              "No hay nada reproduciéndose.",
              "No se encontró la ventana del reproductor.",
              "La TV necesita que la enciendas a mano.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Necesito una Smart TV?",
        a: "No. La TV se usa como una pantalla más de tu PC. Si es una Samsung compatible, Avyn puede además encenderla y apagarla por la red.",
      },
      {
        q: "¿Funciona con cualquier reproductor?",
        a: "Avyn controla las sesiones multimedia de Windows, así que funciona con muchos reproductores. La pantalla completa real y los controles de audio y subtítulos están disponibles con Auren; con otros, Avyn maximiza la ventana en la TV.",
      },
      {
        q: "¿Necesito Internet?",
        a: "Avyn no lo necesita. El teléfono y la PC se comunican en tu red local.",
      },
    ],
    related: [
      { path: "/auren/", label: "Conocer Auren Player" },
      { path: "/guias/controlar-pc-windows-desde-android/", label: "Controlar tu PC desde el celular" },
    ],
  },
];

const en: Guide[] = [
  {
    id: "control-pc",
    slug: guideSlugs["control-pc"].en,
    title: "How to control your Windows PC from your Android phone",
    description:
      "A guide to controlling your Windows PC from an Android phone over your local network: mouse, keyboard, windows, volume, files and power, with no cloud or accounts.",
    intro:
      "With Avyn you can use your Android phone as a remote control for your Windows PC, without leaving the couch and without relying on the Internet. This guide covers what you need, how the two devices pair, and what you can do from the phone.",
    updated: "2026-10-22",
    image: "home",
    sections: [
      {
        heading: "What you need",
        blocks: [
          {
            type: "list",
            items: [
              "A 64-bit Windows PC with Avyn Agent installed.",
              "An Android phone with the Avyn Remote app.",
              "Both devices on the same local network, over Wi-Fi or cable.",
            ],
          },
          {
            type: "p",
            text: "You do not need an account or a cloud service: the phone and the PC talk directly inside your network.",
          },
          {
            type: "note",
            text: "Avyn Agent is now on Microsoft Store. Avyn Remote is on Google Play in closed beta: it only installs if you are a tester. To join, email us at avyn.remote@gmail.com.",
          },
        ],
      },
      {
        heading: "Step by step: pair the phone with the PC",
        blocks: [
          {
            type: "steps",
            items: [
              "Install Avyn Agent on the PC. It stays in the system tray and starts with Windows.",
              "Open the Avyn app on the phone, with both devices on the same network. The app finds the PC on your local network.",
              "Choose the PC and request pairing. A request appears on the PC screen for you to approve or reject, with a verification code you can compare with the one on the phone.",
              "Approve the request on the PC. From then on the phone reconnects by itself, and you can revoke it at any time from the Devices section of Avyn Agent.",
            ],
          },
        ],
      },
      {
        heading: "What you can do from the phone",
        blocks: [
          {
            type: "list",
            items: [
              "Mouse and keyboard: move the pointer, click, scroll, type text and use keys and shortcuts such as Enter, Esc, the arrows or Ctrl.",
              "Media and volume: pause, skip, seek to a position, and raise, lower or mute the system volume.",
              "Windows: see open windows, bring one to the front, minimize it, maximize it, close it or move it to another display.",
              "Programs: open the programs in the Start menu with one tap.",
              "Files: browse the folders you shared, search for files, open them on the PC, and send or download files between the phone and the PC.",
              "Power and routines: lock the session, sleep, restart or shut down the PC, and run saved multi-step routines.",
            ],
          },
          {
            type: "p",
            text: "In the app these features are organized in tabs: Control, Windows, Files and Actions.",
          },
        ],
      },
      {
        heading: "Turning on and unlocking the PC",
        blocks: [
          {
            type: "p",
            text: "If your PC supports it, the phone can turn it on with Wake-on-LAN. Whether it works depends on the computer and its network setup.",
          },
          {
            type: "p",
            text: "Unlocking from the phone is optional and off by default. If you turn it on from Settings in Avyn Agent, Windows asks for administrator permission to install a small separate service. Your Windows PIN or password is never stored on the PC.",
          },
        ],
      },
      {
        heading: "What travels over your network, and how to check",
        blocks: [
          {
            type: "p",
            text: "Communication between the phone and the PC is encrypted. The PC only accepts phones you approved on its screen, and each one can be revoked at any time. Avyn uses no accounts and no server of its own, and includes no analytics or advertising.",
          },
          {
            type: "p",
            text: "You do not have to take our word for it: the Verify Avyn page explains how to inspect the Agent's network connections with Windows tools.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Do I need Internet to use Avyn?",
        a: "Not for everyday use: the phone and the PC talk inside your local network. The direct download of the Agent checks GitHub for updates; the Microsoft Store version does not connect to the Internet by itself.",
      },
      {
        q: "Does it work away from home?",
        a: "Avyn is designed for the local network: the phone and the PC need to be on the same network.",
      },
      {
        q: "Can I control more than one PC?",
        a: "Yes. The phone can store several paired PCs and you choose which one to connect to.",
      },
      {
        q: "Can I pair more than one phone with the same PC?",
        a: "Yes. Each phone is approved separately on the PC and revoked independently.",
      },
    ],
    related: [
      { path: "/guides/pair-android-phone-with-avyn-agent/", label: "Pair your phone with Avyn Agent" },
      { path: "/download/", label: "Download Avyn" },
      { path: "/security/", label: "How security works" },
      { path: "/verify/", label: "Verify Avyn" },
    ],
  },
  {
    id: "pair-phone",
    slug: guideSlugs["pair-phone"].en,
    title: "How to pair your Android phone with Avyn Agent",
    description:
      "Step-by-step guide to connect the Avyn Remote Android app to Avyn Agent on Windows: find the PC, compare the verification code, approve and fix the usual connection problems.",
    intro:
      "Pairing is done once per phone. The app finds your PC on the local network, both devices show the same verification code and you approve the request on the PC. This guide walks through each step and what to check if the PC does not show up.",
    updated: "2026-10-29",
    image: "home",
    sections: [
      {
        heading: "Before you start",
        blocks: [
          {
            type: "list",
            items: [
              "A 64-bit Windows PC with Avyn Agent installed. It is free and available on Microsoft Store or as a direct download from the download page.",
              "An Android phone with the Avyn Remote app.",
              "Both devices on the same local network. A guest network or mobile data will not work.",
            ],
          },
          {
            type: "p",
            text: "Open Avyn Agent on the PC and leave it running. Its icon sits next to the clock; if it is not there, start it from the Start menu.",
          },
        ],
      },
      {
        heading: "Step by step",
        blocks: [
          {
            type: "steps",
            items: [
              "On the phone, open Avyn Remote. On the \"Set up your PC\" screen, tap \"Find my PC\". If you have not installed the Agent yet, \"Send me the download link\" shares the link by email or chat so you can open it on the PC.",
              "Wait a couple of seconds on \"Looking for your PC\". The app scans the local network.",
              "On \"Choose a PC\", pick your PC from the list (it shows its name and address) and tap \"Pair\". If that PC was already paired, the button says \"Connect\" instead.",
              "The phone shows \"Pairing with\" and your PC's name, with a large verification code in the form XXXX-XXXX-XXXX-XXXX.",
              "On the PC, a \"Pairing request\" window appears in front of everything else, even if Avyn Agent is minimized to the tray. It shows the name of the phone and its own verification code.",
              "Compare both codes. Tap \"Approve\" only if they are identical. If they differ, tap \"Reject\": that means something else on the network may be sitting between the phone and the PC.",
              "The app connects on its own and opens the control screen, with the Control, Windows, Files and Actions tabs.",
            ],
          },
          {
            type: "note",
            text: "You do not type the code anywhere: you only compare it. Each device works it out from the PC's certificate, and it is never sent from one to the other.",
          },
        ],
      },
      {
        heading: "If the PC does not show up",
        blocks: [
          {
            type: "p",
            text: "When nothing is found, the app shows \"No PC found\" and keeps searching every few seconds. These are the things to check, in order of how often they are the cause:",
          },
          {
            type: "list",
            items: [
              "Avyn Agent is not running. Check for its icon next to the clock on the PC.",
              "Different networks. The phone must be on the same Wi-Fi as the PC, not on mobile data and not on a guest network. Some routers also isolate Wi-Fi devices from the wired ones.",
              "A Public network in Windows. Avyn Agent only accepts connections on private networks. If your network is set as Public, change it to Private in Windows settings under Network & internet: it is a common cause of \"No PC found\", and Windows gives no warning.",
              "Windows firewall. With the Microsoft Store version the rules are created automatically for private networks. With the direct download, Windows shows its prompt the first time you open Avyn Agent: tick private networks and allow access. If you closed or declined it, the phone cannot connect until you allow it.",
              "A VPN active on the phone or the PC. Turn it off for the pairing.",
            ],
          },
          {
            type: "p",
            text: "Then tap \"Scan again\" in the app. Pairing only works through automatic discovery on the local network: there is no QR code and no way to type an address by hand.",
          },
        ],
      },
      {
        heading: "Other messages you may see",
        blocks: [
          {
            type: "list",
            items: [
              "\"Pairing was declined\": the request was rejected on the PC. Tap \"Try again\" and approve it this time.",
              "\"Paired, but the control connection failed\": the pairing worked but the connection did not open. Try again.",
              "\"Update the app\" or \"Update Avyn Agent\": the versions are not compatible. On the PC, open Avyn Agent, then About, then Check for updates. Your pairing is kept.",
              "\"Reconnecting to your PC\": the connection dropped. The app retries on its own and reconnects as soon as the PC is back.",
            ],
          },
        ],
      },
      {
        heading: "Pairing again, switching and revoking",
        blocks: [
          {
            type: "list",
            items: [
              "Reconnecting: once paired, the phone reconnects on its own each time you open the app. If the PC changes its IP address, the app finds it again on its own.",
              "More than one PC: use \"Switch PC\" in the app to change between PCs, or \"Add PC\" to pair another one. Pairing several PCs is a Premium feature.",
              "More than one phone: you can pair as many phones as you like with the same PC, approving each one separately.",
              "Revoke a phone: in Avyn Agent, open Devices, tap the menu on that phone and choose Revoke. The phone loses access and the app forgets the PC.",
              "Forget a PC on the phone: in the app, tap \"Switch PC\" and then the trash icon on the PC. This only removes it from the phone, so also remove the phone in Avyn Agent under Devices if you want the PC to stop recognizing it.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Do I have to type a code?",
        a: "No. You only compare the verification code that appears on the phone with the one in the Pairing request on the PC, and approve if they match.",
      },
      {
        q: "Can I pair using a QR code or the PC's IP address?",
        a: "No. The app finds the PC through automatic discovery on the local network.",
      },
      {
        q: "Why does the code look different on each device?",
        a: "It should be identical. If the two codes differ, reject the request: something on the network may be intercepting the connection.",
      },
      {
        q: "Do I need an account or Internet to pair?",
        a: "No. Pairing happens directly between the phone and the PC inside your local network.",
      },
    ],
    related: [
      { path: "/guides/control-windows-pc-from-android/", label: "Control your PC from your phone" },
      { path: "/download/", label: "Download Avyn" },
      { path: "/security/", label: "How security works" },
    ],
  },
  {
    id: "karaoke",
    slug: guideSlugs["karaoke"].en,
    title: "How to sing karaoke with UltraStar songs on Windows",
    description:
      "A guide to setting up a karaoke night on your Windows PC: Kantaria, UltraStar songs, microphones, scoring and guest mode from phones.",
    intro:
      "With Kantaria you can turn your Windows PC into a karaoke machine with live scoring, several microphones and songs in UltraStar format. This guide covers what you need, where songs come from and how to let your guests join from their phones.",
    updated: "2026-10-22",
    image: "kantaria",
    sections: [
      {
        heading: "What the UltraStar format is",
        blocks: [
          {
            type: "p",
            text: "UltraStar is an open karaoke song format. Each song is a text file (.txt) with the lyrics, timing and notes, plus an audio file and, optionally, a video. The program uses those notes to compare what you sing with the melody and work out the score.",
          },
          {
            type: "p",
            text: "Kantaria reads songs in that format from the folders you choose and never modifies your files.",
          },
        ],
      },
      {
        heading: "What you need",
        blocks: [
          {
            type: "list",
            items: [
              "A 64-bit Windows 10 or 11 PC.",
              "Kantaria, which is free and available on Microsoft Store.",
              "One or more microphones. You can browse the library without them, but singing needs at least one.",
              "Your own songs in UltraStar format.",
            ],
          },
          {
            type: "note",
            text: "Kantaria does not include songs. Only use music you have the right to use.",
          },
        ],
      },
      {
        heading: "Where songs come from",
        blocks: [
          {
            type: "p",
            text: "Since Kantaria ships without songs, you provide them. Some options:",
          },
          {
            type: "list",
            items: [
              "Create them from your own music and its lyrics with UltraSongs, a free, open source tool that separates the vocals, detects the notes and lets you fine-tune them in a visual editor. Everything is processed on your computer.",
              "Use songs you already have in UltraStar format.",
              "Use songs whose authors published them under a license that allows sharing.",
            ],
          },
        ],
      },
      {
        heading: "Step by step",
        blocks: [
          {
            type: "steps",
            items: [
              "Install Kantaria from Microsoft Store.",
              "Point it to the folders where your UltraStar songs live. Kantaria builds the library without touching your files.",
              "Connect your microphones. Kantaria supports up to four at once, each with its own player, lane and on-screen input level.",
              "Choose the singers and a song. You can add songs to the queue.",
              "Sing. Scoring is calculated in real time, with three difficulty levels and support for duets.",
              "When you finish, check the results. Kantaria stores players, games, history and rankings on your PC.",
            ],
          },
        ],
      },
      {
        heading: "Let guests pick songs from their phones",
        blocks: [
          {
            type: "p",
            text: "Kantaria has a guest mode, off by default. When it is on, the main menu and the song list show a QR code. Your guests scan it with their phones, search for songs, choose who sings and add them to the queue, with nothing to install.",
          },
          {
            type: "p",
            text: "It works only on your local network, with no Internet, using a shared access key. Guests can search songs and build the queue, and nothing else.",
          },
        ],
      },
      {
        heading: "Run the party from Avyn",
        blocks: [
          {
            type: "p",
            text: "Kantaria can also be controlled from Avyn, an optional integration that is off by default. When Kantaria is open with remote control on, the Avyn app shows a Kantaria tab with what is playing, the songs, the queue and the people, so whoever holds the phone can run the party without touching the PC.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Does Kantaria include songs?",
        a: "No. You need to provide your own songs in UltraStar format.",
      },
      {
        q: "Is it free?",
        a: "Yes, Kantaria is free.",
      },
      {
        q: "How many microphones can I use?",
        a: "Up to four at the same time, each with its own player.",
      },
      {
        q: "Do I need Internet?",
        a: "No. Kantaria runs on your PC and your local network, with no accounts or cloud services.",
      },
    ],
    related: [
      { path: "/kantaria/", label: "Discover Kantaria" },
      { path: "/guides/control-windows-pc-from-android/", label: "Control your PC from your phone" },
    ],
  },
  {
    id: "tv",
    slug: guideSlugs["tv"].en,
    title: "How to watch your PC's movies on your TV from your phone",
    description:
      "A guide to playing a video from your Windows PC on your TV and controlling it from an Android phone: full screen, audio, subtitles and volume with Avyn and Auren.",
    intro:
      "If your Windows PC is connected to your TV, Avyn can move the player window to that screen and let you control it from your phone: pause, seek, change the volume and, with Auren, pick audio and subtitles. This guide shows how to set it up.",
    updated: "2026-10-22",
    image: "auren",
    sections: [
      {
        heading: "What you need",
        blocks: [
          {
            type: "list",
            items: [
              "A Windows PC connected to the TV as an extra display (for example over HDMI).",
              "Avyn Agent on the PC and the Avyn Remote app on an Android phone, both on the same local network.",
              "A video player. Auren Player, which is free, has the most complete integration, but other players can be controlled too.",
            ],
          },
        ],
      },
      {
        heading: "Mark which one is the TV",
        blocks: [
          {
            type: "p",
            text: "In Avyn Agent, the Displays section lists your connected monitors. There you can give them readable names and mark which one has the TV role. Playback actions use that display.",
          },
        ],
      },
      {
        heading: "Step by step",
        blocks: [
          {
            type: "steps",
            items: [
              "Open the video on the PC with your player, or pick the file from the app's Files tab: Avyn opens it with the default application.",
              "Use the Play on TV action from the phone.",
              "Avyn moves the player window to the TV display, maximizes it and gives it focus. If the player is Auren, it turns on true full screen.",
              "Control playback from the phone: pause, skip, seek to a position and adjust the volume.",
            ],
          },
          {
            type: "p",
            text: "If the TV can be turned on by the available method, Avyn tries to turn it on first. You can also choose to turn off the other displays that can be turned off. With a paired Samsung TV, the Agent can turn it off and, on models that allow it, turn it on over the network.",
          },
          {
            type: "note",
            text: "Turning the TV on or off from the PC depends on the model and its settings. If the TV cannot turn itself on, Avyn tells you it has to be turned on by hand.",
          },
        ],
      },
      {
        heading: "Audio, subtitles and sync with Auren",
        blocks: [
          {
            type: "p",
            text: "With Auren Player, Avyn shows its own controls without a separate screen: full screen, audio tracks, subtitle tracks (and the option to turn them off) and adjusting audio and subtitle delay.",
          },
        ],
      },
      {
        heading: "Videos in the browser",
        blocks: [
          {
            type: "p",
            text: "With the Avyn extension for Chrome or Edge, the phone can also control browser videos, such as those on YouTube, Netflix, HBO Max, Disney+, Prime Video or Apple TV: playback, full screen, speed, subtitles, audio track, jumping back or forward 10 seconds and the buttons the page shows, like skipping the intro or going to the next episode. Available actions depend on each site and each video.",
          },
        ],
      },
      {
        heading: "If something does not go as expected",
        blocks: [
          {
            type: "p",
            text: "Avyn reports specifically when it cannot complete the action:",
          },
          {
            type: "list",
            items: [
              "No display is marked as the TV.",
              "Nothing is playing.",
              "The player window was not found.",
              "The TV needs to be turned on by hand.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a Smart TV?",
        a: "No. The TV is used as one more display of your PC. If it is a compatible Samsung, Avyn can also turn it on and off over the network.",
      },
      {
        q: "Does it work with any player?",
        a: "Avyn controls Windows media sessions, so it works with many players. True full screen and the audio and subtitle controls are available with Auren; with others, Avyn maximizes the window on the TV.",
      },
      {
        q: "Do I need Internet?",
        a: "Avyn does not need it. The phone and the PC talk on your local network.",
      },
    ],
    related: [
      { path: "/auren/", label: "Discover Auren Player" },
      { path: "/guides/control-windows-pc-from-android/", label: "Control your PC from your phone" },
    ],
  },
];

export const guides: Record<Locale, Guide[]> = { es, en };

export function findGuide(locale: Locale, slug: string) {
  return guides[locale].find((guide) => guide.slug === slug);
}

/** The same guide in another language, for hreflang. */
export function guideTranslation(id: GuideId, locale: Locale) {
  return guides[locale].find((guide) => guide.id === id);
}
