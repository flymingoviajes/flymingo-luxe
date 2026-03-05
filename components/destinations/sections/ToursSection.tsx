'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination, DestinationTour } from '@/app/lib/destinations/types'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-xs text-default-600">
      {children}
    </span>
  )
}

function TourCard({ t }: { t: DestinationTour }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1">
      <div className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

      {/* Image mock */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-divider bg-default-100/30 dark:bg-default-100/10">
        {t.image ? (
          // si luego quieres usar next/image, lo cambiamos
          <img src={t.image} alt={t.title} className="h-full w-full object-cover opacity-90" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-default-500 text-sm">
            Imagen (mockup)
          </div>
        )}

        {t.badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur">
            {t.badge}
          </div>
        ) : null}
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-foreground">{t.title}</div>
            {t.short ? <div className="mt-1 text-sm text-default-600">{t.short}</div> : null}
          </div>

          {t.priceFrom?.amount ? (
            <div className="shrink-0 text-right">
              <div className="text-[11px] text-default-500">desde</div>
              <div className="text-sm font-semibold text-foreground">
                {t.priceFrom.currency} {t.priceFrom.amount.toLocaleString()}
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {t.duration ? <Pill>{t.duration}</Pill> : null}
          {t.intensity ? <Pill>{t.intensity}</Pill> : null}
          {t.season ? <Pill>{t.season}</Pill> : null}
          {t.location ? <Pill>{t.location}</Pill> : null}
        </div>

        {t.highlights?.length ? (
          <div className="mt-5 grid gap-2">
            {t.highlights.slice(0, 3).map((x) => (
              <div key={x} className="flex items-start gap-3 text-sm text-default-600">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex items-center gap-3">
          <a
            href="#wizard"
            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Agregar a mi cotización
          </a>

          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content2 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-content1"
          >
            Dudas
          </a>
        </div>

        <div className="mt-4 text-[11px] text-default-500">
          *Mockup: disponibilidad y precio cambian por temporada/cupo.
        </div>
      </div>
    </div>
  )
}

export default function ToursSection({ destination }: { destination: Destination }) {
  const tours = destination.tours ?? []
  if (!tours.length) return null

  return (
    <section id="tours" className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_55%_90%,rgba(99,102,241,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">
              Tours opcionales
            </div>
            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              Sube el nivel del viaje (si quieres)
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-default-600">
              Experiencias que puedes agregar para hacer tu {destination.name} aún más espectacular.
            </p>
          </div>

          <a
            href="#wizard"
            className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content1 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-content2"
          >
            Cotizar con tours
          </a>
        </motion.div>

        {/* Mobile carousel */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tours.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.03 }}
              className="shrink-0 min-w-[86%] snap-center"
            >
              <TourCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
          {tours.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.04 }}
              className={cx(i === 0 && 'lg:col-span-1')}
            >
              <TourCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}