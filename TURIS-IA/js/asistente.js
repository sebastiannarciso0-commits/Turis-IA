// ============================================================
// TURISIA - ASISTENTE.JS
// Motor de inteligencia turística local
// San Bartolomé - Huarochirí
// ============================================================


// ============================================================
// BASE DE CONOCIMIENTOS
// ============================================================

const conocimientoTurisIA = {

    atractivos: {
        palabras: [
            "atractivo",
            "atractivos",
            "turistico",
            "turisticos",
            "turístico",
            "turísticos",
            "lugares",
            "lugar",
            "visitar",
            "visito",
            "visitarlo",
            "conocer",
            "conozco",
            "sitios",
            "destinos"
        ],

        respuesta:
            "En San Bartolomé puedes conocer diferentes atractivos turísticos, como Chucuncuya, la Iglesia de San Bartolomé, la Plaza Principal y el Mirador Natural. También puedes realizar rutas de caminata y conocer las tradiciones y gastronomía local."
    },


    // ========================================================
    // CHUCUNCUYA
    // ========================================================

    chucuncuya: {
        palabras: [
            "chucuncuya",
            "sitio arqueologico",
            "sitio arqueológico",
            "arqueologia",
            "arqueología",
            "ruinas",
            "zona arqueologica",
            "zona arqueológica"
        ],

        respuesta:
            "Chucuncuya es un sitio arqueológico ubicado en el distrito de San Bartolomé, provincia de Huarochirí. Es importante por su valor histórico y cultural, ya que permite conocer parte del pasado de la zona. Si lo visitas, se recomienda respetar el patrimonio, no alterar las estructuras y evitar dejar residuos."
    },


    // ========================================================
    // IGLESIA
    // ========================================================

    iglesia: {
        palabras: [
            "iglesia",
            "templo",
            "iglesia de san bartolome",
            "iglesia de san bartolomé",
            "san bartolome iglesia",
            "san bartolomé iglesia"
        ],

        respuesta:
            "La Iglesia de San Bartolomé es uno de los lugares representativos del distrito. Tiene importancia religiosa, histórica y cultural, y forma parte de la identidad de la comunidad. Es un lugar interesante para conocer durante un recorrido por el centro del distrito."
    },


    // ========================================================
    // PLAZA PRINCIPAL
    // ========================================================

    plaza: {
        palabras: [
            "plaza",
            "plaza principal",
            "plaza de armas",
            "centro del pueblo",
            "centro de san bartolome",
            "centro de san bartolomé"
        ],

        respuesta:
            "La Plaza Principal de San Bartolomé es uno de los espacios más importantes del distrito. Es un punto de encuentro para la población y un lugar donde se desarrollan diferentes actividades sociales, culturales y festivas."
    },


    // ========================================================
    // MIRADOR
    // ========================================================

    mirador: {
        palabras: [
            "mirador",
            "mirador natural",
            "paisaje",
            "paisajes",
            "vista",
            "vistas",
            "naturaleza",
            "fotografia",
            "fotografía",
            "fotos"
        ],

        respuesta:
            "El Mirador Natural de San Bartolomé es un lugar ideal para apreciar los paisajes del distrito y su entorno. Es recomendable para disfrutar de la naturaleza, observar el paisaje y tomar fotografías. Recuerda cuidar el lugar y no dejar basura."
    },


    // ========================================================
    // RUTAS
    // ========================================================

    rutas: {
        palabras: [
            "ruta",
            "rutas",
            "caminar",
            "caminata",
            "caminatas",
            "senderismo",
            "sendero",
            "senderos",
            "trekking",
            "recorrido",
            "recorridos"
        ],

        respuesta:
            "San Bartolomé cuenta con espacios adecuados para realizar caminatas y conocer sus paisajes. Para realizar una ruta se recomienda llevar agua, utilizar calzado cómodo, protegerse del sol, llevar el celular cargado y respetar el entorno natural."
    },


    // ========================================================
    // FESTIVIDADES
    // ========================================================

    festividades: {
        palabras: [
            "festividad",
            "festividades",
            "fiesta",
            "fiestas",
            "celebracion",
            "celebración",
            "celebraciones",
            "patron",
            "patrón",
            "festivo",
            "tradiciones",
            "tradicion",
            "tradición"
        ],

        respuesta:
            "Las festividades de San Bartolomé forman parte de la identidad cultural del distrito. En estas celebraciones se desarrollan actividades religiosas, culturales y sociales que reúnen a la comunidad y a los visitantes."
    },


    // ========================================================
    // GASTRONOMÍA
    // ========================================================

    gastronomia: {
        palabras: [
            "gastronomia",
            "gastronomía",
            "comida",
            "comidas",
            "comer",
            "plato",
            "platos",
            "gastronomico",
            "gastronómico",
            "alimento",
            "alimentos"
        ],

        respuesta:
            "La gastronomía forma parte importante de la experiencia turística de San Bartolomé. Los visitantes pueden conocer preparaciones tradicionales y productos propios de la localidad. Probar la comida local también permite conocer mejor las costumbres de la comunidad."
    },


    // ========================================================
    // HISTORIA
    // ========================================================

    historia: {
        palabras: [
            "historia",
            "historico",
            "histórico",
            "pasado",
            "origen",
            "historia de san bartolome",
            "historia de san bartolomé"
        ],

        respuesta:
            "San Bartolomé pertenece a la provincia de Huarochirí, en la región Lima. El distrito posee una identidad relacionada con su historia, sus tradiciones, su patrimonio cultural y el entorno natural que lo caracteriza."
    },


    // ========================================================
    // RECOMENDACIONES
    // ========================================================

    recomendaciones: {
        palabras: [
            "recomendacion",
            "recomendación",
            "recomendaciones",
            "recomiendas",
            "recomendar",
            "consejo",
            "consejos",
            "llevar",
            "que debo llevar",
            "qué debo llevar",
            "necesito"
        ],

        respuesta:
            "Si visitas San Bartolomé, te recomiendo llevar agua, bloqueador solar, gorra o sombrero, ropa cómoda y calzado adecuado. También es importante respetar los lugares turísticos, no dejar basura y cuidar el patrimonio y la naturaleza."
    },


    // ========================================================
    // UBICACIÓN
    // ========================================================

    ubicacion: {
        palabras: [
            "donde queda",
            "dónde queda",
            "donde esta",
            "dónde está",
            "ubicacion",
            "ubicación",
            "ubicado",
            "queda",
            "donde se encuentra",
            "dónde se encuentra"
        ],

        respuesta:
            "San Bartolomé se encuentra en la provincia de Huarochirí, región Lima, Perú. Es un distrito ubicado en un entorno de valle y zonas naturales, con diferentes espacios de interés histórico, cultural y turístico."
    },


    // ========================================================
    // TURISMO EN FAMILIA
    // ========================================================

    familia: {
        palabras: [
            "familia",
            "familias",
            "niños",
            "niños",
            "ninos",
            "padres",
            "familiares"
        ],

        respuesta:
            "Si visitas San Bartolomé en familia, puedes comenzar por la Plaza Principal y conocer lugares culturales como la Iglesia de San Bartolomé. También puedes visitar atractivos naturales y realizar recorridos adecuados a las condiciones del grupo. Siempre es recomendable llevar agua y cuidar el entorno."
    },


    // ========================================================
    // FOTOGRAFÍA
    // ========================================================

    fotografia: {
        palabras: [
            "foto",
            "fotos",
            "fotografia",
            "fotografía",
            "fotografias",
            "fotografías",
            "fotografiar",
            "camara",
            "cámara"
        ],

        respuesta:
            "Para tomar fotografías, el Mirador Natural puede ser una buena opción por sus paisajes. También puedes fotografiar espacios representativos como la Plaza Principal y la Iglesia de San Bartolomé. Recuerda respetar las zonas culturales y naturales."
    }

};


