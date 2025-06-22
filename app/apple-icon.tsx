import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #8B4513, #A0522D)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "20%",
        }}
      >
        {/* Larger synapse icon for Apple touch icon */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          style={{
            color: "white",
          }}
        >
          {/* The synapse connection curve */}
          <path
            d="M 15 50 C 35 80, 65 20, 85 50"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Start Node */}
          <circle cx="15" cy="50" r="10" fill="white" />
          {/* End Node */}
          <circle cx="85" cy="50" r="10" fill="white" fillOpacity="0.8" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
