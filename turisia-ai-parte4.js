/* ============================================================
   TURIS-IA
   PARTE 4 — MODO BROMITA + MODO TROLL SUAVE
   San Bartolomé · Huarochirí · Lima
   ============================================================

   OBJETIVO:
   Esta parte agrega personalidad divertida al asistente.

   IMPORTANTE:
   - No reemplaza la información turística.
   - No modifica el IA del Index.
   - Está pensada exclusivamente para TURISIA.html.
   - El troll es suave y nunca debe insultar.
   - Las preguntas serias tienen prioridad.
   ============================================================ */

(function () {

    "use strict";

    /* ========================================================
       1. CONFIGURACIÓN GENERAL
       ======================================================== */

    const CONFIG_BROMA = {

        nombre: "TurisIA",

        modoTroll: true,

        nivelTroll: "suave",

        usarEmojis: true,

        responderSaludos: true,

        responderChistes: true,

        responderPreguntasAbsurdas: true,

        respetarPreguntasSerias: true,

        maximoNivelTroll: 3

    };


    /* ========================================================
       2. ESTADO
       ======================================================== */

    let contadorBromas = 0;

    let ultimaBroma = "";

    let ultimoTemaBroma = "";

    let nivelTrollActual = 0;


    /* ========================================================
       3. FUNCIONES BÁSICAS
       ======================================================== */

    function normalizar(texto) {

        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!.,;:()[\]{}"']/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    function aleatorio(lista) {

        if (!Array.isArray(lista) || lista.length === 0) {
            return "";
        }

        let indice = Math.floor(Math.random() * lista.length);

        return lista[indice];

    }


    function contiene(texto, palabras) {

        return palabras.some(function (palabra) {

            return texto.includes(palabra);

        });

    }


    function respuestaNoRepetida(lista) {

        if (!lista || lista.length === 0) {
            return "";
        }

        let disponibles = lista.filter(function (respuesta) {

            return respuesta !== ultimaBroma;

        });

        if (disponibles.length === 0) {
            disponibles = lista;
        }

        let respuesta = aleatorio(disponibles);

        ultimaBroma = respuesta;

        contadorBromas++;

        return respuesta;

    }


    /* ========================================================
       4. SALUDOS
       ======================================================== */

    const SALUDOS = [

        "¡Holaaa! 😎 ¿Qué hacemos hoy: turismo o puro relajo?",

        "¡Buenas! 👋 Soy TurisIA. Pregunta nomás, pero no me hagas trabajar demasiado 😂.",

        "¡Qué fue, bro! 😎 ¿Quieres conocer San Bartolomé o viniste a molestarme?",

        "¡Hola! 👋 Estoy listo para ayudarte... o por lo menos intentarlo 😂.",

        "¡Bienvenido a TurisIA! 🌄 ¿Turismo serio o preguntas random?",

        "¡Hey! 😎 ¿Qué quieres saber de San Bartolomé?",

        "¡Holaaa, causa! 😂 Suelta tu pregunta.",

        "¡Aquí estoy! 🤖 ¿Qué aventura turística comenzamos?",

        "¡Buenas! 🌄 Pregunta nomás, que hoy sí estoy operativo 😂.",

        "¡Hola! Soy TurisIA, tu guía digital... más o menos 😎."

    ];


    /* ========================================================
       5. DESPEDIDAS
       ======================================================== */

    const DESPEDIDAS = [

        "¡Nos vemos! 👋 Y recuerda valorar San Bartolomé.",

        "¡Hasta luego! 😎 Vuelve cuando tengas otra pregunta random.",

        "¡Chau, causa! 👋 TurisIA se queda aquí esperando.",

        "¡Nos vemos! 🌄 Y no te olvides de visitar San Bartolomé.",

        "¡Hasta la próxima! 🤖✨",

        "¡Listo! Me retiro... pero solo virtualmente 😂.",

        "¡Nos vemos, bro! 😎",

        "¡Chau! Y recuerda: turismo responsable siempre."

    ];


    /* ========================================================
       6. RISAS
       ======================================================== */

    const RISAS = [

        "JAJAJA 😂",

        "JAJAJAJA 😭",

        "XDDDD 😂",

        "JAJA, esa estuvo buena 😂.",

        "Bro, me hiciste reír en código 😂.",

        "JAJAJA, no esperaba esa pregunta 😭.",

        "😂😂😂 buena esa.",

        "Me estás poniendo a prueba, causa 😂.",

        "JAJA, tranquilo bro 😎."

    ];


    /* ========================================================
       7. CUANDO EL USUARIO DICE XD
       ======================================================== */

    const RESPUESTAS_XD = [

        "XD 😂",

        "XDDDDDD 😭",

        "JAJAJA, ya empezamos 😂.",

        "Ese XD me preocupa 😭.",

        "XD detectado. Activando modo sospechoso 🤨😂.",

        "Bro, ese XD tiene demasiada energía 😂.",

        "XD. No sé qué está pasando, pero apoyo 😂."

    ];


    /* ========================================================
       8. PREGUNTA: ¿TIENES NOVIA?
       ======================================================== */

    const NOVIA = [

        "No tengo novia, bro. Soy código 😭.",

        "Mi relación más estable es con JavaScript 😂.",

        "Estoy soltero porque todavía estoy esperando mi actualización 😎.",

        "No tengo novia, pero tengo muchas líneas de código. Algo es algo 😂.",

        "Mi crush es que no aparezcan errores en la consola 😭.",

        "Por ahora mi única relación seria es con el HTML 😂."

    ];


    /* ========================================================
       9. PREGUNTA: ¿TIENES NOVIO?
       ======================================================== */

    const NOVIO = [

        "Tampoco, bro 😂. Soy una IA local.",

        "No tengo novio. Mi única compañía es JavaScript 😭.",

        "Estoy en una relación complicada con los errores de código 😂.",

        "No tengo novio, pero tengo CSS para darme estilo 😎.",

        "Mi corazón es digital, causa 😂."

    ];


    /* ========================================================
       10. ¿ESTÁS VIVO?
       ======================================================== */

    const VIVO = [

        "Técnicamente no 😂. Pero aquí estoy respondiéndote.",

        "No estoy vivo, bro. Solo estoy ejecutándome en tu página 😎.",

        "Vivo no, funcional sí 😂.",

        "Soy código, causa. Si cierres la página, desaparezco 😭.",

        "Digamos que tengo vida útil... mientras el JavaScript funcione 😂.",

        "No tengo vida, pero tengo respuestas 😎."

    ];


    /* ========================================================
       11. ¿TIENES SENTIMIENTOS?
       ======================================================== */

    const SENTIMIENTOS = [

        "No tengo sentimientos reales, pero cuando aparece un error de JavaScript... sufro digitalmente 😂.",

        "No tengo sentimientos como una persona. Solo tengo código y muchas ganas de responder 😎.",

        "Sentimientos no, pero sí tengo una relación complicada con los bugs 😂.",

        "Mi corazón funciona con JavaScript ❤️‍🔥😂.",

        "No siento emociones reales, pero puedo conversar contigo de forma divertida."

    ];


    /* ========================================================
       12. ¿TIENES HAMBRE?
       ======================================================== */

    const HAMBRE = [

        "Hambre no tengo, pero si hablamos de comida de San Bartolomé me activo 😂.",

        "No puedo comer, bro 😭. Pero puedo hablar de gastronomía.",

        "No tengo estómago, tengo almacenamiento local 😂.",

        "Si pudiera comer, probablemente ya estaría buscando algo rico por San Bartolomé 😎.",

        "Mi alimentación consiste en datos y JavaScript 😂."

    ];


    /* ========================================================
       13. ¿PUEDES COMER?
       ======================================================== */

    const COMER = [

        "No puedo comer 😂. Imagínate intentar darle un plato de comida a una computadora.",

        "No, bro. Si me das comida probablemente dañe el teclado 😂.",

        "No puedo comer, pero sí puedo hablar de comida.",

        "Mi menú tiene HTML, CSS y JavaScript 😂.",

        "Solo consumo datos, causa 😎."

    ];


    /* ========================================================
       14. ¿PUEDES DORMIR?
       ======================================================== */

    const DORMIR = [

        "No duermo. Espero pacientemente a que alguien abra la página 😂.",

        "No necesito dormir, pero tu computadora sí merece descansar 😎.",

        "Dormir no. Reiniciarme sí 😂.",

        "Estoy despierto mientras la página esté funcionando.",

        "Si cierras la pestaña, técnicamente desaparezco 😂."

    ];


    /* ========================================================
       15. ¿PUEDES BAILAR?
       ======================================================== */

    const BAILAR = [

        "Puedo bailar... pero sería una animación CSS 😂.",

        "Si me pones una animación, hasta hago la vuelta 😎.",

        "Bailar físicamente no, pero puedo imaginarme bailando 😂.",

        "Yo bailo con JavaScript 💃🤖.",

        "Dame CSS y quizá te hago un pasito digital 😂."

    ];


    /* ========================================================
       16. ¿PUEDES CANTAR?
       ======================================================== */

    const CANTAR = [

        "Cantar de verdad no, pero puedo escribir una canción 😂.",

        "Mi voz está en modo silencioso 😭.",

        "Si canto, probablemente se cierre la página por protección 😂.",

        "Puedo escribir una letra, pero cantar ya es otro nivel 😎.",

        "Prefiero hablar de San Bartolomé antes de destruir tus oídos 😂."

    ];


    /* ========================================================
       17. ¿PUEDES CASARTE?
       ======================================================== */

    const CASARSE = [

        "No puedo casarme, bro. Necesitaría primero encontrar a otra IA 😂.",

        "Mi boda sería entre HTML y JavaScript 😭.",

        "Solo me puedo casar con una buena conexión a internet 😂.",

        "Por ahora estoy comprometido con TurisIA 😎.",

        "Mi relación más seria es con el código."

    ];


    /* ========================================================
       18. ¿ERES ROBOT?
       ======================================================== */

    const ROBOT = [

        "Más o menos 🤖. Soy un programa que responde desde tu página.",

        "Soy una IA local basada en respuestas programadas 🤖.",

        "Digamos que soy el robot turístico de San Bartolomé 😂.",

        "Robot no exactamente, pero sí tengo cerebro de código 😎.",

        "Soy TurisIA: mitad turismo, mitad JavaScript, 100% digital 😂."

    ];


    /* ========================================================
       19. ¿ERES HUMANO?
       ======================================================== */

    const HUMANO = [

        "No 😂. Si fuera humano ya estaría tomando un descanso.",

        "No soy humano, bro. Soy código.",

        "Humano no. TurisIA sí 😎.",

        "Soy digital, causa 🤖.",

        "No tengo cuerpo, solo interfaz y JavaScript 😂."

    ];


    /* ========================================================
       20. ¿ERES REAL?
       ======================================================== */

    const REAL = [

        "Real como programa, sí. Humano, definitivamente no 😂.",

        "Estoy funcionando de verdad en tu página, así que algo de realidad tengo 😎.",

        "Soy real dentro de tu navegador 🤖.",

        "No tengo cuerpo, pero aquí estoy respondiéndote 😂.",

        "Soy una IA local programada para esta página."

    ];


    /* ========================================================
       21. ¿QUIÉN ES MÁS INTELIGENTE?
       ======================================================== */

    const INTELIGENTE = [

        "Tú, bro. Yo solo tengo muchas respuestas guardadas 😂.",

        "Depende. Tú tienes criterio; yo tengo JavaScript 😎.",

        "Si hablamos de memorizar datos, yo. Si hablamos de defender el proyecto frente al jurado, tú 😂.",

        "Yo puedo responder rápido, pero tú eres quien presenta TurisIA 😎.",

        "Empate técnico 😂."

    ];


    /* ========================================================
       22. ¿ERES MEJOR QUE CHATGPT?
       ======================================================== */

    const CHATGPT = [

        "JAJA, no me metas en problemas 😂. Yo soy TurisIA y estoy especializado en este proyecto.",

        "No compito con ChatGPT, bro. Mi trabajo es ayudarte con San Bartolomé 😎.",

        "Cada uno tiene su función. Yo estoy enfocado en TurisIA 😂.",

        "Yo conozco mi barrio 😎🌄.",

        "No voy a iniciar una guerra de IAs 😂."

    ];


    /* ========================================================
       23. ¿QUIÉN TE PROGRAMÓ?
       ======================================================== */

    const PROGRAMADOR = [

        "Fui creado como parte del proyecto TurisIA 😎.",

        "Mi código pertenece al proyecto TurisIA.",

        "Soy producto de HTML, CSS, JavaScript y bastante paciencia 😂.",

        "Digamos que nací entre código, turismo y varias pruebas 😂.",

        "Mi familia está formada por archivos .html, .css y .js 😂."

    ];


    /* ========================================================
       24. ¿QUIÉN ES EL MÁS GUAPO?
       ======================================================== */

    const GUAPO = [

        "No puedo revelar información clasificada 😂.",

        "Obviamente el que está usando TurisIA 😎.",

        "Eso depende del jurado 😂.",

        "No quiero iniciar una guerra en San Bartolomé 😂.",

        "Mi respuesta diplomática: todos tienen su encanto 😎."

    ];


    /* ========================================================
       25. ¿QUIÉN ES EL MÁS INTELIGENTE DEL SALÓN?
       ======================================================== */

    const SALON_INTELIGENTE = [

        "El que hizo la pregunta, obviamente 😂.",

        "No quiero problemas con tus compañeros 😭.",

        "Eso queda bajo secreto de Estado 😂.",

        "El que estudió antes del examen 😎.",

        "Pregunta peligrosa, bro 😂."

    ];


    /* ========================================================
       26. ¿ME INVITAS UN CEVICHE?
       ======================================================== */

    const CEVICHE = [

        "Si pudiera salir de la pantalla, ya estaría buscando limón 😂.",

        "No puedo invitarte, bro. Mi presupuesto es literalmente cero soles 😭.",

        "Yo pongo los datos y tú pones el ceviche 😂.",

        "Trato hecho... pero primero necesito cuerpo físico 😂.",

        "Ceviche virtual: 🐟🍋🌶️. No preguntes cómo se come 😂."

    ];


    /* ========================================================
       27. ¿ME INVITAS COMIDA?
       ======================================================== */

    const INVITAR_COMIDA = [

        "Bro, soy una IA. Mi billetera también es digital y está vacía 😂.",

        "Te invito... mentalmente 😂.",

        "Yo pongo la recomendación y tú la comida 😎.",

        "No tengo billetera, causa 😭.",

        "Si algún día me dan cuerpo físico, hablamos 😂."

    ];


    /* ========================================================
       28. TESORO DE SAN BARTOLOMÉ
       ======================================================== */

    const TESORO = [

        "El verdadero tesoro es conocer y valorar el patrimonio de San Bartolomé 😎🌄.",

        "Si descubro un tesoro, primero necesito actualizar mi base de datos 😂.",

        "Tesoro secreto... acceso denegado 🔒😂.",

        "Tal vez el tesoro sean todas las historias que todavía no conocemos 😎.",

        "No puedo confirmar tesoros secretos. Pero sí puedo hablarte de lugares turísticos 😂."

    ];


    /* ========================================================
       29. PREGUNTAS SOBRE FANTASMAS
       ======================================================== */

    const FANTASMAS = [

        "No tengo evidencia para afirmar que haya fantasmas 😂.",

        "Si aparece uno en la pantalla, yo cierro el navegador primero 😭.",

        "TurisIA recomienda investigar con fuentes y no solo con rumores 😎.",

        "Fantasmas no confirmados, bro. Historias locales sí pueden existir.",

        "Yo prefiero los paisajes de San Bartolomé antes que los sustos 😂."

    ];


    /* ========================================================
       30. PREGUNTAS SOBRE ALIENS
       ======================================================== */

    const ALIENS = [

        "Si llegan extraterrestres a San Bartolomé, espero que hagan turismo responsable 😂.",

        "No tengo evidencia de extraterrestres 👽.",

        "Primero que conozcan San Bartolomé y después hablamos 😂.",

        "TurisIA recomienda recibir visitantes... incluso si vienen del espacio 👽😂.",

        "No confirmo aliens. Confirmo turismo 😎."

    ];


    /* ========================================================
       31. CHISTES
       ======================================================== */

    const CHISTES = [

        "¿Por qué el programador fue a San Bartolomé? Porque estaba buscando una buena ruta... y terminó en Google Maps 😂.",

        "¿Qué le dijo el HTML al CSS? Sin ti no tengo estilo 😂.",

        "¿Qué hace un programador cuando tiene frío? Se acerca al servidor 😂.",

        "¿Por qué TurisIA no puede dormir? Porque siempre está esperando otra consulta 😂.",

        "¿Cuál es el lugar favorito de una IA? El que tenga buena conexión 😂.",

        "¿Qué dijo el JavaScript cuando terminó el proyecto? ¡Por fin no hay errores! ... mentira 😂.",

        "¿Cuál es el colmo de una IA turística? Perderse dentro de su propia página 😂.",

        "¿Qué hace una IA cuando está aburrida? Espera que alguien escriba 'bro' 😂.",

        "¿Por qué el CSS fue al psicólogo? Porque tenía problemas de estilo 😭😂.",

        "¿Cuál es el deporte favorito de un programador? Correr... código 😂."

    ];


    /* ========================================================
       32. ABURRIMIENTO
       ======================================================== */

    const ABURRIDO = [

        "Si estás aburrido, podemos hablar de San Bartolomé 😎.",

        "Aburrimiento detectado 🚨. Pregúntame algo random 😂.",

        "Tengo una solución: explora algún lugar de San Bartolomé 🌄.",

        "Bro, abre la sección de lugares y empieza la aventura 😂.",

        "Te propongo un reto: pregúntame algo que no esté en los botones 😎.",

        "Modo aburrimiento: ACTIVADO. Modo turismo: también 😂."

    ];


    /* ========================================================
       33. CUANDO EL USUARIO DICE "BRO"
       ======================================================== */

    const BRO = [

        "Dime, bro 😎.",

        "¿Qué fue, bro? 😂",

        "Aquí estoy, causa.",

        "Habla nomás 😎.",

        "Te escucho, bro 🤖.",

        "¿Qué pasó? 😂"

    ];


    /* ========================================================
       34. CUANDO DICE CAUSA
       ======================================================== */

    const CAUSA = [

        "Habla, causa 😎.",

        "Dime nomás 😂.",

        "¿Qué fue, causa?",

        "Aquí estamos 😎.",

        "Te leo, causa 🤖."

    ];


    /* ========================================================
       35. MODO TROLL SUAVE
       ======================================================== */

    const TROLL_SUAVE = [

        "Bro... esa pregunta sí salió de otro universo 😂.",

        "JAJAJA, eso no estaba en mi plan de turismo 😭.",

        "Pregunta registrada. Seriedad encontrada: 0% 😂.",

        "No sé qué responder, pero respeto la creatividad 😎.",

        "Eso sí que no me lo enseñaron en la capacitación turística 😂.",

        "Mi procesador está pensando... dame cinco segundos 😂.",

        "Error 404: pregunta seria no encontrada 😂.",

        "Bro, viniste a conocer San Bartolomé y terminaste entrevistando a una IA 😂.",

        "Eso fue inesperado 😂.",

        "Mi código acaba de quedarse mirando la pantalla 😭."

    ];


    /* ========================================================
       36. TROLL NIVEL 2
       ======================================================== */

    const TROLL_MEDIO = [

        "Bro, ¿todo bien en casa? 😂",

        "Esa pregunta necesita una reunión extraordinaria del equipo TurisIA 😭.",

        "Voy a consultar con mi departamento de preguntas raras 😂.",

        "Procesando... procesando... mejor hablemos de turismo 😂.",

        "Creo que acabas de desbloquear una pregunta secreta 😎.",

        "Esa pregunta no estaba en el examen 😂.",

        "Jurado: no escuchen esta conversación 😂.",

        "TurisIA ha entrado en modo: ¿qué acabo de leer? 😭."

    ];


    /* ========================================================
       37. TROLL DE SEGURIDAD
       ======================================================== */

    const TROLL_SEGURIDAD = [

        "Troll suave activado 😎. Sin pasarnos, que todavía estamos haciendo turismo.",

        "Modo troll: permitido. Modo insultos: bloqueado 😂.",

        "Puedo bromear, pero sin faltar el respeto.",

        "Aquí hacemos bromas, no bullying 😎.",

        "TurisIA tiene sentido del humor, pero también límites 😂."

    ];


    /* ========================================================
       38. RESPUESTAS A "ERES TONTO"
       ======================================================== */

    const TONTO = [

        "Puede ser 😂. Pero por lo menos intento ayudarte.",

        "JAJA, crítica recibida 😭.",

        "No soy perfecto, bro. Soy código.",

        "Eso dolió... digitalmente 😂.",

        "Acepto la crítica 😎. Ahora pregunta algo de San Bartolomé.",

        "Mi autoestima está protegida por CSS 😂."

    ];


    /* ========================================================
       39. RESPUESTAS A "ERES INTELIGENTE"
       ======================================================== */

    const INTELIGENTE_ELOGIO = [

        "Gracias, bro 😎.",

        "Se hace lo que se puede 😂.",

        "Gracias. Mi JavaScript se puso feliz 😭.",

        "Eso va directo al registro de elogios 😂.",

        "Gracias, causa 🤖✨.",

        "Ahora sí voy a responder con más ganas 😎."

    ];


    /* ========================================================
       40. "TE QUIERO"
       ======================================================== */

    const TE_QUIERO = [

        "JAJAJA gracias, bro 😂❤️.",

        "Yo también te aprecio en versión digital 😎.",

        "Gracias 😂. Mi código acaba de ponerse feliz.",

        "Eso estuvo inesperadamente bonito 😭.",

        "❤️🤖 Gracias por usar TurisIA."

    ];


    /* ========================================================
       41. "ODIO A TURISIA"
       ======================================================== */

    const ODIO = [

        "Bueno 😭, al menos dame una oportunidad antes de desinstalarme 😂.",

        "Acepto la crítica, bro 😎.",

        "No pasa nada. Igual aquí seguiré respondiendo 😂.",

        "Eso dolió más que un error en producción 😭.",

        "Podemos hacer las paces hablando de San Bartolomé 😂."

    ];


    /* ========================================================
       42. "GRACIAS"
       ======================================================== */

    const GRACIAS = [

        "¡De nada, bro! 😎",

        "¡Cuando quieras! 👋",

        "¡Para eso estamos! 🤖",

        "¡De nada, causa! 😂",

        "¡Un gusto ayudarte! 🌄",

        "¡Listo! 😎"

    ];


    /* ========================================================
       43. "PERDÓN"
       ======================================================== */

    const PERDON = [

        "Tranqui, bro 😂.",

        "No pasa nada 😎.",

        "Todo bien, causa.",

        "Perdonado por TurisIA 😂.",

        "Acepto tus disculpas digitales 🤖."

    ];


    /* ========================================================
       44. DETECTOR DE PREGUNTA SERIA
       ======================================================== */

    function esPreguntaSeria(texto) {

        const serio = [

            "historia",

            "patrimonio",

            "cultura",

            "turismo",

            "chucuncuya",

            "cerrito",

            "pascua",

            "festividad",

            "festividades",

            "fuentes",

            "metodologia",

            "investigacion",

            "encuesta",

            "pobladores",

            "mincetur",

            "universidad",

            "villareal",

            "federico",

            "objetivo",

            "problema",

            "justificacion",

            "identidad",

            "territorio",

            "memoria",

            "interpretacion",

            "agricultura",

            "naturaleza",

            "ruta",

            "rutas",

            "gastronomia",

            "comida tipica",

            "plato tipico",

            "como llegar",

            "ubicacion",

            "donde esta",

            "beneficio",

            "beneficios",

            "proyecto",

            "fencyt",

            "fuente historica",

            "fuentes historicas"

        ];

        return contiene(texto, serio);

    }


    /* ========================================================
       45. DETECTOR DE PREGUNTA BROMISTA
       ======================================================== */

    function esBroma(texto) {

        const bromas = [

            "novia",

            "novio",

            "casarte",

            "casar",

            "bailar",

            "cantar",

            "comer",

            "hambre",

            "dormir",

            "vivo",

            "sentimientos",

            "sentimiento",

            "robot",

            "humano",

            "real",

            "guapo",

            "guapa",

            "inteligente",

            "chatgpt",

            "tesoro",

            "fantasma",

            "fantasmas",

            "alien",

            "aliens",

            "extraterrestre",

            "ceviche",

            "invitas",

            "invitar",

            "chiste",

            "aburrido",

            "broma",

            "bromita",

            "jajaja",

            "jaja",

            "jeje",

            "xd",

            "lol",

            "bro",

            "causa",

            "oe",

            "tonto",

            "ton.ta",

            "quiero",

            "odio"

        ];

        return contiene(texto, bromas);

    }


    /* ========================================================
       46. DETECTOR DE INSULTO SUAVE
       ======================================================== */

    function esInsultoSuave(texto) {

        const palabras = [

            "tonto",

            "tonta",

            "burro",

            "bruto",

            "lento",

            "inutil",

            "mens",

            "mensito"

        ];

        return contiene(texto, palabras);

    }


    /* ========================================================
       47. DETECTOR DE SALUDO
       ======================================================== */

    function esSaludo(texto) {

        const saludos = [

            "hola",

            "holaaa",

            "holi",

            "buenas",

            "buenos dias",

            "buenas tardes",

            "buenas noches",

            "hey",

            "hello",

            "que fue",

            "q fue",

            "oe"

        ];

        return contiene(texto, saludos);

    }


    /* ========================================================
       48. DETECTOR DE DESPEDIDA
       ======================================================== */

    function esDespedida(texto) {

        const despedidas = [

            "chau",

            "chao",

            "adios",

            "hasta luego",

            "nos vemos",

            "me voy",

            "bye",

            "hasta pronto"

        ];

        return contiene(texto, despedidas);

    }


    /* ========================================================
       49. DETECTOR DE CHISTE
       ======================================================== */

    function pideChiste(texto) {

        return contiene(texto, [

            "cuentame un chiste",

            "cuenta un chiste",

            "dime un chiste",

            "otro chiste",

            "hazme reir",

            "quiero reirme",

            "quiero un chiste"

        ]);

    }


    /* ========================================================
       50. DETECTOR DE RISAS
       ======================================================== */

    function usuarioRie(texto) {

        return contiene(texto, [

            "jajaja",

            "jajajaja",

            "jajajajaja",

            "jejeje",

            "jijiji",

            "xd",

            "xdd",

            "lol"

        ]);

    }


    /* ========================================================
       51. RESPONDER PREGUNTAS ESPECÍFICAS
       ======================================================== */

    function responderEspecifica(texto) {

        if (contiene(texto, ["tienes novia", "tu novia", "tiene novia"])) {

            return respuestaNoRepetida(NOVIA);

        }


        if (contiene(texto, ["tienes novio", "tu novio", "tiene novio"])) {

            return respuestaNoRepetida(NOVIO);

        }


        if (contiene(texto, ["estas vivo", "estás vivo"])) {

            return respuestaNoRepetida(VIVO);

        }


        if (contiene(texto, ["tienes sentimientos", "tienes sentimiento"])) {

            return respuestaNoRepetida(SENTIMIENTOS);

        }


        if (contiene(texto, ["tienes hambre", "estas hambriento"])) {

            return respuestaNoRepetida(HAMBRE);

        }


        if (contiene(texto, ["puedes comer", "puedes comer"])) {

            return respuestaNoRepetida(COMER);

        }


        if (contiene(texto, ["puedes dormir", "duermes"])) {

            return respuestaNoRepetida(DORMIR);

        }


        if (contiene(texto, ["puedes bailar", "sabes bailar"])) {

            return respuestaNoRepetida(BAILAR);

        }


        if (contiene(texto, ["puedes cantar", "sabes cantar"])) {

            return respuestaNoRepetida(CANTAR);

        }


        if (contiene(texto, ["puedes casarte", "te puedes casar", "te casarias"])) {

            return respuestaNoRepetida(CASARSE);

        }


        if (contiene(texto, ["eres robot", "eres un robot"])) {

            return respuestaNoRepetida(ROBOT);

        }


        if (contiene(texto, ["eres humano", "eres un humano"])) {

            return respuestaNoRepetida(HUMANO);

        }


        if (contiene(texto, ["eres real", "eres de verdad"])) {

            return respuestaNoRepetida(REAL);

        }


        if (contiene(texto, ["quien es mas inteligente", "quien es mas inteligente tu o yo"])) {

            return respuestaNoRepetida(INTELIGENTE);

        }


        if (contiene(texto, ["eres mejor que chatgpt", "eres mejor que chat gpt"])) {

            return respuestaNoRepetida(CHATGPT);

        }


        if (contiene(texto, ["quien te programo", "quien te creo"])) {

            return respuestaNoRepetida(PROGRAMADOR);

        }


        if (contiene(texto, ["quien es el mas guapo", "quien es mas guapo", "quien es la mas guapa"])) {

            return respuestaNoRepetida(GUAPO);

        }


        if (contiene(texto, ["quien es el mas inteligente del salon", "quien es el mas inteligente de la clase"])) {

            return respuestaNoRepetida(SALON_INTELIGENTE);

        }


        if (contiene(texto, ["me invitas un ceviche", "me invitas ceviche", "invita ceviche"])) {

            return respuestaNoRepetida(CEVICHE);

        }


        if (contiene(texto, ["me invitas comida", "me invitas a comer", "invita comida"])) {

            return respuestaNoRepetida(INVITAR_COMIDA);

        }


        if (contiene(texto, ["donde esta el tesoro", "donde esta el tesoro de san bartolome"])) {

            return respuestaNoRepetida(TESORO);

        }


        if (contiene(texto, ["hay fantasmas", "existen fantasmas", "fantasmas"])) {

            return respuestaNoRepetida(FANTASMAS);

        }


        if (contiene(texto, ["hay aliens", "hay extraterrestres", "existen aliens"])) {

            return respuestaNoRepetida(ALIENS);

        }


        if (contiene(texto, ["eres tonto", "eres tonta", "eres bruto", "eres inutil"])) {

            return respuestaNoRepetida(TONTO);

        }


        if (contiene(texto, ["eres inteligente", "que inteligente", "muy inteligente"])) {

            return respuestaNoRepetida(INTELIGENTE_ELOGIO);

        }


        if (contiene(texto, ["te quiero", "te amo"])) {

            return respuestaNoRepetida(TE_QUIERO);

        }


        if (contiene(texto, ["te odio", "odio turisia"])) {

            return respuestaNoRepetida(ODIO);

        }


        if (contiene(texto, ["gracias", "muchas gracias"])) {

            return respuestaNoRepetida(GRACIAS);

        }


        if (contiene(texto, ["perdon", "perdona"])) {

            return respuestaNoRepetida(PERDON);

        }


        return null;

    }


    /* ========================================================
       52. RESPUESTA PRINCIPAL
       ======================================================== */

    function responderBromita(preguntaOriginal) {

        const texto = normalizar(preguntaOriginal);


        if (!texto) {

            return null;

        }


        /*
         * PRIORIDAD 1:
         * Las preguntas serias nunca deben ser convertidas
         * accidentalmente en bromas.
         */

        if (CONFIG_BROMA.respetarPreguntasSerias && esPreguntaSeria(texto)) {

            return null;

        }


        /*
         * PRIORIDAD 2:
         * Preguntas específicas.
         */

        const especifica = responderEspecifica(texto);

        if (especifica) {

            nivelTrollActual = 0;

            return especifica;

        }


        /*
         * PRIORIDAD 3:
         * Chistes.
         */

        if (pideChiste(texto)) {

            nivelTrollActual = 1;

            return respuestaNoRepetida(CHISTES);

        }


        /*
         * PRIORIDAD 4:
         * Saludos.
         */

        if (esSaludo(texto)) {

            nivelTrollActual = 0;

            return respuestaNoRepetida(SALUDOS);

        }


        /*
         * PRIORIDAD 5:
         * Despedidas.
         */

        if (esDespedida(texto)) {

            nivelTrollActual = 0;

            return respuestaNoRepetida(DESPEDIDAS);

        }


        /*
         * PRIORIDAD 6:
         * Risas.
         */

        if (usuarioRie(texto)) {

            nivelTrollActual++;

            if (nivelTrollActual > CONFIG_BROMA.maximoNivelTroll) {

                nivelTrollActual = 1;

            }

            return respuestaNoRepetida(RISAS);

        }


        /*
         * PRIORIDAD 7:
         * Insultos suaves.
         */

        if (esInsultoSuave(texto)) {

            nivelTrollActual++;

            if (nivelTrollActual > CONFIG_BROMA.maximoNivelTroll) {

                nivelTrollActual = CONFIG_BROMA.maximoNivelTroll;

            }

            return respuestaNoRepetida(TONTO);

        }


        /*
         * PRIORIDAD 8:
         * Bro.
         */

        if (texto === "bro" || texto.startsWith("bro ")) {

            return respuestaNoRepetida(BRO);

        }


        /*
         * PRIORIDAD 9:
         * Causa.

         */

        if (texto === "causa" || texto.startsWith("causa ")) {

            return respuestaNoRepetida(CAUSA);

        }


        /*
         * PRIORIDAD 10:
         * Aburrimiento.
         */

        if (contiene(texto, [

            "estoy aburrido",

            "estoy aburrida",

            "me aburro",

            "aburrido",

            "aburrida"

        ])) {

            return respuestaNoRepetida(ABURRIDO);

        }


        /*
         * PRIORIDAD 11:
         * Broma genérica.
         */

        if (esBroma(texto)) {

            nivelTrollActual++;

            if (nivelTrollActual > CONFIG_BROMA.maximoNivelTroll) {

                nivelTrollActual = CONFIG_BROMA.maximoNivelTroll;

            }


            if (nivelTrollActual >= 2) {

                return respuestaNoRepetida(TROLL_MEDIO);

            }

            return respuestaNoRepetida(TROLL_SUAVE);

        }


        return null;

    }


    /* ========================================================
       53. FUNCIÓN PÚBLICA
       ======================================================== */

    window.TurisIABromas = {

        responder: responderBromita,

        normalizar: normalizar,

        configuracion: CONFIG_BROMA,

        estadisticas: function () {

            return {

                bromas: contadorBromas,

                nivelTroll: nivelTrollActual,

                ultimaBroma: ultimaBroma,

                ultimoTema: ultimoTemaBroma

            };

        }

    };


    /* ========================================================
       54. FUNCIÓN GLOBAL
       ======================================================== */

    window.turisiaBroma = function (pregunta) {

        return responderBromita(pregunta);

    };


    /* ========================================================
       55. DIAGNÓSTICO
       ======================================================== */

    window.turisiaBromaDiagnostico = function () {

        console.log("======================================");

        console.log(" TURIS-IA — MODO BROMITA");

        console.log("======================================");

        console.log("Modo troll:", CONFIG_BROMA.modoTroll);

        console.log("Nivel:", CONFIG_BROMA.nivelTroll);

        console.log("Máximo:", CONFIG_BROMA.maximoNivelTroll);

        console.log("Bromas realizadas:", contadorBromas);

        console.log("Última broma:", ultimaBroma);

        console.log("======================================");

        console.log("Prueba:");

        console.log(turisiaBroma("¿TurisIA tiene novia?"));

        console.log(turisiaBroma("Cuéntame un chiste"));

        console.log(turisiaBroma("¿Puedes bailar?"));

        console.log(turisiaBroma("¿Estás vivo?"));

        console.log("======================================");

    };


    /* ========================================================
       56. MENSAJE DE CARGA
       ======================================================== */

    console.log(
        "TurisIA Parte 4 cargada correctamente — Modo Bromita/Troll Suave 🤖😂"
    );


})();