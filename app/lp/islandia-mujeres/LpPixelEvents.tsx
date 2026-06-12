"use client";

import { useEffect } from "react";

// Fires Meta ViewContent + Google view_item when the LP loads.
// ViewContent builds the retargeting audience in Meta Ads Manager.
// view_item feeds Google Ads' audience signals for Smart Bidding.
export default function LpPixelEvents() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Islandia para Mujeres 2026",
        content_category: "Landing Page",
        currency: "MXN",
        value: 84890,
      });
    }

    if (window.gtag) {
      window.gtag("event", "view_item", {
        currency: "MXN",
        value: 84890,
        items: [
          {
            item_id: "islandia-mujeres-2026",
            item_name: "Islandia para Mujeres 2026",
            item_category: "Viajes Mujeres",
            price: 84890,
          },
        ],
      });
    }
  }, []);

  return null;
}
