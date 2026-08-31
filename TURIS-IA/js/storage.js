/* ==========================================
   TURISIA - STORAGE.JS
   Sistema de almacenamiento local
========================================== */


/* ==========================================
   CONFIGURACIÓN
========================================== */

const STORAGE_KEYS = {

    CHAT: "turisia_chat",

    MESSAGES: "turisia_messages",

    FAVORITES: "turisia_favorites",

    USER: "turisia_user",

    SETTINGS: "turisia_settings",

    VISITS: "turisia_visits"

};


/* ==========================================
   CLASE PRINCIPAL
========================================== */

class TurisIAStorage {

    /* ======================================
       GUARDAR DATO
    ====================================== */

    guardar(clave, valor) {

        try {

            localStorage.setItem(

                clave,

                JSON.stringify(valor)

            );

            return true;

        } catch (error) {

            console.error(
                "❌ Error guardando información:",
                error
            );

            return false;

        }

    }


    /* ======================================
       OBTENER DATO
    ====================================== */

    obtener(clave, valorPorDefecto = null) {

        try {

            const dato =
                localStorage.getItem(clave);

            if (dato === null) {

                return valorPorDefecto;

            }

            return JSON.parse(dato);

        } catch (error) {

            console.error(
                "❌ Error leyendo información:",
                error
            );

            return valorPorDefecto;

        }

    }


    /* ======================================
       ELIMINAR DATO
    ====================================== */

    eliminar(clave) {

        try {

            localStorage.removeItem(clave);

            return true;

        } catch (error) {

            console.error(
                "❌ Error eliminando información:",
                error
            );

            return false;

        }

    }


    /* ======================================
       ELIMINAR TODO TURISIA
    ====================================== */

    limpiarTodo() {

        Object.values(STORAGE_KEYS)
            .forEach(clave => {

                localStorage.removeItem(clave);

            });

    }


    /* ======================================
       CHAT
    ====================================== */

    guardarChatHTML(html) {

        return this.guardar(

            STORAGE_KEYS.CHAT,

            html

        );

    }


    obtenerChatHTML() {

        return this.obtener(

            STORAGE_KEYS.CHAT,

            ""

        );

    }


    eliminarChatHTML() {

        return this.eliminar(

            STORAGE_KEYS.CHAT

        );

    }


    /* ======================================
       MENSAJES
    ====================================== */

    guardarMensajes(mensajes) {

        return this.guardar(

            STORAGE_KEYS.MESSAGES,

            mensajes

        );

    }


    obtenerMensajes() {

        return this.obtener(

            STORAGE_KEYS.MESSAGES,

            []

        );

    }


    agregarMensaje(
        role,
        content
    ) {

        const mensajes =
            this.obtenerMensajes();

        mensajes.push({

            role: role,

            content: content,

            fecha:
                new Date().toISOString()

        });

        return this.guardarMensajes(
            mensajes
        );

    }


    limpiarMensajes() {

        return this.eliminar(

            STORAGE_KEYS.MESSAGES

        );

    }


    /* ======================================
       FAVORITOS
    ====================================== */

    obtenerFavoritos() {

        return this.obtener(

            STORAGE_KEYS.FAVORITES,

            []

        );

    }


    agregarFavorito(id) {

        const favoritos =
            this.obtenerFavoritos();

        if (
            !favoritos.includes(id)
        ) {

            favoritos.push(id);

        }

        return this.guardar(

            STORAGE_KEYS.FAVORITES,

            favoritos

        );

    }


    eliminarFavorito(id) {

        let favoritos =
            this.obtenerFavoritos();

        favoritos =
            favoritos.filter(
                favorito =>
                    favorito !== id
            );

        return this.guardar(

            STORAGE_KEYS.FAVORITES,

            favoritos

        );

    }


    esFavorito(id) {

        const favoritos =
            this.obtenerFavoritos();

        return favoritos.includes(id);

    }


    /* ======================================
       DATOS DEL USUARIO
    ====================================== */

    guardarUsuario(datos) {

        return this.guardar(

            STORAGE_KEYS.USER,

            datos

        );

    }


    obtenerUsuario() {

        return this.obtener(

            STORAGE_KEYS.USER,

            {

                nombre: "",

                tipoViajero: null,

                intereses: [],

                tiempoDisponible: null

            }

        );

    }


    eliminarUsuario() {

        return this.eliminar(

            STORAGE_KEYS.USER

        );

    }


    /* ======================================
       CONFIGURACIÓN
    ====================================== */

    guardarConfiguracion(configuracion) {

        return this.guardar(

            STORAGE_KEYS.SETTINGS,

            configuracion

        );

    }


    obtenerConfiguracion() {

        return this.obtener(

            STORAGE_KEYS.SETTINGS,

            {

                tema: "claro",

                animaciones: true,

                sonido: true

            }

        );

    }


    /* ======================================
       VISITAS
    ====================================== */

    registrarVisita(lugarId) {

        const visitas =
            this.obtener(

                STORAGE_KEYS.VISITS,

                []

            );

        visitas.push({

            lugarId: lugarId,

            fecha:
                new Date().toISOString()

        });

        return this.guardar(

            STORAGE_KEYS.VISITS,

            visitas

        );

    }


    obtenerVisitas() {

        return this.obtener(

            STORAGE_KEYS.VISITS,

            []

        );

    }


    /* ======================================
       ESTADÍSTICAS
    ====================================== */

    obtenerEstadisticas() {

        const mensajes =
            this.obtenerMensajes();

        const favoritos =
            this.obtenerFavoritos();

        const visitas =
            this.obtenerVisitas();

        return {

            mensajes:
                mensajes.length,

            favoritos:
                favoritos.length,

            visitas:
                visitas.length

        };

    }

}


/* ==========================================
   INSTANCIA GLOBAL
========================================== */

const STORAGE =
    new TurisIAStorage();


/* ==========================================
   MENSAJE DE COMPROBACIÓN
========================================== */

console.log(
    "💾 TurisIA Storage iniciado"
);