import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Generated favicon — navy field with silver compass mark */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b2845",
          borderRadius: 6,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" stroke="#d4d8de" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3.5" stroke="#a8adb8" strokeWidth="1.25" />
          <path d="M12 3.5 L12.8 9.2 L12 8.2 L11.2 9.2 Z" fill="#d4d8de" />
          <path d="M12 20.5 L12.8 14.8 L12 15.8 L11.2 14.8 Z" fill="#a8adb8" />
          <path d="M3.5 12 L9.2 12.8 L8.2 12 L9.2 11.2 Z" fill="#a8adb8" />
          <path d="M20.5 12 L14.8 12.8 L15.8 12 L14.8 11.2 Z" fill="#a8adb8" />
          <circle cx="12" cy="12" r="1.25" fill="#d4d8de" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
