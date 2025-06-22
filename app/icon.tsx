import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#8B4513",
          border: "2px solid #8B4513",
          borderRadius: "50%",
        }}
      >
        {/* Simplified synapse icon for favicon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 100 100"
          style={{
            color: "#8B4513",
          }}
        >
          {/* The synapse connection curve */}
          <path
            d="M 15 50 C 35 80, 65 20, 85 50"
            stroke="#8B4513"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          {/* Start Node */}
          <circle cx="15" cy="50" r="8" fill="#8B4513" />
          {/* End Node */}
          <circle cx="85" cy="50" r="8" fill="#8B4513" fillOpacity="0.8" />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
