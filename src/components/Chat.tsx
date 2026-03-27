"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { useState, useRef, useEffect, useMemo, FormEvent } from "react";

function getTextContent(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function Chat() {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const transport = useMemo(() => new TextStreamChatTransport({ api: "/api/chat" }), []);
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
      {/* Messages — above input when present */}
      {hasMessages && (
        <div
          ref={scrollRef}
          className="space-y-2.5 overflow-y-auto mb-2.5"
          style={{
            maxHeight: "220px",
            scrollbarWidth: "none",
          }}
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
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-2.5 mt-0.5"
                    style={{
                      background: "var(--text-1)",
                      color: "var(--bg)",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    P
                  </div>
                )}
                <div
                  className="text-sm leading-relaxed"
                  style={{
                    maxWidth: "80%",
                    padding: isUser ? "0.5rem 0.85rem" : "0",
                    borderRadius: isUser ? "1rem 1rem 0.25rem 1rem" : "0",
                    background: isUser ? "var(--text-1)" : "transparent",
                    color: isUser ? "var(--bg)" : "var(--text-2)",
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}

        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 w-full"
        style={{
          padding: "0.55rem 0.55rem 0.55rem 1rem",
          background: focused ? "var(--surface)" : "transparent",
          border: "1px solid",
          borderColor: focused ? "var(--text-4)" : "var(--border)",
          borderRadius: "2rem",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: focused ? "0 2px 12px oklch(0% 0 0 / 0.04)" : "none",
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={hasMessages ? "Ask a follow-up..." : "Ask about my work or experience..."}
          className="flex-1 text-sm bg-transparent outline-none"
          style={{
            color: "var(--text-1)",
            caretColor: "var(--text-1)",
          }}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="shrink-0 w-9 h-9 flex items-center justify-center transition-all duration-200"
          style={{
            background: input.trim() ? "var(--text-1)" : "var(--border)",
            color: "var(--bg)",
            borderRadius: "50%",
            opacity: isLoading ? 0.4 : 1,
            transform: input.trim() ? "scale(1)" : "scale(0.92)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
            style={{ transform: "translateX(0.5px)" }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>

    </div>
  );
}
