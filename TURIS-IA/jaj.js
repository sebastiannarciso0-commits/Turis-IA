// ==========================================
// NAVEGACIÓN SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ==========================================
// ANIMACIÓN AL CARGAR
// ==========================================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});


// ==========================================
// ABRIR ASISTENTE TURISIA
// ==========================================

function abrirAsistente() {

    const ventana =
        document.getElementById("chatWindow");

    if (!ventana) return;

    ventana.style.display = "flex";

    setTimeout(() => {

        const input =
            document.getElementById("mensaje");

        if (input) {

            input.focus();

        }

    }, 150);

}


// ==========================================
// BASE DE CONOCIMIENTOS DE TURISIA
// ==========================================

const conocimientoTurisIA = {

    atractivos: {

        palabras: [
            "atractivo",
            "atractivos",
            "turistico",
            "turísticos",
            "turisticos",
            "turístico",
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


    chucuncuya: {

        palabras: [
            "chucuncuya",
            "sitio arqueologico",
            "sitio arqueológico",
            "arqueologia",
            "arqueología",
            "ruinas"
        ],

        respuesta:
            "Chucuncuya es un sitio arqueológico ubicado en el distrito de San Bartolomé, provincia de Huarochirí. Tiene importancia histórica y cultural porque permite conocer parte del pasado de la zona. Al visitarlo se recomienda respetar el patrimonio, no alterar las estructuras y evitar dejar residuos."
    },


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
            "La Iglesia de San Bartolomé es uno de los lugares representativos del distrito. Tiene importancia religiosa, histórica y cultural, y forma parte de la identidad de la comunidad de San Bartolomé."
    },


    plaza: {

        palabras: [
            "plaza",
            "plaza principal",
            "plaza de armas",
            "centro del pueblo"
        ],

        respuesta:
            "La Plaza Principal de San Bartolomé es uno de los espacios más importantes del distrito. Es un punto de encuentro para la población y escenario de diferentes actividades sociales, culturales y festivas."
    },


    mirador: {

        palabras: [
            "mirador",
            "mirador natural",
            "paisaje",
            "paisajes",
            "vista",
            "vistas",
            "naturaleza"
        ],

        respuesta:
            "El Mirador Natural de San Bartolomé es un lugar ideal para apreciar los paisajes del distrito y su entorno natural. Es recomendable para disfrutar de la naturaleza, observar el paisaje y tomar fotografías."
    },


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
            "trekking"
        ],

        respuesta:
            "San Bartolomé cuenta con espacios adecuados para realizar caminatas y conocer sus paisajes. Si realizas una ruta, te recomiendo llevar agua, usar calzado cómodo, protegerte del sol, respetar el entorno y evitar dejar basura."
    },


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
            "festivo"
        ],

        respuesta:
            "Las festividades de San Bartolomé forman parte de la identidad cultural del distrito. En estas celebraciones se desarrollan actividades religiosas, culturales y sociales que reúnen a la comunidad y a los visitantes."
    },


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
            "gastronómico"
        ],

        respuesta:
            "La gastronomía forma parte importante de la experiencia turística de San Bartolomé. Los visitantes pueden conocer preparaciones tradicionales y disfrutar de productos propios de la localidad."
    },


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
            "San Bartolomé pertenece a la provincia de Huarochirí, en la región Lima. Su identidad está relacionada con su historia, sus tradiciones, sus espacios culturales y el entorno natural que caracteriza al distrito."
    },


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
            "qué debo llevar"
        ],

        respuesta:
            "Si visitas San Bartolomé, te recomiendo llevar agua, bloqueador solar, gorra o sombrero, ropa cómoda y calzado adecuado. También es importante respetar los lugares turísticos, no dejar basura y cuidar el patrimonio y la naturaleza."
    }

};


// ==========================================
// RESPUESTA DE TURISIA
// ==========================================

