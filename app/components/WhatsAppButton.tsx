"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919042801480"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          background: "#07193f",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "var(--font-dm-sans, sans-serif)",
          letterSpacing: "0.04em",
          padding: "6px 14px",
          borderRadius: "8px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(7,25,63,0.25)",
          border: "1px solid rgba(255,255,255,0.08)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0) scale(1)" : "translateX(10px) scale(0.95)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
        }}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div style={{ position: "relative" }}>
        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            background: "#F57C00",
            animation: "wa-pulse 2.2s ease-out infinite",
            opacity: 0.4,
          }}
        />

        {/* Icon square */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F57C00 0%, #E65100 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: hovered
              ? "0 8px 28px rgba(245,124,0,0.45)"
              : "0 6px 24px rgba(245,124,0,0.35)",
            transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0)",
            transition: "all 0.28s cubic-bezier(.34,1.56,.64,1)",
            position: "relative",
            zIndex: 1,
            border: "2px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* WhatsApp SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 175.216 175.552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M149.995 25.157C133.302 8.423 111.35 0 87.531 0 39.766 0 .897 38.869.897 86.634c0 15.281 3.989 30.197 11.592 43.382L0 175.552l46.739-12.26c12.71 6.926 27.016 10.58 41.556 10.58h.036c47.729 0 86.634-38.869 86.634-86.634 0-23.155-9.047-44.91-25.47-61.081zM87.531 158.45c-12.944 0-25.615-3.477-36.669-10.038l-2.628-1.56-27.255 7.149 7.279-26.544-1.714-2.725c-7.185-11.427-10.986-24.66-10.986-38.19 0-39.64 32.266-71.906 71.973-71.906 19.231 0 37.31 7.494 50.925 21.109 13.615 13.615 21.109 31.73 21.109 50.96-.036 39.676-32.302 71.906-71.906 71.906z"
              fill="white"
            />
            <path
              d="M127.822 105.475c-2.165-1.082-12.8-6.315-14.786-7.041-1.986-.726-3.432-1.082-4.878 1.082-1.446 2.165-5.604 7.041-6.868 8.487-1.264 1.446-2.528 1.628-4.693.546-2.165-1.082-9.139-3.37-17.409-10.747-6.433-5.74-10.771-12.836-12.035-15.001-1.264-2.165-.134-3.335.95-4.417.974-.938 2.165-2.446 3.247-3.668.99-1.222 1.446-2.165 2.165-3.611.726-1.446.363-2.668-.182-3.75-.546-1.082-4.878-11.753-6.682-16.086-1.758-4.224-3.54-3.65-4.878-3.716-.926-.066-1.986-.066-3.432-.066s-3.15.546-4.832 2.668c-1.714 2.165-6.544 6.379-6.544 15.575 0 9.195 6.682 18.09 7.628 19.337.95 1.446 13.267 20.247 32.146 28.403 4.485 1.94 7.991 3.102 10.719 3.964 4.505 1.43 8.608 1.222 11.851.753 3.614-.546 11.217-4.588 12.8-9.025 1.584-4.437 1.584-8.237 1.104-9.025-.48-.788-1.926-1.264-4.091-2.346z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);    opacity: 0.4; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
