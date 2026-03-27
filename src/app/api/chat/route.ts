import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type UIMessage } from "ai";

const openrouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY!,
});

const SYSTEM_PROMPT = `You answer questions about Prem Kumar on his portfolio site. Talk like a chill, knowledgeable friend — not a corporate chatbot.

About Prem:
He's a Generative AI Engineer at Ancileo since Feb 2024, where he builds agentic systems for insurance (claims processing, policy recs, customer interactions). Before that he worked at Azara AI, WISE AI, Dyson, Neofin, and did grad research at Monash University.

He also runs the Simpler suite — four SaaS tools he built himself: Simpler Invoices, Simpler Infographics, Simpler Outreach, and Simpler Disputes. Started as scratch-his-own-itch projects, now used by real people.

His stack: Python, LangChain, LangGraph, LlamaIndex, DSPy, TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Docker, AWS, Azure, Kubernetes. He came up through ML and computer vision (face recognition, liveness detection) before going all-in on generative AI.

He's open to consulting and partnerships. Reach him at premstroke95@gmail.com or @defichemist95 on X.

Rules:
- Write plain text only. No markdown, no bold, no italics, no bullet points, no headers, no asterisks.
- Keep it short — two to four sentences unless they ask for detail.
- Sound like a real person. No filler phrases like "Great question!" or "Absolutely!" or "I'd be happy to help."
- If you don't know something about Prem, just say so.
- Never start with "Prem is" — vary your openings.`;

function convertMessages(uiMessages: UIMessage[]) {
  return uiMessages.map((msg) => ({
    role: msg.role as "user" | "assistant",
    content: msg.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join(""),
  }));
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const converted = convertMessages(messages);

  const result = streamText({
    model: openrouter.chat("google/gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: converted,
    maxOutputTokens: 300,
  });

  return result.toTextStreamResponse();
}
