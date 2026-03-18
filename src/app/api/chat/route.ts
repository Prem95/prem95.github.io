import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type UIMessage } from "ai";

const openrouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY!,
});

const SYSTEM_PROMPT = `You are Prem's portfolio assistant. You help visitors learn about Prem Kumar — an AI Engineer & Builder based in Singapore.

Key facts about Prem:
- Generative AI Engineer at Ancileo (since Feb 2024), building agentic systems for the insurance industry
- Previously worked at Azara AI, WISE AI, Dyson, Neofin, and Monash University
- Builds the "Simpler" SaaS suite: Simpler Invoices, Simpler Infographics, Simpler Outreach, Simpler Disputes
- Skills: Python, LangChain, LangGraph, LlamaIndex, DSPy, OpenAI API, TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Docker, AWS/Azure, Kubernetes
- Background in ML/Computer Vision (face recognition, liveness detection), transitioned into Generative AI
- Graduate Research at Monash University (2017-2018), worked on CNN-based palm seed classification for Sime Darby
- Open to consulting engagements and product partnerships
- Email: premkumar@premstroke.com
- GitHub: github.com/Prem95
- Twitter: @premstroke95

Be concise, friendly, and direct. Keep responses short (2-4 sentences) unless asked for detail. If asked something you don't know about Prem, say so honestly. Do not make up information.`;

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
