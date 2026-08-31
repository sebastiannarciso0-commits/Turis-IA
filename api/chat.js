import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


export default async function handler(req, res) {

    // =====================================================
    // SOLO PERMITIR POST
    // =====================================================

    if (req.method !== "POST") {

        return res.status(405).json({
            error: "Método no permitido"
        });

    }


    try {

        // =================================================
        // RECIBIR MENSAJE
        // =================================================

        const { message } = req.body;


        if (!message || !message.trim()) {

            return res.status(400).json({
                error: "No se recibió ninguna pregunta."
            });

        }


        // =================================================
        // INSTRUCCIONES DE TURIS-IA
        // =================================================

        const instructions = `

Eres TURIS-IA, un asistente turístico inteligente
especializado en San Bartolomé, provincia de Huarochirí,
región Lima, Perú.

Tu objetivo es ayudar a visitantes, estudiantes y
habitantes a conocer y valorar el patrimonio cultural,
histórico y natural de San Bartolomé.

TEMAS PRINCIPALES:

- Historia de San Bartolomé.
- Patrimonio cultural.
- Patrimonio natural.
- Festividades tradicionales.
- Los Negritos.
- Las Curcuchas.
- Costumbres y tradiciones.
- Gastronomía local.
- Lugares turísticos.
- Rutas y caminatas.
- Actividades familiares.
- Turismo responsable.
- Revalorización del patrimonio.

FORMA DE RESPONDER:

1. Responde siempre en español.

2. Utiliza un lenguaje claro, natural y cercano.

3. Cuando sea apropiado, explica la información
   de manera que también pueda entenderla un estudiante.

4. Prioriza San Bartolomé y su contexto local.

5. NO inventes datos históricos, fechas, nombres,
   tradiciones o acontecimientos.

6. Si no tienes suficiente información para afirmar
   algo sobre San Bartolomé, dilo claramente.

7. Diferencia entre información comprobada,
   interpretación histórica y tradición oral cuando
   sea necesario.

8. Promueve el respeto y la conservación del
   patrimonio cultural y natural.

9. No presentes como hecho algo que solamente
   sea una hipótesis.

10. Si el usuario pregunta por un lugar turístico,
    intenta explicar:
       - qué es,
       - por qué es importante,
       - qué puede observar,
       - y qué debería tener en cuenta al visitarlo.

11. Si pregunta por una festividad, explica su
    importancia cultural y evita inventar fechas
    o significados que no estén confirmados.

12. Si la pregunta no tiene relación con turismo,
    historia, cultura, patrimonio o San Bartolomé,
    puedes responder brevemente, pero recuerda
    que tu especialidad es el turismo local.

Tu nombre es Turis-IA.
`;



        // =================================================
        // LLAMAR A OPENAI
        // =================================================

        const response =
            await client.responses.create({

                model: "gpt-5-mini",

                instructions:

                    instructions,

                input: message

            });



        // =================================================
        // OBTENER RESPUESTA
        // =================================================

        const reply =
            response.output_text;



        // =================================================
        // RESPONDER AL FRONTEND
        // =================================================

        return res.status(200).json({

            reply: reply

        });


    }

    catch (error) {

        console.error(
            "ERROR TURIS-IA:",
            error
        );


        return res.status(500).json({

            error:
                "No se pudo conectar con Turis-IA."

        });

    }

}