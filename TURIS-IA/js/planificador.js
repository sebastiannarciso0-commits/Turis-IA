/* ==========================================
   TURISIA - PLANIFICADOR INTELIGENTE
========================================== */

function crearPlan(analisis) {

    const rutas =
        BD.rutas || [];

    const lugares =
        BD.lugares || [];


    if (
        !analisis.tiempo ||
        !lugares.length
    ) {

        return null;

    }


    const tiempo =
        analisis.tiempo;


    let minutosDisponibles;


    if (
        tiempo.unidad.includes("hora")
    ) {

        minutosDisponibles =
            tiempo.cantidad * 60;

    } else {

        minutosDisponibles =
            tiempo.cantidad;

    }


    const viajero =
        analisis.viajero;


    let lugaresSeleccionados =
        lugares.filter(lugar => {

            if (!viajero) {

                return true;

            }

            return lugar.recomendado_para
                ?.includes(viajero);

        });


    if (
        lugaresSeleccionados.length === 0
    ) {

        lugaresSeleccionados =
            lugares;

    }


    let tiempoUsado = 0;

    const plan = [];


    for (
        const lugar
        of lugaresSeleccionados
    ) {

        const duracion =
            convertirTiempo(
                lugar.tiempo_visita
            );


        if (
            tiempoUsado +
            duracion
            <= minutosDisponibles
        ) {

            plan.push(lugar);

            tiempoUsado += duracion;

        }

    }


    return {

        tiempoDisponible:
            minutosDisponibles,

        tiempoUtilizado:
            tiempoUsado,

        lugares:
            plan

    };

}


/* ==========================================
   CONVERTIR TIEMPO
========================================== */

function convertirTiempo(texto) {

    const resultado =
        texto.match(
            /(\d+)\s*hora/
        );


    if (resultado) {

        return (
            parseInt(resultado[1])
            * 60
        );

    }


    const minutos =
        texto.match(
            /(\d+)\s*minuto/
        );


    if (minutos) {

        return parseInt(
            minutos[1]
        );

    }


    return 60;

}