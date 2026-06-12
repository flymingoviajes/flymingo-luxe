"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

interface PagePixelEventsProps {
  contentName: string;
  contentCategory: string;
  value?: number;
  currency?: string;
}

export default function PagePixelEvents({
  contentName,
  contentCategory,
  value,
  currency = "MXN",
}: PagePixelEventsProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Meta Pixel — ViewContent
    window.fbq?.("track", "ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
      currency,
      ...(value !== undefined && { value }),
    });

    // GA4 — view_item_list
    window.gtag?.("event", "view_item_list", {
      item_list_name: contentName,
      item_list_id: contentCategory.toLowerCase().replace(/\s/g, "_"),
    });

    // GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view_content",
      content_name: contentName,
      content_category: contentCategory,
    });
  }, [contentName, contentCategory, value, currency]);

  return null;
}
