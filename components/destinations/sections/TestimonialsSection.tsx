'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

type Testimonial = {
  name: string
  meta?: string
  quote: string
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6">
      <div className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

      <div className="relative">
        <div className="text-sm text-default-600">“{t.quote}”</div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-foreground">{t.name}</div>
            {t.meta ? <div className="text-xs text-default-500">{t.meta}</div> : null}
          </div>

          <div className="text-default-400">★★★★★</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection({ destination }: { destination: Destination }) {
  // Luego lo hacemos dinámico por destino si quieres.
  const items: Testimonial[] = [
    {
      name: 'Mariana G.',
      meta: 'Islandia · Viaje en pareja',
      quote: 'Fue el viaje más increíble de mi vida. Todo estaba pensado, cero estrés y puro disfrutar.',
    },
    {
      name: 'Fer R.',
      meta: 'Islandia · Grupo',
      quote: 'Hoteles perfectos, rutas hermosas y siempre nos sentíamos acompañados por Flymingo.',
    },
    {
      name: 'Ana P.',
      meta: 'Islandia · Primera vez en Europa',
      quote: 'Yo tenía miedo por el idioma y logística. Me lo hicieron facilísimo. Volvería mañana.',
    },
  ]

  if (!items.length) return null

  return (
    <section id="testimonios" className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_55%_90%,rgba(99,102,241,0.07),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="text-xs tracking-[0.24em] uppercase text-default-500">Testimonios</div>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Lo que se siente viajar con Flymingo
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-default-600">
            Experiencias reales de viajeros que ya vivieron esta ruta.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.03 }}
              className="shrink-0 min-w-[86%] snap-center"
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.04 }}
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}