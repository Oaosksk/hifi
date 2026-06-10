"use client";

import { useState, useEffect } from "react";

const LOADER_DURATION_MS = 1800;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [loadingActive, setLoadingActive] = useState(false);

  useEffect(() => {
    const checkLoading = () => {
      setLoadingActive(document.documentElement.classList.contains("loading-active"));
    };
    
    // Check initially
    checkLoading();

    // Monitor loading-active class additions/removals
    const observer = new MutationObserver(checkLoading);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("hifi_loaded");
    const delay = alreadyLoaded ? 400 : LOADER_DURATION_MS;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("hifi_loaded", "1");
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || loadingActive) return null;

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
        bottom: "48px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        animation: "wa-fadein 0.4s ease forwards",
      }}
    >
      {/* Tooltip */}
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
            inset: "-5px",
            borderRadius: "50%",
            background: "#F57C00",
            animation: "wa-pulse 2.2s ease-out infinite",
            opacity: 0.35,
          }}
        />

        {/* Circle button — always orange */}
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F57C00 0%, #E65100 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: hovered
              ? "0 10px 32px rgba(245,124,0,0.55)"
              : "0 6px 24px rgba(245,124,0,0.40)",
            transform: hovered ? "scale(1.1) translateY(-3px)" : "scale(1) translateY(0)",
            transition: "all 0.28s cubic-bezier(.34,1.56,.64,1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Official WhatsApp icon path */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);    opacity: 0.35; }
          70%  { transform: scale(1.6);  opacity: 0; }
          100% { transform: scale(1.6);  opacity: 0; }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </a>
  );
}
