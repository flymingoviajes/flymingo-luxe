'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'
import { formatMoney } from '../utils/FormatMoney'
import { estimateFromExperience, WizardInputs } from '../utils/EstimatePrice'
import { useSearchParams } from 'next/navigation'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function WizardSection({ destination }: { destination: Destination }) {
  const experiences = destination.experiences ?? []

  const searchParams = useSearchParams()
  const expFromUrl = searchParams.get('exp')

  const defaultExperienceId = experiences[0]?.id ?? 'default'

  const [inputs, setInputs] = useState<WizardInputs>(() => {
    const seeded =
      expFromUrl && experiences.some((e) => e.id === expFromUrl) ? expFromUrl : defaultExperienceId

    return {
      experienceId: seeded,
      adults: 2,
      children: 0,
      season: 'shoulder',
      comfort: 'standard',
    }
  })

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

  return (
    <section id="wizard" className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-100 bg-[radial-gradient(circle_at_18%_10%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_82%_30%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.06),transparent_45%)]" />

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
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">Wizard Flymingo</div>
            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              Diseña tu viaje en 30 segundos
            </h2>

            {/* Flymingo hairline */}
            <div className="mt-3 h-px w-20 bg-gradient-to-r from-primary/55 via-primary/12 to-transparent" />

            <p className="mt-3 max-w-2xl text-sm text-default-600">
              El precio se actualiza en vivo (estimado). Ya con tus fechas exactas, lo afinamos contigo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative overflow-hidden rounded-2xl border border-divider bg-content1 px-4 py-3 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.25)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.55)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-80" />
              <div className="text-[11px] tracking-[0.24em] uppercase text-default-500">Precio desde</div>

              <motion.div
                key={money?.amount ?? 0}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-1 text-xl font-semibold text-foreground"
              >
                {money ? formatMoney(money.amount, money.currency) : '—'}
              </motion.div>

              <div className="mt-1 text-[11px] text-default-500">
                Base: <b className="font-semibold text-foreground">{selected?.title ?? destination.name}</b>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">Ruta / experiencia</div>
              <div className="text-xs text-default-500">Elige una base</div>
            </div>

            {/* Mobile carousel */}
            <div className="mt-4 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {experiences.map((e) => {
                const active = e.id === inputs.experienceId
                return (
                  <button
                    key={e.id}
                    onClick={() => setInputs((s) => ({ ...s, experienceId: e.id }))}
                    className={cx(
                      'min-w-[78%] snap-center rounded-3xl border p-5 text-left transition',
                      'shadow-[0_25px_80px_-60px_rgba(0,0,0,0.22)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.55)]',
                      active ? 'border-divider bg-content2' : 'border-divider bg-content1 hover:bg-content2'
                    )}
                  >
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
                      ) : null}
                    </div>

                    <div className="mt-2 text-lg font-semibold text-foreground">{e.title}</div>
                    {e.days ? <div className="mt-1 text-sm text-default-600">{e.days}</div> : null}
                    {e.desc ? <div className="mt-3 text-sm text-default-600">{e.desc}</div> : null}

                    {!!e.highlights?.length && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-divider bg-content2 px-3 py-1 text-xs text-default-600"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Desktop grid */}
            <div className="mt-4 hidden grid-cols-2 gap-3 lg:grid">
              {experiences.map((e) => {
                const active = e.id === inputs.experienceId
                return (
                  <button
                    key={e.id}
                    onClick={() => setInputs((s) => ({ ...s, experienceId: e.id }))}
                    className={cx(
                      'rounded-3xl border p-5 text-left transition',
                      'shadow-[0_25px_80px_-60px_rgba(0,0,0,0.20)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.55)]',
                      active ? 'border-divider bg-content2' : 'border-divider bg-content1 hover:bg-content2'
                    )}
                  >
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
                      ) : null}
                    </div>

                    <div className="mt-2 text-lg font-semibold text-foreground">{e.title}</div>
                    {e.days ? <div className="mt-1 text-sm text-default-600">{e.days}</div> : null}
                    {e.desc ? <div className="mt-3 text-sm text-default-600">{e.desc}</div> : null}
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.04 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6 shadow-[0_35px_110px_-70px_rgba(0,0,0,0.22)] dark:shadow-[0_45px_140px_-85px_rgba(0,0,0,0.65)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-80" />

              <div className="text-sm font-semibold text-foreground">Ajustes rápidos</div>
              <div className="mt-1 text-xs text-default-500">
                Esto es para darte un “desde” realista. La cotización final se hace con tus fechas exactas.
              </div>

              <div className="mt-6 grid gap-4">
                {/* Pax */}
                <div className="grid grid-cols-2 gap-3">
                  <Stepper
                    label="Adultos"
                    value={inputs.adults}
                    min={1}
                    max={12}
                    onChange={(v) => setInputs((s) => ({ ...s, adults: v }))}
                  />
                  <Stepper
                    label="Menores"
                    value={inputs.children}
                    min={0}
                    max={12}
                    onChange={(v) => setInputs((s) => ({ ...s, children: v }))}
                  />
                </div>

                {/* Season */}
                <div>
                  <div className="text-xs tracking-[0.22em] uppercase text-default-500">Temporada</div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <Pill active={inputs.season === 'low'} onClick={() => setInputs((s) => ({ ...s, season: 'low' }))} label="Baja" />
                    <Pill active={inputs.season === 'shoulder'} onClick={() => setInputs((s) => ({ ...s, season: 'shoulder' }))} label="Media" />
                    <Pill active={inputs.season === 'high'} onClick={() => setInputs((s) => ({ ...s, season: 'high' }))} label="Alta" />
                  </div>
                </div>

                {/* Comfort */}
                <div>
                  <div className="text-xs tracking-[0.22em] uppercase text-default-500">Nivel</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <Pill active={inputs.comfort === 'standard'} onClick={() => setInputs((s) => ({ ...s, comfort: 'standard' }))} label="Standard" />
                    <Pill active={inputs.comfort === 'premium'} onClick={() => setInputs((s) => ({ ...s, comfort: 'premium' }))} label="Premium" />
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-2xl border border-divider bg-content2 p-4">
                  <div className="text-xs tracking-[0.22em] uppercase text-default-500">Tu base</div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {selected?.title ?? destination.name}
                  </div>
                  <div className="mt-1 text-xs text-default-500">
                    {inputs.adults} adulto(s) · {inputs.children} menor(es) · {inputs.season} · {inputs.comfort}
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => {
                    console.log('Wizard payload:', { destination: destination.slug, ...inputs, price: money })
                    alert('Listo ✅ Ya tengo tu base. En el siguiente paso lo conectamos al envío de lead.')
                  }}
                  className="mt-1 inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_22px_70px_-45px_rgba(232,76,139,0.65)] transition hover:opacity-95"
                >
                  Quiero mi cotización
                </button>

                <div className="text-[11px] text-default-500">
                  *Precio estimado “desde”. Puede variar por disponibilidad, vuelos, ocupación y tipo de habitación.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Pill({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'rounded-2xl border px-4 py-2 text-sm transition',
        active
          ? 'border-divider bg-content2 text-foreground'
          : 'border-divider bg-content1 text-default-600 hover:bg-content2'
      )}
    >
      {label}
    </button>
  )
}

function Stepper({
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
    <div className="rounded-2xl border border-divider bg-content1 p-4">
      <div className="text-xs tracking-[0.22em] uppercase text-default-500">{label}</div>

      <div className="mt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-10 w-10 rounded-xl border border-divider bg-content2 text-foreground transition hover:bg-content1"
          aria-label={`Disminuir ${label}`}
        >
          −
        </button>

        <div className="text-lg font-semibold text-foreground">{value}</div>

        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-10 w-10 rounded-xl border border-divider bg-content2 text-foreground transition hover:bg-content1"
          aria-label={`Aumentar ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
}