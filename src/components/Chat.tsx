"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect, FormEvent } from "react";

const SUGGESTIONS = [
  "What does Prem do?",
  "Tell me about his SaaS products",
  "What's his tech stack?",
];

function getTextContent(message: { parts: Array<{ type: string; text?: string }> }): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

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
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center transition-all duration-200"
        style={{
          background: "var(--accent)",
          color: "var(--bg)",
          border: "1px solid var(--border)",
          boxShadow: "0 2px 12px oklch(0% 0 0 / 0.15)",
        }}
      >
        {open ? (
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.9 2.9A.75.75 0 015 14.44V12H2.75A1.75 1.75 0 011 10.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25H5.5a.75.75 0 01.75.75v1.94l2.22-2.22a.75.75 0 01.53-.22h4.25a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 flex flex-col"
          style={{
            bottom: "5rem",
            right: "1.5rem",
            width: "min(380px, calc(100vw - 2rem))",
            height: "min(520px, calc(100svh - 7rem))",
            background: "var(--bg)",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 32px oklch(0% 0 0 / 0.12)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 shrink-0"
            style={{ borderBottom: "1px solid var(--border-light)" }}
          >
            <div
              className="w-7 h-7 flex items-center justify-center text-xs font-bold"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                fontFamily: "var(--font-sans)",
              }}
            >
              P
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
                Ask about Prem
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
              >
                Powered by Gemini
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs" style={{ color: "var(--text-3)" }}>
                  Ask me anything about Prem&apos;s work, experience, or projects.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestion(s)}
                      className="text-xs px-2.5 py-1.5 transition-colors duration-150"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                        background: "var(--surface)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                    className="text-sm leading-relaxed max-w-[85%] px-3 py-2"
                    style={{
                      background: m.role === "user" ? "var(--accent)" : "var(--surface)",
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
                  className="text-sm px-3 py-2 flex items-center gap-1"
                  style={{
                    background: "var(--surface)",
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

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 shrink-0"
            style={{ borderTop: "1px solid var(--border-light)" }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-transparent outline-none"
              style={{ color: "var(--text-1)" }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 w-8 h-8 flex items-center justify-center transition-opacity duration-150"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                opacity: isLoading || !input.trim() ? 0.3 : 1,
              }}
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M.989 8 .064 2.68a1.342 1.342 0 011.85-1.462l13.402 5.744a1.13 1.13 0 010 2.076L1.913 14.782a1.343 1.343 0 01-1.85-1.463L.99 8zm.603-5.318L2.38 7.25h4.87a.75.75 0 010 1.5H2.38l-.788 4.568L13.929 8 1.592 2.682z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
