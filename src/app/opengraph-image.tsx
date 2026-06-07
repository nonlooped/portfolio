import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#fafafa",
          color: "#1a1210",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(220, 70, 50, 0.14)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            position: "relative",
          }}
        >
          <span>Looped</span>
          <span style={{ color: "#d63f2f" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              lineHeight: 0.9,
            }}
          >
            <span
              style={{
                fontSize: 88,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
              }}
            >
              Designer
            </span>
            <span
              style={{
                fontSize: 58,
                fontStyle: "italic",
                fontWeight: 500,
                color: "#d63f2f",
                textTransform: "lowercase",
                letterSpacing: "-0.03em",
              }}
            >
              with imagination
            </span>
            <span
              style={{
                fontSize: 88,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
              }}
            >
              For years.
            </span>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: 760,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#5c4f4b",
            }}
          >
            {siteConfig.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "#7a6d68",
            position: "relative",
          }}
        >
          <span>50M+ game visits</span>
          <span>200+ clients</span>
          <span>8 yrs shipping</span>
        </div>
      </div>
    ),
    size,
  );
}
