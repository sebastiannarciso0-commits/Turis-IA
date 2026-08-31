// ============================================================
// TURISIA - APP.JS
// Sistema local de asistencia turística
// ============================================================


// ============================================================
// INICIO DE LA APLICACIÓN
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 TurisIA iniciado correctamente");

    inicializarTurisIA();

});


// ============================================================
// INICIALIZAR TURISIA
// ============================================================

function inicializarTurisIA() {

    const chatWindow =
        document.getElementById("chatWindow");

    const input =
        document.getElementById("mensaje");

    const enviar =
        document.getElementById("enviar");

    const cerrar =
        document.getElementById("cerrarChat");

    const limpiar =
        document.getElementById("limpiarChat");


    // --------------------------------------------------------
    // Comprobar elementos
    // --------------------------------------------------------

    if (!chatWindow) {

        console.warn(
            "⚠️ No se encontró #chatWindow"
        );

    }


    if (!input) {

        console.warn(
            "⚠️ No se encontró #mensaje"
        );

    }


    if (!enviar) {

        console.warn(
            "⚠️ No se encontró #enviar"
        );

    }


    // --------------------------------------------------------
    // BOTÓN ENVIAR
    // --------------------------------------------------------

    if (enviar) {

        enviar.addEventListener(
            "click",
            () => {

                procesarPregunta();

            }
        );

    }


    // --------------------------------------------------------
    // ENTER
    // --------------------------------------------------------

    if (input) {

        input.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    procesarPregunta();

                }

            }
        );

    }


    // --------------------------------------------------------
    // CERRAR CHAT
    // --------------------------------------------------------

    if (cerrar) {

        cerrar.addEventListener(
            "click",
            () => {

                cerrarAsistente();

            }
        );

    }


    // --------------------------------------------------------
    // LIMPIAR CHAT
    // --------------------------------------------------------

    if (limpiar) {

        limpiar.addEventListener(
            "click",
            () => {

                limpiarConversacion();

            }
        );

    }

}


// ============================================================
// PROCESAR PREGUNTA
// ============================================================

function procesarPregunta() {

    const input =
        document.getElementById("mensaje");

    const chat =
        document.getElementById("chatBody");


    if (!input || !chat) {

        return;

    }


    const pregunta =
        input.value.trim();


    // No permitir mensajes vacíos

    if (!pregunta) {

        return;

    }


    // --------------------------------------------------------
    // MOSTRAR MENSAJE DEL USUARIO
    // --------------------------------------------------------

    mostrarMensaje(
        pregunta,
        "user-message"
    );


    // Limpiar input

    input.value = "";


    // --------------------------------------------------------
    // INDICADOR
    // --------------------------------------------------------

    mostrarIndicador();


    // --------------------------------------------------------
    // RESPUESTA LOCAL
    // --------------------------------------------------------

    setTimeout(() => {

        ocultarIndicador();


        let respuesta;


        // Utilizar el motor de TurisIA
        // ubicado en asistente.js

        if (
            typeof responderTurisIA === "function"
        ) {

            respuesta =
                responderTurisIA(pregunta);

        }

        else {

            respuesta =
                "Lo siento, mi sistema turístico todavía está iniciándose. Intenta nuevamente.";

        }


        // Mostrar respuesta

        mostrarMensaje(
            respuesta,
            "bot-message"
        );


    }, 600);

}


// ============================================================
// MOSTRAR MENSAJE
// ============================================================

function mostrarMensaje(
    texto,
    clase
) {

    const chat =
        document.getElementById("chatBody");


    if (!chat) {

        return;

    }


    const mensaje =
        document.createElement("div");


    mensaje.classList.add(
        clase
    );


    mensaje.textContent =
        texto;


    // Permitir saltos de línea

    mensaje.style.whiteSpace =
        "pre-line";


    chat.appendChild(
        mensaje
    );


    // Bajar automáticamente

    chat.scrollTop =
        chat.scrollHeight;

}


// ============================================================
// INDICADOR "TURISIA ESTÁ ESCRIBIENDO"
// ============================================================

function mostrarIndicador() {

    const chat =
        document.getElementById("chatBody");


    if (!chat) {

        return;

    }


    // Evitar duplicados

    if (
        document.getElementById(
            "turisiaTyping"
        )
    ) {

        return;

    }


    const indicador =
        document.createElement("div");


    indicador.id =
        "turisiaTyping";


    indicador.className =
        "bot-message";


    indicador.innerHTML =
        "TurisIA está escribiendo...";


    chat.appendChild(
        indicador
    );


    chat.scrollTop =
        chat.scrollHeight;

}


// ============================================================
// OCULTAR INDICADOR
// ============================================================

function ocultarIndicador() {

    const indicador =
        document.getElementById(
            "turisiaTyping"
        );


    if (indicador) {

        indicador.remove();

    }

}


// ============================================================
// ABRIR ASISTENTE
// ============================================================

function abrirAsistente() {

    const ventana =
        document.getElementById(
            "chatWindow"
        );


    if (!ventana) {

        console.warn(
            "⚠️ No se encontró la ventana del asistente."
        );

        return;

    }


    ventana.style.display =
        "flex";


    setTimeout(() => {

        const input =
            document.getElementById(
                "mensaje"
            );


        if (input) {

            input.focus();

        }

    }, 150);

}


// ============================================================
// CERRAR ASISTENTE
// ============================================================

function cerrarAsistente() {

    const ventana =
        document.getElementById(
            "chatWindow"
        );


    if (ventana) {

        ventana.style.display =
            "none";

    }

}


// ============================================================
// LIMPIAR CONVERSACIÓN
// ============================================================

function limpiarConversacion() {

    const chat =
        document.getElementById(
            "chatBody"
        );


    if (!chat) {

        return;

    }


    chat.innerHTML = `

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


// ============================================================
// FUNCIÓN COMPATIBLE
// ============================================================

// Algunas partes del proyecto pueden llamar
// a responder(texto). La mantenemos para
// evitar errores de compatibilidad.

function responder(texto) {

    if (
        typeof responderTurisIA === "function"
    ) {

        return responderTurisIA(
            texto
        );

    }


    return "Soy TurisIA, tu asistente turístico de San Bartolomé.";

}


// ============================================================
// MENSAJE DE INICIO
// ============================================================

console.log(
    "🤖 TurisIA: modo asistente local activado."
);

console.log(
    "📍 Especialidad: turismo de San Bartolomé, Huarochirí."
);