"use client";
import Script from "next/script";

const META_PIXEL_ID  = "277543872029576";
const GTM_ID         = "GTM-WL3T3SN9";
const GA4_ID         = "G-P9R4KRC80B";
const GOOGLE_ADS_ID  = "AW-11261587022";
const CLARITY_ID     = "x636509ffk";

const hasPixel = META_PIXEL_ID.length > 0 && !META_PIXEL_ID.startsWith("REEMPLAZA");
const hasGTM   = GTM_ID.length > 0 && !GTM_ID.startsWith("REEMPLAZA");
const hasGA4   = GA4_ID.length > 0 && !GA4_ID.startsWith("REEMPLAZA");

export default function Analytics() {
  if (!hasPixel && !hasGTM && !hasGA4) return null;

  return (
    <>
      {/* ── Meta Pixel ── */}
      {hasPixel && (
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
              height="1" width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* ── Google Analytics 4 (carga gtag.js y expone window.gtag) ── */}
      {hasGA4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
        </>
      )}

      {/* ── Google Tag Manager (Google Ads conversions + remarketing) ── */}
      {/* IMPORTANTE: NO agregues GA4 dentro de GTM o contarás doble */}
      {hasGTM && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {/* ── Microsoft Clarity ── */}
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    </>
  );
}
