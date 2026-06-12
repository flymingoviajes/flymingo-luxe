'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

export default function FinalCTASection({ destination }: { destination: Destination }) {
  const whatsapp =
    'https://wa.me/528716887385?text=' +
    encodeURIComponent(`Hola Flymingo! 👋 Quiero cotizar un viaje a ${destination.name} ✈️`)

  return (
    <section style={{ background: 'var(--color-brand-ink)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center flex flex-col items-center"
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '1.25rem' }}>
            Ya casi
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', color: 'white', lineHeight: 0.96, maxWidth: '18ch' }}>
            {destination.name} te está esperando.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginTop: '1.5rem', maxWidth: '44ch' }}>
            Usa el wizard para perfilar tu viaje, o escríbenos directo. Nos adaptamos a tu timeline.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <a href="#wizard" className="btn btn-accent" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
              Usar el wizard
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ fontSize: '0.95rem', padding: '0.85rem 2rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: 'white', borderRadius: '14px' }}
            >
              WhatsApp Flymingo
            </a>
          </div>

          <p style={{ marginTop: '2.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            flymingoviajes.com · Las Quintas 338, El Fresno, Torreón, Coahuila
          </p>
        </motion.div>
      </div>
    </section>
  )
}
