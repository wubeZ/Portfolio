import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { techKey, techLabel } from "@/lib/tech";
import { ProgLanguages } from "@/lib/types";
import { getProgLanguages } from "@/sanity/sanity.query";

export const alt =
  "Wubshet Zeleke, full-stack developer, next to a stack of interface, server and data technologies.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The dark palette from globals.css. The image renders outside the page, so it can't read the CSS variables.
const colors = {
  canvas: "#06102a",
  surface: "#0e2140",
  line: "#1d3558",
  ink: "#eaf1fa",
  muted: "#93a3bc",
  accent: "#2cd4ea",
};

const fontDir = join(process.cwd(), "assets/fonts");
const fonts = Promise.all([
  readFile(join(fontDir, "SchibstedGrotesk-Medium.ttf")),
  readFile(join(fontDir, "SchibstedGrotesk-Bold.ttf")),
  readFile(join(fontDir, "IBMPlexMono-Medium.ttf")),
]);

// Three chips fit on one row of a slab at this size.
const CHIPS_PER_LAYER = 3;

function chips(names: string[]) {
  const seen = new Set<string>();
  return names
    .filter((name) => {
      const key = techKey(name);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, CHIPS_PER_LAYER)
    .map(techLabel);
}

export default async function Image() {
  const [[medium, bold, mono], skills] = await Promise.all([
    fonts,
    getProgLanguages() as Promise<ProgLanguages>,
  ]);
  const layers = [
    { name: "Interface", items: chips(skills.frontend) },
    { name: "Server", items: chips(skills.backend) },
    { name: "Data", items: chips(skills.database) },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 40,
          padding: "0 72px",
          background: colors.canvas,
          color: colors.ink,
          fontFamily: "Schibsted Grotesk",
          borderTop: `8px solid ${colors.accent}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
            }}
          >
            <span>Wubshet</span>
            <span>Zeleke</span>
          </div>
          <div style={{ marginTop: 36, fontSize: 28, fontWeight: 500 }}>
            Full-stack developer based in Ethiopia
          </div>
          <div
            style={{
              marginTop: 56,
              fontFamily: "IBM Plex Mono",
              fontSize: 24,
              color: colors.accent,
            }}
          >
            wubshetzeleke.vercel.app
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: 460,
          }}
        >
          {layers.map((layer, index) => (
            <div
              key={layer.name}
              style={{
                display: "flex",
                flexDirection: "column",
                width: 392,
                marginLeft: index * 34,
                padding: "18px 22px",
                borderRadius: 16,
                border: `2px solid ${colors.line}`,
                background: colors.surface,
                boxShadow: `0 8px 0 0 ${colors.line}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 700 }}>{layer.name}</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 12,
                }}
              >
                {layer.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 8,
                      border: `1.5px solid ${colors.line}`,
                      background: colors.canvas,
                      fontFamily: "IBM Plex Mono",
                      fontSize: 17,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted Grotesk", data: medium, weight: 500 },
        { name: "Schibsted Grotesk", data: bold, weight: 700 },
        { name: "IBM Plex Mono", data: mono, weight: 500 },
      ],
    },
  );
}
