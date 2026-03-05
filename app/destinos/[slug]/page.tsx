// app/destinos/[slug]/page.tsx
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