"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { ArrowUp } from "lucide-react";
import { useState, useRef, useEffect, useMemo, FormEvent } from "react";

function getTextContent(message: {
  parts: Array<{ type: string; text?: string }>;
}): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function Chat() {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new TextStreamChatTransport({ api: "/api/chat" }),
    [],
  );
  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === "submitted" || status === "streaming";
  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    sendMessage({ text });
  };

  return (
    <div className="w-full">
      {hasMessages && (
        <div
          ref={scrollRef}
          className="no-scrollbar mb-2.5 flex max-h-[220px] flex-col gap-2.5 overflow-y-auto"
        >
          {messages.map((m) => {
            const text = getTextContent(m);
            if (!text) return null;
            const isUser = m.role === "user";
            return (
              <div
                key={m.id}
                className="flex"
                style={{ justifyContent: isUser ? "flex-end" : "flex-start" }}
              >
                {!isUser && (
                  <div className="mt-0.5 mr-2.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[0.55rem] font-bold text-background">
                    P
                  </div>
                )}
                <div
                  className="text-sm leading-relaxed"
                  style={{
                    maxWidth: "80%",
                    padding: isUser ? "0.5rem 0.85rem" : "0",
                    borderRadius: isUser ? "1rem 1rem 0.25rem 1rem" : "0",
                    background: isUser ? "var(--foreground)" : "transparent",
                    color: isUser
                      ? "var(--background)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center gap-3 rounded-full border py-[0.55rem] pr-[0.55rem] pl-4 transition-[background-color,border-color,box-shadow] duration-300"
        style={{
          background: focused ? "var(--card)" : "transparent",
          borderColor: focused ? "var(--ring)" : "var(--border)",
          boxShadow: focused ? "0 2px 14px oklch(0% 0 0 / 0.05)" : "none",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={
            hasMessages
              ? "Ask a follow-up…"
              : "Ask about my work or experience…"
          }
          className="flex-1 bg-transparent text-sm text-foreground caret-foreground outline-none placeholder:text-muted-foreground"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send"
          className="flex size-9 shrink-0 items-center justify-center rounded-full transition-[background-color,transform,opacity] duration-200 active:scale-[0.96]"
          style={{
            background: input.trim() ? "var(--foreground)" : "var(--border)",
            color: "var(--background)",
            opacity: isLoading ? 0.4 : 1,
            transform: input.trim() ? "scale(1)" : "scale(0.92)",
          }}
        >
          <ArrowUp className="size-4" />
        </button>
      </form>
    </div>
  );
}
