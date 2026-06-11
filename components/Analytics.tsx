"use client";
import Script from "next/script";

// ─── FILL IN YOUR IDs ─────────────────────────────────────────
// Meta Pixel ID: tu número de 15 dígitos de Meta Business Manager
const META_PIXEL_ID = "REEMPLAZA_CON_TU_PIXEL_ID";

// Google Ads o GA4 tag ID (formato G-XXXXXXX o AW-XXXXXXX)
const GTAG_ID = "REEMPLAZA_CON_TU_GTAG_ID";
// ─────────────────────────────────────────────────────────────

export default function Analytics() {
  if (
    META_PIXEL_ID === "REEMPLAZA_CON_TU_PIXEL_ID" &&
    GTAG_ID === "REEMPLAZA_CON_TU_GTAG_ID"
  ) {
    return null;
  }

  return (
    <>
      {/* ── Meta Pixel ── */}
      {META_PIXEL_ID !== "REEMPLAZA_CON_TU_PIXEL_ID" && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
              (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','${META_PIXEL_ID}');
              fbq('track','PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* ── Google Tag (Ads / GA4) ── */}
      {GTAG_ID !== "REEMPLAZA_CON_TU_GTAG_ID" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTAG_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