function responderTurisIA(pregunta) {

    const texto = pregunta
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    // SALUDOS

    if (
        texto.includes("hola") ||
        texto.includes("buenas") ||
        texto.includes("buenos dias") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches")
    ) {

        return "¡Hola! Soy TurisIA, tu asistente turístico de San Bartolomé. ¿Qué te gustaría conocer?";

    }


    // AGRADECIMIENTOS

    if (
        texto.includes("gracias") ||
        texto.includes("muchas gracias")
    ) {

        return "¡De nada! Espero que disfrutes tu visita a San Bartolomé.";

    }


    // DESPEDIDAS

    if (
        texto.includes("adios") ||
        texto.includes("hasta luego")
    ) {

        return "¡Hasta luego! Espero que tengas una excelente visita a San Bartolomé.";

    }


    // BUSCAR INFORMACIÓN

    for (const categoria in conocimientoTurisIA) {

        const datos =
            conocimientoTurisIA[categoria];

        for (const palabra of datos.palabras) {

            if (texto.includes(palabra)) {

                return datos.respuesta;

            }

        }

    }


    // RESPUESTA CUANDO NO ENCUENTRA INFORMACIÓN

    return `Todavía no tengo información específica sobre esa pregunta.

Puedes preguntarme sobre:

📍 Lugares turísticos
🏛️ Chucuncuya
⛪ Iglesia de San Bartolomé
🏞️ Mirador Natural
🏛️ Plaza Principal
🥾 Rutas de caminata
🎉 Festividades
🍽️ Gastronomía
📜 Historia
💡 Recomendaciones`;

}


// ==========================================
// ELEMENTOS DEL CHAT
// ==========================================

const inputTurisIA =
    document.getElementById("mensaje");

const botonEnviarTurisIA =
    document.getElementById("enviar");

const cuerpoChat =
    document.getElementById("chatBody");


// ==========================================
// BOTÓN ENVIAR
// ==========================================

if (botonEnviarTurisIA) {

    botonEnviarTurisIA.addEventListener(
        "click",
        enviarMensajeTurisIA
    );

}


// ==========================================
// ENTER PARA ENVIAR
// ==========================================

if (inputTurisIA) {

    inputTurisIA.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                enviarMensajeTurisIA();

            }

        }
    );

}


// ==========================================
// ENVIAR MENSAJE
// ==========================================

function enviarMensajeTurisIA() {

    if (!inputTurisIA || !cuerpoChat) {

        return;

    }


    const pregunta =
        inputTurisIA.value.trim();


    if (pregunta === "") {

        return;

    }


    // Mostrar mensaje del usuario

    agregarMensajeTurisIA(
        pregunta,
        "user-message"
    );


    // Limpiar caja de texto

    inputTurisIA.value = "";


    // Simular que TurisIA está pensando

    setTimeout(() => {

        const respuesta =
            responderTurisIA(pregunta);


        agregarMensajeTurisIA(
            respuesta,
            "bot-message"
        );

    }, 500);

}


// ==========================================
// MOSTRAR MENSAJE EN EL CHAT
// ==========================================

function agregarMensajeTurisIA(
    texto,
    clase
) {

    const mensaje =
        document.createElement("div");


    mensaje.classList.add(clase);


    mensaje.style.whiteSpace =
        "pre-line";


    mensaje.textContent =
        texto;


    cuerpoChat.appendChild(
        mensaje
    );


    cuerpoChat.scrollTop =
        cuerpoChat.scrollHeight;

}


// ==========================================
// CERRAR CHAT
// ==========================================

const botonCerrarChat =
    document.getElementById(
        "cerrarChat"
    );


if (botonCerrarChat) {

    botonCerrarChat.addEventListener(
        "click",
        function() {

            const ventana =
                document.getElementById(
                    "chatWindow"
                );


            if (ventana) {

                ventana.style.display =
                    "none";

            }

        }
    );

}


// ==========================================
// LIMPIAR CONVERSACIÓN
// ==========================================

const botonLimpiarChat =
    document.getElementById(
        "limpiarChat"
    );


if (botonLimpiarChat) {

    botonLimpiarChat.addEventListener(
        "click",
        function() {

            if (!cuerpoChat) {

                return;

            }


            cuerpoChat.innerHTML = `

                <div class="bot-message">

                    <strong>
                        ¡Hola! Soy TurisIA.
                    </strong>

                    <br><br>

                    Estoy aquí para ayudarte a
                    descubrir San Bartolomé.

                    <br><br>

                    Puedes preguntarme por:

                    <br><br>

                    📍 Lugares turísticos

                    <br>

                    🥾 Rutas

                    <br>

                    🏛️ Cultura e historia

                    <br>

                    🍽️ Gastronomía

                    <br>

                    🎉 Festividades

                </div>

            `;

        }
    );

}