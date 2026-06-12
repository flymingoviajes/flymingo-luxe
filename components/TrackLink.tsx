"use client";
import type { CSSProperties, ReactNode } from "react";

// Google Ads conversion label — formato "AW-XXXXXXXXX/CONVERSION_LABEL"
// Se obtiene en: Google Ads → Goals → Conversions → tu acción → Tag details
const GOOGLE_ADS_CONVERSION = "REEMPLAZA_CON_TU_CONVERSION_LABEL";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

interface TrackLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  label?: string;
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
    if (typeof window === "undefined") return;

    // 1. Meta Pixel — Contact (cualquier click a WhatsApp) + Lead
    window.fbq?.("track", "Contact");
    window.fbq?.("track", "Lead", { content_name: label });

    // 2. GTM dataLayer — captura la conversión independientemente de gtag
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_lead",
      event_label: label,
    });

    // 3. GA4 — generate_lead (disponible si gtag.js ya cargó)
    window.gtag?.("event", "generate_lead", {
      event_category: "WhatsApp",
      event_label: label,
    });

    // 4. Google Ads conversion (activar cuando tengas el conversion label)
    if (
      GOOGLE_ADS_CONVERSION !== "REEMPLAZA_CON_TU_CONVERSION_LABEL" &&
      window.gtag
    ) {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION,
        event_label: label,
      });
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
