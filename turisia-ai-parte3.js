/* ============================================================
   TURISIA - ASISTENTE INTELIGENTE
   PARTE 3
   INVESTIGACIÓN + JURADO + METODOLOGÍA + INTERPRETACIÓN
   SAN BARTOLOMÉ - HUAROCHIRÍ - LIMA
   ============================================================ */

(function () {

    "use strict";

    /* ============================================================
       001 - CONFIGURACIÓN GENERAL
       ============================================================ */

    const TURISIA_PARTE3 = {
        nombre: "Turis-IA",
        proyecto: "TurisIA",
        localidad: "San Bartolomé",
        provincia: "Huarochirí",
        departamento: "Lima",
        pais: "Perú",
        version: "3.0"
    };

    /* ============================================================
       002 - FUNCIÓN DE NORMALIZACIÓN
       ============================================================ */

    function limpiarTexto(texto) {

        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!.,;:()[\]{}"'`]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }

    /* ============================================================
       003 - SINÓNIMOS
       ============================================================ */

    const sinonimos = {

        "q": "que",
        "k": "que",
        "ke": "que",
        "pq": "porque",
        "porq": "porque",
        "xq": "porque",
        "pa": "para",
        "bartolo": "san bartolome",
        "bartolome": "san bartolome",
        "turis ia": "turisia",
        "turis-ia": "turisia",
        "turismo inteligente": "turisia",
        "historia local": "historia",
        "patrimonio": "patrimonio",
        "lugars": "lugares",
        "turistiko": "turistico",
        "turistikos": "turisticos",
        "chucunculla": "chucuncuya",
        "chucuncuia": "chucuncuya",
        "chucuncuyaaa": "chucuncuya",
        "cerrito": "cerrito de la pascua",
        "pascua": "cerrito de la pascua",
        "negrito": "negritos",
        "fiesta": "festividad",
        "fiestas": "festividades",
        "comida": "gastronomia",
        "comidas": "gastronomia"

    };

    /* ============================================================
       004 - APLICAR SINÓNIMOS
       ============================================================ */

    function aplicarSinonimos(texto) {

        let resultado = limpiarTexto(texto);

        Object.keys(sinonimos).forEach(function (palabra) {

            const reemplazo = sinonimos[palabra];

            resultado = resultado.replace(
                new RegExp("\\b" + palabra + "\\b", "g"),
                reemplazo
            );

        });

        return resultado;

    }

    /* ============================================================
       005 - INFORMACIÓN DEL PROYECTO
       ============================================================ */

    const informacionProyecto = [

        {
            claves: [
                "que es el proyecto",
                "que es proyecto",
                "proyecto turisia"
            ],
            respuesta:
                "TurisIA es un proyecto que propone una plataforma digital para valorizar, difundir e interpretar los recursos turísticos, históricos, culturales y naturales de San Bartolomé."
        },

        {
            claves: [
                "de que trata el proyecto",
                "de que trata turisia",
                "trata turisia"
            ],
            respuesta:
                "El proyecto trata sobre cómo una plataforma digital puede ayudar a acercar a la población y a los visitantes al patrimonio histórico-cultural y natural de San Bartolomé."
        },

        {
            claves: [
                "tema del proyecto",
                "tema turisia"
            ],
            respuesta:
                "El tema central es la valorización y difusión del patrimonio histórico-cultural de San Bartolomé mediante una plataforma digital con información turística e interpretación de fuentes."
        },

        {
            claves: [
                "finalidad",
                "finalidad del proyecto"
            ],
            respuesta:
                "La finalidad es facilitar el acceso a información sobre San Bartolomé y contribuir a que sus recursos históricos, culturales y naturales sean más conocidos y valorados."
        },

        {
            claves: [
                "aporte",
                "aporte turisia",
                "aporte del proyecto"
            ],
            respuesta:
                "El aporte de TurisIA es unir investigación local y tecnología en una plataforma que organiza información y permite consultarla de una manera más sencilla e interactiva."
        },

        {
            claves: [
                "innovacion",
                "innovación",
                "que tiene de innovador"
            ],
            respuesta:
                "La innovación está en utilizar una plataforma digital interactiva para reunir información turística e histórica local y facilitar su consulta mediante un asistente."
        },

        {
            claves: [
                "por que turisia",
                "porque turisia"
            ],
            respuesta:
                "Porque existe la necesidad de mejorar el acceso a información sobre recursos locales y porque la tecnología puede convertirse en una herramienta para acercar el patrimonio a estudiantes, habitantes y visitantes."
        }

    ];

    /* ============================================================
       006 - PROBLEMA DE INVESTIGACIÓN
       ============================================================ */

    const problemaInvestigacion = [

        {
            claves: [
                "cual es el problema",
                "cual es problema",
                "problema principal"
            ],
            respuesta:
                "El problema identificado es el limitado conocimiento y difusión de algunos recursos históricos y culturales de San Bartolomé, lo que dificulta que sean reconocidos y valorados por la población y los visitantes."
        },

        {
            claves: [
                "porque es un problema",
                "por que es un problema"
            ],
            respuesta:
                "Es un problema porque cuando un recurso no es conocido ni interpretado, disminuyen las posibilidades de que la población lo valore, lo conserve y lo incorpore a la identidad local."
        },

        {
            claves: [
                "problema historico",
                "problema historico cultural"
            ],
            respuesta:
                "El problema histórico-cultural está relacionado con la pérdida o falta de conocimiento sobre determinados elementos de la memoria, patrimonio y cultura local."
        },

        {
            claves: [
                "que observaron",
                "que encontraron"
            ],
            respuesta:
                "La investigación encontró que existen recursos locales con valor histórico y cultural que no son suficientemente conocidos por parte de la población."
        },

        {
            claves: [
                "como detectaron el problema",
                "como encontraron el problema"
            ],
            respuesta:
                "El problema se identificó mediante la revisión de información, observación del contexto local y una encuesta aplicada a 103 pobladores."
        },

        {
            claves: [
                "porcentaje problema"
            ],
            respuesta:
                "La encuesta mostró datos importantes: 64,3 % no conocía Chucuncuya, 66,7 % no conocía su importancia histórica y 59,5 % no había buscado información sobre la historia local."
        }

    ];

    /* ============================================================
       007 - PREGUNTA DE INVESTIGACIÓN
       ============================================================ */

    const preguntaInvestigacion = [

        {
            claves: [
                "pregunta de investigacion",
                "pregunta investigacion"
            ],
            respuesta:
                "La pregunta de investigación es: ¿De qué manera una plataforma digital podría ayudarnos en la valorización del patrimonio histórico-cultural de San Bartolomé mediante la interpretación de fuentes históricas?"
        },

        {
            claves: [
                "cual es la pregunta",
                "cual es su pregunta"
            ],
            respuesta:
                "La pregunta busca conocer de qué manera una plataforma digital puede contribuir a valorar el patrimonio histórico-cultural de San Bartolomé mediante la interpretación de fuentes históricas."
        },

        {
            claves: [
                "que quieren demostrar",
                "que quieren demostrar con turisia"
            ],
            respuesta:
                "Buscamos demostrar que una herramienta digital puede facilitar el acceso a información histórica y cultural y ayudar a que el patrimonio local sea más conocido y valorado."
        },

        {
            claves: [
                "como se construyo la pregunta",
                "como construyeron la pregunta"
            ],
            respuesta:
                "La pregunta se construyó tomando como punto de partida el problema observado: la necesidad de mejorar el conocimiento y difusión del patrimonio histórico-cultural local."
        }

    ];

    /* ============================================================
       008 - OBJETIVOS
       ============================================================ */

    const objetivos = [

        {
            claves: [
                "objetivo general",
                "cual es el objetivo general"
            ],
            respuesta:
                "El objetivo general es contribuir a la valorización y difusión del patrimonio histórico-cultural de San Bartolomé mediante una plataforma digital que integre información e interpretación de fuentes."
        },

        {
            claves: [
                "objetivos",
                "cuales son los objetivos"
            ],
            respuesta:
                "Los objetivos se orientan a investigar recursos históricos y culturales, analizar fuentes, identificar necesidades de información y desarrollar una plataforma digital que facilite la difusión y valorización del patrimonio."
        },

        {
            claves: [
                "primer objetivo",
                "objetivo uno"
            ],
            respuesta:
                "Un objetivo es identificar y organizar información sobre los recursos históricos, culturales y turísticos de San Bartolomé."
        },

        {
            claves: [
                "segundo objetivo",
                "objetivo dos"
            ],
            respuesta:
                "Otro objetivo es analizar diferentes fuentes para comprender mejor la historia y el patrimonio local."
        },

        {
            claves: [
                "tercer objetivo",
                "objetivo tres"
            ],
            respuesta:
                "Otro objetivo es desarrollar una plataforma digital que permita presentar la información de forma accesible e interactiva."
        },

        {
            claves: [
                "objetivo tecnologia"
            ],
            respuesta:
                "Desde el aspecto tecnológico, el objetivo es utilizar herramientas como HTML, CSS y JavaScript para construir una plataforma funcional e interactiva."
        }

    ];

    /* ============================================================
       009 - JUSTIFICACIÓN
       ============================================================ */

    const justificacion = [

        {
            claves: [
                "justificacion",
                "justificación"
            ],
            respuesta:
                "El proyecto se justifica porque San Bartolomé posee recursos históricos, culturales y naturales que forman parte de su identidad, pero algunos todavía no son suficientemente conocidos. Una plataforma digital puede ayudar a organizar y difundir esa información."
        },

        {
            claves: [
                "porque hicieron turisia",
                "por que hicieron turisia"
            ],
            respuesta:
                "Realizamos TurisIA porque identificamos una necesidad de mejorar el acceso a información local y vimos que una herramienta digital podía ayudar a comunicar el patrimonio de una manera más cercana a los usuarios."
        },

        {
            claves: [
                "importancia del proyecto"
            ],
            respuesta:
                "El proyecto es importante porque valorar el patrimonio no significa solamente conservar lugares, sino también conocer su historia, comprender su significado y transmitirlo a nuevas generaciones."
        },

        {
            claves: [
                "beneficio para la comunidad"
            ],
            respuesta:
                "Puede beneficiar a la comunidad al aumentar la visibilidad de sus recursos, fortalecer el interés por la historia local y promover visitas responsables."
        }

    ];

    /* ============================================================
       010 - METODOLOGÍA
       ============================================================ */

    const metodologia = [

        {
            claves: [
                "metodologia",
                "metodología",
                "como hicieron la investigacion"
            ],
            respuesta:
                "La investigación combina un enfoque cualitativo para interpretar fuentes y un componente cuantitativo mediante una encuesta aplicada a 103 pobladores."
        },

        {
            claves: [
                "enfoque cualitativo",
                "cualitativo"
            ],
            respuesta:
                "El enfoque cualitativo permite interpretar testimonios, documentos, fotografías, territorio y otras evidencias para comprender la historia y cultura local."
        },

        {
            claves: [
                "enfoque cuantitativo",
                "cuantitativo"
            ],
            respuesta:
                "El componente cuantitativo permite expresar los resultados de la encuesta mediante cantidades y porcentajes."
        },

        {
            claves: [
                "porque cualitativo"
            ],
            respuesta:
                "Porque la investigación busca interpretar fuentes históricas y comprender significados, memoria e identidad, no solamente obtener números."
        },

        {
            claves: [
                "porque cuantitativo"
            ],
            respuesta:
                "Porque necesitábamos conocer mediante datos qué tanto conocían los pobladores determinados recursos y aspectos de la historia local."
        },

        {
            claves: [
                "instrumento",
                "instrumento investigacion"
            ],
            respuesta:
                "Uno de los instrumentos utilizados fue la encuesta aplicada a 103 pobladores."
        },

        {
            claves: [
                "encuestaron",
                "cuantas personas encuestaron",
                "cuantas personas"
            ],
            respuesta:
                "Se encuestó a 103 pobladores."
        },

        {
            claves: [
                "muestra",
                "muestra de investigacion"
            ],
            respuesta:
                "La investigación consideró una encuesta aplicada a 103 pobladores como parte del diagnóstico del conocimiento sobre recursos y patrimonio local."
        }

    ];

    /* ============================================================
       011 - TIPOS DE FUENTES
       ============================================================ */

    const fuentes = [

        {
            claves: [
                "tipo de fuentes",
                "tipos de fuentes"
            ],
            respuesta:
                "Se pueden utilizar fuentes primarias y secundarias. Entre ellas están testimonios, fotografías, documentos, registros institucionales, investigaciones académicas y evidencias del territorio."
        },

        {
            claves: [
                "fuentes primarias",
                "fuente primaria"
            ],
            respuesta:
                "Las fuentes primarias son evidencias directamente relacionadas con el periodo o hecho estudiado. En una investigación local pueden ser fotografías antiguas, documentos, testimonios y espacios u objetos patrimoniales."
        },

        {
            claves: [
                "fuentes secundarias",
                "fuente secundaria"
            ],
            respuesta:
                "Las fuentes secundarias son investigaciones o publicaciones que analizan información histórica o cultural, como estudios académicos e informes institucionales."
        },

        {
            claves: [
                "testimonio fuente"
            ],
            respuesta:
                "Un testimonio puede ser una fuente primaria cuando proviene directamente de una persona que aporta su memoria o experiencia sobre un hecho o práctica."
        },

        {
            claves: [
                "fotografia fuente",
                "fotografia historica"
            ],
            respuesta:
                "Una fotografía histórica puede funcionar como fuente primaria porque permite observar personas, espacios, actividades y cambios del territorio en un momento determinado."
        },

        {
            claves: [
                "territorio fuente"
            ],
            respuesta:
                "El territorio puede ser entendido como una evidencia histórica porque conserva huellas de actividades humanas, caminos, agricultura, construcciones y transformaciones."
        },

        {
            claves: [
                "documentos"
            ],
            respuesta:
                "Los documentos permiten obtener información escrita y pueden ayudar a comprobar fechas, acontecimientos, instituciones y otros aspectos de la historia local."
        }

    ];

    /* ============================================================
       012 - CRITERIOS DE SELECCIÓN
       ============================================================ */

    const criteriosFuentes = [

        {
            claves: [
                "criterios de fuentes",
                "criterios para fuentes"
            ],
            respuesta:
                "Para seleccionar fuentes se pueden considerar criterios como pertinencia, confiabilidad, relación con el tema, actualidad cuando corresponda y posibilidad de contrastar la información."
        },

        {
            claves: [
                "pertinencia fuente"
            ],
            respuesta:
                "La pertinencia significa que la fuente debe aportar información directamente relacionada con la pregunta o problema investigado."
        },

        {
            claves: [
                "confiabilidad fuente"
            ],
            respuesta:
                "La confiabilidad se refiere a qué tan respaldada y verificable es la información de una fuente."
        },

        {
            claves: [
                "actualidad fuente"
            ],
            respuesta:
                "La actualidad es importante especialmente cuando se necesita información vigente, como datos turísticos, servicios, horarios o condiciones de acceso."
        },

        {
            claves: [
                "relacion tema"
            ],
            respuesta:
                "Una fuente debe tener relación clara con el tema para evitar utilizar información que no contribuya a resolver el problema de investigación."
        },

        {
            claves: [
                "contraste de fuentes",
                "contrastar fuentes"
            ],
            respuesta:
                "Contrastar fuentes permite comparar información y detectar coincidencias, diferencias o datos que necesitan una revisión adicional."
        }

    ];

    /* ============================================================
       013 - ANÁLISIS E INTERPRETACIÓN
       ============================================================ */

    const interpretacion = [

        {
            claves: [
                "analisis",
                "análisis"
            ],
            respuesta:
                "Analizar una fuente significa observar qué información proporciona, quién la produjo, cuándo, en qué contexto y cómo se relaciona con el problema investigado."
        },

        {
            claves: [
                "interpretar",
                "interpretacion historica",
                "interpretación histórica"
            ],
            respuesta:
                "Interpretar una fuente histórica significa darle significado dentro de su contexto y relacionarla con otras evidencias para construir una explicación."
        },

        {
            claves: [
                "diferencia analizar interpretar"
            ],
            respuesta:
                "Analizar implica examinar una fuente y sus características; interpretar implica explicar qué significa esa evidencia y cómo ayuda a comprender el pasado."
        },

        {
            claves: [
                "porque interpretar fuentes"
            ],
            respuesta:
                "Porque una fuente por sí sola no siempre explica todo. Al interpretarla y relacionarla con otras evidencias podemos comprender mejor los cambios, permanencias e identidad de una comunidad."
        },

        {
            claves: [
                "cambios y permanencias"
            ],
            respuesta:
                "Los cambios muestran cómo se ha transformado San Bartolomé con el tiempo, mientras que las permanencias permiten reconocer costumbres, prácticas y elementos que continúan formando parte de la identidad local."
        },

        {
            claves: [
                "identidad historica",
                "identidad histórica"
            ],
            respuesta:
                "La identidad histórica se construye mediante la relación entre memoria, territorio, experiencias, costumbres, fuentes y manifestaciones culturales."
        },

        {
            claves: [
                "memoria colectiva"
            ],
            respuesta:
                "La memoria colectiva reúne recuerdos y experiencias compartidas por una comunidad y ayuda a transmitir conocimientos sobre el pasado."
        }

    ];

    /* ============================================================
       014 - RESULTADOS DE ENCUESTA
       ============================================================ */

    const resultadosEncuesta = [

        {
            claves: [
                "64.3",
                "64,3",
                "64 por ciento"
            ],
            respuesta:
                "El 64,3 % de los 103 pobladores encuestados indicó que no conocía Chucuncuya."
        },

        {
            claves: [
                "66.7",
                "66,7",
                "66 por ciento"
            ],
            respuesta:
                "El 66,7 % señaló que no conocía la importancia histórica de Chucuncuya."
        },

        {
            claves: [
                "59.5",
                "59,5",
                "59 por ciento"
            ],
            respuesta:
                "El 59,5 % manifestó que no había buscado información sobre la historia local."
        },

        {
            claves: [
                "69%",
                "69 por ciento",
                "69 porciento"
            ],
            respuesta:
                "El 69 % consideró importante conservar el patrimonio histórico-cultural."
        },

        {
            claves: [
                "resultado encuesta"
            ],
            respuesta:
                "Los resultados muestran una situación interesante: existe una brecha de conocimiento sobre determinados recursos, pero al mismo tiempo existe una valoración positiva de la conservación del patrimonio."
        },

        {
            claves: [
                "que significa 64.3"
            ],
            respuesta:
                "Significa que una mayoría importante de los encuestados indicó no conocer Chucuncuya."
        },

        {
            claves: [
                "que significa 66.7"
            ],
            respuesta:
                "Significa que una mayoría de los encuestados tampoco conocía la importancia histórica de Chucuncuya."
        },

        {
            claves: [
                "que significa 59.5"
            ],
            respuesta:
                "Significa que más de la mitad de los encuestados no había buscado información sobre la historia local."
        },

        {
            claves: [
                "que significa 69"
            ],
            respuesta:
                "Significa que una mayoría de los encuestados reconoce que conservar el patrimonio histórico-cultural es importante."
        }

    ];

    /* ============================================================
       015 - CONCLUSIONES
       ============================================================ */

    const conclusiones = [

        {
            claves: [
                "conclusion",
                "conclusión",
                "conclusiones"
            ],
            respuesta:
                "Una conclusión de TurisIA es que existe una necesidad de mejorar la difusión y acceso a información sobre el patrimonio local. La plataforma puede funcionar como una herramienta digital para organizar, interpretar y acercar esa información."
        },

        {
            claves: [
                "conclusion principal"
            ],
            respuesta:
                "La conclusión principal es que una plataforma digital puede contribuir a la valorización del patrimonio al facilitar el acceso a información y promover una mayor conexión entre la comunidad, su historia y sus recursos."
        },

        {
            claves: [
                "que concluyeron"
            ],
            respuesta:
                "Concluimos que la tecnología puede complementar la investigación histórica y turística cuando se utiliza para organizar información, interpretar fuentes y difundir el patrimonio."
        },

        {
            claves: [
                "se logro el objetivo"
            ],
            respuesta:
                "El desarrollo de la plataforma permite avanzar hacia el objetivo de facilitar la difusión y valorización del patrimonio histórico-cultural y natural de San Bartolomé."
        }

    ];

    /* ============================================================
       016 - PREGUNTAS DE JURADO
       ============================================================ */

    const preguntasJurado = [

        {
            claves: [
                "por que eligieron san bartolome",
                "porque eligieron san bartolome"
            ],
            respuesta:
                "Elegimos San Bartolomé porque es nuestro contexto de estudio y posee recursos históricos, culturales y naturales que pueden ser mejor conocidos y valorados."
        },

        {
            claves: [
                "por que eligieron este tema",
                "porque eligieron este tema"
            ],
            respuesta:
                "Elegimos el tema porque observamos que existen recursos locales con valor, pero no siempre son conocidos por la población. Por eso planteamos utilizar tecnología como una herramienta de difusión."
        },

        {
            claves: [
                "que los motivo",
                "que les motivo"
            ],
            respuesta:
                "Nos motivó conocer mejor nuestro propio territorio y encontrar una forma de utilizar la tecnología para difundir su historia, cultura y patrimonio."
        },

        {
            claves: [
                "que problema solucionan",
                "que problema resuelven"
            ],
            respuesta:
                "Buscamos aportar frente al problema del limitado acceso y conocimiento de información sobre algunos recursos históricos y culturales de San Bartolomé."
        },

        {
            claves: [
                "por que una pagina web",
                "porque una pagina web",
                "por que una plataforma digital"
            ],
            respuesta:
                "Porque una plataforma digital permite reunir información en un solo espacio, actualizarla y presentarla de manera interactiva para diferentes usuarios."
        },

        {
            claves: [
                "que diferencia hay",
                "que los diferencia"
            ],
            respuesta:
                "TurisIA busca integrar turismo, historia, cultura e interpretación de fuentes dentro de una misma experiencia digital enfocada específicamente en San Bartolomé."
        },

        {
            claves: [
                "a quien beneficia",
                "quienes se benefician"
            ],
            respuesta:
                "Puede beneficiar a pobladores, estudiantes, visitantes y personas interesadas en conocer el patrimonio y los recursos de San Bartolomé."
        },

        {
            claves: [
                "como beneficia a estudiantes"
            ],
            respuesta:
                "Puede ayudar a los estudiantes a conocer información de su localidad y utilizar herramientas digitales para investigar y comunicar el patrimonio."
        },

        {
            claves: [
                "como beneficia a turistas"
            ],
            respuesta:
                "Puede ayudar a los visitantes a conocer atractivos, cultura, historia y recomendaciones de turismo responsable."
        },

        {
            claves: [
                "como beneficia a pobladores"
            ],
            respuesta:
                "Puede contribuir a que los pobladores reconozcan y difundan elementos de su patrimonio y memoria local."
        }

    ];

    /* ============================================================
       017 - PREGUNTAS DIFÍCILES
       ============================================================ */

    const preguntasDificiles = [

        {
            claves: [
                "es realmente inteligencia artificial",
                "esto es inteligencia artificial"
            ],
            respuesta:
                "En esta versión local, TurisIA utiliza una base de conocimiento y un sistema de coincidencia de preguntas para simular una experiencia conversacional. La plataforma está diseñada como demostración funcional de asistencia digital enfocada en información local."
        },

        {
            claves: [
                "es una ia real",
                "es ia real"
            ],
            respuesta:
                "La versión local funciona mediante programación JavaScript y una base de conocimientos previamente organizada. Esto permite responder sin depender de una conexión a una API externa."
        },

        {
            claves: [
                "puede responder todo"
            ],
            respuesta:
                "No puede responder absolutamente todo. Su función es responder preguntas relacionadas con la información que se ha incorporado sobre San Bartolomé y orientar cuando una pregunta está fuera de ese contenido."
        },

        {
            claves: [
                "que pasa si no sabe",
                "que pasa si no conoce"
            ],
            respuesta:
                "Cuando una pregunta no coincide claramente con la base de conocimientos, el asistente ofrece una respuesta general relacionada con el proyecto en lugar de inventar información específica."
        },

        {
            claves: [
                "puede inventar informacion",
                "puede inventar información"
            ],
            respuesta:
                "El objetivo es reducir ese riesgo mediante respuestas basadas en información previamente organizada. Cuando un dato requiere precisión, se recomienda contrastarlo con fuentes oficiales o institucionales."
        },

        {
            claves: [
                "como saben que funciona"
            ],
            respuesta:
                "Se puede comprobar mediante pruebas con diferentes tipos de preguntas, incluyendo preguntas directas, informales, abreviadas y consultas sobre distintos temas."
        },

        {
            claves: [
                "como evaluaron la plataforma"
            ],
            respuesta:
                "La plataforma puede evaluarse mediante pruebas de funcionamiento, revisión de respuestas, navegación y capacidad de recuperar información relacionada con las preguntas planteadas."
        },

        {
            claves: [
                "limitaciones"
            ],
            respuesta:
                "Una limitación es que la versión local depende de la información incorporada previamente. No reemplaza una fuente oficial ni una investigación histórica completa."
        }

    ];

    /* ============================================================
       018 - TECNOLOGÍA
       ============================================================ */

    const tecnologia = [

        {
            claves: [
                "como hicieron la pagina",
                "como hicieron la plataforma"
            ],
            respuesta:
                "La plataforma se desarrolló utilizando HTML para la estructura, CSS para el diseño visual y JavaScript para las funciones interactivas."
        },

        {
            claves: [
                "html css javascript"
            ],
            respuesta:
                "HTML estructura la página, CSS controla su diseño y JavaScript permite crear funciones interactivas como el asistente."
        },

        {
            claves: [
                "para que sirve html"
            ],
            respuesta:
                "HTML sirve para organizar la estructura de la página: títulos, textos, botones, secciones, formularios y otros elementos."
        },

        {
            claves: [
                "para que sirve css"
            ],
            respuesta:
                "CSS permite definir colores, tamaños, espacios, posiciones, tipografías y el aspecto visual de la plataforma."
        },

        {
            claves: [
                "para que sirve javascript"
            ],
            respuesta:
                "JavaScript permite programar comportamientos e interacciones, como detectar una pregunta y mostrar una respuesta."
        },

        {
            claves: [
                "por que javascript"
            ],
            respuesta:
                "Porque permite convertir una página estática en una plataforma interactiva capaz de responder a acciones del usuario."
        },

        {
            claves: [
                "funciona sin internet"
            ],
            respuesta:
                "La base local del asistente puede funcionar sin depender de una API externa, siempre que los archivos de la plataforma estén disponibles localmente."
        },

        {
            claves: [
                "necesita api"
            ],
            respuesta:
                "Esta versión local no necesita una API externa para responder la base de preguntas incorporada."
        }

    ];

    /* ============================================================
       019 - TURISMO RESPONSABLE
       ============================================================ */

    const turismoResponsable = [

        {
            claves: [
                "turismo sostenible",
                "turismo responsable"
            ],
            respuesta:
                "El turismo responsable busca que las visitas generen beneficios sin dañar la naturaleza, el patrimonio ni las costumbres de la comunidad."
        },

        {
            claves: [
                "como cuidar patrimonio"
            ],
            respuesta:
                "Puedes cuidar el patrimonio evitando dejar basura, dañar estructuras, extraer objetos, alterar espacios naturales o faltar el respeto a las costumbres locales."
        },

        {
            claves: [
                "que hacer como turista"
            ],
            respuesta:
                "Como turista puedes informarte antes de visitar, respetar las costumbres, cuidar los espacios, no dejar residuos y apoyar actividades locales responsables."
        },

        {
            claves: [
                "por que conservar"
            ],
            respuesta:
                "Conservar permite que las futuras generaciones conozcan los recursos naturales, históricos y culturales que forman parte de la identidad de San Bartolomé."
        }

    ];

    /* ============================================================
       020 - IDENTIDAD Y COMUNIDAD
       ============================================================ */

    const identidad = [

        {
            claves: [
                "como se construye la identidad",
                "como se construyo la identidad"
            ],
            respuesta:
                "La identidad se construye mediante experiencias compartidas, memoria, territorio, costumbres, actividades, celebraciones y elementos culturales que la comunidad reconoce como propios."
        },

        {
            claves: [
                "que es identidad local"
            ],
            respuesta:
                "La identidad local es el conjunto de elementos, recuerdos, prácticas y valores mediante los cuales una comunidad se reconoce y diferencia."
        },

        {
            claves: [
                "que relacion tiene turismo identidad"
            ],
            respuesta:
                "El turismo puede fortalecer la identidad cuando promueve el conocimiento y valoración del patrimonio sin convertir las costumbres en simples productos ni alterar su significado."
        },

        {
            claves: [
                "comunidad"
            ],
            respuesta:
                "La comunidad es fundamental porque conserva conocimientos, recuerdos, prácticas y experiencias que ayudan a interpretar el patrimonio local."
        }

    ];

    /* ============================================================
       021 - CHUCUNCUYA Y DIAGNÓSTICO
       ============================================================ */

    const chucuncuya = [

        {
            claves: [
                "porque estudiaron chucuncuya"
            ],
            respuesta:
                "Se estudió Chucuncuya porque forma parte de los recursos históricos y culturales considerados en la investigación y porque la encuesta mostró que existe un nivel importante de desconocimiento sobre este recurso."
        },

        {
            claves: [
                "que demuestra la encuesta sobre chucuncuya"
            ],
            respuesta:
                "Demuestra que existe una brecha de conocimiento: muchas personas encuestadas no conocen Chucuncuya ni su importancia histórica."
        },

        {
            claves: [
                "porque chucuncuya es importante"
            ],
            respuesta:
                "Porque forma parte del patrimonio histórico-cultural local y permite estudiar la relación entre territorio, memoria e identidad."
        },

        {
            claves: [
                "que hicieron con la informacion chucuncuya"
            ],
            respuesta:
                "La información se incorporó al contenido de TurisIA para facilitar su difusión y ayudar a que más personas puedan conocer su valor."
        }

    ];

    /* ============================================================
       022 - CERRITO DE LA PASCUA
       ============================================================ */

    const cerrito = [

        {
            claves: [
                "por que es importante el cerrito"
            ],
            respuesta:
                "El Cerrito de la Pascua es importante por su valor paisajístico y turístico y porque permite observar diferentes sectores del territorio de San Bartolomé."
        },

        {
            claves: [
                "que se observa desde el cerrito"
            ],
            respuesta:
                "Desde el Cerrito de la Pascua se pueden observar panoramas de San Bartolomé, sectores cercanos, áreas agrícolas y elementos del valle del Rímac."
        },

        {
            claves: [
                "que tipo de atractivo es"
            ],
            respuesta:
                "El registro turístico consultado lo clasifica dentro de los sitios naturales, específicamente como una zona paisajística y mirador natural."
        },

        {
            claves: [
                "registro del cerrito"
            ],
            respuesta:
                "El Mirador Cerrito de la Pascua aparece registrado en información turística oficial con código 6540 y jerarquía 2."
        }

    ];

    /* ============================================================
       023 - CULTURA
       ============================================================ */

    const cultura = [

        {
            claves: [
                "porque la cultura es importante"
            ],
            respuesta:
                "La cultura es importante porque transmite conocimientos, costumbres, memoria y formas de entender el territorio."
        },

        {
            claves: [
                "como se conserva la cultura"
            ],
            respuesta:
                "La cultura se conserva mediante la transmisión entre generaciones, la participación comunitaria, las festividades, las prácticas tradicionales y la documentación de sus manifestaciones."
        },

        {
            claves: [
                "que manifestaciones culturales"
            ],
            respuesta:
                "Entre las manifestaciones culturales relacionadas con San Bartolomé se encuentran danzas, festividades, tradiciones religiosas, gastronomía y prácticas comunitarias."
        },

        {
            claves: [
                "cultura y patrimonio"
            ],
            respuesta:
                "La cultura forma parte del patrimonio porque reúne conocimientos, prácticas y expresiones que tienen significado para la comunidad."
        }

    ];

    /* ============================================================
       024 - HISTORIA Y TERRITORIO
       ============================================================ */

    const territorio = [

        {
            claves: [
                "historia territorio"
            ],
            respuesta:
                "La historia del territorio se puede estudiar observando cómo las personas han utilizado, organizado y transformado el espacio a través del tiempo."
        },

        {
            claves: [
                "territorio san bartolome"
            ],
            respuesta:
                "El territorio de San Bartolomé combina zonas urbanas, agrícolas, montañas, quebradas, paisajes y espacios relacionados con la memoria de la comunidad."
        },

        {
            claves: [
                "agricultura historia"
            ],
            respuesta:
                "La agricultura forma parte de la historia territorial porque ha influido en el uso del suelo, la organización comunitaria y la relación de las personas con el agua y la naturaleza."
        },

        {
            claves: [
                "agua historia"
            ],
            respuesta:
                "Las prácticas relacionadas con el agua muestran la importancia de organizar el territorio para sostener actividades agrícolas y comunitarias."
        }

    ];

    /* ============================================================
       025 - FUENTES INSTITUCIONALES
       ============================================================ */

    const instituciones = [

        {
            claves: [
                "mincetur",
                "ministerio turismo"
            ],
            respuesta:
                "MINCETUR es una referencia institucional para información relacionada con turismo. En el proyecto se considera especialmente la información turística registrada sobre el Cerrito de la Pascua."
        },

        {
            claves: [
                "municipalidad san bartolome"
            ],
            respuesta:
                "La Municipalidad Distrital de San Bartolomé constituye una fuente institucional relevante para información relacionada con el distrito."
        },

        {
            claves: [
                "universidad nacional federico villarreal",
                "federico villarreal"
            ],
            respuesta:
                "La Universidad Nacional Federico Villarreal aparece como referencia académica en la investigación utilizada para identificar recursos turísticos de San Bartolomé."
        },

        {
            claves: [
                "18 recursos turisticos",
                "18 recursos"
            ],
            respuesta:
                "La investigación académica tomada como referencia identificó 18 recursos entre sitios naturales y manifestaciones culturales."
        }

    ];

    /* ============================================================
       026 - PREGUNTAS SOBRE FUENTES Y CONFIABILIDAD
       ============================================================ */

    const confiabilidad = [

        {
            claves: [
                "como saben que una fuente es confiable"
            ],
            respuesta:
                "Se puede evaluar una fuente revisando quién la produce, qué institución o autor la respalda, cuándo fue publicada, qué evidencia presenta y si su información coincide con otras fuentes."
        },

        {
            claves: [
                "cual es la mejor fuente"
            ],
            respuesta:
                "No siempre existe una única mejor fuente. Depende de la pregunta. Lo más recomendable es utilizar fuentes pertinentes y confiables y contrastarlas entre sí."
        },

        {
            claves: [
                "pueden confiar en testimonios"
            ],
            respuesta:
                "Sí, los testimonios pueden aportar información valiosa sobre memoria y experiencias, pero es recomendable contrastarlos con otras evidencias."
        },

        {
            claves: [
                "pueden confiar en internet"
            ],
            respuesta:
                "No toda la información de internet es confiable. Por eso es importante revisar autoría, institución, fecha, evidencia y relación con el tema."
        }

    ];

    /* ============================================================
       027 - EDUCACIÓN E INVESTIGACIÓN
       ============================================================ */

    const educacion = [

        {
            claves: [
                "que aprendieron"
            ],
            respuesta:
                "Aprendimos que investigar nuestra propia localidad requiere comparar fuentes, analizar información, escuchar a la comunidad y utilizar la tecnología de manera responsable."
        },

        {
            claves: [
                "que habilidades desarrollaron"
            ],
            respuesta:
                "El proyecto permite desarrollar habilidades de investigación, análisis de fuentes, comunicación, organización de información y programación."
        },

        {
            claves: [
                "que aprendieron con tecnologia"
            ],
            respuesta:
                "Aprendimos que la tecnología no solo sirve para entretenimiento, sino también para investigar, organizar información y comunicar conocimientos."
        },

        {
            claves: [
                "relacion con ciencias sociales"
            ],
            respuesta:
                "TurisIA se relaciona con Ciencias Sociales porque estudia historia, territorio, identidad, patrimonio, fuentes y procesos de cambio y permanencia."
        }

    ];

    /* ============================================================
       028 - RESPUESTAS CORTAS PARA JURADO
       ============================================================ */

    const respuestasCortas = [

        {
            claves: [
                "en una frase que es turisia"
            ],
            respuesta:
                "TurisIA es una plataforma digital que ayuda a conocer, interpretar y valorar el patrimonio de San Bartolomé."
        },

        {
            claves: [
                "resume el proyecto"
            ],
            respuesta:
                "Investigamos el patrimonio local, analizamos fuentes, identificamos una necesidad de difusión y desarrollamos una plataforma digital para acercar esa información."
        },

        {
            claves: [
                "cual es la idea central"
            ],
            respuesta:
                "La idea central es unir investigación histórica, patrimonio local y tecnología."
        },

        {
            claves: [
                "cual es el aporte en una frase"
            ],
            respuesta:
                "El aporte es facilitar el acceso y difusión de información sobre el patrimonio de San Bartolomé."
        }

    ];

    /* ============================================================
       029 - PREGUNTAS INFORMALES
       ============================================================ */

    const informal = [

        {
            claves: [
                "bro que puedo hacer en bartolo",
                "bro que hacer en bartolo"
            ],
            respuesta:
                "Bro 😎 puedes conocer lugares como el Cerrito de la Pascua, hacer caminatas, conocer la cultura local, aprender sobre la historia y disfrutar paisajes y actividades de naturaleza."
        },

        {
            claves: [
                "q puedo hacer en bartolo",
                "que puedo hacer en bartolo"
            ],
            respuesta:
                "Puedes conocer atractivos, hacer caminatas, disfrutar paisajes, aprender sobre la historia y conocer las tradiciones de San Bartolomé."
        },

        {
            claves: [
                "q lugares hay",
                "que lugares hay"
            ],
            respuesta:
                "Hay recursos naturales y culturales como el Cerrito de la Pascua, Chucuncuya y otros espacios vinculados a la historia y territorio local."
        },

        {
            claves: [
                "bro cuentame la historia",
                "bro cuentame sobre san bartolome"
            ],
            respuesta:
                "Claro bro 😎. La historia de San Bartolomé se puede conocer relacionando documentos, fotografías, testimonios, territorio y patrimonio. La idea de TurisIA es no solo contarla, sino interpretarla."
        },

        {
            claves: [
                "hay rutas",
                "hay rutas de caminata"
            ],
            respuesta:
                "Sí. Existen posibilidades para realizar caminatas y conocer paisajes, pero antes conviene revisar la dificultad, condiciones del clima y seguridad de la ruta."
        },

        {
            claves: [
                "que hay para conocer",
                "que hay para ver"
            ],
            respuesta:
                "Puedes conocer paisajes, atractivos naturales, recursos históricos, expresiones culturales y actividades relacionadas con la comunidad."
        }

    ];

    /* ============================================================
       030 - TODAS LAS BASES
       ============================================================ */

    const bases = [

        informacionProyecto,
        problemaInvestigacion,
        preguntaInvestigacion,
        objetivos,
        justificacion,
        metodologia,
        fuentes,
        criteriosFuentes,
        interpretacion,
        resultadosEncuesta,
        conclusiones,
        preguntasJurado,
        preguntasDificiles,
        tecnologia,
        turismoResponsable,
        identidad,
        chucuncuya,
        cerrito,
        cultura,
        territorio,
        instituciones,
        confiabilidad,
        educacion,
        respuestasCortas,
        informal

    ];

    /* ============================================================
       031 - BUSCADOR
       ============================================================ */

    function puntuacionCoincidencia(texto, claves) {

        let puntos = 0;

        claves.forEach(function (clave) {

            const normalizada = aplicarSinonimos(clave);

            if (texto === normalizada) {

                puntos += 100;

            }

            else if (texto.includes(normalizada)) {

                puntos += 40;

            }

            else {

                const palabras = normalizada.split(" ");

                palabras.forEach(function (palabra) {

                    if (
                        palabra.length >= 3 &&
                        texto.includes(palabra)
                    ) {

                        puntos += 5;

                    }

                });

            }

        });

        return puntos;

    }

    /* ============================================================
       032 - BUSCAR EN TODAS LAS BASES
       ============================================================ */

    function buscarRespuesta(pregunta) {

        const texto = aplicarSinonimos(pregunta);

        let mejorRespuesta = null;
        let mejorPuntuacion = 0;

        bases.forEach(function (base) {

            base.forEach(function (item) {

                const puntos =
                    puntuacionCoincidencia(
                        texto,
                        item.claves
                    );

                if (puntos > mejorPuntuacion) {

                    mejorPuntuacion = puntos;
                    mejorRespuesta = item.respuesta;

                }

            });

        });

        return {

            respuesta: mejorRespuesta,
            puntuacion: mejorPuntuacion

        };

    }

    /* ============================================================
       033 - DETECTOR DE SALUDOS
       ============================================================ */

    function detectarSaludo(texto) {

        const saludos = [
            "hola",
            "holaa",
            "holaaa",
            "buenas",
            "hey",
            "hello",
            "que tal"
        ];

        return saludos.some(function (saludo) {

            return texto.includes(saludo);

        });

    }

    /* ============================================================
       034 - DETECTOR DE AGRADECIMIENTO
       ============================================================ */

    function detectarGracias(texto) {

        return (
            texto.includes("gracias") ||
            texto.includes("thank")
        );

    }

    /* ============================================================
       035 - RESPUESTAS SOCIALES
       ============================================================ */

    function respuestaSocial(texto) {

        if (detectarSaludo(texto)) {

            return "¡Hola! 👋 Soy Turis-IA. Pregúntame lo que quieras sobre San Bartolomé.";

        }

        if (detectarGracias(texto)) {

            return "¡De nada! 😎 Espero que TurisIA te ayude a descubrir y valorar San Bartolomé.";

        }

        return null;

    }

    /* ============================================================
       036 - FALLBACK
       ============================================================ */

    const respuestasFallback = [

        "No tengo un dato específico para esa pregunta, pero puedo ayudarte con la historia, cultura, turismo, naturaleza, festividades y patrimonio de San Bartolomé.",

        "Esa pregunta está un poco fuera de mi base actual 😅. Puedes preguntarme sobre Chucuncuya, Cerrito de la Pascua, historia, cultura, festividades, rutas o TurisIA.",

        "Todavía no tengo información suficiente para responder ese punto con precisión. Prefiero no inventarte un dato.",

        "Puedo responder mejor si la pregunta está relacionada con San Bartolomé, su patrimonio, historia, cultura, turismo o el proyecto TurisIA."

    ];

    /* ============================================================
       037 - RESPUESTA PRINCIPAL
       ============================================================ */

    function responder(pregunta) {

        const texto = aplicarSinonimos(pregunta);

        if (!texto) {

            return "Escribe una pregunta y te ayudaré a conocer San Bartolomé.";

        }

        const social = respuestaSocial(texto);

        if (social) {

            return social;

        }

        const resultado = buscarRespuesta(texto);

        if (
            resultado.respuesta &&
            resultado.puntuacion >= 5
        ) {

            return resultado.respuesta;

        }

        return respuestasFallback[
            Math.floor(
                Math.random() *
                respuestasFallback.length
            )
        ];

    }

    /* ============================================================
       038 - API GLOBAL
       ============================================================ */

    window.TurisIAParte3 = {

        nombre: TURISIA_PARTE3.nombre,

        version: TURISIA_PARTE3.version,

        responder: responder,

        buscar: buscarRespuesta,

        conocimiento: bases,

        normalizar: aplicarSinonimos

    };

    /* ============================================================
       039 - FUNCIÓN PÚBLICA
       ============================================================ */

    window.turisiaResponderParte3 = function (pregunta) {

        return responder(pregunta);

    };

    /* ============================================================
       040 - CONEXIÓN CON EL INPUT
       ============================================================ */

    function obtenerInput() {

        return document.querySelector("#aiInput");

    }

    /* ============================================================
       041 - CONEXIÓN CON EL CONTENEDOR
       ============================================================ */

    function obtenerContenedor() {

        return document.querySelector("#aiMessages");

    }

    /* ============================================================
       042 - ESCAPAR HTML
       ============================================================ */

    function escapar(texto) {

        return String(texto)

            .replace(/&/g, "&amp;")

            .replace(/</g, "&lt;")

            .replace(/>/g, "&gt;")

            .replace(/"/g, "&quot;")

            .replace(/'/g, "&#039;");

    }

    /* ============================================================
       043 - MOSTRAR RESPUESTA
       ============================================================ */

    function mostrarRespuesta(texto) {

        const contenedor =
            obtenerContenedor();

        if (!contenedor) {

            return;

        }

        const elemento =
            document.createElement("div");

        elemento.className =
            "ai-message ai-message-bot";

        elemento.innerHTML =
            "<div class='ai-message-content'>" +
            escapar(texto) +
            "</div>";

        contenedor.appendChild(elemento);

        contenedor.scrollTop =
            contenedor.scrollHeight;

    }

    /* ============================================================
       044 - DIAGNÓSTICO
       ============================================================ */

    window.turisiaParte3Diagnostico = function () {

        console.log(
            "===================================="
        );

        console.log(
            "TURISIA - PARTE 3"
        );

        console.log(
            "===================================="
        );

        console.log(
            "Estado: ACTIVO"
        );

        console.log(
            "Proyecto:",
            TURISIA_PARTE3.proyecto
        );

        console.log(
            "Localidad:",
            TURISIA_PARTE3.localidad
        );

        console.log(
            "Bases:",
            bases.length
        );

        console.log(
            "Conocimiento disponible:",
            bases.reduce(
                function (total, base) {
                    return total + base.length;
                },
                0
            )
        );

        console.log(
            "Input:",
            obtenerInput()
        );

        console.log(
            "Contenedor:",
            obtenerContenedor()
        );

        console.log(
            "===================================="
        );

        return "TurisIA Parte 3 funcionando correctamente.";

    };

    /* ============================================================
       045 - EVENTO DE INICIO
       ============================================================ */

    function iniciar() {

        console.log(
            "TurisIA Parte 3 cargada correctamente."
        );

        console.log(
            "Base de conocimientos:",
            bases.reduce(
                function (total, base) {

                    return total + base.length;

                },
                0
            ),
            "entradas."
        );

    }

    /* ============================================================
       046 - DOM READY
       ============================================================ */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            iniciar
        );

    }

    else {

        iniciar();

    }

})();