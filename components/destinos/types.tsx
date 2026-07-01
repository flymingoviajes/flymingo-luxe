export type DestinationCard = {
  slug: string;
  title: string;
  region: string;
  subtitle?: string;
  tag?: string;
  priceFrom?: string;
  highlight?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string; // override for destinations without a dedicated page
};
