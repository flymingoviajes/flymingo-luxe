// app/lib/destinations/index.ts
import type { Destination } from './types'
import { islandia } from './islandia'
import { japon } from './japon'

export const DESTINATIONS_BY_SLUG: Record<string, Destination> = {
  [islandia.slug]: islandia,
  [japon.slug]: japon,
}

export const DESTINATIONS: Destination[] = Object.values(DESTINATIONS_BY_SLUG)

export function getDestinationBySlug(slug?: string | null) {
  const normalized = (slug ?? '').toString().trim().toLowerCase()
  if (!normalized) return undefined
  return DESTINATIONS_BY_SLUG[normalized]
}