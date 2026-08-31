/* ==========================================
   TURISIA
   BASE DE CONOCIMIENTO
========================================== */

class BaseConocimiento {

    constructor() {

        this.lugares = [];
        this.rutas = [];
        this.gastronomia = [];
        this.festividades = [];

    }

    async cargar() {

        try {

            const [
                lugares,
                rutas,
                gastronomia,
                festividades
            ] = await Promise.all([

                fetch("data/lugares.json")
                    .then(res => res.json()),

                fetch("data/rutas.json")
                    .then(res => res.json()),

                fetch("data/gastronomia.json")
                    .then(res => res.json()),

                fetch("data/festividades.json")
                    .then(res => res.json())

            ]);

            this.lugares = lugares;
            this.rutas = rutas;
            this.gastronomia = gastronomia;
            this.festividades = festividades;

            console.log("✅ Base de conocimiento cargada");

        } catch (error) {

            console.error(
                "❌ Error cargando la base:",
                error
            );

        }

    }

    buscarLugar(texto) {

        texto = texto.toLowerCase();

        return this.lugares.find(lugar => {

            return (

                texto.includes(
                    lugar.nombre.toLowerCase()
                )

                ||

                texto.includes(
                    lugar.id.toLowerCase()
                )

            );

        });

    }

    buscarRuta(texto) {

        texto = texto.toLowerCase();

        return this.rutas.find(ruta => {

            return (

                texto.includes(
                    ruta.nombre.toLowerCase()
                )

                ||

                texto.includes(
                    ruta.id.toLowerCase()
                )

            );

        });

    }

    obtenerTodo() {

        return {

            lugares: this.lugares,

            rutas: this.rutas,

            gastronomia: this.gastronomia,

            festividades: this.festividades

        };

    }

}


/* ==========================================
   INSTANCIA GLOBAL
========================================== */

const BD = new BaseConocimiento();

BD.cargar();