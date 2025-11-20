// netlify/functions/diagnostico.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // service role (NO la key pública)

const supabase = createClient(supabaseUrl, supabaseServiceKey);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const {
      nombre,
      tipo,
      ciudad,
      whatsapp,
      como,
      dolor,
      plan,
    } = data;

    // Validación mínima
    if (!nombre || !tipo || !whatsapp || !como || !dolor) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan campos obligatorios' }),
      };
    }

    const userAgent = event.headers['user-agent'] || null;

    const { error } = await supabase
      .from('diagnosticos_add')
      .insert({
        nombre,
        tipo,
        ciudad,
        whatsapp,
        como,
        dolor,
        plan,
        user_agent: userAgent,
      });

    if (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error al guardar el diagnóstico' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al procesar la solicitud' }),
    };
  }
};
