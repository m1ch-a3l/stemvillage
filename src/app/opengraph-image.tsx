import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0F1A45 0%, #1B2A6B 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 700,
            color: "#F2B705",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#F2B705",
              color: "#0F1A45",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            S
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 40, maxWidth: 900, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
          STEM education, workshops, mentorship and school partnerships.
        </div>
      </div>
    ),
    { ...size }
  );
}
