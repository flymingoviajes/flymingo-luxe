import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDestinationBySlug } from '@/app/lib/destinations'
import { getGoogleReviews } from '@/lib/google-reviews'
import LandingShell from './LandingShell'
import PagePixelEvents from '@/components/PagePixelEvents'

import HeroVideo from '@/components/destinations/sections/HeroVideo'
import ScrollStorySection from '@/components/destinations/sections/ScrollStorySection'
import CotizadorSection from '@/components/destinations/sections/WizardSection'
import IncludesExcludesSection from '@/components/destinations/sections/IncludesExcludesSection'
import PaymentsSection from '@/components/destinations/sections/PaymentsSection'
import TestimonialsSection from '@/components/destinations/sections/TestimonialsSection'
import FAQSection from '@/components/destinations/sections/FAQSection'
import FinalCTASection from '@/components/destinations/sections/FinalCTASection'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)
  if (!destination) return { title: 'Destino no encontrado' }

  const price = destination.hero.priceFrom
    ? `desde $${destination.hero.priceFrom.amount.toLocaleString('es-MX')} ${destination.hero.priceFrom.currency}`
    : ''
  const title = `Viaje a ${destination.name} desde México${price ? ` · ${price}` : ''}`
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

  const googleReviews = await getGoogleReviews()

  return (
    <LandingShell>
      <PagePixelEvents
        contentName={`Destino ${destination.name}`}
        contentCategory="Destinos"
        value={destination.hero.priceFrom?.amount}
      />
      <HeroVideo destination={destination} />
      <ScrollStorySection destination={destination} />
      <CotizadorSection destination={destination} />
      <IncludesExcludesSection destination={destination} />
      <PaymentsSection destination={destination} />
      <TestimonialsSection destination={destination} googleReviews={googleReviews} />
      <FAQSection destination={destination} />
      <FinalCTASection destination={destination} />
    </LandingShell>
  )
}
