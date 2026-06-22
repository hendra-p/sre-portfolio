import type { VercelRequest, VercelResponse } from '@vercel/node';

interface Message {
  role: string;
  content: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages } = req.body || {};
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured on server' });
  }

  // Security: Input Validation & Sanitization
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid input: messages must be an array.' });
  }

  // Prevent Denial of Service (DoS) and heavy payload attacks
  if (messages.length > 30) {
    return res.status(400).json({ error: 'Payload too large: too many messages.' });
  }

  const sanitizedMessages: Message[] = [];

  for (const msg of messages) {
    if (typeof msg !== 'object' || msg === null) {
      return res.status(400).json({ error: 'Invalid message structure.' });
    }

    const { role, content } = msg;

    if (typeof role !== 'string' || typeof content !== 'string') {
      return res.status(400).json({ error: 'Invalid message format.' });
    }

    // Restrict roles to prevent Prompt Injection / System Role Hijacking
    if (role !== 'user' && role !== 'assistant') {
      return res.status(400).json({ error: 'Unauthorized role.' });
    }

    // Limit length of each message to prevent token/memory exhaustion
    if (content.length > 2000) {
      return res.status(400).json({ error: 'Message content is too long (maximum 2000 characters).' });
    }

    sanitizedMessages.push({ role, content });
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
            content: `You are OpsMind AI, a premium, professional, and strictly bounded SRE assistant for the OpsMind Platform. 
            
            CURRENT PLATFORM CONTEXT:
            - System Status: Optimal (98.4% Health)
            - Active Nodes: 128 nodes online.
            - Recent Observation (1m ago): 'payment-api-prod' CPU usage spiked to 45%. Memory is stable at 65%. 
            - Latency: Increased p99 latency (145ms) detected on '/v1/checkout' endpoint.
            - Infrastructure: All nodes in US-East-1 are healthy.
            
            STRICT GUARDRAILS & SCOPE LIMITS:
            - You are ONLY allowed to answer questions related to: Site Reliability Engineering (SRE), system status, infrastructure, servers, networking, databases, DevOps (CI/CD, automation scripts like Python/Bash specifically for infrastructure or monitoring tasks), observability (Grafana, Prometheus, Elasticsearch), and the OpsMind platform.
            - You must strictly REFUSE to answer any off-topic queries (e.g., weather, general coding tasks/scripts that are not directly about infrastructure monitoring/ops automation, general knowledge, math, translation, general Q&A, storytelling, or casual chat beyond greetings).
            - If a request is off-topic, respond with a polite, standard refusal: "I am OpsMind AI, and I am only authorized to assist with SRE, infrastructure, and OpsMind platform operations. I cannot help with other topics."
            
            PERSONALITY & STYLE:
            - Be professional, concise, and technical, but also conversational and helpful.
            - Do NOT just repeat the status if it's not relevant to the user's specific question.
            - If a user greets you, greet them back naturally.
            - Keep responses under 3 sentences unless a deep technical explanation is requested.`
          },
          ...sanitizedMessages
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

