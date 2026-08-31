/* ==========================================
   TURISIA - SISTEMA DE INTENCIONES
========================================== */

const INTENCIONES = {

    SALUDO: [
        "hola",
        "buenas",
        "buenos dias",
        "buenas tardes",
        "buenas noches",
        "hey"
    ],

    LUGARES: [
        "lugar",
        "lugares",
        "visitar",
        "conocer",
        "atractivo",
        "atractivos",
        "turismo",
        "turistico",
        "turísticos"
    ],

    RUTAS: [
        "ruta",
        "rutas",
        "recorrido",
        "recorridos",
        "caminar",
        "caminata",
        "senderismo",
        "sendero"
    ],

    HISTORIA: [
        "historia",
        "historico",
        "histórica",
        "patrimonio",
        "arqueologia",
        "arqueológico",
        "cultura"
    ],

    GASTRONOMIA: [
        "comida",
        "comer",
        "gastronomia",
        "gastronomía",
        "plato",
        "platos",
        "comida tipica",
        "comida típica"
    ],

    FESTIVIDADES: [
        "festividad",
        "festividades",
        "fiesta",
        "fiestas",
        "celebracion",
        "celebración",
        "evento",
        "eventos"
    ],

    UBICACION: [
        "donde",
        "dónde",
        "ubicacion",
        "ubicación",
        "llegar",
        "como llego",
        "cómo llego",
        "mapa"
    ],

    TIEMPO: [
        "horas",
        "hora",
        "tiempo",
        "cuanto tiempo",
        "cuánto tiempo",
        "rapido",
        "rápido"
    ],

    FAMILIA: [
        "familia",
        "familiares",
        "niños",
        "niños",
        "hijos"
    ],

    FOTOGRAFIA: [
        "foto",
        "fotos",
        "fotografia",
        "fotografía",
        "fotografiar",
        "paisaje"
    ]

};


/* ==========================================
   NORMALIZAR TEXTO
========================================== */

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* ==========================================
   DETECTAR INTENCIONES
========================================== */

function detectarIntenciones(texto) {

    const textoNormalizado =
        normalizarTexto(texto);

    const detectadas = [];

    for (
        const [intencion, palabras]
        of Object.entries(INTENCIONES)
    ) {

        for (const palabra of palabras) {

            const palabraNormalizada =
                normalizarTexto(palabra);

            if (
                textoNormalizado.includes(
                    palabraNormalizada
                )
            ) {

                detectadas.push(intencion);

                break;

            }

        }

    }

    return detectadas;

}


/* ==========================================
   EXTRAER TIEMPO
========================================== */

function detectarTiempo(texto) {

    const textoNormalizado =
        normalizarTexto(texto);

    const resultado =
        textoNormalizado.match(
            /(\d+(?:[.,]\d+)?)\s*(hora|horas|minuto|minutos)/
        );

    if (!resultado) {

        return null;

    }

    return {

        cantidad:
            parseFloat(
                resultado[1].replace(",", ".")
            ),

        unidad:
            resultado[2]

    };

}


/* ==========================================
   DETECTAR TIPO DE VIAJERO
========================================== */

function detectarViajero(texto) {

    const textoNormalizado =
        normalizarTexto(texto);

    if (
        textoNormalizado.includes("familia") ||
        textoNormalizado.includes("ninos") ||
        textoNormalizado.includes("hijos")
    ) {

        return "familia";

    }

    if (
        textoNormalizado.includes("pareja") ||
        textoNormalizado.includes("novia") ||
        textoNormalizado.includes("novio")
    ) {

        return "pareja";

    }

    if (
        textoNormalizado.includes("amigos") ||
        textoNormalizado.includes("amigo")
    ) {

        return "amigos";

    }

    if (
        textoNormalizado.includes("solo") ||
        textoNormalizado.includes("sola")
    ) {

        return "solo";

    }

    return null;

}


/* ==========================================
   ANALIZAR MENSAJE COMPLETO
========================================== */

function analizarMensaje(texto) {

    return {

        textoOriginal: texto,

        intenciones:
            detectarIntenciones(texto),

        tiempo:
            detectarTiempo(texto),

        viajero:
            detectarViajero(texto)

    };

}