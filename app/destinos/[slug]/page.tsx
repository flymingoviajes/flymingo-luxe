// app/destinos/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDestinationBySlug } from '@/app/lib/destinations'
import LandingShell from './LandingShell'

import HeroVideo from '@/components/destinations/sections/HeroVideo'
import ExperiencesSection from '@/components/destinations/sections/ExperiencesSection'
import WizardSection from '@/components/destinations/sections/WizardSection'
import ScrollStorySection from '@/components/destinations/sections/ScrollStorySection'
import DestinationGuideSection from '@/components/destinations/sections/DestinationGuideSection'
import IncludesExcludesSection from '@/components/destinations/sections/IncludesExcludesSection'
import ToursSection from '@/components/destinations/sections/ToursSection'
import PaymentsSection from '@/components/destinations/sections/PaymentsSection'
import TestimonialsSection from '@/components/destinations/sections/TestimonialsSection'
import FAQSection from '@/components/destinations/sections/FAQSection'
import FinalCTASection from '@/components/destinations/sections/FinalCTASection'
import MomentsGallerySection from '@/components/destinations/sections/MomentsGallerySection'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return { title: 'Destino no encontrado' }
  }

  const price = destination.hero.priceFrom
    ? `desde $${destination.hero.priceFrom.amount.toLocaleString('es-MX')} ${destination.hero.priceFrom.currency}`
    : ''

  const title = `Viaje a ${destination.name} desde México ${price ? `· ${price}` : ''}`
  const description = `${destination.hero.subtitle} Itinerario personalizado a ${destination.name} — diseñado a tu medida por Flymingo Viajes, agencia en Torreón, México.`

  return {
    title,
    description,
    keywords: [
      `viaje a ${destination.name} desde México`,
      `viaje a ${destination.name} personalizado`,
      `itinerario ${destination.name}`,
      `paquete ${destination.name} México`,
      `${destination.name} Flymingo Viajes`,
      'agencia de viajes Torreón',
      'viajes personalizados México',
    ],
    openGraph: {
      title: `${destination.name} — Itinerario a tu medida | Flymingo Viajes`,
      description,
      images: destination.hero.posterUrl ? [{ url: destination.hero.posterUrl }] : [],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const destination = getDestinationBySlug(slug)
  if (!destination) notFound()

  return (
    <LandingShell>
      <HeroVideo destination={destination} />
      <ExperiencesSection destination={destination} />
      <ScrollStorySection destination={destination} />
      <WizardSection destination={destination} />
      <DestinationGuideSection destination={destination} />
      <IncludesExcludesSection destination={destination} />
      <ToursSection destination={destination} />
      <PaymentsSection destination={destination} />
      <TestimonialsSection destination={destination} />
      <MomentsGallerySection destination={destination}/>
      <FAQSection destination={destination} />
      <FinalCTASection destination={destination} />
    </LandingShell>
  )
}