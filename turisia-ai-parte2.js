/* ============================================================
   TURISIA - INTELIGENCIA ARTIFICIAL LOCAL
   PARTE 2
   BASE DE CONOCIMIENTO AMPLIADA
   SAN BARTOLOMÉ - HUAROCHIRÍ - LIMA
   ============================================================ */

(function () {

    "use strict";

    /* =========================================================
       001 - IDENTIDAD
       ========================================================= */

    const nombreAsistente = "Turis-IA";
    const localidad = "San Bartolomé";
    const provincia = "Huarochirí";
    const departamento = "Lima";
    const pais = "Perú";

    /* =========================================================
       010 - BASE DE CONOCIMIENTO
       ========================================================= */

    const conocimientoParte2 = [

        {
            id: 1,
            categoria: "identidad",
            claves: ["turisia", "turis ia", "turis-ia"],
            respuesta:
                "TurisIA es una plataforma digital creada para ayudar a conocer, valorar y difundir los recursos históricos, culturales y naturales de San Bartolomé."
        },

        {
            id: 2,
            categoria: "identidad",
            claves: ["que es turisia", "qué es turisia"],
            respuesta:
                "TurisIA es una plataforma turística digital que reúne información sobre San Bartolomé y utiliza una interfaz de asistente para orientar al visitante."
        },

        {
            id: 3,
            categoria: "identidad",
            claves: ["para que sirve turisia", "para qué sirve turisia"],
            respuesta:
                "Sirve para facilitar el acceso a información sobre lugares turísticos, historia, cultura, festividades, gastronomía, rutas y actividades de San Bartolomé."
        },

        {
            id: 4,
            categoria: "identidad",
            claves: ["objetivo de turisia", "objetivo turisia"],
            respuesta:
                "El objetivo de TurisIA es contribuir a la valorización y difusión del patrimonio histórico-cultural y natural de San Bartolomé mediante una plataforma digital."
        },

        {
            id: 5,
            categoria: "identidad",
            claves: ["quien hizo turisia", "quién hizo turisia"],
            respuesta:
                "TurisIA es un proyecto escolar desarrollado para investigar y difundir los recursos turísticos e históricos de San Bartolomé."
        },

        {
            id: 6,
            categoria: "identidad",
            claves: ["donde esta turisia", "dónde está turisia"],
            respuesta:
                "TurisIA está enfocada en el distrito de San Bartolomé, provincia de Huarochirí, departamento de Lima, Perú."
        },

        {
            id: 7,
            categoria: "ubicacion",
            claves: ["san bartolome", "san bartolomé"],
            respuesta:
                "San Bartolomé es un distrito de la provincia de Huarochirí, en el departamento de Lima. Su territorio combina zonas urbanas, agrícolas, paisajes de montaña y espacios vinculados a la memoria de la comunidad."
        },

        {
            id: 8,
            categoria: "ubicacion",
            claves: ["huarochiri", "huarochirí"],
            respuesta:
                "Huarochirí es la provincia donde se encuentra San Bartolomé. La provincia posee una gran diversidad de paisajes, costumbres, manifestaciones culturales y patrimonio."
        },

        {
            id: 9,
            categoria: "ubicacion",
            claves: ["lima"],
            respuesta:
                "San Bartolomé pertenece al departamento de Lima, aunque se encuentra en una zona de características andinas y rurales."
        },

        {
            id: 10,
            categoria: "ubicacion",
            claves: ["distrito"],
            respuesta:
                "San Bartolomé es un distrito de la provincia de Huarochirí, departamento de Lima."
        },

        {
            id: 11,
            categoria: "turismo",
            claves: ["lugares", "lugares turisticos", "lugares turísticos"],
            respuesta:
                "En San Bartolomé puedes conocer lugares como el Cerrito de la Pascua, Chucuncuya y otros espacios naturales y culturales vinculados con la historia local."
        },

        {
            id: 12,
            categoria: "turismo",
            claves: ["que visitar", "qué visitar", "visitar"],
            respuesta:
                "Puedes visitar el Cerrito de la Pascua, conocer Chucuncuya, recorrer espacios del distrito y acercarte a las tradiciones culturales de San Bartolomé."
        },

        {
            id: 13,
            categoria: "turismo",
            claves: ["atractivos", "atractivos turisticos", "atractivos turísticos"],
            respuesta:
                "San Bartolomé posee atractivos naturales, culturales e históricos. Entre los mencionados en la información turística local está el Cerrito de la Pascua."
        },

        {
            id: 14,
            categoria: "turismo",
            claves: ["chucuncuya"],
            respuesta:
                "Chucuncuya es uno de los recursos históricos y culturales de San Bartolomé. Su conocimiento es importante para comprender parte del patrimonio y la identidad histórica del distrito."
        },

        {
            id: 15,
            categoria: "chucuncuya",
            claves: ["historia chucuncuya", "chucuncuya historia"],
            respuesta:
                "Chucuncuya forma parte de los recursos históricos estudiados dentro del proyecto TurisIA. Conocer su historia permite relacionar el territorio actual con la memoria y el patrimonio de San Bartolomé."
        },

        {
            id: 16,
            categoria: "chucuncuya",
            claves: ["donde esta chucuncuya", "dónde está chucuncuya"],
            respuesta:
                "Chucuncuya es un recurso local ubicado en el ámbito territorial de San Bartolomé. Para una ubicación exacta se recomienda utilizar el mapa incorporado en TurisIA."
        },

        {
            id: 17,
            categoria: "chucuncuya",
            claves: ["porque es importante chucuncuya", "por qué es importante chucuncuya"],
            respuesta:
                "Es importante porque forma parte del patrimonio histórico-cultural local y permite acercarnos a la memoria del territorio."
        },

        {
            id: 18,
            categoria: "chucuncuya",
            claves: ["conoces chucuncuya", "conoces chucuncuya"],
            respuesta:
                "Sí. Chucuncuya aparece dentro de los recursos que TurisIA busca difundir. El proyecto también encontró que una parte importante de la población todavía no conoce suficientemente este recurso."
        },

        {
            id: 19,
            categoria: "investigacion",
            claves: ["encuesta", "encuestas"],
            respuesta:
                "En la investigación de TurisIA se realizó una encuesta a 103 pobladores para conocer cuánto sabían sobre determinados recursos y aspectos de la historia local."
        },

        {
            id: 20,
            categoria: "investigacion",
            claves: ["103", "103 pobladores"],
            respuesta:
                "La encuesta de TurisIA consideró a 103 pobladores de San Bartolomé."
        },

        {
            id: 21,
            categoria: "investigacion",
            claves: ["64.3", "64,3"],
            respuesta:
                "El 64,3 % de los pobladores encuestados indicó que no conocía Chucuncuya."
        },

        {
            id: 22,
            categoria: "investigacion",
            claves: ["66.7", "66,7"],
            respuesta:
                "El 66,7 % de los encuestados señaló que no conocía la importancia histórica de Chucuncuya."
        },

        {
            id: 23,
            categoria: "investigacion",
            claves: ["59.5", "59,5"],
            respuesta:
                "El 59,5 % manifestó que no había buscado información sobre la historia local."
        },

        {
            id: 24,
            categoria: "investigacion",
            claves: ["69", "69 por ciento"],
            respuesta:
                "El 69 % de los encuestados considera importante conservar el patrimonio histórico-cultural."
        },

        {
            id: 25,
            categoria: "investigacion",
            claves: ["problema", "problema turisia"],
            respuesta:
                "Uno de los problemas identificados es que varios recursos históricos y culturales de San Bartolomé no son suficientemente conocidos ni difundidos."
        },

        {
            id: 26,
            categoria: "investigacion",
            claves: ["solucion", "solución"],
            respuesta:
                "TurisIA plantea como alternativa una plataforma digital que concentre información turística e histórica y facilite su interpretación y difusión."
        },

        {
            id: 27,
            categoria: "investigacion",
            claves: ["pregunta investigacion", "pregunta de investigacion"],
            respuesta:
                "La pregunta de investigación es: ¿De qué manera una plataforma digital podría ayudarnos en la valorización del patrimonio histórico-cultural de San Bartolomé mediante la interpretación de fuentes históricas?"
        },

        {
            id: 28,
            categoria: "investigacion",
            claves: ["identidad historica", "identidad histórica"],
            respuesta:
                "La identidad histórica de San Bartolomé se puede comprender relacionando las fuentes históricas, el territorio, la memoria de los habitantes, las costumbres y los espacios patrimoniales."
        },

        {
            id: 29,
            categoria: "historia",
            claves: ["historia de san bartolome", "historia de san bartolomé"],
            respuesta:
                "La historia de San Bartolomé puede estudiarse mediante documentos, fotografías, testimonios, territorio y espacios patrimoniales. TurisIA busca no solamente contar esa historia, sino también interpretarla."
        },

        {
            id: 30,
            categoria: "historia",
            claves: ["historia", "historia local"],
            respuesta:
                "La historia local permite comprender cómo se ha formado la comunidad y cómo han cambiado sus costumbres, territorio, actividades y formas de relacionarse con el entorno."
        },

        {
            id: 31,
            categoria: "historia",
            claves: ["fuentes historicas", "fuentes históricas"],
            respuesta:
                "Para investigar San Bartolomé se pueden utilizar fuentes escritas, fotografías, testimonios orales, documentos institucionales, investigaciones académicas y evidencias presentes en el territorio."
        },

        {
            id: 32,
            categoria: "historia",
            claves: ["fuentes primarias"],
            respuesta:
                "Las fuentes primarias son evidencias producidas en el periodo o contexto que se estudia. En una investigación local pueden incluir fotografías antiguas, documentos, testimonios y objetos o espacios patrimoniales."
        },

        {
            id: 33,
            categoria: "historia",
            claves: ["fuentes secundarias"],
            respuesta:
                "Las fuentes secundarias son investigaciones o publicaciones que analizan información previamente recopilada, como estudios académicos, informes y publicaciones institucionales."
        },

        {
            id: 34,
            categoria: "historia",
            claves: ["testimonios", "testimonio"],
            respuesta:
                "Los testimonios de los habitantes permiten conocer recuerdos, costumbres, cambios y experiencias que forman parte de la memoria colectiva de San Bartolomé."
        },

        {
            id: 35,
            categoria: "historia",
            claves: ["memoria"],
            respuesta:
                "La memoria de los habitantes ayuda a reconstruir aspectos del pasado que no siempre aparecen en documentos escritos."
        },

        {
            id: 36,
            categoria: "historia",
            claves: ["territorio"],
            respuesta:
                "El territorio también es una fuente histórica porque conserva huellas de las actividades humanas, formas de organización, agricultura, caminos y transformaciones de la comunidad."
        },

        {
            id: 37,
            categoria: "historia",
            claves: ["interpretacion", "interpretación"],
            respuesta:
                "Interpretar una fuente histórica significa analizarla, relacionarla con otras evidencias y explicar qué nos permite comprender sobre el pasado."
        },

        {
            id: 38,
            categoria: "historia",
            claves: ["cambios", "cambios historicos"],
            respuesta:
                "Los cambios históricos pueden observarse en la población, las actividades económicas, las formas de transporte, las costumbres, el uso del territorio y las formas de comunicación."
        },

        {
            id: 39,
            categoria: "historia",
            claves: ["permanencias"],
            respuesta:
                "Las permanencias son elementos que continúan a través del tiempo, como determinadas costumbres, tradiciones, actividades comunitarias o formas de relación con el territorio."
        },

        {
            id: 40,
            categoria: "historia",
            claves: ["no solo contamos la historia"],
            respuesta:
                "La idea de TurisIA es: 'No solo contamos la historia. La interpretamos.' Esto significa que buscamos relacionar evidencias para comprender mejor el pasado."
        },

        {
            id: 41,
            categoria: "cultura",
            claves: ["cultura san bartolome", "cultura san bartolomé"],
            respuesta:
                "La cultura de San Bartolomé incluye tradiciones, festividades, danzas, gastronomía, formas de organización, actividades agrícolas y la relación de la comunidad con su territorio."
        },

        {
            id: 42,
            categoria: "cultura",
            claves: ["tradiciones"],
            respuesta:
                "Entre las manifestaciones culturales relacionadas con San Bartolomé aparecen danzas, festividades religiosas, actividades comunitarias y costumbres vinculadas al territorio."
        },

        {
            id: 43,
            categoria: "cultura",
            claves: ["negritos", "los negritos"],
            respuesta:
                "Los Negritos forman parte de las expresiones culturales y festivas asociadas a San Bartolomé."
        },

        {
            id: 44,
            categoria: "cultura",
            claves: ["cofradia", "cofradía"],
            respuesta:
                "La Cofradía de Negritos es una manifestación cultural mencionada dentro de los recursos culturales de San Bartolomé."
        },

        {
            id: 45,
            categoria: "cultura",
            claves: ["danzas"],
            respuesta:
                "Las danzas tradicionales son importantes porque transmiten memoria, identidad y formas de participación comunitaria entre generaciones."
        },

        {
            id: 46,
            categoria: "cultura",
            claves: ["curcuchas"],
            respuesta:
                "Las Curcuchas forman parte de las expresiones festivas presentes en el ámbito cultural de San Bartolomé y otros pueblos de la zona."
        },

        {
            id: 47,
            categoria: "cultura",
            claves: ["chaute"],
            respuesta:
                "Chaute está relacionado con recursos históricos y culturales del territorio de San Bartolomé."
        },

        {
            id: 48,
            categoria: "cultura",
            claves: ["mariquillas"],
            respuesta:
                "Las Mariquillas de Chaute y Arampampa aparecen mencionadas entre las manifestaciones culturales vinculadas al ámbito local."
        },

        {
            id: 49,
            categoria: "agricultura",
            claves: ["agricultura"],
            respuesta:
                "La agricultura es parte importante del entorno de San Bartolomé y se relaciona con el paisaje, la economía local y la forma en que la comunidad utiliza el territorio."
        },

        {
            id: 50,
            categoria: "agricultura",
            claves: ["tuna"],
            respuesta:
                "La tuna aparece vinculada a las actividades agrícolas y gastronómicas de la zona. También existen áreas agrícolas donde se cultiva esta especie."
        },

        {
            id: 51,
            categoria: "agua",
            claves: ["champeria", "champería"],
            respuesta:
                "La champería está relacionada con prácticas comunitarias de manejo del agua y con conocimientos locales vinculados a la agricultura."
        },

        {
            id: 52,
            categoria: "agua",
            claves: ["siembra y cosecha de agua"],
            respuesta:
                "La siembra y cosecha de agua comprende prácticas destinadas a captar, almacenar o favorecer la disponibilidad del agua, especialmente importante en territorios agrícolas."
        },

        {
            id: 53,
            categoria: "agua",
            claves: ["agua"],
            respuesta:
                "El agua tiene una relación importante con la agricultura, el territorio y las prácticas comunitarias de San Bartolomé."
        },

        {
            id: 54,
            categoria: "naturaleza",
            claves: ["naturaleza"],
            respuesta:
                "San Bartolomé posee paisajes de montaña, zonas agrícolas, vegetación y espacios naturales que pueden formar parte de experiencias de turismo responsable."
        },

        {
            id: 55,
            categoria: "naturaleza",
            claves: ["paisaje", "paisajes"],
            respuesta:
                "Los paisajes de San Bartolomé permiten observar el valle, áreas agrícolas, montañas y otros elementos naturales y humanos del territorio."
        },

        {
            id: 56,
            categoria: "naturaleza",
            claves: ["montañas", "montaña"],
            respuesta:
                "Las montañas forman parte del paisaje de San Bartolomé y ofrecen posibilidades para caminatas, observación del paisaje y turismo de naturaleza."
        },

        {
            id: 57,
            categoria: "naturaleza",
            claves: ["aves", "avistamiento de aves"],
            respuesta:
                "El avistamiento de aves es una actividad de naturaleza que puede realizarse mediante una observación responsable de la fauna local."
        },

        {
            id: 58,
            categoria: "naturaleza",
            claves: ["flora"],
            respuesta:
                "La flora forma parte del patrimonio natural de San Bartolomé. En algunos sectores del territorio pueden encontrarse especies adaptadas a condiciones de clima y relieve."
        },

        {
            id: 59,
            categoria: "naturaleza",
            claves: ["fauna"],
            respuesta:
                "La fauna local forma parte del entorno natural y debe observarse sin causar daño ni alterar los espacios donde viven los animales."
        },

        {
            id: 60,
            categoria: "naturaleza",
            claves: ["turismo de montaña"],
            respuesta:
                "El turismo de montaña puede incluir caminatas, observación del paisaje y actividades de contacto responsable con la naturaleza."
        },

        {
            id: 61,
            categoria: "cerrito",
            claves: ["cerrito de la pascua"],
            respuesta:
                "El Cerrito de la Pascua es uno de los atractivos naturales registrados para San Bartolomé. Es un punto que permite observar amplias vistas del territorio."
        },

        {
            id: 62,
            categoria: "cerrito",
            claves: ["mirador", "mirador cerrito"],
            respuesta:
                "El Mirador Cerrito de la Pascua es reconocido como un atractivo turístico natural del distrito y permite apreciar el paisaje de San Bartolomé y sectores cercanos."
        },

        {
            id: 63,
            categoria: "cerrito",
            claves: ["que hay en el cerrito", "qué hay en el cerrito"],
            respuesta:
                "Desde el Cerrito de la Pascua se pueden observar paisajes de San Bartolomé, sectores del valle del Rímac, áreas agrícolas y diferentes elementos del territorio."
        },

        {
            id: 64,
            categoria: "cerrito",
            claves: ["vista cerrito", "vista del cerrito"],
            respuesta:
                "El Cerrito de la Pascua ofrece una vista panorámica de San Bartolomé y de diversos sectores del valle y zonas agrícolas."
        },

        {
            id: 65,
            categoria: "cerrito",
            claves: ["mincetur cerrito", "mincetur"],
            respuesta:
                "El Cerrito de la Pascua aparece registrado como recurso turístico en información oficial de MINCETUR."
        },

        {
            id: 66,
            categoria: "cerrito",
            claves: ["codigo 6540", "6540"],
            respuesta:
                "El registro turístico del Mirador Cerrito de la Pascua aparece asociado al código 6540."
        },

        {
            id: 67,
            categoria: "cerrito",
            claves: ["jerarquia 2", "jerarquia"],
            respuesta:
                "En el registro turístico consultado, el Mirador Cerrito de la Pascua presenta jerarquía 2."
        },

        {
            id: 68,
            categoria: "cerrito",
            claves: ["1780", "altura cerrito"],
            respuesta:
                "El registro consultado señala una altitud aproximada de 1780 metros para el Mirador Cerrito de la Pascua."
        },

        {
            id: 69,
            categoria: "cerrito",
            claves: ["cerro san cristobal"],
            respuesta:
                "Desde el sector del Cerrito de la Pascua se mencionan vistas hacia distintos elementos del paisaje, entre ellos el Cerro San Cristóbal."
        },

        {
            id: 70,
            categoria: "cerrito",
            claves: ["rio rimac", "río rímac"],
            respuesta:
                "El paisaje observado desde el Cerrito de la Pascua permite relacionar el distrito con la cuenca del río Rímac."
        },

        {
            id: 71,
            categoria: "rutas",
            claves: ["rutas"],
            respuesta:
                "TurisIA puede orientarte sobre rutas de caminata y experiencias de naturaleza. Antes de realizar una ruta conviene considerar dificultad, clima, tiempo y seguridad."
        },

        {
            id: 72,
            categoria: "rutas",
            claves: ["ruta de caminata", "rutas de caminata"],
            respuesta:
                "Las rutas de caminata permiten conocer paisajes y espacios naturales del distrito. Es importante caminar por zonas seguras y respetar el entorno."
        },

        {
            id: 73,
            categoria: "rutas",
            claves: ["caminar"],
            respuesta:
                "Puedes realizar caminatas para conocer el paisaje de San Bartolomé. Lleva agua, protección solar, calzado adecuado y evita salir sin conocer la ruta."
        },

        {
            id: 74,
            categoria: "rutas",
            claves: ["trekking"],
            respuesta:
                "El trekking puede ser una alternativa para conocer zonas de montaña, siempre tomando en cuenta la dificultad del terreno y las condiciones climáticas."
        },

        {
            id: 75,
            categoria: "rutas",
            claves: ["senderismo"],
            respuesta:
                "El senderismo permite recorrer el territorio de manera tranquila y observar paisajes, vegetación y elementos culturales."
        },

        {
            id: 76,
            categoria: "rutas",
            claves: ["que llevar", "qué llevar"],
            respuesta:
                "Para una caminata puedes llevar agua, gorra, bloqueador solar, calzado cómodo, algo de comida, celular cargado y una bolsa para tus residuos."
        },

        {
            id: 77,
            categoria: "rutas",
            claves: ["seguridad caminata", "seguridad"],
            respuesta:
                "Para caminar de forma segura es mejor ir acompañado, informar a alguien sobre tu ruta, revisar el clima y evitar zonas peligrosas o desconocidas."
        },

        {
            id: 78,
            categoria: "familia",
            claves: ["familia", "en familia"],
            respuesta:
                "En familia pueden realizar caminatas cortas, conocer paisajes, visitar espacios culturales y aprender sobre la historia y las tradiciones de San Bartolomé."
        },

        {
            id: 79,
            categoria: "familia",
            claves: ["niños", "niños en san bartolome"],
            respuesta:
                "Con niños se pueden realizar actividades tranquilas como observar paisajes, conocer la cultura local y aprender sobre el patrimonio."
        },

        {
            id: 80,
            categoria: "familia",
            claves: ["que hacer en familia", "qué hacer en familia"],
            respuesta:
                "Una opción es combinar una visita a un atractivo con una actividad cultural y una caminata sencilla, siempre considerando la seguridad de todos."
        },

        {
            id: 81,
            categoria: "festividades",
            claves: ["festividades"],
            respuesta:
                "Las festividades de San Bartolomé combinan elementos religiosos, culturales y comunitarios. Entre las expresiones mencionadas están las celebraciones patronales y diferentes danzas tradicionales."
        },

        {
            id: 82,
            categoria: "festividades",
            claves: ["fiestas"],
            respuesta:
                "Las fiestas locales son espacios donde la comunidad mantiene tradiciones, música, danzas, gastronomía y participación colectiva."
        },

        {
            id: 83,
            categoria: "festividades",
            claves: ["san bartolome patron", "san bartolomé patrón"],
            respuesta:
                "La festividad de San Bartolomé está vinculada a la tradición religiosa y cultural del distrito."
        },

        {
            id: 84,
            categoria: "festividades",
            claves: ["24 agosto", "24 de agosto"],
            respuesta:
                "El 24 de agosto se relaciona con la festividad de San Bartolomé, una fecha importante dentro de la tradición local."
        },

        {
            id: 85,
            categoria: "festividades",
            claves: ["8 diciembre", "8 de diciembre"],
            respuesta:
                "El 8 de diciembre se relaciona con la celebración de la Virgen de la Natividad dentro de las tradiciones locales mencionadas."
        },

        {
            id: 86,
            categoria: "festividades",
            claves: ["8 enero", "8 de enero"],
            respuesta:
                "En la información turística del Cerrito de la Pascua se menciona una recepción del alguacil el 8 de enero."
        },

        {
            id: 87,
            categoria: "festividades",
            claves: ["27 diciembre", "27 de diciembre"],
            respuesta:
                "En la información del Cerrito de la Pascua se menciona la Bajada de Amancaes el 27 de diciembre, vinculada también con la presencia de los negritos."
        },

        {
            id: 88,
            categoria: "festividades",
            claves: ["bajada de amancae", "bajada de amancaes"],
            respuesta:
                "La Bajada de Amancaes aparece mencionada dentro de la información cultural relacionada con el Cerrito de la Pascua."
        },

        {
            id: 89,
            categoria: "gastronomia",
            claves: ["gastronomia", "gastronomía"],
            respuesta:
                "La gastronomía forma parte de la experiencia turística porque permite conocer productos, costumbres y formas de alimentación de la comunidad."
        },

        {
            id: 90,
            categoria: "gastronomia",
            claves: ["comida", "comidas"],
            respuesta:
                "Para conocer la gastronomía local puedes buscar ferias, actividades comunitarias y establecimientos de la zona. La oferta puede variar según la fecha."
        },

        {
            id: 91,
            categoria: "gastronomia",
            claves: ["platos tipicos", "platos típicos"],
            respuesta:
                "Los platos y productos locales forman parte de la identidad gastronómica de San Bartolomé. La disponibilidad puede variar según la temporada y las actividades de la comunidad."
        },

        {
            id: 92,
            categoria: "gastronomia",
            claves: ["tuna comida", "tuna gastronomia"],
            respuesta:
                "La tuna es un producto asociado al entorno agrícola de la zona y puede formar parte de actividades gastronómicas y ferias locales."
        },

        {
            id: 93,
            categoria: "turismo responsable",
            claves: ["turismo responsable"],
            respuesta:
                "El turismo responsable significa respetar la naturaleza, las costumbres, los espacios culturales y a los habitantes, además de evitar dejar residuos."
        },

        {
            id: 94,
            categoria: "turismo responsable",
            claves: ["cuidar", "cuidar el lugar"],
            respuesta:
                "Cuando visites San Bartolomé, evita dejar basura, dañar plantas, molestar animales o deteriorar espacios patrimoniales."
        },

        {
            id: 95,
            categoria: "turismo responsable",
            claves: ["basura"],
            respuesta:
                "Lleva tus residuos contigo y deposítalos en un lugar adecuado. Mantener limpio el territorio ayuda a conservar los atractivos turísticos."
        },

        {
            id: 96,
            categoria: "turismo responsable",
            claves: ["patrimonio"],
            respuesta:
                "El patrimonio comprende bienes, prácticas, conocimientos, espacios y expresiones que poseen valor para una comunidad y ayudan a construir su identidad."
        },

        {
            id: 97,
            categoria: "patrimonio",
            claves: ["patrimonio cultural"],
            respuesta:
                "El patrimonio cultural de San Bartolomé puede incluir manifestaciones, tradiciones, espacios, testimonios, conocimientos y otros elementos relacionados con la memoria colectiva."
        },

        {
            id: 98,
            categoria: "patrimonio",
            claves: ["patrimonio natural"],
            respuesta:
                "El patrimonio natural está relacionado con paisajes, ecosistemas, flora, fauna y otros elementos naturales que tienen valor para la comunidad."
        },

        {
            id: 99,
            categoria: "patrimonio",
            claves: ["conservar patrimonio"],
            respuesta:
                "Conservar el patrimonio permite que las futuras generaciones conozcan y valoren los elementos que forman parte de la historia y cultura local."
        },

        {
            id: 100,
            categoria: "tecnologia",
            claves: ["html"],
            respuesta:
                "HTML se utilizó para construir la estructura de las páginas de TurisIA."
        },

        {
            id: 101,
            categoria: "tecnologia",
            claves: ["css"],
            respuesta:
                "CSS se utiliza para diseñar la apariencia de TurisIA: colores, tamaños, distribución, botones, tarjetas y otros elementos visuales."
        },

        {
            id: 102,
            categoria: "tecnologia",
            claves: ["javascript"],
            respuesta:
                "JavaScript permite agregar interacción a TurisIA, como el funcionamiento del asistente, botones, respuestas y elementos dinámicos."
        },

        {
            id: 103,
            categoria: "tecnologia",
            claves: ["codigo"],
            respuesta:
                "El código permite conectar la estructura, diseño e interacción de la plataforma para crear una experiencia turística digital."
        },

        {
            id: 104,
            categoria: "tecnologia",
            claves: ["inteligencia artificial"],
            respuesta:
                "En TurisIA, la inteligencia artificial se plantea como una forma de facilitar la consulta de información turística e histórica mediante una interfaz conversacional."
        },

        {
            id: 105,
            categoria: "tecnologia",
            claves: ["ia"],
            respuesta:
                "La IA de TurisIA está orientada a responder consultas sobre San Bartolomé y facilitar el acceso a información organizada."
        },

        {
            id: 106,
            categoria: "tecnologia",
            claves: ["asistente"],
            respuesta:
                "El asistente de TurisIA funciona como una interfaz conversacional donde el visitante puede escribir preguntas relacionadas con el distrito."
        },

        {
            id: 107,
            categoria: "investigacion",
            claves: ["universidad federico villarreal"],
            respuesta:
                "Una investigación de la Universidad Nacional Federico Villarreal identificó recursos turísticos de San Bartolomé y señaló necesidades relacionadas con rutas, señalización e información turística."
        },

        {
            id: 108,
            categoria: "investigacion",
            claves: ["federico villarreal"],
            respuesta:
                "La Universidad Nacional Federico Villarreal es una de las referencias académicas consideradas dentro de la investigación de TurisIA."
        },

        {
            id: 109,
            categoria: "investigacion",
            claves: ["18 recursos"],
            respuesta:
                "La investigación académica utilizada como referencia identificó 18 recursos entre sitios naturales y manifestaciones culturales."
        },

        {
            id: 110,
            categoria: "investigacion",
            claves: ["18"],
            respuesta:
                "Se identificaron 18 recursos turísticos entre sitios naturales y manifestaciones culturales en la investigación tomada como referencia."
        },

        {
            id: 111,
            categoria: "investigacion",
            claves: ["señalizacion", "señalización"],
            respuesta:
                "Una de las necesidades señaladas en la investigación turística es fortalecer la señalización y la información para los visitantes."
        },

        {
            id: 112,
            categoria: "investigacion",
            claves: ["informacion turistica", "información turística"],
            respuesta:
                "La información turística ayuda al visitante a conocer qué lugares existen, cómo interpretarlos y cómo visitarlos de manera responsable."
        },

        {
            id: 113,
            categoria: "investigacion",
            claves: ["municipalidad"],
            respuesta:
                "La Municipalidad Distrital de San Bartolomé puede ser una fuente institucional importante para consultar información relacionada con el distrito."
        },

        {
            id: 114,
            categoria: "fuentes",
            claves: ["fuentes", "fuente"],
            respuesta:
                "Para estudiar San Bartolomé es recomendable contrastar diferentes fuentes y considerar su pertinencia, confiabilidad, actualidad y relación con el tema investigado."
        },

        {
            id: 115,
            categoria: "fuentes",
            claves: ["confiabilidad"],
            respuesta:
                "Una fuente confiable es aquella cuya información puede ser respaldada, identificada y contrastada con otras evidencias."
        },

        {
            id: 116,
            categoria: "fuentes",
            claves: ["pertinencia"],
            respuesta:
                "La pertinencia significa que la fuente realmente aporta información útil para responder la pregunta de investigación."
        },

        {
            id: 117,
            categoria: "fuentes",
            claves: ["contrastar"],
            respuesta:
                "Contrastar fuentes significa comparar información procedente de diferentes evidencias para encontrar coincidencias, diferencias y posibles explicaciones."
        },

        {
            id: 118,
            categoria: "fuentes",
            claves: ["evidencias"],
            respuesta:
                "Las evidencias pueden ser documentos, fotografías, testimonios, objetos, espacios, mapas, investigaciones y registros institucionales."
        },

        {
            id: 119,
            categoria: "identidad",
            claves: ["identidad"],
            respuesta:
                "La identidad local se construye mediante la memoria, las costumbres, el territorio, las experiencias compartidas y las manifestaciones culturales de la comunidad."
        },

        {
            id: 120,
            categoria: "identidad",
            claves: ["identidad san bartolome"],
            respuesta:
                "La identidad de San Bartolomé se relaciona con su territorio, historia, actividades agrícolas, tradiciones, festividades, memoria y formas de organización comunitaria."
        }

    ];

    /* =========================================================
       500 - NORMALIZACIÓN
       ========================================================= */

    function normalizarParte2(texto) {

        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!.,;:()[\]{}"'`]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }

    /* =========================================================
       510 - PALABRAS INFORMALMENTE ESCRITAS
       ========================================================= */

    const equivalencias = {

        "q": "que",
        "k": "que",
        "ke": "que",
        "xq": "porque",
        "pq": "porque",
        "porq": "porque",
        "pa": "para",
        "xfa": "por favor",
        "xfa": "por favor",
        "bartolo": "san bartolome",
        "bartolome": "san bartolome",
        "bartolomé": "san bartolome",
        "lugares": "lugares",
        "turistiko": "turistico",
        "turistkos": "turisticos",
        "historia": "historia",
        "historiaa": "historia",
        "cultura": "cultura",
        "festividades": "festividades",
        "fiestas": "festividades",
        "comida": "gastronomia",
        "comidas": "gastronomia",
        "lugars": "lugares",
        "lugar": "lugares",
        "chucunculla": "chucuncuya",
        "chucuncuia": "chucuncuya",
        "chucuncuyaaa": "chucuncuya",
        "cerritoo": "cerrito",
        "pascuaa": "pascua",
        "negrito": "negritos",
        "negritos": "negritos",
        "turisia": "turisia",
        "turis ia": "turisia"

    };

    /* =========================================================
       530 - CORRECCIÓN DE TEXTO
       ========================================================= */

    function corregirTextoParte2(texto) {

        let resultado = normalizarParte2(texto);

        Object.keys(equivalencias).forEach(function (incorrecto) {

            const correcto = equivalencias[incorrecto];

            resultado = resultado.replace(
                new RegExp("\\b" + incorrecto + "\\b", "g"),
                correcto
            );

        });

        return resultado;

    }

    /* =========================================================
       550 - OBTENER ELEMENTOS
       ========================================================= */

    function obtenerEntrada() {

        return document.querySelector("#aiInput");

    }

    function obtenerBoton() {

        return document.querySelector("#sendButton");

    }

    function obtenerMensajes() {

        return document.querySelector("#aiMessages");

    }

    /* =========================================================
       570 - RESPUESTA ALEATORIA
       ========================================================= */

    const respuestasGenerales = [

        "Claro. Te puedo ayudar con información sobre San Bartolomé, su historia, cultura, naturaleza y turismo.",

        "Sí, amigo. Pregúntame sobre lugares, rutas, festividades, historia o gastronomía de San Bartolomé.",

        "Puedo orientarte usando la información recopilada para el proyecto TurisIA.",

        "Buena pregunta. En TurisIA buscamos relacionar el turismo con la historia y la identidad local.",

        "Claro. Esa información forma parte de los temas que trabaja TurisIA.",

        "Puedes preguntarme de manera normal o informal. Por ejemplo: 'bro, ¿qué puedo hacer en Bartolo?'."

    ];

    /* =========================================================
       600 - PREGUNTAS GENERALES
       ========================================================= */

    const preguntasGenerales = [

        {
            claves: ["hola"],
            respuesta: "¡Hola! 👋 Soy Turis-IA. Estoy aquí para ayudarte a descubrir San Bartolomé."
        },

        {
            claves: ["holaa"],
            respuesta: "¡Holaaa! 😎 ¿Qué quieres conocer de San Bartolomé?"
        },

        {
            claves: ["hey"],
            respuesta: "¡Hey! 👋 Pregúntame lo que quieras sobre San Bartolomé."
        },

        {
            claves: ["buenas"],
            respuesta: "¡Buenas! 😎 ¿Buscas lugares, historia, cultura, rutas o festividades?"
        },

        {
            claves: ["gracias"],
            respuesta: "¡De nada! 🙌 Me alegra ayudarte a conocer San Bartolomé."
        },

        {
            claves: ["gracias bro"],
            respuesta: "¡No hay de qué, bro! 😎 Cuando quieras seguimos descubriendo San Bartolomé."
        },

        {
            claves: ["quien eres"],
            respuesta: "Soy Turis-IA, el asistente turístico digital del proyecto TurisIA."
        },

        {
            claves: ["cómo estás"],
            respuesta: "¡Todo bien! 😎 Listo para hablar sobre San Bartolomé."
        },

        {
            claves: ["como estas"],
            respuesta: "¡Todo bien! 😎 Listo para ayudarte con información de San Bartolomé."
        },

        {
            claves: ["que sabes"],
            respuesta: "Sé sobre los recursos turísticos, historia, cultura, festividades, naturaleza y datos de investigación relacionados con San Bartolomé."
        }

    ];

    /* =========================================================
       700 - BÚSQUEDA DE COINCIDENCIAS
       ========================================================= */

    function calcularCoincidencia(texto, claves) {

        let puntuacion = 0;

        claves.forEach(function (clave) {

            const claveNormalizada = normalizarParte2(clave);

            if (texto === claveNormalizada) {

                puntuacion += 100;

            } else if (texto.includes(claveNormalizada)) {

                puntuacion += 30;

            } else {

                const palabras = claveNormalizada.split(" ");

                palabras.forEach(function (palabra) {

                    if (palabra.length > 2 && texto.includes(palabra)) {

                        puntuacion += 5;

                    }

                });

            }

        });

        return puntuacion;

    }

    /* =========================================================
       720 - BUSCAR RESPUESTA
       ========================================================= */

    function buscarRespuestaParte2(pregunta) {

        const texto = corregirTextoParte2(pregunta);

        let mejor = null;
        let mejorPuntuacion = 0;

        preguntasGenerales.forEach(function (item) {

            const puntuacion = calcularCoincidencia(
                texto,
                item.claves
            );

            if (puntuacion > mejorPuntuacion) {

                mejorPuntuacion = puntuacion;
                mejor = item.respuesta;

            }

        });

        conocimientoParte2.forEach(function (item) {

            const puntuacion = calcularCoincidencia(
                texto,
                item.claves
            );

            if (puntuacion > mejorPuntuacion) {

                mejorPuntuacion = puntuacion;
                mejor = item.respuesta;

            }

        });

        if (mejorPuntuacion > 0) {

            return mejor;

        }

        return null;

    }

    /* =========================================================
       750 - RESPUESTAS ESPECIALES
       ========================================================= */

    function respuestaEspecial(pregunta) {

        const texto = corregirTextoParte2(pregunta);

        if (
            texto.includes("que puedo hacer") ||
            texto.includes("que hacer") ||
            texto.includes("actividades")
        ) {

            return "Puedes hacer caminatas, conocer atractivos naturales, aprender sobre la historia local, conocer expresiones culturales y disfrutar actividades relacionadas con la naturaleza y la comunidad.";

        }

        if (
            texto.includes("como llego") ||
            texto.includes("como llegar")
        ) {

            return "Para llegar a San Bartolomé normalmente se utiliza la Carretera Central y el acceso hacia el distrito. Si quieres una ruta exacta, es mejor utilizar el mapa de TurisIA o una aplicación de navegación actualizada.";

        }

        if (
            texto.includes("vale la pena") ||
            texto.includes("recomiendas ir")
        ) {

            return "Sí. San Bartolomé puede ser interesante si te gusta conocer lugares con historia, paisajes, tradiciones y actividades de naturaleza. Lo importante es visitar de manera responsable.";

        }

        if (
            texto.includes("es bonito") ||
            texto.includes("bonito san bartolome")
        ) {

            return "San Bartolomé tiene paisajes de montaña, áreas agrícolas y espacios desde donde se puede apreciar el valle. Además, su valor turístico no depende solamente del paisaje, sino también de su historia y cultura.";

        }

        if (
            texto.includes("por que visitar") ||
            texto.includes("porque visitar")
        ) {

            return "Porque puedes conocer un territorio donde se relacionan naturaleza, agricultura, historia, cultura y memoria comunitaria.";

        }

        if (
            texto.includes("fin de semana")
        ) {

            return "Para un fin de semana puedes organizar una visita a un atractivo natural, una caminata sencilla y una experiencia relacionada con la cultura local. Recuerda revisar horarios y condiciones antes de salir.";

        }

        if (
            texto.includes("con amigos") ||
            texto.includes("amigos")
        ) {

            return "Con amigos pueden hacer una caminata, visitar un mirador, tomar fotografías del paisaje y aprender sobre la historia y cultura local. Siempre respeten el lugar.";

        }

        return null;

    }

    /* =========================================================
       800 - RESPUESTA FINAL
       ========================================================= */

    function responderParte2(pregunta) {

        const especial = respuestaEspecial(pregunta);

        if (especial) {

            return especial;

        }

        const respuesta = buscarRespuestaParte2(pregunta);

        if (respuesta) {

            return respuesta;

        }

        return respuestasGenerales[
            Math.floor(Math.random() * respuestasGenerales.length)
        ];

    }

    /* =========================================================
       820 - EXPOSICIÓN GLOBAL
       ========================================================= */

    window.TurisIAParte2 = {

        nombre: nombreAsistente,

        version: "2.0",

        conocimiento: conocimientoParte2,

        responder: responderParte2,

        normalizar: normalizarParte2,

        buscar: buscarRespuestaParte2

    };

    /* =========================================================
       850 - INTEGRACIÓN CON LA PARTE 1
       ========================================================= */

    const respuestaAnterior = window.responderTurisIA;

    window.responderTurisIAParte2 = responderParte2;

    window.turisiaConocimientoParte2 = conocimientoParte2;

    /* =========================================================
       870 - RESPUESTA AMPLIADA
       ========================================================= */

    window.turisiaResponderAmpliado = function (pregunta) {

        const respuesta2 = responderParte2(pregunta);

        if (respuesta2) {

            return respuesta2;

        }

        if (typeof respuestaAnterior === "function") {

            return respuestaAnterior(pregunta);

        }

        return "Puedo ayudarte con información sobre San Bartolomé.";

    };

    /* =========================================================
       900 - MENSAJES DIRECTOS
       ========================================================= */

    function crearMensajeUsuario(texto) {

        const contenedor = obtenerMensajes();

        if (!contenedor) {

            return;

        }

        const elemento = document.createElement("div");

        elemento.className = "ai-message user-message";

        elemento.innerHTML =
            "<div class='ai-message-content'>" +
            escaparHTML(texto) +
            "</div>";

        contenedor.appendChild(elemento);

        contenedor.scrollTop = contenedor.scrollHeight;

    }

    function crearMensajeIA(texto) {

        const contenedor = obtenerMensajes();

        if (!contenedor) {

            return;

        }

        const elemento = document.createElement("div");

        elemento.className = "ai-message ai-message-bot";

        elemento.innerHTML =
            "<div class='ai-message-content'>" +
            formatearRespuesta(texto) +
            "</div>";

        contenedor.appendChild(elemento);

        contenedor.scrollTop = contenedor.scrollHeight;

    }

    function escaparHTML(texto) {

        return String(texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

    function formatearRespuesta(texto) {

        return escaparHTML(texto)
            .replace(/\n/g, "<br>");

    }

    /* =========================================================
       940 - ENVÍO LOCAL
       ========================================================= */

    function procesarPreguntaParte2() {

        const entrada = obtenerEntrada();

        if (!entrada) {

            console.warn(
                "TurisIA Parte 2: no se encontró #aiInput"
            );

            return;

        }

        const pregunta = entrada.value.trim();

        if (!pregunta) {

            return;

        }

        const respuesta = responderParte2(pregunta);

        crearMensajeUsuario(pregunta);

        entrada.value = "";

        setTimeout(function () {

            crearMensajeIA(respuesta);

        }, 350);

    }

    /* =========================================================
       960 - EVENTOS
       ========================================================= */

    function conectarParte2() {

        const boton = obtenerBoton();
        const entrada = obtenerEntrada();

        if (boton) {

            boton.addEventListener(
                "click",
                function () {

                    procesarPreguntaParte2();

                }
            );

        }

        if (entrada) {

            entrada.addEventListener(
                "keydown",
                function (evento) {

                    if (
                        evento.key === "Enter" &&
                        !evento.shiftKey
                    ) {

                        evento.preventDefault();

                        procesarPreguntaParte2();

                    }

                }
            );

        }

    }

    /* =========================================================
       980 - SUGERENCIAS
       ========================================================= */

    function conectarSugerencias() {

        const botones =
            document.querySelectorAll(
                ".ai-suggestion, .ai-quick-option"
            );

        botones.forEach(function (boton) {

            boton.addEventListener(
                "click",
                function () {

                    const pregunta =
                        boton.dataset.question ||
                        boton.textContent.trim();

                    const entrada =
                        obtenerEntrada();

                    if (entrada) {

                        entrada.value = pregunta;

                        procesarPreguntaParte2();

                    }

                }
            );

        });

    }

    /* =========================================================
       1000 - INICIO
       ========================================================= */

    function iniciarParte2() {

        conectarParte2();

        conectarSugerencias();

        console.log(
            "TurisIA Parte 2 cargada correctamente."
        );

        console.log(
            "Conocimientos cargados:",
            conocimientoParte2.length
        );

    }

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            iniciarParte2
        );

    } else {

        iniciarParte2();

    }

})();