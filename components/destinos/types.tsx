export type DestinationCard = {
  slug: string;
  title: string;
  subtitle?: string;
  tag?: string;

  // ✅ NUEVO (para imagen)
  imageSrc: string;  // ej. "/images/destinos/islandia.jpg"
  imageAlt: string;  // texto accesible
};