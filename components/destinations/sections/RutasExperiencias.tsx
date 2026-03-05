'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination, DestinationExperience } from '@/app/lib/destinations/types'

function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount)
  } catch {
    return `$${amount.toLocaleString('es-MX')} ${currency}`
  }
}

export default function RutasExperiencias({ destination }: { destination: Destination }) {
  const experiences: DestinationExperience[] = destination.experiences ?? []
  if (!experiences.length) return null

  return (
    <section id="rutas" className="relative border-t border-divider bg-background">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="text-xs tracking-[0.24em] uppercase text-default-500">
            Rutas · Experiencias
          </div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Elige el estilo de Islandia que te vibra.
          </h2>
          <p className="mt-3 text-sm text-default-600 sm:text-base">
            Curadas por Flymingo: no es un catálogo infinito. Son rutas reales con “precio desde” para darte una idea
            rápida.
          </p>
        </motion.div>

        {/* MOBILE: carrusel con scroll-snap */}
        <div className="mt-10 sm:hidden">
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {experiences.map((x, i) => (
              <motion.article
                key={x.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.03 }}
                className="snap-center w-[86vw] max-w-[360px] overflow-hidden rounded-3xl border border-divider bg-content1 transition hover:bg-content2"
              >
                <div className="relative h-44">
                  {/* background */}
                  {x.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${x.image})` }}
                      aria-label={x.title}
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        x.bg ?? 'from-sky-500/25 via-teal-400/10 to-indigo-500/15'
                      }`}
                    />
                  )}

                  {/* overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                  {/* top chips */}
                  <div className="absolute left-4 right-4 top-4 flex items-center gap-2">
                    {x.kicker ? (
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                        {x.kicker}
                      </span>
                    ) : null}

                    {x.priceFrom ? (
                      <span className="ml-auto rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                        Desde <b>{formatMoney(x.priceFrom.amount, x.priceFrom.currency)}</b>
                      </span>
                    ) : null}
                  </div>

                  {/* title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-lg font-semibold text-white">{x.title}</div>
                    {x.days ? <div className="mt-1 text-xs text-white/75">{x.days}</div> : null}
                  </div>
                </div>

                <div className="p-5">
                  {x.desc ? <p className="text-sm text-default-600">{x.desc}</p> : null}

                  {x.highlights?.length ? (
                    <div className="mt-4 grid gap-2">
                      {x.highlights.slice(0, 3).map((h) => (
                        <div key={h} className="text-sm text-default-600">
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-default-400" />
                          {h}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href="#wizard"
                      className="flex-1 rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
                    >
                      Diseñarla en el wizard
                    </a>

                    <a
                      href="#faq"
                      className="rounded-2xl border border-divider bg-content2 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-content1"
                    >
                      Dudas
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-3 text-xs text-default-500">Tip: desliza horizontal para ver más rutas 👈</div>
        </div>

        {/* DESKTOP: grid */}
        <div className="mt-10 hidden sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {experiences.map((x, i) => (
            <motion.article
              key={x.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.04 }}
              className="overflow-hidden rounded-3xl border border-divider bg-content1 transition hover:bg-content2"
            >
              <div className="relative h-44">
                {x.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${x.image})` }}
                    aria-label={x.title}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      x.bg ?? 'from-sky-500/20 via-teal-400/10 to-indigo-500/15'
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />

                <div className="absolute left-5 right-5 top-5 flex items-center gap-2">
                  {x.kicker ? (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                      {x.kicker}
                    </span>
                  ) : null}

                  {x.priceFrom ? (
                    <span className="ml-auto rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                      Desde <b>{formatMoney(x.priceFrom.amount, x.priceFrom.currency)}</b>
                    </span>
                  ) : null}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-lg font-semibold text-white">{x.title}</div>
                  {x.days ? <div className="mt-1 text-xs text-white/75">{x.days}</div> : null}
                </div>
              </div>

              <div className="p-6">
                {x.desc ? <p className="text-sm text-default-600">{x.desc}</p> : null}

                {x.highlights?.length ? (
                  <div className="mt-4 grid gap-2">
                    {x.highlights.slice(0, 3).map((h) => (
                      <div key={h} className="text-sm text-default-600">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-default-400" />
                        {h}
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href="#wizard"
                    className="flex-1 rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background transition hover:opacity-90"
                  >
                    Diseñarla
                  </a>

                  <a
                    href="#faq"
                    className="rounded-2xl border border-divider bg-content2 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-content1"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}