"use client";
import type { CSSProperties, ReactNode } from "react";

// ─── Fill in once you have your Google Ads conversion action ──────────────────
// Format: "AW-XXXXXXXXX/CONVERSION_LABEL"
// Get it from: Google Ads → Goals → Conversions → your action → Tag details
const GOOGLE_ADS_CONVERSION = "REEMPLAZA_CON_TU_CONVERSION_LABEL";
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  label?: string; // descriptive name for the event (e.g. "Islandia Nov 2026")
}

export default function TrackLink({
  href,
  children,
  className,
  style,
  target = "_blank",
  rel = "noreferrer",
  label = "WhatsApp CTA",
}: TrackLinkProps) {
  function handleClick() {
    // Meta Pixel — Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { content_name: label });
    }

    // Google Analytics 4 — generate_lead event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "WhatsApp",
        event_label: label,
      });

      // Google Ads — conversion event (activar cuando tengas el conversion label)
      if (GOOGLE_ADS_CONVERSION !== "REEMPLAZA_CON_TU_CONVERSION_LABEL") {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONVERSION,
          event_category: "WhatsApp",
          event_label: label,
        });
      }
    }
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
