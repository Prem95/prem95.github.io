"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect, FormEvent } from "react";

const SUGGESTIONS = [
  "What does Prem build?",
  "His SaaS products",
  "Tech stack",
];

function getTextContent(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function Chat() {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat();

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

  const handleSuggestion = (text: string) => {
    setInput("");
    sendMessage({ text });
  };

  return (
    <div className="w-full">
      {/* Input bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 w-full"
        style={{
          padding: "0.75rem 1rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          transition: "border-color 0.15s ease",
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--text-3)";
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          }
        }}
      >
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: "var(--text-4)" }}>
          <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.9 2.9A.75.75 0 015 14.44V12H2.75A1.75 1.75 0 011 10.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25H5.5a.75.75 0 01.75.75v1.94l2.22-2.22a.75.75 0 01.53-.22h4.25a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75z" />
        </svg>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Prem..."
          className="flex-1 text-sm bg-transparent outline-none"
          style={{ color: "var(--text-1)" }}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="shrink-0 w-7 h-7 flex items-center justify-center transition-opacity duration-150"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            opacity: isLoading || !input.trim() ? 0.25 : 1,
          }}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
            <path d="M.989 8 .064 2.68a1.342 1.342 0 011.85-1.462l13.402 5.744a1.13 1.13 0 010 2.076L1.913 14.782a1.343 1.343 0 01-1.85-1.463L.99 8zm.603-5.318L2.38 7.25h4.87a.75.75 0 010 1.5H2.38l-.788 4.568L13.929 8 1.592 2.682z" />
          </svg>
        </button>
      </form>

      {/* Suggestions */}
      {!hasMessages && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="text-xs px-2.5 py-1 transition-colors duration-150"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-3)",
                background: "transparent",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text-3)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-3)";
              }}
            >
              {s}
            </button>
          ))}
          <span className="text-xs self-center" style={{ color: "var(--text-4)", fontFamily: "var(--font-mono)" }}>
            Powered by Gemini
          </span>
        </div>
      )}

      {/* Messages */}
      {hasMessages && (
        <div
          ref={scrollRef}
          className="mt-3 space-y-2.5 overflow-y-auto"
          style={{
            maxHeight: "280px",
            padding: "0.75rem",
            background: "var(--surface)",
            border: "1px solid var(--border-light)",
          }}
        >
          {messages.map((m) => {
            const text = getTextContent(m);
            if (!text) return null;
            return (
              <div
                key={m.id}
                className="flex"
                style={{ justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}
              >
                <div
                  className="text-sm leading-relaxed px-3 py-2"
                  style={{
                    maxWidth: "85%",
                    background: m.role === "user" ? "var(--accent)" : "var(--bg)",
                    color: m.role === "user" ? "var(--bg)" : "var(--text-1)",
                    border: m.role === "user" ? "none" : "1px solid var(--border-light)",
                  }}
                >
                  {text}
                </div>
              </div>
            );
          })}

          {status === "submitted" && (
            <div className="flex justify-start">
              <div
                className="text-sm px-3 py-2 flex items-center gap-1.5"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-3)",
                }}
              >
                <span className="inline-block w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--text-3)" }} />
                <span className="inline-block w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--text-3)", animationDelay: "0.2s" }} />
                <span className="inline-block w-1 h-1 rounded-full animate-pulse" style={{ background: "var(--text-3)", animationDelay: "0.4s" }} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
