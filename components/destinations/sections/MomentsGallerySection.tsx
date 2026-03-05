'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

export default function MomentsGallerySection({ destination }: { destination: Destination }) {
  const gallery = destination.gallery ?? []
  if (!gallery.length) return null

  const [active, setActive] = useState(0)

  const current = useMemo(() => gallery[active] ?? gallery[0], [gallery, active])

  return (
    <section id="momentos" className="relative border-t border-divider bg-background">
      {/* subtle luxe backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-10 dark:opacity-100 bg-[radial-gradient(circle_at_18%_12%,rgba(232,76,139,0.08),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(45,212,191,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {/* Header (minimal) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.28em] uppercase text-default-500">
              Flymingo moments
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              La vibra en imágenes
            </h2>

            <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary/55 via-primary/10 to-transparent" />

            <p className="mt-4 text-sm text-default-600">
              Una selección simple para sentir el mood del viaje.
            </p>
          </div>

          <a
            href="#wizard"
            className="inline-flex items-center justify-center rounded-full border border-divider bg-content1 px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-content2"
          >
            Diseñarlo en el wizard →
          </a>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-[34px] border border-divider bg-content1 shadow-[0_60px_170px_-110px_rgba(0,0,0,0.35)] dark:shadow-[0_75px_210px_-130px_rgba(0,0,0,0.80)]">
            {/* hairline */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-80" />

            <div className="relative aspect-[16/9] w-full">
              <img
                src={current.src}
                alt={current.alt ?? `${destination.name} · Flymingo`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/45" />
            </div>

            {/* caption line (very subtle) */}
            <div className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-semibold text-foreground">
                {current.caption ?? `Selección · ${destination.name}`}
              </div>
              <div className="text-xs text-default-500">
                {current.credit ?? 'Flymingo · Curaduría'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FILMSTRIP */}
        {gallery.length > 1 ? (
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.28em] uppercase text-default-500">
              Explora la galería
            </div>

            <div className="mt-3 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {gallery.map((g, i) => {
                const isActive = i === active
                return (
                  <button
                    key={g.src}
                    type="button"
                    onClick={() => setActive(i)}
                    className="snap-center"
                    aria-label={g.caption ?? `Imagen ${i + 1}`}
                  >
                    <div
                      className={[
                        'relative overflow-hidden rounded-2xl border bg-content1',
                        'h-[86px] w-[140px] sm:h-[92px] sm:w-[150px]',
                        isActive ? 'border-primary/45' : 'border-divider',
                        'shadow-[0_22px_70px_-55px_rgba(0,0,0,0.25)] dark:shadow-[0_35px_110px_-80px_rgba(0,0,0,0.70)]',
                      ].join(' ')}
                    >
                      <img
                        src={g.src}
                        alt={g.alt ?? `${destination.name} · Flymingo`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />

                      {/* active indicator */}
                      {isActive ? (
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-90" />
                      ) : null}
                    </div>

                    {/* tiny caption */}
                    {g.caption ? (
                      <div className="mt-2 max-w-[150px] truncate text-left text-xs text-default-500">
                        {g.caption}
                      </div>
                    ) : null}
                  </button>
                )
              })}
            </div>

            <div className="mt-3 text-[11px] text-default-500">
              *Si usamos fotos de clientes, pedimos autorización y agregamos crédito discreto si lo desean.
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}