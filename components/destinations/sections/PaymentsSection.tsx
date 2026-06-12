'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

const PLANS = [
  {
    badge: 'Más fácil',
    title: 'Todo a 6 MSI',
    subtitle: 'Divide el total en 6 pagos mensuales con tarjeta.',
    bullets: ['Presupuesto mensual fijo', 'Ideal para salidas con tiempo', 'Sin enganches ni complicaciones'],
  },
  {
    badge: 'Más popular',
    title: 'Apartado + resto a 6 MSI',
    subtitle: 'Aseguras tu lugar hoy y el resto lo diferiste en 6 pagos.',
    bullets: ['Cupo garantizado desde el primer día', 'El apartado puede ser normal o MSI', 'Perfecto para viajes con fechas muy pedidas'],
  },
  {
    badge: 'Flex',
    title: 'Apartado normal + pagos libres',
    subtitle: 'Das un enganche y liquidas a tu ritmo antes de la salida.',
    bullets: ['Más flexibilidad en el calendario de pagos', 'Útil si recibes ingresos variables', 'Nos adaptamos a tu forma de organizar'],
  },
]

export default function PaymentsSection({ destination }: { destination: Destination }) {
  void destination
  return (
    <section style={{ background: 'white', borderTop: '1px solid var(--color-brand-border)' }}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10"
        >
          <div>
            <p className="text-eyebrow-accent mb-3">Plan de pagos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--color-brand-ink)', lineHeight: 1 }}>
              6 MSI para que lo hagas realidad.
            </h2>
            <p className="text-caption mt-3 max-w-lg">Elige cómo apartar y cómo liquidar. Nos ajustamos a tu forma de pagar.</p>
          </div>
          <a href="#wizard" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>
            Ir al wizard →
          </a>
        </motion.div>

        {/* Mobile */}
        <div className="scroll-clip -mx-5 md:hidden">
          <div className="scroll-row gap-4 px-5 pb-3">
            {PLANS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex-none snap-start w-[84vw]"
              >
                <PlanCard plan={p} featured={i === 1} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <PlanCard plan={p} featured={i === 1} />
            </motion.div>
          ))}
        </div>

        <p className="text-caption mt-6">*MSI sujeto a aprobación bancaria. Precios pueden variar por disponibilidad, vuelos y temporada.</p>
      </div>
    </section>
  )
}

function PlanCard({ plan, featured }: { plan: typeof PLANS[number]; featured?: boolean }) {
  return (
    <div style={{
      background: featured ? 'var(--color-brand-ink)' : 'white',
      border: `1px solid ${featured ? 'transparent' : 'var(--color-brand-border)'}`,
      borderRadius: '20px',
      padding: '1.75rem',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span className={featured ? 'badge badge-neon' : 'badge badge-accent'} style={{ marginBottom: '1rem', alignSelf: 'flex-start' }}>
        {plan.badge}
      </span>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: featured ? 'white' : 'var(--color-brand-ink)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
        {plan.title}
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: featured ? 'rgba(255,255,255,0.6)' : 'var(--color-brand-dim)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {plan.subtitle}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
        {plan.bullets.map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <span style={{ height: '5px', width: '5px', borderRadius: '50%', background: featured ? 'var(--color-brand-accent)' : 'var(--color-brand-accent)', marginTop: '7px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: featured ? 'rgba(255,255,255,0.55)' : 'var(--color-brand-dim)' }}>{b}</span>
          </div>
        ))}
      </div>
      <a href="#wizard" className={featured ? 'btn btn-accent mt-6 justify-center' : 'btn btn-outline mt-6 justify-center'}>
        Cotizar con este plan
      </a>
    </div>
  )
}