// ============================================================
// NORMALIZAR TEXTO
// ============================================================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// ============================================================
// RESPUESTA PRINCIPAL DE TURISIA
// ============================================================

function responderTurisIA(pregunta) {

    const texto =
        normalizarTexto(pregunta);


    // --------------------------------------------------------
    // SALUDOS
    // --------------------------------------------------------

    if (
        texto === "hola" ||
        texto.includes("hola turisia") ||
        texto.includes("buenas") ||
        texto.includes("buenos dias") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches")
    ) {

        return "¡Hola! Soy TurisIA, tu asistente turístico de San Bartolomé. Puedo ayudarte con atractivos, rutas, historia, cultura, gastronomía, festividades y recomendaciones. ¿Qué deseas conocer?";

    }


    // --------------------------------------------------------
    // AGRADECIMIENTOS
    // --------------------------------------------------------

    if (
        texto.includes("gracias") ||
        texto.includes("muchas gracias") ||
        texto.includes("te agradezco")
    ) {

        return "¡De nada! Me alegra poder ayudarte. Espero que disfrutes tu visita a San Bartolomé.";

    }


    // --------------------------------------------------------
    // DESPEDIDAS
    // --------------------------------------------------------

    if (
        texto.includes("adios") ||
        texto.includes("hasta luego") ||
        texto.includes("nos vemos")
    ) {

        return "¡Hasta luego! Espero que tengas una excelente experiencia conociendo San Bartolomé.";

    }


    // ========================================================
    // ITINERARIO DE UN DÍA
    // ========================================================

    if (
        texto.includes("un dia") ||
        texto.includes("un día") ||
        texto.includes("dia completo") ||
        texto.includes("día completo") ||
        texto.includes("recorrido de un dia") ||
        texto.includes("recorrido de un día") ||
        texto.includes("que puedo hacer")
    ) {

        return `Si tienes un día para conocer San Bartolomé, puedes organizar tu recorrido así:

🌅 Mañana:
Visita Chucuncuya y conoce parte del patrimonio histórico de la zona.

🏛️ Mediodía:
Recorre la Plaza Principal y conoce la Iglesia de San Bartolomé.

🍽️ Después:
Disfruta de la gastronomía local.

🌄 Tarde:
Visita el Mirador Natural y disfruta del paisaje.

🥾 Finalmente:
Puedes realizar una caminata corta o recorrer otros espacios del distrito.

La ruta puede adaptarse según el tiempo disponible y las condiciones del visitante.`;

    }


    // ========================================================
    // RECOMENDACIÓN GENERAL
    // ========================================================

    if (
        texto.includes("que me recomiendas") ||
        texto.includes("qué me recomiendas") ||
        texto.includes("recomiendame") ||
        texto.includes("recomiéndame")
    ) {

        return `Si es tu primera visita a San Bartolomé, te recomiendo comenzar por:

1. 🏛️ Chucuncuya
2. ⛪ Iglesia de San Bartolomé
3. 🏘️ Plaza Principal
4. 🌄 Mirador Natural
5. 🥾 Una ruta de caminata

También puedes conocer la gastronomía y las tradiciones locales para tener una experiencia más completa.`;

    }


    // ========================================================
    // BUSCAR EN LA BASE DE CONOCIMIENTOS
    // ========================================================

    for (
        const categoria in conocimientoTurisIA
    ) {

        const datos =
            conocimientoTurisIA[categoria];


        for (
            const palabra of datos.palabras
        ) {

            const palabraNormalizada =
                normalizarTexto(palabra);


            if (
                texto.includes(
                    palabraNormalizada
                )
            ) {

                return datos.respuesta;

            }

        }

    }


    // ========================================================
    // RESPUESTA DESCONOCIDA
    // ========================================================

    return `Todavía no tengo información específica sobre esa pregunta.

Pero puedo ayudarte con:

📍 Atractivos turísticos
🏛️ Chucuncuya
⛪ Iglesia de San Bartolomé
🏘️ Plaza Principal
🌄 Mirador Natural
🥾 Rutas de caminata
🎉 Festividades
🍽️ Gastronomía
📜 Historia
📍 Ubicación
📸 Fotografía
👨‍👩‍👧 Turismo en familia
💡 Recomendaciones

Por ejemplo, puedes preguntarme:

"¿Qué lugares turísticos puedo visitar?"

o

"¿Qué puedo hacer en San Bartolomé en un día?"`;

}


// ============================================================
// COMPATIBILIDAD CON APP.JS
// ============================================================

// app.js utiliza esta función.
// No hacemos fetch, no usamos APIs externas
// y no necesitamos ningún servidor.

function responder(texto) {

    return responderTurisIA(texto);

}


// ============================================================
// MENSAJE DE CONSOLA
// ============================================================

console.log(
    "🤖 TurisIA: motor turístico local cargado correctamente."
);

console.log(
    "📍 Especialidad: San Bartolomé - Huarochirí."
);