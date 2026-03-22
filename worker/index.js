const ALLOWED_ORIGINS = [
  'https://kakure6.github.io',
  'http://localhost:5173',
  'http://localhost:4173',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') ?? '';
    const url    = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (url.pathname === '/ai' && request.method === 'POST') {
      // シークレットトークン検証
      const token = request.headers.get('X-Worker-Secret');
      if (!token || token !== env.WORKER_SECRET) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
        });
      }

      const { prompt } = await request.json();

      // プロンプト長制限（悪用防止）
      if (!prompt || prompt.length > 2000) {
        return new Response(JSON.stringify({ error: 'Invalid prompt' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
        });
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model:      'llama-3.3-70b-versatile',
          max_tokens: 1024,
          messages:   [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const msg = data.error?.message ?? 'Groq API error';
        return new Response(JSON.stringify({ error: msg }), {
          status:  500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
        });
      }

      const content = data.choices?.[0]?.message?.content ?? '';
      return new Response(JSON.stringify({ content }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
