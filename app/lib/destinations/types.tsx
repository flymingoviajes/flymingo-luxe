// app/lib/destinations/types.ts

export type CurrencyCode = 'MXN' | 'USD' | 'EUR' | 'ISK' | string

export type Money = {
  amount: number
  currency: CurrencyCode
}

export type DestinationHero = {
  title: string
  subtitle: string
  videoUrl: string
  posterUrl?: string
  priceFrom?: Money
}

export type DestinationExperience = {
  id: string
  kicker?: string
  title: string
  days?: string
  desc?: string
  priceFrom?: Money
  bg?: string
  highlights?: string[]
  image?: string
}

export type ScrollStoryChapter = {
  id: string
  kicker?: string
  title: string
  desc: string
  bullets: string[]
  image?: string
  imageAlt?: string
  bg?: string
}

export type IncludesExcludesBlock = {
  title?: string
  subtitle?: string
  includes?: string[]
  excludes?: string[]
}

export type DestinationTour = {
  id: string
  title: string
  short?: string
  duration?: string
  intensity?: 'Relax' | 'Medio' | 'Alto'
  priceFrom?: Money
  season?: string
  location?: string
  highlights?: string[]
  image?: string
  badge?: string
}

export type DestinationFAQ = {
  q: string
  a: string
}

export type Destination = {
  slug: string
  name: string

  hero: DestinationHero

  gallery?: Array<{
    src: string
    alt?: string
    caption?: string
    credit?: string
  }>

  experiences?: DestinationExperience[]
  scrollStory?: ScrollStoryChapter[]
  includes?: IncludesExcludesBlock
  tours?: DestinationTour[]
  faq?: DestinationFAQ[]
}