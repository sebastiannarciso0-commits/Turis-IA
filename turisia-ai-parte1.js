/* ========================================================================
   TURISIA - INTELIGENCIA ARTIFICIAL LOCAL
   PARTE 1
   ------------------------------------------------------------------------
   Sistema independiente para TURISIA.html
   No modifica la IA del Index.
   No necesita API.
   No necesita OpenAI.
   No necesita Vercel.
   Funciona de manera local y también puede funcionar en GitHub Pages.

   CONTENIDOS DE ESTA PARTE:
   - Sistema de diagnóstico
   - Normalización de preguntas
   - Detector de elementos HTML
   - Motor de coincidencias
   - Saludos
   - Información general
   - San Bartolomé
   - Ubicación
   - Turismo
   - Lugares
   - Cerrito de la Pascua
   - Chucuncuya
   - Rutas
   - Naturaleza
   - Actividades
   - Recomendaciones
   - Preguntas casuales
   - Preguntas con errores de escritura

   ======================================================================== */

(function () {

    "use strict";

    /* =====================================================================
       001. CONFIGURACIÓN GENERAL
       ===================================================================== */

    const TURISIA_CONFIG = {
        nombre: "TurisIA",
        distrito: "San Bartolomé",
        provincia: "Huarochirí",
        departamento: "Lima",
        pais: "Perú",
        version: "1.0.0 - Parte 1",
        modo: "local",
        diagnostico: true,
        mostrarHora: true,
        escribirIndicador: true
    };


    /* =====================================================================
       002. DIAGNÓSTICO DEL SISTEMA
       ===================================================================== */

    const TURISIA_DIAGNOSTICO = {

        activo: true,

        iniciar: function () {
            console.log("========================================");
            console.log("       TURISIA - SISTEMA DE IA");
            console.log("========================================");
            console.log("✅ Sistema iniciado");
            console.log("📍 Lugar: San Bartolomé");
            console.log("📍 Provincia: Huarochirí");
            console.log("📍 Departamento: Lima");
            console.log("🇵🇪 País: Perú");
            console.log("🧠 Modo: respuestas locales");
            console.log("🔎 Diagnóstico: activado");
            console.log("========================================");
        },

        informacion: function (mensaje) {
            if (!this.activo) {
                return;
            }

            console.info("ℹ️ TURISIA:", mensaje);
        },

        correcto: function (mensaje) {
            if (!this.activo) {
                return;
            }

            console.log("✅ TURISIA:", mensaje);
        },

        advertencia: function (mensaje) {
            if (!this.activo) {
                return;
            }

            console.warn("⚠️ TURISIA:", mensaje);
        },

        error: function (mensaje, detalle) {
            if (!this.activo) {
                return;
            }

            console.error("❌ TURISIA:", mensaje);

            if (detalle) {
                console.error("Detalle:", detalle);
            }
        }
    };


    TURISIA_DIAGNOSTICO.iniciar();


    /* =====================================================================
       003. CAPTURA GLOBAL DE ERRORES
       ===================================================================== */

    window.addEventListener("error", function (evento) {

        TURISIA_DIAGNOSTICO.error(
            "Se detectó un error de JavaScript.",
            evento.message
        );

        console.error("Archivo:", evento.filename);
        console.error("Línea:", evento.lineno);
        console.error("Columna:", evento.colno);
    });


    window.addEventListener("unhandledrejection", function (evento) {

        TURISIA_DIAGNOSTICO.error(
            "Se detectó un error en una promesa.",
            evento.reason
        );

    });


    /* =====================================================================
       004. UTILIDADES
       ===================================================================== */

    function normalizarTexto(texto) {

        if (texto === null || texto === undefined) {
            return "";
        }

        return String(texto)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!.,;:()[\]{}"'`´]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    function contiene(texto, palabras) {

        const textoNormalizado = normalizarTexto(texto);

        return palabras.some(function (palabra) {
            return textoNormalizado.includes(
                normalizarTexto(palabra)
            );
        });
    }


    function contieneTodas(texto, palabras) {

        const textoNormalizado = normalizarTexto(texto);

        return palabras.every(function (palabra) {
            return textoNormalizado.includes(
                normalizarTexto(palabra)
            );
        });
    }


    function aleatorio(lista) {

        if (!Array.isArray(lista) || lista.length === 0) {
            return "";
        }

        const posicion = Math.floor(
            Math.random() * lista.length
        );

        return lista[posicion];
    }


    function escaparHTML(texto) {

        const div = document.createElement("div");

        div.textContent = texto;

        return div.innerHTML;
    }


    function horaActual() {

        const fecha = new Date();

        return fecha.toLocaleTimeString(
            "es-PE",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );
    }


    /* =====================================================================
       005. DETECTOR DE ELEMENTOS
       ===================================================================== */

    function buscarElemento(selectores) {

        if (!Array.isArray(selectores)) {
            selectores = [selectores];
        }

        for (let i = 0; i < selectores.length; i++) {

            const elemento = document.querySelector(
                selectores[i]
            );

            if (elemento) {
                return elemento;
            }
        }

        return null;
    }


    function verificarElemento(selectores, nombre) {

        const elemento = buscarElemento(selectores);

        if (elemento) {

            TURISIA_DIAGNOSTICO.correcto(
                "Elemento encontrado: " + nombre
            );

            return elemento;
        }

        TURISIA_DIAGNOSTICO.advertencia(
            "No se encontró: " + nombre
        );

        return null;
    }


    /* =====================================================================
       006. SELECTORES COMPATIBLES
       ===================================================================== */

    const SELECTORES = {
    entrada: [
        "#aiInput",
        "#mensajeIA",
        "#mensaje",
        "#userInput",
        "#chatInput",
        "#inputMensaje",
        "#messageInput",
        "#pregunta",
        "#consulta",
        "textarea",
        "input[type='text']"
    ],

    boton: [
        "#sendButton",
        "#enviarMensaje",
        "#btnEnviar",
        "#sendMessage",
        "#botonEnviar",
        ".send-button",
        ".btn-send",
        "button[type='submit']"
    ],

    mensajes: [
        "#aiMessages",
        ".ai-messages",
        "#chatMessages",
        "#mensajes",
        "#messages",
        "#chat",
        "#chatContainer",
        ".chat-messages",
        ".messages"
    ]
};


    /* =====================================================================
       007. ESTADO DEL CHAT
       ===================================================================== */

    const ESTADO_TURISIA = {

        iniciado: false,

        mensajes: [],

        ultimoMensajeUsuario: "",

        ultimaRespuesta: "",

        contadorMensajes: 0,

        modo: "normal"
    };


    /* =====================================================================
       008. BASE DE RESPUESTAS
       ===================================================================== */

    const RESPUESTAS = [];


    /* =====================================================================
       009. SALUDOS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "hola",
            "holaa",
            "holaaa",
            "hello",
            "hi",
            "buenas",
            "buenos dias",
            "buenas tardes",
            "buenas noches"
        ],

        respuesta: [
            "¡Hola! 👋 Soy TurisIA. Estoy aquí para ayudarte a conocer San Bartolomé.",
            "¡Hola! 😎 Soy TurisIA. Pregúntame sobre lugares, historia, cultura, rutas o actividades.",
            "¡Buenas! 👋 ¿Quieres conocer algo de San Bartolomé? Pregúntame nomás."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "como estas",
            "como estás",
            "que tal",
            "qué tal",
            "como te encuentras"
        ],

        respuesta: [
            "¡Todo bien! 😎 Lista para ayudarte a conocer San Bartolomé.",
            "Estoy funcionando correctamente. 🚀 ¿Qué quieres saber?",
            "Todo tranquilo por aquí 😄. Pregúntame sobre San Bartolomé."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "quien eres",
            "quien es turisia",
            "que eres",
            "qué eres",
            "eres una ia",
            "eres inteligencia artificial"
        ],

        respuesta: [
            "Soy TurisIA, una asistente digital creada para ayudar a conocer, valorar e interpretar los recursos turísticos, históricos y culturales de San Bartolomé.",
            "Soy TurisIA 🤖. Mi función es brindar información sobre San Bartolomé y ayudar a descubrir sus lugares, historia, cultura y actividades.",
            "Soy la asistente virtual de TurisIA, una propuesta tecnológica enfocada en San Bartolomé, Huarochirí."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que significa turisia",
            "que significa turis ia",
            "significado de turisia",
            "por que se llama turisia",
            "porque turisia"
        ],

        respuesta: [
            "TurisIA combina la idea de turismo con inteligencia artificial. El nombre representa una propuesta que utiliza tecnología para ayudar a conocer y valorar San Bartolomé.",
            "El nombre TurisIA une turismo e inteligencia artificial. La idea es utilizar herramientas digitales para difundir información del distrito."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que es turismo inteligente",
            "turismo inteligente",
            "turismo con inteligencia artificial"
        ],

        respuesta: [
            "El turismo inteligente utiliza tecnología y herramientas digitales para mejorar la forma en que las personas conocen, planifican y disfrutan un destino.",
            "En TurisIA, el turismo inteligente significa usar información digital y una asistente virtual para facilitar el conocimiento de San Bartolomé."
        ]
    });


    /* =====================================================================
       010. SAN BARTOLOMÉ
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "san bartolome",
            "san bartolomé",
            "bartolo",
            "bartolito",
            "distrito san bartolome",
            "donde queda san bartolome"
        ],

        respuesta: [
            "San Bartolomé es un distrito de la provincia de Huarochirí, en el departamento de Lima, Perú. Es un territorio con recursos naturales, históricos y culturales que pueden ser valorizados mediante el turismo responsable.",
            "San Bartolomé pertenece a la provincia de Huarochirí, región Lima. En el distrito encontramos paisajes, espacios naturales, manifestaciones culturales y una historia local que forma parte de su identidad."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "donde esta bartolo",
            "donde queda bartolo",
            "ubicacion de bartolo",
            "ubicacion san bartolome",
            "en que provincia esta san bartolome"
        ],

        respuesta: [
            "San Bartolomé está en la provincia de Huarochirí, departamento de Lima, Perú.",
            "Bartolo 😄 está en Huarochirí, Lima. Forma parte del territorio de la cuenca del río Rímac."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "san bartolome huarochiri",
            "bartolo huarochiri",
            "san bartolome lima"
        ],

        respuesta: [
            "Exacto. San Bartolomé pertenece a la provincia de Huarochirí, en la región Lima.",
            "Sí. Estamos hablando de San Bartolomé, Huarochirí, Lima."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "como llegar a san bartolome",
            "como llego a san bartolome",
            "como llegar a bartolo",
            "como voy a bartolo",
            "ruta para san bartolome"
        ],

        respuesta: [
            "Una de las principales formas de llegar a San Bartolomé es mediante la Carretera Central, siguiendo la ruta hacia la zona de Huarochirí. Antes de realizar una visita conviene revisar el estado de la vía y planificar el recorrido.",
            "Para visitar San Bartolomé puedes utilizar la Carretera Central como referencia principal. Si vas a realizar una caminata, también es importante preguntar a pobladores o autoridades locales por las condiciones actuales de la ruta."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que hay en san bartolome",
            "que hay en bartolo",
            "que puedo conocer en san bartolome",
            "que puedo conocer en bartolo"
        ],

        respuesta: [
            "En San Bartolomé puedes encontrar paisajes naturales, lugares con valor histórico y cultural, rutas de caminata, agricultura, tradiciones, festividades y espacios como el Cerrito de la Pascua.",
            "Hay varias cosas por conocer 😎: naturaleza, paisajes, historia local, cultura, tradiciones, rutas y lugares vinculados con la vida de la comunidad."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que puedo hacer en bartolo",
            "que puedo hacer en san bartolome",
            "bro que puedo hacer en bartolo",
            "amigo que puedo hacer en bartolo",
            "que hacer en bartolo",
            "actividades en bartolo"
        ],

        respuesta: [
            "Bro 😎, puedes conocer lugares naturales, hacer caminatas, observar paisajes, tomar fotografías, conocer tradiciones y aprender sobre la historia local.",
            "Puedes hacer caminatas, conocer el Cerrito de la Pascua, observar el paisaje, conocer aspectos culturales y disfrutar de la naturaleza.",
            "Si vas con amigos o familia, pueden recorrer lugares turísticos, tomar fotos, conocer la cultura local y aprender sobre la historia de San Bartolomé."
        ]
    });


    /* =====================================================================
       011. TURISMO
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "turismo",
            "turismo en san bartolome",
            "turismo en bartolo",
            "hacer turismo"
        ],

        respuesta: [
            "El turismo en San Bartolomé puede aprovechar sus recursos naturales, históricos y culturales. TurisIA busca facilitar el acceso a esa información y promover una visita responsable.",
            "San Bartolomé tiene posibilidades para desarrollar turismo de naturaleza, cultural, histórico, de caminata y de observación del paisaje."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "por que visitar san bartolome",
            "porque visitar san bartolome",
            "vale la pena visitar bartolo",
            "por que ir a bartolo"
        ],

        respuesta: [
            "Porque San Bartolomé tiene paisajes, historia, cultura y tradiciones que forman parte de la identidad de la comunidad.",
            "Vale la pena conocerlo porque permite acercarse a un territorio donde la naturaleza y la vida de la comunidad están relacionadas."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "turismo cultural",
            "que es turismo cultural",
            "turismo de cultura"
        ],

        respuesta: [
            "El turismo cultural busca conocer y valorar las expresiones, costumbres, tradiciones, historia, patrimonio y formas de vida de una comunidad.",
            "En San Bartolomé, el turismo cultural puede ayudar a conocer sus tradiciones, festividades, memoria local e historia."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "turismo natural",
            "turismo de naturaleza",
            "que es turismo natural"
        ],

        respuesta: [
            "El turismo de naturaleza consiste en visitar y conocer espacios naturales de manera responsable, procurando conservar el ambiente.",
            "San Bartolomé puede desarrollar actividades relacionadas con paisajes, caminatas, flora, fauna y observación de aves."
        ]
    });


    /* =====================================================================
       012. CERRITO DE LA PASCUA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "cerrito de la pascua",
            "cerrito pascua",
            "cerro de la pascua",
            "mirador cerrito de la pascua"
        ],

        respuesta: [
            "El Cerrito de la Pascua es un recurso turístico de San Bartolomé. MINCETUR lo registra como un sitio natural de tipo zona paisajística y subtipo mirador natural.",
            "El Cerrito de la Pascua destaca por sus vistas panorámicas hacia San Bartolomé y otros sectores del valle del Rímac. También es un espacio relacionado con tradiciones locales."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que es el cerrito de la pascua",
            "informacion del cerrito de la pascua",
            "historia del cerrito de la pascua"
        ],

        respuesta: [
            "El Cerrito de la Pascua es un mirador natural ubicado en San Bartolomé. Desde allí se pueden apreciar paisajes del distrito y sectores de la cuenca del río Rímac.",
            "Según la información turística registrada por MINCETUR, el lugar presenta vegetación herbácea y cactácea y ofrece una vista panorámica del territorio."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que se ve desde el cerrito",
            "que puedo ver en el cerrito",
            "vista del cerrito de la pascua"
        ],

        respuesta: [
            "Desde el Cerrito de la Pascua se pueden observar San Bartolomé, sectores como Tornamesa y Cocachacra, paisajes del valle del Rímac y zonas agrícolas.",
            "El mirador permite observar diferentes partes del paisaje de San Bartolomé y de la cuenca del río Rímac."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "donde esta el cerrito",
            "ubicacion cerrito de la pascua",
            "como llegar al cerrito"
        ],

        respuesta: [
            "El Cerrito de la Pascua se encuentra en el distrito de San Bartolomé, provincia de Huarochirí, departamento de Lima.",
            "Está dentro del territorio de San Bartolomé y funciona como un mirador natural. Para visitarlo conviene informarse localmente sobre el acceso y las condiciones de la ruta."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "mincetur cerrito",
            "cerrito registrado por mincetur",
            "mincetur san bartolome"
        ],

        respuesta: [
            "MINCETUR registra al Mirador Cerrito de la Pascua como un recurso turístico de San Bartolomé, dentro de la categoría de sitios naturales.",
            "En el registro turístico aparece como zona paisajística y mirador natural."
        ]
    });


    /* =====================================================================
       013. CHUCUNCUYA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "chucuncuya",
            "chucuncuya san bartolome",
            "chucuncuya bartolo"
        ],

        respuesta: [
            "Chucuncuya es uno de los lugares que TurisIA busca ayudar a difundir dentro del patrimonio y los recursos de San Bartolomé.",
            "Chucuncuya forma parte de los recursos locales que pueden estudiarse desde la historia, la memoria de la comunidad y el territorio."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que es chucuncuya",
            "informacion chucuncuya",
            "dame informacion de chucuncuya"
        ],

        respuesta: [
            "Chucuncuya es un recurso local de interés histórico-cultural para San Bartolomé. En TurisIA se propone acercar su información a la población mediante fuentes históricas, testimonios y herramientas digitales.",
            "En nuestro proyecto, Chucuncuya es importante porque existe una necesidad de difundir mejor su valor histórico y cultural."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "historia de chucuncuya",
            "importancia de chucuncuya",
            "valor de chucuncuya"
        ],

        respuesta: [
            "La importancia de Chucuncuya se relaciona con el patrimonio histórico-cultural local. TurisIA busca interpretar diferentes evidencias para que ese valor sea mejor conocido.",
            "Para estudiar Chucuncuya no basta con contar una historia: es necesario relacionar fuentes, territorio, memoria y testimonios."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "porque es importante chucuncuya",
            "por que es importante chucuncuya",
            "por que conocer chucuncuya"
        ],

        respuesta: [
            "Porque conocer un recurso histórico-cultural ayuda a fortalecer la identidad y a evitar que la memoria local se pierda.",
            "Conocer Chucuncuya permite valorar una parte del patrimonio local y entender mejor la relación entre territorio, historia y comunidad."
        ]
    });


    /* =====================================================================
       014. RUTAS Y CAMINATAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "rutas",
            "ruta",
            "rutas turisticas",
            "rutas turisticas san bartolome",
            "rutas de san bartolome"
        ],

        respuesta: [
            "TurisIA contempla rutas como parte de la experiencia turística. La idea es que las personas puedan conocer lugares y planificar recorridos de manera más sencilla.",
            "Las rutas pueden relacionar naturaleza, paisajes, historia y cultura. Antes de caminar siempre es recomendable verificar las condiciones actuales del camino."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "rutas de caminata",
            "caminatas",
            "caminar en bartolo",
            "senderismo",
            "trekking"
        ],

        respuesta: [
            "San Bartolomé puede ofrecer experiencias de caminata relacionadas con sus paisajes y territorio. Si realizas una ruta, lleva agua, protección solar y evita dejar residuos.",
            "Las caminatas permiten conocer el territorio de una manera diferente. Es importante respetar los caminos, las zonas agrícolas y el entorno natural."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que llevar a una caminata",
            "que llevar para caminar",
            "cosas para una caminata",
            "que necesito para caminar"
        ],

        respuesta: [
            "Para una caminata puedes llevar agua, gorra o sombrero, bloqueador solar, calzado adecuado, algo ligero para comer, celular cargado y una bolsa para tus residuos.",
            "Lo básico es agua, protección solar, ropa cómoda, calzado con buen agarre y tu celular cargado."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "es peligroso caminar",
            "es segura la caminata",
            "seguridad en las rutas",
            "seguridad para caminar"
        ],

        respuesta: [
            "La seguridad depende de la ruta, el clima y las condiciones del terreno. Es recomendable no caminar solo, avisar a alguien dónde estarás y consultar a personas de la zona.",
            "Antes de realizar una caminata revisa el estado del camino y evita zonas que puedan presentar riesgos."
        ]
    });


    /* =====================================================================
       015. NATURALEZA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "naturaleza",
            "naturaleza de san bartolome",
            "paisajes",
            "paisaje de bartolo"
        ],

        respuesta: [
            "San Bartolomé cuenta con paisajes relacionados con el valle del río Rímac, zonas agrícolas, cerros y espacios naturales.",
            "La naturaleza es uno de los elementos que puede fortalecer el turismo local si se visita y conserva responsablemente."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "flora",
            "plantas",
            "vegetacion",
            "vegetacion de san bartolome"
        ],

        respuesta: [
            "En los espacios naturales de San Bartolomé se pueden encontrar diferentes tipos de vegetación adaptada a las condiciones del territorio. En el Cerrito de la Pascua, MINCETUR menciona vegetación herbácea y cactácea.",
            "La flora forma parte del valor natural del distrito y debe ser observada sin dañarla ni extraer plantas."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "fauna",
            "animales",
            "animales de san bartolome",
            "fauna de bartolo"
        ],

        respuesta: [
            "La fauna forma parte de los recursos naturales del territorio. TurisIA promueve su observación responsable y sin alterar los espacios donde viven los animales.",
            "Si realizas observación de fauna, lo mejor es mantener distancia y evitar alimentar o molestar a los animales."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "aves",
            "avistamiento de aves",
            "observar aves",
            "birdwatching"
        ],

        respuesta: [
            "El avistamiento de aves puede ser una actividad de turismo de naturaleza. Se recomienda observar a distancia, no perseguir a las aves y evitar hacer ruido excesivo.",
            "La observación de aves permite conocer mejor la biodiversidad local sin necesidad de alterar el ambiente."
        ]
    });


    /* =====================================================================
       016. FOTOGRAFÍA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "fotografia",
            "fotografias",
            "fotos",
            "tomar fotos",
            "lugares para fotos"
        ],

        respuesta: [
            "Los paisajes y miradores de San Bartolomé pueden ser buenos espacios para tomar fotografías. Recuerda respetar propiedades privadas y no dañar el entorno.",
            "Puedes tomar fotos de paisajes, caminos, actividades culturales y espacios naturales, siempre respetando a las personas y el patrimonio."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "donde tomar fotos",
            "donde sacar fotos",
            "lugares para fotografiar"
        ],

        respuesta: [
            "Los miradores y paisajes del distrito pueden ofrecer buenas vistas. El Cerrito de la Pascua es especialmente interesante por su ubicación como mirador natural.",
            "Puedes buscar miradores, paisajes y espacios culturales, siempre respetando las normas del lugar."
        ]
    });


    /* =====================================================================
       017. TURISMO RESPONSABLE
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "turismo responsable",
            "que es turismo responsable",
            "turismo sostenible",
            "turismo sustentable"
        ],

        respuesta: [
            "El turismo responsable significa disfrutar un lugar sin dañarlo, respetando a la comunidad, cuidando el ambiente y valorando el patrimonio.",
            "En San Bartolomé, visitar responsablemente significa respetar la naturaleza, las costumbres, los espacios patrimoniales y a los habitantes."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "como cuidar san bartolome",
            "como cuidar bartolo",
            "cuidar el turismo",
            "cuidar los lugares turisticos"
        ],

        respuesta: [
            "No arrojes basura, no dañes plantas ni estructuras, respeta los espacios agrícolas, evita hacer ruido excesivo y sigue las indicaciones de la comunidad.",
            "Una forma sencilla de cuidar San Bartolomé es dejar cada lugar igual o mejor de como lo encontraste."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "basura",
            "contaminacion",
            "no contaminar",
            "residuos"
        ],

        respuesta: [
            "La basura afecta los paisajes y también puede perjudicar a la fauna. Lleva una bolsa para tus residuos y deposítalos en lugares adecuados.",
            "Si visitas un lugar natural, evita dejar residuos. El turismo también debe contribuir al cuidado del ambiente."
        ]
    });


    /* =====================================================================
       018. FAMILIA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "con mi familia",
            "familia",
            "turismo en familia",
            "que hacer con mi familia"
        ],

        respuesta: [
            "Con la familia pueden realizar actividades tranquilas como conocer paisajes, visitar miradores, tomar fotografías y aprender sobre la historia y cultura local.",
            "Una visita familiar puede combinar naturaleza, cultura y aprendizaje. Lo importante es elegir recorridos adecuados y respetar las condiciones del lugar."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "con mis amigos",
            "amigos",
            "que hacer con amigos",
            "plan con amigos"
        ],

        respuesta: [
            "Con tus amigos pueden hacer una caminata, conocer lugares turísticos, tomar fotografías y explorar la historia y cultura de San Bartolomé.",
            "Si van con amigos, pueden organizar una ruta, pero recuerden mantenerse juntos y cuidar el ambiente."
        ]
    });


    /* =====================================================================
       019. JÓVENES
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "soy joven",
            "para jovenes",
            "para jóvenes",
            "turismo para jovenes",
            "que pueden hacer los jovenes"
        ],

        respuesta: [
            "Los jóvenes pueden conocer el territorio mediante caminatas, fotografía, investigación histórica, creación de contenido y turismo responsable.",
            "TurisIA también busca que los jóvenes se interesen por la historia y el patrimonio de su propia comunidad usando herramientas digitales."
        ]
    });


    /* =====================================================================
       020. TECNOLOGÍA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "tecnologia",
            "tecnología",
            "tecnologia y turismo",
            "tecnologia en el turismo"
        ],

        respuesta: [
            "La tecnología puede ayudar a organizar información, mostrar mapas, difundir lugares, explicar la historia y facilitar la planificación de una visita.",
            "TurisIA utiliza tecnología web para reunir información turística, histórica y cultural de San Bartolomé."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "para que sirve turisia",
            "para que sirve",
            "utilidad de turisia",
            "funcion de turisia"
        ],

        respuesta: [
            "TurisIA sirve para facilitar el acceso a información sobre San Bartolomé y ayudar a valorar sus recursos históricos, culturales y naturales.",
            "La plataforma busca conectar tecnología, información local y turismo para que más personas conozcan el distrito."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "como funciona turisia",
            "como funciona",
            "funcionamiento de turisia"
        ],

        respuesta: [
            "TurisIA funciona como una plataforma web que organiza información del distrito y cuenta con una asistente virtual capaz de responder preguntas mediante una base de conocimientos local.",
            "La plataforma reúne información y permite al usuario interactuar con un asistente para consultar sobre diferentes aspectos de San Bartolomé."
        ]
    });


    /* =====================================================================
       021. HTML CSS JAVASCRIPT
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "html",
            "que es html",
            "para que sirve html"
        ],

        respuesta: [
            "HTML se utiliza para construir la estructura de una página web, como títulos, textos, botones, imágenes y secciones.",
            "En TurisIA, HTML permite organizar visualmente el contenido de las diferentes páginas."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "css",
            "que es css",
            "para que sirve css"
        ],

        respuesta: [
            "CSS sirve para darle diseño y estilo a una página web: colores, tamaños, espacios, posiciones, animaciones y distribución.",
            "En TurisIA, CSS ayuda a conseguir una interfaz moderna, ordenada y relacionada con la identidad visual del proyecto."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "javascript",
            "que es javascript",
            "para que sirve javascript"
        ],

        respuesta: [
            "JavaScript permite agregar interacción y comportamiento a una página web.",
            "En TurisIA, JavaScript permite manejar la interacción con la asistente virtual y procesar las preguntas del usuario."
        ]
    });


    /* =====================================================================
       022. PREGUNTAS GENERALES DE AYUDA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "ayuda",
            "me ayudas",
            "puedes ayudarme",
            "ayudame",
            "necesito ayuda"
        ],

        respuesta: [
            "Claro 😎. Pregúntame sobre San Bartolomé, turismo, historia, cultura, rutas, naturaleza o sobre el proyecto TurisIA.",
            "Sí, aquí estoy. Puedes preguntarme algo específico o escribirlo de manera informal."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "que sabes",
            "que sabes de bartolo",
            "que informacion tienes",
            "que información tienes"
        ],

        respuesta: [
            "Puedo responder sobre San Bartolomé, sus recursos turísticos, Cerrito de la Pascua, Chucuncuya, rutas, naturaleza, cultura y sobre el proyecto TurisIA.",
            "Tengo información organizada para ayudarte a conocer el distrito y también para explicar cómo funciona TurisIA."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "dime algo",
            "cuentame algo",
            "cuéntame algo",
            "sorprendeme",
            "sorpréndeme"
        ],

        respuesta: [
            "Un dato interesante es que el Cerrito de la Pascua está registrado por MINCETUR como un sitio natural de tipo zona paisajística y subtipo mirador natural.",
            "Algo interesante de TurisIA es que no busca solamente mostrar lugares: también busca ayudar a interpretar y valorar el patrimonio local."
        ]
    });


    /* =====================================================================
       023. RESPUESTAS SOBRE EL TERRITORIO
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "territorio",
            "territorio san bartolome",
            "territorio de bartolo",
            "como es el territorio"
        ],

        respuesta: [
            "El territorio de San Bartolomé combina zonas urbanas, áreas agrícolas, cerros, quebradas y paisajes relacionados con la cuenca del río Rímac.",
            "El territorio no es solamente un espacio físico: también está relacionado con la historia, la memoria y las actividades de la comunidad."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "rio rimac",
            "río rimac",
            "rio",
            "cuenca del rimac"
        ],

        respuesta: [
            "San Bartolomé forma parte del territorio relacionado con la cuenca del río Rímac. El paisaje del valle es parte importante de la experiencia territorial.",
            "El río Rímac y su cuenca ayudan a comprender la relación entre territorio, agricultura, población y paisaje."
        ]
    });


    /* =====================================================================
       024. AGRICULTURA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "agricultura",
            "agricultura en bartolo",
            "agricultura san bartolome",
            "campo"
        ],

        respuesta: [
            "La agricultura forma parte de la vida y del territorio de San Bartolomé. También puede relacionarse con experiencias de turismo rural y conocimiento de las actividades de la comunidad.",
            "Las áreas agrícolas son parte del paisaje local y muestran la relación histórica entre la población y el territorio."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "tuna",
            "tunas",
            "cultivo de tuna",
            "tuna san bartolome"
        ],

        respuesta: [
            "La tuna forma parte de las actividades agrícolas y de la identidad productiva de la zona. También puede relacionarse con productos y experiencias gastronómicas locales.",
            "Las zonas agrícolas de tuna forman parte del paisaje que se puede observar en el territorio de San Bartolomé."
        ]
    });


    /* =====================================================================
       025. AGUA Y COMUNIDAD
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "agua",
            "siembra de agua",
            "cosecha de agua",
            "siembra y cosecha de agua",
            "champeria",
            "champeria"
        ],

        respuesta: [
            "La siembra y cosecha de agua es una práctica relacionada con el manejo comunitario del recurso hídrico. En TurisIA se considera parte importante de la relación entre comunidad, territorio y naturaleza.",
            "La gestión del agua permite comprender cómo las comunidades se relacionan con su territorio y con las necesidades de la agricultura."
        ]
    });


    /* =====================================================================
       026. CULTURA GENERAL
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "cultura",
            "cultura de san bartolome",
            "cultura de bartolo",
            "patrimonio cultural"
        ],

        respuesta: [
            "La cultura de San Bartolomé incluye sus tradiciones, festividades, memoria, formas de organización, prácticas comunitarias y expresiones que forman parte de su identidad.",
            "TurisIA busca difundir la cultura local para que pueda ser conocida y valorada por habitantes y visitantes."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "patrimonio",
            "patrimonio de san bartolome",
            "patrimonio de bartolo",
            "que es patrimonio"
        ],

        respuesta: [
            "El patrimonio está formado por elementos naturales y culturales que una sociedad reconoce como valiosos y busca conservar para las siguientes generaciones.",
            "En San Bartolomé, el patrimonio puede estudiarse desde los lugares, las tradiciones, la memoria de los habitantes y las evidencias históricas."
        ]
    });


    /* =====================================================================
       027. HISTORIA GENERAL
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "historia",
            "historia de san bartolome",
            "historia de bartolo",
            "historia local"
        ],

        respuesta: [
            "La historia de San Bartolomé se puede comprender relacionando documentos, fotografías, testimonios, territorio y espacios patrimoniales.",
            "TurisIA no busca solamente contar una historia. Busca interpretarla mediante diferentes evidencias y relacionarla con la memoria de la comunidad."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "porque estudiar historia",
            "por que estudiar la historia",
            "importancia de la historia",
            "para que sirve la historia"
        ],

        respuesta: [
            "Estudiar la historia ayuda a comprender cómo una comunidad llegó a ser como es actualmente y qué cambios y permanencias existen.",
            "Conocer la historia local ayuda a fortalecer la identidad y a valorar el patrimonio."
        ]
    });


    /* =====================================================================
       028. MEMORIA LOCAL
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "memoria",
            "memoria local",
            "memoria de los habitantes",
            "testimonios"
        ],

        respuesta: [
            "La memoria local está formada por recuerdos, relatos y experiencias transmitidas por los habitantes. Estos testimonios pueden ayudar a interpretar la historia de una comunidad.",
            "Los testimonios son importantes porque permiten conocer cómo las personas recuerdan y explican diferentes procesos del pasado."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "fuentes historicas",
            "fuentes históricas",
            "fuentes de historia",
            "evidencias historicas"
        ],

        respuesta: [
            "Las fuentes históricas pueden incluir documentos, fotografías, testimonios orales, objetos, espacios, mapas y otras evidencias que permiten investigar el pasado.",
            "Para estudiar San Bartolomé es útil relacionar diferentes fuentes en lugar de depender de una sola evidencia."
        ]
    });


    /* =====================================================================
       029. IDENTIDAD
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "identidad",
            "identidad historica",
            "identidad histórica",
            "identidad de san bartolome",
            "como se construye la identidad"
        ],

        respuesta: [
            "La identidad histórica se construye a través de la memoria, las experiencias, las tradiciones, el territorio y las formas en que una comunidad interpreta su pasado.",
            "En San Bartolomé, la identidad puede entenderse relacionando territorio, memoria, cultura, historia y actividades de la comunidad."
        ]
    });


    /* =====================================================================
       030. CAMBIOS Y PERMANENCIAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "cambios",
            "permanencias",
            "cambios y permanencias",
            "que ha cambiado",
            "que permanece"
        ],

        respuesta: [
            "Para estudiar una comunidad es importante observar qué elementos han cambiado con el tiempo y cuáles permanecen. Eso permite comprender mejor su proceso histórico.",
            "Los cambios pueden verse en las actividades, infraestructura y formas de vida, mientras algunas costumbres, memorias y relaciones con el territorio pueden mantenerse."
        ]
    });


    /* =====================================================================
       031. INFORMACIÓN TURÍSTICA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "informacion turistica",
            "información turística",
            "donde encuentro informacion",
            "informacion de lugares"
        ],

        respuesta: [
            "TurisIA busca reunir información turística en un solo espacio digital para facilitar su consulta.",
            "La plataforma organiza información sobre lugares, rutas, cultura, historia y experiencias para que sea más fácil conocer San Bartolomé."
        ]
    });


    /* =====================================================================
       032. VISITANTES
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "para turistas",
            "para visitantes",
            "soy turista",
            "soy visitante"
        ],

        respuesta: [
            "¡Bienvenido! 😎 TurisIA puede orientarte sobre lugares, actividades, rutas, historia y cultura de San Bartolomé.",
            "Si estás visitando San Bartolomé, puedes usar TurisIA para conocer mejor el territorio y planificar qué lugares quieres conocer."
        ]
    });


    /* =====================================================================
       033. PREGUNTAS CASUALES
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "bro",
            "amigo",
            "mano",
            "causa",
            "oe",
            "oye"
        ],

        respuesta: [
            "Jajaja 😎 dime nomás, ¿qué quieres saber de San Bartolomé?",
            "Aquí estoy bro 😂. Pregunta nomás.",
            "Dale 😎. ¿Qué quieres conocer?"
        ]
    });


    /* =====================================================================
       034. GRACIAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "gracias",
            "muchas gracias",
            "te agradezco",
            "gracias amigo",
            "gracias bro"
        ],

        respuesta: [
            "¡De nada! 😎",
            "¡No hay de qué! Me alegra ayudarte.",
            "¡Cuando quieras! TurisIA está para ayudarte."
        ]
    });


    /* =====================================================================
       035. DESPEDIDAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "adios",
            "adiós",
            "chau",
            "nos vemos",
            "hasta luego",
            "me voy"
        ],

        respuesta: [
            "¡Nos vemos! 👋 Recuerda que puedes volver cuando quieras.",
            "¡Hasta luego! 😎 Sigue descubriendo San Bartolomé.",
            "¡Chau! 👋 Gracias por usar TurisIA."
        ]
    });


    /* =====================================================================
       036. PREGUNTAS SOBRE EL PROYECTO
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "proyecto turisia",
            "proyecto",
            "de que trata turisia",
            "de qué trata turisia"
        ],

        respuesta: [
            "TurisIA es un proyecto que propone una plataforma digital para valorizar, difundir e interpretar los recursos turísticos, históricos, culturales y naturales de San Bartolomé.",
            "El proyecto une investigación local y tecnología para facilitar el acceso a información sobre San Bartolomé."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "objetivo de turisia",
            "objetivo del proyecto",
            "objetivo"
        ],

        respuesta: [
            "El objetivo es contribuir a la valorización del patrimonio histórico-cultural y de los recursos turísticos de San Bartolomé mediante una plataforma digital.",
            "TurisIA busca acercar información local a la población y a los visitantes usando una herramienta tecnológica."
        ]
    });


    /* =====================================================================
       037. PROBLEMA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "problema de turisia",
            "problema del proyecto",
            "cual es el problema",
            "cuál es el problema"
        ],

        respuesta: [
            "Uno de los problemas identificados es la falta de conocimiento y difusión de parte del patrimonio histórico-cultural local.",
            "TurisIA parte de una situación donde algunos recursos y elementos de la historia local no son suficientemente conocidos por la población."
        ]
    });


    /* =====================================================================
       038. ENCUESTA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "encuesta",
            "cuantas personas",
            "cuántas personas",
            "103 pobladores",
            "103 personas"
        ],

        respuesta: [
            "Para el proyecto se encuestó a 103 pobladores de San Bartolomé.",
            "La encuesta del proyecto consideró a 103 pobladores para conocer su percepción y conocimiento sobre el patrimonio histórico-cultural."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "64.3",
            "64,3",
            "64 3",
            "no conocen chucuncuya"
        ],

        respuesta: [
            "En la encuesta realizada a 103 pobladores, el 64,3 % indicó que no conoce Chucuncuya.",
            "El dato del 64,3 % muestra una necesidad de fortalecer la difusión de información sobre Chucuncuya."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "66.7",
            "66,7",
            "66 7",
            "importancia historica chucuncuya"
        ],

        respuesta: [
            "El 66,7 % de los encuestados señaló que no conoce la importancia histórica de Chucuncuya.",
            "Ese resultado muestra que no solamente existe un problema de conocer el lugar, sino también de comprender su valor histórico."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "59.5",
            "59,5",
            "59 5",
            "buscado informacion historica"
        ],

        respuesta: [
            "El 59,5 % de los pobladores encuestados indicó que no ha buscado información sobre la historia local.",
            "Este dato refuerza la necesidad de crear formas más accesibles de acercar la información histórica a la población."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "69",
            "69 por ciento",
            "69%",
            "conservar patrimonio"
        ],

        respuesta: [
            "El 69 % de los encuestados considera importante conservar el patrimonio histórico-cultural.",
            "Este resultado muestra que existe interés en la conservación del patrimonio, aunque todavía se necesita mejorar su difusión y conocimiento."
        ]
    });


    /* =====================================================================
       039. PREGUNTA DE INVESTIGACIÓN
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "pregunta de investigacion",
            "pregunta de investigación",
            "cual es la pregunta de investigacion",
            "cuál es la pregunta"
        ],

        respuesta: [
            "La pregunta de investigación de TurisIA es: ¿De qué manera una plataforma digital podría ayudarnos en la valorización del patrimonio histórico-cultural de San Bartolomé mediante la interpretación de fuentes históricas?",
            "La investigación busca saber cómo una plataforma digital puede ayudar a valorar el patrimonio histórico-cultural mediante la interpretación de fuentes."
        ]
    });


    /* =====================================================================
       040. METODOLOGÍA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "metodologia",
            "metodología",
            "como investigaron",
            "como se investigo"
        ],

        respuesta: [
            "El proyecto combina una investigación cualitativa para interpretar información histórica y cultural con datos cuantitativos obtenidos mediante una encuesta a 103 pobladores.",
            "La metodología considera fuentes primarias y secundarias, revisión de información, interpretación de evidencias y una encuesta para conocer la percepción de la población."
        ]
    });


    /* =====================================================================
       041. FUENTES PRIMARIAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "fuentes primarias",
            "fuente primaria",
            "que son fuentes primarias"
        ],

        respuesta: [
            "Las fuentes primarias son evidencias relacionadas directamente con el hecho o contexto que se estudia, como testimonios, fotografías, documentos u objetos de la época.",
            "En una investigación local, los testimonios de habitantes y documentos originales pueden funcionar como fuentes primarias."
        ]
    });


    /* =====================================================================
       042. FUENTES SECUNDARIAS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "fuentes secundarias",
            "fuente secundaria",
            "que son fuentes secundarias"
        ],

        respuesta: [
            "Las fuentes secundarias son investigaciones o publicaciones que analizan información producida a partir de otras evidencias.",
            "Un estudio académico sobre los recursos turísticos de San Bartolomé puede utilizarse como fuente secundaria."
        ]
    });


    /* =====================================================================
       043. CRITERIOS DE FUENTES
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "criterios de fuentes",
            "criterios para seleccionar fuentes",
            "como elegir fuentes",
            "fuentes confiables"
        ],

        respuesta: [
            "Para seleccionar fuentes se puede considerar su pertinencia, confiabilidad, relación con el tema, autoría, actualidad y posibilidad de contrastarla con otras evidencias.",
            "Una fuente es más útil cuando tiene relación directa con el problema investigado y permite comprobar o contrastar la información."
        ]
    });


    /* =====================================================================
       044. MINCETUR
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "mincetur",
            "ministerio de comercio exterior",
            "informacion mincetur"
        ],

        respuesta: [
            "MINCETUR es el Ministerio de Comercio Exterior y Turismo del Perú. Sus registros turísticos pueden servir como fuente institucional para conocer recursos turísticos.",
            "En TurisIA se considera importante consultar información institucional como la de MINCETUR para respaldar datos turísticos."
        ]
    });


    /* =====================================================================
       045. INVESTIGACIÓN ACADÉMICA
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "universidad",
            "investigacion universitaria",
            "estudio universitario",
            "federico villarreal",
            "unfv"
        ],

        respuesta: [
            "Para el proyecto se consideró información de investigación académica relacionada con los recursos turísticos de San Bartolomé.",
            "La investigación universitaria es útil porque permite contar con un análisis académico que puede contrastarse con otras fuentes locales e institucionales."
        ]
    });


    /* =====================================================================
       046. APORTE
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "aporte de turisia",
            "aporte del proyecto",
            "que aporta turisia",
            "qué aporta turisia"
        ],

        respuesta: [
            "TurisIA aporta una forma digital de organizar y difundir información que puede ayudar a valorar el patrimonio y los recursos turísticos de San Bartolomé.",
            "El principal aporte es conectar investigación local y tecnología para hacer más accesible la información."
        ]
    });


    /* =====================================================================
       047. BENEFICIOS
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "beneficios",
            "beneficio de turisia",
            "beneficios del proyecto"
        ],

        respuesta: [
            "TurisIA puede beneficiar a estudiantes, pobladores, visitantes y personas interesadas en conocer San Bartolomé.",
            "Entre sus beneficios están facilitar información, promover el conocimiento local y apoyar la valorización del patrimonio."
        ]
    });


    /* =====================================================================
       048. EDUCACIÓN
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "educacion",
            "educación",
            "para estudiantes",
            "estudiantes"
        ],

        respuesta: [
            "TurisIA también puede servir como recurso educativo porque permite aprender sobre historia, territorio, cultura y turismo local.",
            "Los estudiantes pueden utilizar la plataforma como punto de partida para investigar y conocer mejor su comunidad."
        ]
    });


    /* =====================================================================
       049. PREGUNTAS SOBRE INFORMACIÓN LOCAL
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "quiero conocer bartolo",
            "quiero conocer san bartolome",
            "quiero visitar bartolo"
        ],

        respuesta: [
            "¡Buen plan! 😎 Puedes empezar con el Cerrito de la Pascua, conocer el paisaje, investigar la historia local y revisar las rutas disponibles.",
            "Si quieres conocer San Bartolomé, empieza por ubicar los lugares que más te interesen y luego organiza una ruta respetando el territorio."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "primer lugar que visitar",
            "primer lugar para visitar",
            "que lugar visitar primero"
        ],

        respuesta: [
            "Una opción interesante es comenzar por el Cerrito de la Pascua, especialmente si quieres conocer un mirador natural y apreciar el paisaje.",
            "Puedes comenzar por un lugar accesible y después complementar la visita con espacios culturales e históricos."
        ]
    });


    /* =====================================================================
       050. PREGUNTAS CON ERRORES COMUNES
       ===================================================================== */

    RESPUESTAS.push({

        claves: [
            "san bartolomee",
            "san bartolom",
            "san bartolme",
            "san bartolome",
            "san barto",
            "san bartolome huarochiri"
        ],

        respuesta: [
            "Sí 😎, te refieres a San Bartolomé, Huarochirí. ¿Qué quieres saber sobre el distrito?"
        ]
    });


    RESPUESTAS.push({

        claves: [
            "chucuncuyaa",
            "chucunculla",
            "chucuncuia",
            "chucuncuya"
        ],

        respuesta: [
            "Creo que te refieres a Chucuncuya 😎. Puedo contarte sobre su importancia dentro del proyecto y su relación con el patrimonio local."
        ]
    });


    RESPUESTAS.push({

        claves: [
            "cerrito pascua",
            "serrito de la pascua",
            "cerito de la pascua",
            "cerrito pascua"
        ],

        respuesta: [
            "Sí, te refieres al Cerrito de la Pascua. Es un mirador natural registrado por MINCETUR dentro de San Bartolomé."
        ]
    });


    /* =====================================================================
       051. RESPUESTA DE RESPALDO
       ===================================================================== */

    const RESPUESTA_RESPALDO = [
        "Interesante pregunta 😎. Puedo ayudarte con San Bartolomé, turismo, historia, cultura, rutas, naturaleza, Chucuncuya, Cerrito de la Pascua o TurisIA.",
        "No tengo una respuesta específica para esa pregunta todavía, pero puedes preguntarme sobre los lugares, historia, cultura, turismo o funcionamiento de TurisIA.",
        "Creo que todavía necesito más información para responder exactamente eso. Prueba preguntando de otra manera.",
        "Puedo responder mejor si preguntas, por ejemplo: ¿qué puedo hacer en Bartolo?, ¿qué es Chucuncuya?, ¿qué es el Cerrito de la Pascua?, ¿cómo funciona TurisIA?"
    ];


    /* =====================================================================
       052. CATEGORÍAS
       ===================================================================== */

    const CATEGORIAS = {

        saludo: [
            "hola",
            "buenas",
            "buenos dias",
            "buenas tardes"
        ],

        ubicacion: [
            "donde",
            "ubicacion",
            "queda",
            "llegar"
        ],

        turismo: [
            "turismo",
            "turista",
            "visitar",
            "viaje"
        ],

        naturaleza: [
            "naturaleza",
            "paisaje",
            "flora",
            "fauna",
            "aves"
        ],

        historia: [
            "historia",
            "historico",
            "fuente",
            "memoria"
        ],

        cultura: [
            "cultura",
            "patrimonio",
            "tradicion",
            "festividad"
        ],

        proyecto: [
            "turisia",
            "proyecto",
            "metodologia",
            "encuesta"
        ]
    };


    /* =====================================================================
       053. PUNTUACIÓN DE COINCIDENCIAS
       ===================================================================== */

    function calcularPuntuacion(pregunta, claves) {

        const texto = normalizarTexto(pregunta);

        let puntuacion = 0;

        claves.forEach(function (clave) {

            const palabra = normalizarTexto(clave);

            if (!palabra) {
                return;
            }

            if (texto === palabra) {
                puntuacion += 20;
                return;
            }

            if (texto.includes(palabra)) {
                puntuacion += 8;
            }

            const partes = palabra.split(" ");

            partes.forEach(function (parte) {

                if (parte.length > 3 && texto.includes(parte)) {
                    puntuacion += 2;
                }

            });

        });

        return puntuacion;
    }


    /* =====================================================================
       054. BUSCADOR DE RESPUESTAS
       ===================================================================== */

    function encontrarRespuesta(pregunta) {

        const texto = normalizarTexto(pregunta);

        if (!texto) {
            return {
                respuesta: "Escribe una pregunta para poder ayudarte 😎.",
                puntuacion: 0
            };
        }

        let mejorRespuesta = null;

        let mejorPuntuacion = 0;

        RESPUESTAS.forEach(function (item) {

            const puntuacion = calcularPuntuacion(
                texto,
                item.claves
            );

            if (puntuacion > mejorPuntuacion) {

                mejorPuntuacion = puntuacion;

                mejorRespuesta = item;
            }

        });

        if (!mejorRespuesta || mejorPuntuacion < 5) {

            return {
                respuesta: aleatorio(RESPUESTA_RESPALDO),
                puntuacion: mejorPuntuacion
            };
        }

        return {
            respuesta: aleatorio(
                mejorRespuesta.respuesta
            ),
            puntuacion: mejorPuntuacion
        };
    }


    /* =====================================================================
       055. AGREGAR CONTEXTO
       ===================================================================== */

    function agregarContexto(respuesta) {

        if (!respuesta) {
            return "";
        }

        let resultado = respuesta;

        if (
            ESTADO_TURISIA.contadorMensajes > 0 &&
            ESTADO_TURISIA.contadorMensajes % 7 === 0
        ) {

            resultado += "\n\n💡 También puedes preguntarme por otro lugar o tema de San Bartolomé.";
        }

        return resultado;
    }


    /* =====================================================================
       056. RESPONDER
       ===================================================================== */

    function responder(pregunta) {

        try {

            ESTADO_TURISIA.ultimoMensajeUsuario =
                pregunta;

            ESTADO_TURISIA.contadorMensajes++;

            const resultado =
                encontrarRespuesta(pregunta);

            const respuesta =
                agregarContexto(
                    resultado.respuesta
                );

            ESTADO_TURISIA.ultimaRespuesta =
                respuesta;

            ESTADO_TURISIA.mensajes.push({

                usuario: pregunta,

                asistente: respuesta,

                hora: horaActual(),

                puntuacion: resultado.puntuacion

            });

            TURISIA_DIAGNOSTICO.informacion(
                "Pregunta procesada: " + pregunta
            );

            TURISIA_DIAGNOSTICO.informacion(
                "Puntuación: " + resultado.puntuacion
            );

            return respuesta;

        } catch (error) {

            TURISIA_DIAGNOSTICO.error(
                "No se pudo generar la respuesta.",
                error
            );

            return "Ocurrió un pequeño problema. Intenta nuevamente.";
        }
    }


    /* =====================================================================
       057. MOSTRAR MENSAJE
       ===================================================================== */

    function mostrarMensajeUsuario(texto) {

        const contenedor =
            buscarElemento(
                SELECTORES.mensajes
            );

        if (!contenedor) {

            TURISIA_DIAGNOSTICO.advertencia(
                "No existe el contenedor de mensajes."
            );

            return;
        }

        const mensaje =
            document.createElement("div");

        mensaje.className =
            "turisia-mensaje turisia-usuario";

        mensaje.textContent =
            texto;

        contenedor.appendChild(mensaje);

        contenedor.scrollTop =
            contenedor.scrollHeight;
    }


    function mostrarMensajeIA(texto) {

        const contenedor =
            buscarElemento(
                SELECTORES.mensajes
            );

        if (!contenedor) {

            TURISIA_DIAGNOSTICO.advertencia(
                "No existe el contenedor de mensajes."
            );

            return;
        }

        const mensaje =
            document.createElement("div");

        mensaje.className =
            "turisia-mensaje turisia-ia";

        mensaje.textContent =
            texto;

        contenedor.appendChild(mensaje);

        contenedor.scrollTop =
            contenedor.scrollHeight;
    }


    /* =====================================================================
       058. ENVIAR MENSAJE
       ===================================================================== */

    function procesarMensaje() {

        const entrada =
            buscarElemento(
                SELECTORES.entrada
            );

        if (!entrada) {

            TURISIA_DIAGNOSTICO.error(
                "No se encontró la caja de texto."
            );

            return;
        }

        const texto =
            entrada.value.trim();

        if (!texto) {

            TURISIA_DIAGNOSTICO.advertencia(
                "El usuario intentó enviar un mensaje vacío."
            );

            return;
        }

        mostrarMensajeUsuario(texto);

        const respuesta =
            responder(texto);

        setTimeout(function () {

            mostrarMensajeIA(respuesta);

        }, 250);

        entrada.value = "";

        entrada.focus();
    }


    /* =====================================================================
       059. CONEXIÓN AUTOMÁTICA DEL BOTÓN
       ===================================================================== */

    function conectarBoton() {

        const boton =
            buscarElemento(
                SELECTORES.boton
            );

        if (!boton) {

            TURISIA_DIAGNOSTICO.advertencia(
                "No se encontró el botón de enviar."
            );

            return;
        }

        if (
            boton.dataset.turisiaConectado === "true"
        ) {
            return;
        }

        boton.addEventListener(
            "click",
            function (evento) {

                evento.preventDefault();

                procesarMensaje();

            }
        );

        boton.dataset.turisiaConectado =
            "true";

        TURISIA_DIAGNOSTICO.correcto(
            "Botón de envío conectado."
        );
    }


    /* =====================================================================
       060. CONEXIÓN DE ENTER
       ===================================================================== */

    function conectarEnter() {

        const entrada =
            buscarElemento(
                SELECTORES.entrada
            );

        if (!entrada) {
            return;
        }

        if (
            entrada.dataset.turisiaEnter === "true"
        ) {
            return;
        }

        entrada.addEventListener(
            "keydown",
            function (evento) {

                if (
                    evento.key === "Enter" &&
                    !evento.shiftKey
                ) {

                    evento.preventDefault();

                    procesarMensaje();
                }

            }
        );

        entrada.dataset.turisiaEnter =
            "true";

        TURISIA_DIAGNOSTICO.correcto(
            "Tecla Enter conectada."
        );
    }


    /* =====================================================================
       061. PRUEBA DEL SISTEMA
       ===================================================================== */

    function ejecutarDiagnostico() {

        console.log("");
        console.log(
            "🔎 EJECUTANDO DIAGNÓSTICO TURISIA"
        );
        console.log("");

        verificarElemento(
            SELECTORES.entrada,
            "Caja de entrada"
        );

        verificarElemento(
            SELECTORES.boton,
            "Botón de enviar"
        );

        verificarElemento(
            SELECTORES.mensajes,
            "Contenedor de mensajes"
        );

        console.log(
            "📚 Respuestas cargadas:",
            RESPUESTAS.length
        );

        console.log(
            "💬 Mensajes procesados:",
            ESTADO_TURISIA.contadorMensajes
        );

        console.log(
            "========================================"
        );
    }


    /* =====================================================================
       062. INICIALIZACIÓN
       ===================================================================== */

    function iniciarTurisIA() {

        if (ESTADO_TURISIA.iniciado) {
            return;
        }

        ESTADO_TURISIA.iniciado =
            true;

        TURISIA_DIAGNOSTICO.informacion(
            "Iniciando conexión con TURISIA.html"
        );

        ejecutarDiagnostico();

        conectarBoton();

        conectarEnter();

        TURISIA_DIAGNOSTICO.correcto(
            "TurisIA Parte 1 cargada correctamente."
        );

        console.log(
            "🤖 TurisIA está lista para responder."
        );
    }


    /* =====================================================================
       063. ESPERAR AL DOM
       ===================================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            iniciarTurisIA
        );

    } else {

        iniciarTurisIA();
    }


    /* =====================================================================
       064. API PÚBLICA
       ===================================================================== */

    window.TurisIAParte1 = {

        responder: responder,

        procesarMensaje: procesarMensaje,

        diagnostico: ejecutarDiagnostico,

        normalizar: normalizarTexto,

        respuestas: RESPUESTAS,

        estado: ESTADO_TURISIA,

        config: TURISIA_CONFIG
    };


    /* =====================================================================
       065. FUNCIÓN GLOBAL DE RESPUESTA
       ===================================================================== */

    window.responderTurisIA =
        responder;


    /* =====================================================================
       066. COMANDOS DE CONSOLA
       ===================================================================== */

    window.turisiaDiagnostico =
        ejecutarDiagnostico;


    /* =====================================================================
       067. MENSAJE FINAL DE CARGA
       ===================================================================== */

    console.log("");
    console.log(
        "========================================"
    );
    console.log(
        "   TURISIA PARTE 1 - CARGADA"
    );
    console.log(
        "========================================"
    );
    console.log(
        "Puedes probar en consola:"
    );
    console.log(
        "turisiaDiagnostico()"
    );
    console.log(
        "responderTurisIA('que puedo hacer en bartolo')"
    );
    console.log(
        "========================================"
    );


})();