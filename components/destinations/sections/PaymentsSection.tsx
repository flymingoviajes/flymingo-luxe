'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Card({
  title,
  subtitle,
  bullets,
  badge,
}: {
  title: string
  subtitle?: string
  bullets: string[]
  badge?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.07),transparent_45%)]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-foreground">{title}</div>
            {subtitle ? <div className="mt-1 text-sm text-default-600">{subtitle}</div> : null}
          </div>

          {badge ? (
            <span className="shrink-0 rounded-full border border-divider bg-content2 px-3 py-1 text-[11px] font-semibold text-foreground">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="mt-5 grid gap-3">
          {bullets.map((t) => (
            <div key={t} className="flex items-start gap-3 text-sm text-default-600">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="#wizard"
            className="inline-flex flex-1 items-center justify-center rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Cotizar con este plan
          </a>

          <a
            href="#faq"
            className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content2 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-content1"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PaymentsSection({ destination }: { destination: Destination }) {
  // Si luego quieres hacerlo dinámico por destino, aquí puedes leer destination.hero.priceFrom, etc.
  // Por ahora dejamos el bloque fijo pero “brand friendly”.
  const plans = [
    {
      title: 'Todo a 6 MSI',
      badge: 'Más fácil',
      subtitle: 'Divide el total en 6 pagos mensuales con tarjeta de crédito.',
      bullets: [
        'Ideal si quieres presupuesto mensual fijo.',
        'Recomendado para salidas cercanas (cupo limitado).',
        'El precio final depende de fechas y disponibilidad.',
      ],
    },
    {
      title: 'Anticipo a 6 MSI + resto normal',
      badge: 'Balanceado',
      subtitle: 'Separa tu lugar hoy y paga el resto con transferencia o pago normal.',
      bullets: [
        'Apartas con un anticipo y aseguras disponibilidad.',
        'El resto se liquida antes de la fecha límite.',
        'Perfecto si quieres “amarrar” hotel/tours primero.',
      ],
    },
    {
      title: 'Anticipo normal + resto a 6 MSI',
      badge: 'Flex',
      subtitle: 'Apartas con pago normal y difieres el resto en 6 mensualidades.',
      bullets: [
        'Útil si prefieres dar un anticipo fuerte sin MSI.',
        'El resto se puede diferir en 6 pagos.',
        'Nos adaptamos a tu forma de pagar.',
      ],
    },
  ]

  return (
    <section id="pagos" className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_55%_90%,rgba(99,102,241,0.08),transparent_45%)]" />

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
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">Plan de pagos</div>
            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              6 MSI para que lo hagas realidad
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-default-600">
              Elige la modalidad que más te conviene. Tú decides cómo apartar y cómo liquidar.
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
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.03 }}
              className="shrink-0 min-w-[86%] snap-center"
            >
              <Card title={p.title} subtitle={p.subtitle} bullets={p.bullets} badge={p.badge} />
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.04 }}
              className={cx(i === 0 && 'lg:col-span-1')}
            >
              <Card title={p.title} subtitle={p.subtitle} bullets={p.bullets} badge={p.badge} />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-[11px] text-default-500">
          *Aplican términos y condiciones. MSI sujeto a aprobación bancaria. Los precios pueden cambiar por
          disponibilidad, temporada, vuelos y ocupación.
        </div>
      </div>
    </section>
  )
}