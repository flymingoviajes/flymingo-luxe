'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formatMoney } from '../utils/FormatMoney'
import { estimateFromExperience, WizardInputs } from '../utils/EstimatePrice'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function HeroVideo({ destination }: { destination: Destination }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const experiences = destination.experiences ?? []
  const defaultExperienceId = experiences[0]?.id ?? 'default'

  const expFromUrl = searchParams.get('exp')
  const seededExperienceId =
    expFromUrl && experiences.some((e) => e.id === expFromUrl) ? expFromUrl : defaultExperienceId

  const [inputs, setInputs] = useState<WizardInputs>(() => ({
    experienceId: seededExperienceId,
    adults: 2,
    children: 0,
    season: 'shoulder',
    comfort: 'standard',
  }))

  useEffect(() => {
    if (!expFromUrl) return
    if (!experiences.some((e) => e.id === expFromUrl)) return
    setInputs((s) => (s.experienceId === expFromUrl ? s : { ...s, experienceId: expFromUrl }))
  }, [expFromUrl, experiences])

  const money = useMemo(
    () => estimateFromExperience(experiences, inputs, destination.hero?.priceFrom),
    [experiences, inputs, destination.hero?.priceFrom]
  )

  const selected = useMemo(
    () => experiences.find((e) => e.id === inputs.experienceId),
    [experiences, inputs.experienceId]
  )

  const goToWizard = () => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('exp', inputs.experienceId)
    router.push(`${pathname}?${params.toString()}#wizard`)
  }

  return (
    <section className="relative overflow-hidden border-t border-divider min-h-[88vh]">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={destination.hero?.posterUrl ?? undefined}
        >
          {destination.hero?.videoUrl ? <source src={destination.hero.videoUrl} type="video/mp4" /> : null}
        </video>

        {/* Luxe overlays: más editorial, menos “neón” */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/10" />
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_18%_18%,rgba(232,76,139,0.18),transparent_46%)]" />

        {/* Hairline signature */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-12 sm:pt-16">
        {/* Top bar */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] tracking-[0.24em] uppercase text-white/85 backdrop-blur">
              Flymingo · Luxe
            </span>

            <span className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
              {destination.name}
            </span>

            {money?.amount ? (
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/90 backdrop-blur">
                Desde{' '}
                <b className="font-semibold">{formatMoney(money.amount, money.currency ?? 'MXN')}</b>
              </span>
            ) : null}
          </motion.div>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* Main layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* LEFT editorial */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl"
            >
              {destination.hero?.title ?? destination.name}
              <span className="block text-white/70">Diseñado contigo, sin ruido.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="mt-5 max-w-2xl text-base text-white/78 sm:text-lg"
            >
              {destination.hero?.subtitle ??
                'Curaduría Flymingo: ritmo perfecto, hoteles bien ubicados y experiencias icónicas.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={goToWizard}
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_22px_70px_-45px_rgba(232,76,139,0.70)] transition hover:opacity-95"
              >
                Diseñar mi viaje
              </button>

              <a
                href="#rutas"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Ver rutas y experiencias
              </a>

              <div className="text-xs text-white/65 sm:ml-auto">
                *Estimado. Puede variar por fechas, vuelos, ocupación y temporada.
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Mini-wizard luxe (glass card) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-xl shadow-[0_40px_120px_-70px_rgba(0,0,0,0.75)]"
            >
              {/* subtle highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%)]" />

              {/* price block */}
              <div className="relative flex items-end justify-between gap-4">
                <div>
                  <div className="text-[11px] tracking-[0.24em] uppercase text-white/60">
                    Precio desde (estimado)
                  </div>
                  <motion.div
                    key={money?.amount ?? 0}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="mt-2 text-2xl font-semibold text-white"
                  >
                    {money ? formatMoney(money.amount, money.currency ?? 'MXN') : '—'}
                  </motion.div>
                  <div className="mt-1 text-xs text-white/60">
                    Base: <b className="font-semibold text-white/85">{selected?.title ?? destination.name}</b>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goToWizard}
                  className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Abrir wizard →
                </button>
              </div>

              {/* controls */}
              <div className="relative mt-6 grid gap-4">
                {/* experience */}
                {experiences.length ? (
                  <div>
                    <div className="text-[11px] tracking-[0.24em] uppercase text-white/60">Ruta base</div>
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {experiences.slice(0, 5).map((e) => {
                        const active = e.id === inputs.experienceId
                        return (
                          <button
                            key={e.id}
                            type="button"
                            onClick={() => setInputs((s) => ({ ...s, experienceId: e.id }))}
                            className={cx(
                              'shrink-0 rounded-full border px-3 py-2 text-xs transition backdrop-blur',
                              active
                                ? 'border-white/35 bg-white/15 text-white'
                                : 'border-white/15 bg-black/20 text-white/75 hover:bg-white/10'
                            )}
                          >
                            {e.kicker ?? e.title}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ) : null}

                {/* pax */}
                <div className="grid grid-cols-2 gap-3">
                  <MiniStepper
                    label="Adultos"
                    value={inputs.adults}
                    min={1}
                    max={12}
                    onChange={(v) => setInputs((s) => ({ ...s, adults: v }))}
                  />
                  <MiniStepper
                    label="Menores"
                    value={inputs.children}
                    min={0}
                    max={12}
                    onChange={(v) => setInputs((s) => ({ ...s, children: v }))}
                  />
                </div>

                {/* season + comfort */}
                <div className="grid grid-cols-2 gap-3">
                  <MiniPillGroup
                    label="Temporada"
                    value={inputs.season}
                    options={[
                      { key: 'low', label: 'Baja' },
                      { key: 'shoulder', label: 'Media' },
                      { key: 'high', label: 'Alta' },
                    ]}
                    onChange={(v) => setInputs((s) => ({ ...s, season: v as any }))}
                  />
                  <MiniPillGroup
                    label="Nivel"
                    value={inputs.comfort}
                    options={[
                      { key: 'standard', label: 'Standard' },
                      { key: 'premium', label: 'Premium' },
                    ]}
                    onChange={(v) => setInputs((s) => ({ ...s, comfort: v as any }))}
                  />
                </div>

                <button
                  type="button"
                  onClick={goToWizard}
                  className="mt-1 inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_22px_70px_-45px_rgba(232,76,139,0.70)] transition hover:opacity-95"
                >
                  Diseñar mi cotización
                </button>

                <div className="text-[11px] text-white/55">
                  *Este mini-wizard solo te da un “desde”. El wizard completo afina con tus fechas exactas.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 flex items-center gap-2 text-xs text-white/60"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
          Desliza para ver la experiencia Flymingo
        </motion.div>
      </div>
    </section>
  )
}

function MiniStepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  onChange: (v: number) => void
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-4">
      <div className="text-[11px] tracking-[0.24em] uppercase text-white/60">{label}</div>
      <div className="mt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-10 w-10 rounded-xl border border-white/10 bg-white/10 text-white/85 transition hover:bg-white/15"
          aria-label={`Disminuir ${label}`}
        >
          −
        </button>
        <div className="text-lg font-semibold text-white">{value}</div>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-10 w-10 rounded-xl border border-white/10 bg-white/10 text-white/85 transition hover:bg-white/15"
          aria-label={`Aumentar ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

function MiniPillGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: Array<{ key: string; label: string }>
  onChange: (v: string) => void
}) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/20 p-4">
      <div className="text-[11px] tracking-[0.24em] uppercase text-white/60">{label}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.key === value
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => onChange(o.key)}
              className={cx(
                'rounded-full border px-3 py-2 text-xs transition',
                active ? 'border-white/35 bg-white/15 text-white' : 'border-white/12 bg-white/10 text-white/75 hover:bg-white/15'
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}