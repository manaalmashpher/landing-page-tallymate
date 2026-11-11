import { ImageResponse } from "next/og";

export const alt = "TallyMate. Ask your books. Get clear answers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#f5f7f2", color: "#233b32", padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "sans-serif" }}><div style={{ fontSize: 34, display: "flex" }}>tallymate<span style={{ color: "#65806e" }}>.</span></div><div style={{ fontSize: 86, letterSpacing: -5, fontWeight: 700, display: "flex", flexDirection: "column" }}><span>Ask your books.</span><span style={{ color: "#245b49" }}>Get clear answers.</span></div><div style={{ fontSize: 26 }}>Your Tally books, made clear.</div></div>, size);
}
