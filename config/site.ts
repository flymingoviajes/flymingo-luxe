export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Flymingo Viajes",
  description:
    "Agencia de viajes personalizados en México. Diseñamos itinerarios únicos a tu medida: Europa, Japón, Islandia, lunas de miel y más. Atención 1 a 1, rutas con lógica y estilo.",
  url: "https://flymingoviajes.com",
  ogImage: "/images/og-flymingo.jpg",
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Destinos", href: "/destinos" },
    { label: "Weddings", href: "/weddings" },
    { label: "Women", href: "/women" },
    { label: "Nosotros", href: "/nosotros" },
  ],
  navMenuItems: [
    { label: "Inicio", href: "/" },
    { label: "Destinos", href: "/destinos" },
    { label: "Weddings", href: "/weddings" },
    { label: "Women", href: "/women" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  ],
  contact: {
    whatsapp: "https://wa.me/5218716887385",
    phone: "871 688 7385",
    email: "reservas@flymingoviajes.com",
    instagram: "https://instagram.com/flymingoviajes",
    facebook: "https://facebook.com/flymingoviajes",
  },
};
