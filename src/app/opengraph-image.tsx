import { ImageResponse } from "next/og";
import { config } from "@/lib/data";

export const alt = `${config.name} — AI Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafafa",
          color: "#18181b",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#71717a",
          }}
        >
          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 999,
              backgroundColor: "#1f9d57",
            }}
          />
          AI Engineer · Builder
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            Prem Kumar
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#52525b",
              marginTop: 26,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Agentic AI systems in production — LangGraph, RAG, Claude Code. Indie
            SaaS on the side.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <span>premkumar95.com</span>
          <span>Ancileo · Simpler suite</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
