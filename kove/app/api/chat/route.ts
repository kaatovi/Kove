import { RESUME_CONTEXT } from "@/lib/resumeContext";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request){
    try{
        const {messages} = await req.json();
        const stream = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            stream: true,
            max_tokens: 300,
            messages: [
                {role: "system", content: RESUME_CONTEXT},
                ...messages,
            ],
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const text = chunk.choices[0]?.delta?.content ?? "";
                    if (text) controller.enqueue(encoder.encode(text));
                }
                controller.close();
            },
        });

        return new Response(readable, {
            headers: { "Content-Type": "text/plain; charset=utf-8"},
        });
    } catch(err) {
        console.error("Chat API error:", JSON.stringify(err, null, 2));
        const message = err instanceof Error ? err.message : "Unknown error";
        return new Response(message, {
            status:500,
        });
    }
}