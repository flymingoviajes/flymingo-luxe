'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

declare global {
  interface Window { fbq?: (...args: unknown[]) => void; dataLayer?: object[] }
}

const FALLBACK = [
  { q: '¿Cómo aparto mi lugar?', a: 'Te ayudamos a elegir ruta y fechas en el wizard. Luego definimos anticipo y forma de pago (normal o 6 MSI).' },
  { q: '¿Qué pasa si cambian los precios?', a: 'Los precios dependen de disponibilidad, temporada y vuelos. Por eso el wizard te da un estimado y lo cerramos con cotización formal.' },
  { q: '¿Puedo personalizar la ruta?', a: 'Sí. Esta landing es el punto de partida. Podemos ajustar hoteles, noches, experiencias y ritmo del viaje a tu presupuesto.' },
  { q: '¿Hay vuelos desde Torreón?', a: 'Incluimos conexiones desde Torreón o la ciudad más conveniente para ti. Todo coordinado.' },
]

function Item({ item, i }: { item: { q: string; a: string }; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'white',
          border: '1px solid var(--color-brand-border)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          transition: 'border-color 0.15s',
        }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-brand-ink)', lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.3rem', color: 'var(--color-brand-accent)', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0.85rem 1.5rem 1.25rem', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-brand-dim)', lineHeight: 1.7 }}>
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection({ destination }: { destination: Destination }) {
  const faqs = destination.faq && destination.faq.length > 0 ? destination.faq : FALLBACK

  return (
    <section id="faq" style={{ background: 'white', borderTop: '1px solid var(--color-brand-border)' }}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-eyebrow-accent mb-3">Preguntas frecuentes</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--color-brand-ink)', lineHeight: 1 }}>
            Resolvemos tus dudas.
          </h2>
          <p className="text-caption mt-3">¿No está lo que buscas? Nos escribes por WhatsApp y lo resolvemos contigo.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {faqs.map((f, i) => (
            <Item key={f.q} item={f} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://wa.me/528716887385?text=${encodeURIComponent(`Hola Flymingo! Tengo preguntas sobre ${destination.name} 🙌`)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            onClick={() => {
              window.fbq?.('track', 'Contact')
              window.fbq?.('track', 'Lead', { content_name: `FAQ ${destination.name}` })
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({ event: 'whatsapp_lead', event_label: `FAQ ${destination.name}` })
            }}
          >
            Más dudas → WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
