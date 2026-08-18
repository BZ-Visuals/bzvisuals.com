import React from "react";

// ─────────────────────────────────────────────────────────────
//  YOUR LOGO
//  To use your own logo image:
//   1. Drop your logo file (e.g. logo.png) into the "public" folder.
//   2. Set LOGO_URL below to "/logo.png" (or your filename).
//  Leave LOGO_URL empty ("") to use the B&Z text monogram instead.
// ─────────────────────────────────────────────────────────────
const LOGO_URL = "";

export default function Logo({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-start leading-none group ${className}`}
      aria-label="B&Z Visuals home"
    >
      {LOGO_URL ? (
        <img src={LOGO_URL} alt="B&Z Visuals" className="h-9 w-auto" />
      ) : (
        <>
          <span className="font-display text-xl tracking-tight text-white">
            B<span className="text-white/40">&</span>Z
          </span>
          <span className="text-[10px] tracking-[0.35em] text-white/50 uppercase mt-0.5">
            Visuals
          </span>
        </>
      )}
    </button>
  );
}