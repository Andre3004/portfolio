import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        AF
        <span style={{ color: "#c4f23f" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
