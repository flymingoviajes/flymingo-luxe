export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
};

export async function getGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || apiKey.startsWith("REEMPLAZA") || !placeId || placeId.startsWith("REEMPLAZA")) {
    return [];
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=es&reviews_sort=newest`,
      { next: { revalidate: 86400 } } // cache 24h
    );
    if (!res.ok) return [];
    const data = await res.json();
    const reviews: GoogleReview[] = data.result?.reviews ?? [];
    return reviews.filter((r) => r.rating >= 4 && r.text?.trim().length > 40);
  } catch {
    return [];
  }
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
