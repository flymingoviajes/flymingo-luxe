import type { Money, DestinationExperience } from '@/app/lib/destinations/types'

export type WizardInputs = {
  experienceId: string
  adults: number
  children: number
  season: 'low' | 'shoulder' | 'high'
  comfort: 'standard' | 'premium'
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function estimateFromExperience(
  experiences: DestinationExperience[] | undefined,
  inputs: WizardInputs,
  fallback?: Money
): Money | null {
  const exp = experiences?.find((e) => e.id === inputs.experienceId)
  const base = exp?.priceFrom ?? fallback

  if (!base) return null

  const adults = clamp(inputs.adults, 1, 12)
  const children = clamp(inputs.children, 0, 12)

  // kids rule simple: 75% (ajustable después)
  const paxFactor = adults + children * 0.75

  const seasonFactor =
    inputs.season === 'high' ? 1.15 : inputs.season === 'low' ? 0.92 : 1.0

  const comfortFactor = inputs.comfort === 'premium' ? 1.22 : 1.0

  const estimate = Math.round(base.amount * paxFactor * seasonFactor * comfortFactor)

  return { amount: estimate, currency: base.currency }
}