'use client'

import React from 'react'
import type { Destination } from '@/app/lib/destinations/types'
import LandingThemeProvider, { useLandingTheme } from '../ui/ThemeProvider'
import HeroVideo from './sections/HeroVideo'
import RutasExperiencias from './sections/RutasExperiencias'
import WizardSection from './sections/WizardSection'
import ScrollStorySection from './sections/ScrollStorySection'
import ExperiencesSection from './sections/ExperiencesSection'
import IncludesExcludesSection from './sections/IncludesExcludesSection'



function SectionPlaceholder({
  id,
  title,
  subtitle,
}: {
  id: string
  title: string
  subtitle: string
}) {
  const { theme } = useLandingTheme()

  const surface =
    theme === 'dark'
      ? 'border-white/10 bg-white/5 text-white'
      : 'border-black/10 bg-black/[0.03] text-slate-950'

  const sub =
    theme === 'dark' ? 'text-white/70' : 'text-slate-600'

  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-12">
      <div className={`rounded-3xl border p-6 ${surface}`}>
        <div className="text-xs tracking-[0.24em] uppercase opacity-70">{id}</div>
        <div className="mt-2 text-2xl font-semibold">{title}</div>
        <div className={`mt-2 text-sm ${sub}`}>{subtitle}</div>
      </div>
    </section>
  )
}

function PageShell({ destination }: { destination: Destination }) {
  const { theme } = useLandingTheme()

  const pageBg =
    theme === 'dark'
      ? 'bg-slate-950'
      : 'bg-slate-50'

  return (
    <main className={pageBg}>
      <HeroVideo destination={destination} />
      <RutasExperiencias destination={destination} />
      <ExperiencesSection destination={destination} />
      <WizardSection destination={destination} />
      <ScrollStorySection destination={destination} />
      <IncludesExcludesSection destination={destination} />

      {/* placeholders del flow */}
      <SectionPlaceholder
        id="rutas"
        title="Rutas / Experiencias (con precios desde)"
        subtitle="Aquí va el carrusel en móvil y cards en desktop."
      />

      <SectionPlaceholder
        id="wizard"
        title="Wizard (precio desde live)"
        subtitle="El precio se va actualizando mientras responden."
      />

      <SectionPlaceholder
        id="scrollstory"
        title="ScrollStory (Apple vibe)"
        subtitle="Luego metemos el scroll story cuadrado/pro y con mejor background."
      />

      <SectionPlaceholder
        id="incluye"
        title="Qué incluye / Qué no incluye"
        subtitle="Carrusel en móvil, layout dual en desktop."
      />

      <SectionPlaceholder
        id="pagos"
        title="Plan de pagos / 6MSI"
        subtitle="Bloque visual tipo comparativo."
      />

      <SectionPlaceholder
        id="testimonios"
        title="Testimonios"
        subtitle="Carrusel de reviews, con foto + frase."
      />

      <SectionPlaceholder
        id="faq"
        title="FAQ"
        subtitle="Acordeón + objeciones típicas."
      />

      <SectionPlaceholder
        id="cta"
        title="CTA final"
        subtitle="Botón grande a WhatsApp / formulario."
      />
    </main>
  )
}

export default function DestinationPage({ destination }: { destination: Destination }) {
  return (
    <LandingThemeProvider>
      <PageShell destination={destination} />
    </LandingThemeProvider>
  )
}