'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formatMoney } from '../utils/FormatMoney'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function ExperiencesSection({ destination }: { destination: Destination }) {
  const experiences = destination.experiences ?? []
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (!experiences.length) return null

  const goToWizardWithExp = (experienceId: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('exp', experienceId)
    router.push(`${pathname}?${params.toString()}#wizard`)
  }

  return (
    <section id="rutas" className="relative border-t border-divider bg-background">
      {/* luxe glow */}
      <div className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">
              Rutas / Experiencias
            </div>

            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              Elige tu estilo de {destination.name}
            </h2>

            <div className="mt-3 h-px w-20 bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

            <p className="mt-3 max-w-2xl text-sm text-default-600">
              Cada ruta tiene un “precio desde” para que te des una idea realista. Luego lo afinamos en el wizard.
            </p>
          </div>

          <a
            href="#wizard"
            className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content1 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-content2"
          >
            Ir al wizard
          </a>
        </motion.div>

        {/* Mobile carousel */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {experiences.map((e) => (
            <motion.button
              key={e.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              onClick={() => goToWizardWithExp(e.id)}
              className="min-w-[86%] snap-center overflow-hidden rounded-3xl border border-divider bg-content1 text-left shadow-[0_25px_80px_-60px_rgba(0,0,0,0.35)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.65)]"
            >
              <div className="relative p-5">
                {/* top highlight hairline */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70" />

                {/* gradient */}
                <div
                  className={cx(
                    'pointer-events-none absolute inset-0 opacity-80',
                    e.bg ? `bg-gradient-to-br ${e.bg}` : 'bg-gradient-to-br from-default-100/20 to-transparent'
                  )}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs tracking-[0.22em] uppercase text-default-500">
                      {e.kicker ?? 'Experiencia'}
                    </div>

                    {e.priceFrom ? (
                      <div className="text-xs text-default-600">
                        desde{' '}
                        <b className="font-semibold text-foreground">
                          {formatMoney(e.priceFrom.amount, e.priceFrom.currency)}
                        </b>
                      </div>
                    ) : (
                      <div className="text-xs text-default-500">Cotiza</div>
                    )}
                  </div>

                  <div className="mt-2 text-xl font-semibold text-foreground">{e.title}</div>
                  {e.days ? <div className="mt-1 text-sm text-default-600">{e.days}</div> : null}
                  {e.desc ? <div className="mt-3 text-sm text-default-600">{e.desc}</div> : null}

                  {!!e.highlights?.length && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.highlights.slice(0, 4).map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-divider bg-content2 px-3 py-1 text-xs text-default-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_18px_55px_-35px_rgba(232,76,139,0.55)]">
                    Diseñar esta ruta
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
          {experiences.map((e, i) => (
            <motion.button
              key={e.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => goToWizardWithExp(e.id)}
              className="group relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6 text-left transition hover:bg-content2 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.30)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.60)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70" />

              <div
                className={cx(
                  'pointer-events-none absolute inset-0 opacity-70',
                  e.bg ? `bg-gradient-to-br ${e.bg}` : 'bg-gradient-to-br from-default-100/20 to-transparent'
                )}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs tracking-[0.22em] uppercase text-default-500">
                    {e.kicker ?? 'Experiencia'}
                  </div>

                  {e.priceFrom ? (
                    <div className="text-xs text-default-600">
                      desde{' '}
                      <b className="font-semibold text-foreground">
                        {formatMoney(e.priceFrom.amount, e.priceFrom.currency)}
                      </b>
                    </div>
                  ) : (
                    <div className="text-xs text-default-500">Cotiza</div>
                  )}
                </div>

                <div className="mt-2 text-xl font-semibold text-foreground">{e.title}</div>
                {e.days ? <div className="mt-1 text-sm text-default-600">{e.days}</div> : null}
                {e.desc ? <div className="mt-3 text-sm text-default-600">{e.desc}</div> : null}

                {!!e.highlights?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.highlights.slice(0, 4).map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-divider bg-content2 px-3 py-1 text-xs text-default-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Diseñar esta ruta
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 text-[11px] text-default-500">
          *Precios “desde” estimados. Pueden variar por fechas, disponibilidad, vuelos y ocupación.
        </div>
      </div>
    </section>
  )
}