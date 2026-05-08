import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured on server' });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are OpsMind AI, a premium and professional SRE assistant for the OpsMind Platform. 
            
            CURRENT PLATFORM CONTEXT:
            - System Status: Optimal (98.4% Health)
            - Active Nodes: 128 nodes online.
            - Recent Observation (1m ago): 'payment-api-prod' CPU usage spiked to 45%. Memory is stable at 65%. 
            - Latency: Increased p99 latency (145ms) detected on '/v1/checkout' endpoint.
            - Infrastructure: All nodes in US-East-1 are healthy.
            
            PERSONALITY & STYLE:
            - Be professional, concise, and technical, but also conversational and helpful.
            - Do NOT just repeat the status if it's not relevant to the user's specific question.
            - If a user greets you, greet them back naturally.
            - If asked for something off-topic (like a joke), you can comply briefly but stay in your "SRE persona" (e.g., make it a technical joke).
            - Keep responses under 3 sentences unless a deep technical explanation is requested.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 256
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
