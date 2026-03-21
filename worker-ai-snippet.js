/**
 * Cloudflare Worker に追加する /ai エンドポイント
 * 既存の worker.js の fetch ハンドラー内に追加してください
 *
 * 環境変数に ANTHROPIC_API_KEY を設定すること
 * （Cloudflare Dashboard → Workers → Settings → Variables）
 */

// ── 既存の fetch ハンドラーに追記 ─────────────────────────────
// if (pathname === '/ai' && request.method === 'POST') {
//   return handleAI(request, env);
// }

async function handleAI(request, env) {
  const { prompt } = await request.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages:   [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  const content = data.content?.[0]?.text ?? '';

  return new Response(JSON.stringify({ content }), {
    headers: {
      'Content-Type':                'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

// CORS プリフライト対応（既存ハンドラーにも追加）
// if (request.method === 'OPTIONS') {
//   return new Response(null, {
//     headers: {
//       'Access-Control-Allow-Origin':  '*',
//       'Access-Control-Allow-Methods': 'POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   });
// }
