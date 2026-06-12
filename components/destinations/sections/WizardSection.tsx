'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
    dataLayer?: object[]
  }
}

const DAY_OPTIONS = [
  { value: 7,  label: '7 días',  sub: 'Lo esencial, bien hecho' },
  { value: 10, label: '10 días', sub: 'Completo y sin prisas' },
  { value: 14, label: '14 días', sub: 'A fondo, sin perderte nada' },
]

function buildMessage(dest: string, days: number, adults: number, children: number, hasVisa: boolean, addons: string[]) {
  const pax = children > 0
    ? `${adults} adulto${adults !== 1 ? 's' : ''} + ${children} menor${children !== 1 ? 'es' : ''}`
    : `${adults} ${adults === 1 ? 'persona' : 'personas'}`
  const addonLine = addons.length > 0
    ? `\n🎒 Extras de interés:\n${addons.map(a => `  • ${a}`).join('\n')}`
    : ''
  return encodeURIComponent(
    `Hola Flymingo! 👋 Quiero cotizar un viaje a ${dest}.\n\n` +
    `📅 Duración: ${days} días\n` +
    `👥 Viajeros: ${pax}\n` +
    `✈️ Visa americana: ${hasVisa ? 'Sí' : 'No'}` +
    addonLine +
    `\n\n¿Pueden armarme una propuesta?`
  )
}

function track(dest: string, days: number, adults: number, children: number, addons: string[]) {
  if (typeof window === 'undefined') return

  // Personalizó su viaje y lo está enviando
  window.fbq?.('track', 'CustomizeProduct', { content_name: `Cotización ${dest}` })
  // Inicia el proceso de "compra" (consulta/propuesta)
  window.fbq?.('track', 'InitiateCheckout', {
    content_name: `Propuesta ${dest}`,
    num_items: adults + children,
  })
  // Agenda una consulta de viaje
  window.fbq?.('track', 'Schedule')
  // Lead primario
  window.fbq?.('track', 'Lead', { content_name: `Cotización ${dest}`, content_category: dest })
  // Contacto vía WhatsApp
  window.fbq?.('track', 'Contact')

  window.gtag?.('event', 'conversion', { send_to: 'AW-11261587022/Np8mCL-Jgr4cEM7c-Pkp', value: 1.0, currency: 'MXN' })
  window.gtag?.('event', 'generate_lead', { event_category: 'Cotizador', event_label: dest })
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'cotizador_lead', destination: dest, days, adults, children, addons })
}

// ─── Subcomponents ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brand-ink)', marginBottom: '0.9rem' }}>
      {children}
    </p>
  )
}

function SummaryRow({ icon, value }: { icon: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      <span style={{ fontSize: '0.9rem', width: '1.2rem', flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{value}</span>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CotizadorSection({ destination }: { destination: Destination }) {
  const optionalTours = (destination.tours ?? []).filter(t => t.badge === 'Opcional')

  const [days, setDays] = useState(7)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [hasVisa, setHasVisa] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())

  function toggleAddon(id: string) {
    setSelectedAddons(prev => {
      const next = new Set(prev)
      const adding = !next.has(id)
      adding ? next.add(id) : next.delete(id)
      if (adding && typeof window !== 'undefined') {
        const tour = optionalTours.find(t => t.id === id)
        window.fbq?.('track', 'AddToCart', {
          content_name: tour?.title ?? id,
          content_category: destination.name,
        })
      }
      return next
    })
  }

  function handleCTA() {
    const addonNames = optionalTours.filter(t => selectedAddons.has(t.id)).map(t => t.title)
    track(destination.name, days, adults, children, addonNames)
    const msg = buildMessage(destination.name, days, adults, children, hasVisa, addonNames)
    window.open(`https://wa.me/5218716887385?text=${msg}`, '_blank', 'noreferrer')
  }

  const paxLabel = children > 0
    ? `${adults} adulto${adults !== 1 ? 's' : ''} + ${children} menor${children !== 1 ? 'es' : ''}`
    : `${adults} ${adults === 1 ? 'persona' : 'personas'}`

  return (
    <section id="cotizador" style={{ background: 'var(--color-brand-surface)', borderTop: '1px solid var(--color-brand-border)' }}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.6rem' }}>
            Cotizador
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.04em', color: 'var(--color-brand-ink)', lineHeight: 1, maxWidth: '18ch' }}>
            Cuéntanos cómo quieres ir.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.95rem', color: 'var(--color-brand-dim)', lineHeight: 1.7, marginTop: '0.9rem', maxWidth: '52ch' }}>
            Selecciona lo básico y te mandamos una propuesta real por WhatsApp. Sin compromisos, sin precios genéricos.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'white',
            border: '1px solid var(--color-brand-border)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'grid',
          }}
          className="lg:grid-cols-[1fr_360px]"
        >
          {/* ── Left: form ── */}
          <div style={{ padding: '2.5rem 2.5rem 3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              {/* Duración */}
              <div>
                <SectionLabel>¿Cuántos días tienes?</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                  {DAY_OPTIONS.map(opt => {
                    const active = days === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setDays(opt.value)}
                        style={{
                          padding: '0.85rem 1.5rem',
                          borderRadius: '12px',
                          border: active ? '1.5px solid var(--color-brand-accent)' : '1.5px solid var(--color-brand-border)',
                          background: active ? 'var(--color-brand-accent)' : 'white',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: active ? 'white' : 'var(--color-brand-ink)', lineHeight: 1.1 }}>
                          {opt.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: active ? 'rgba(255,255,255,0.75)' : 'var(--color-brand-dim)', marginTop: '3px' }}>
                          {opt.sub}
                        </div>
                      </button>
                    )
                  })}
                  {/* Custom */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-brand-surface)', borderRadius: '12px', padding: '0.65rem 0.85rem', border: '1.5px solid var(--color-brand-border)' }}>
                    <button type="button" onClick={() => setDays(Math.max(1, days - 1))} aria-label="Menos días" style={{ width: '28px', height: '28px', borderRadius: '8px', border: '1px solid var(--color-brand-border)', background: 'white', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-brand-ink)' }}>−</button>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-brand-ink)', minWidth: '2ch', textAlign: 'center' }}>{days}</span>
                    <button type="button" onClick={() => setDays(Math.min(30, days + 1))} aria-label="Más días" style={{ width: '28px', height: '28px', borderRadius: '8px', border: '1px solid var(--color-brand-border)', background: 'white', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-brand-ink)' }}>+</button>
                  </div>
                </div>
              </div>

              {/* Viajeros */}
              <div>
                <SectionLabel>¿Cuántas personas viajan?</SectionLabel>
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <Stepper label="Adultos" value={adults} min={1} max={20} onChange={setAdults} />
                  <Stepper label="Menores de edad" value={children} min={0} max={10} onChange={setChildren} />
                </div>
              </div>

              {/* Visa */}
              <div>
                <SectionLabel>¿Cuentas con visa americana?</SectionLabel>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-brand-dim)', marginTop: '-0.6rem', marginBottom: '0.85rem', lineHeight: 1.55 }}>
                  Nos ayuda a buscar mejores conexiones de vuelo para tu ruta.
                </p>
                <div style={{ display: 'flex', gap: '0.65rem' }}>
                  {(['Sí', 'No'] as const).map(opt => {
                    const active = opt === 'Sí' ? hasVisa : !hasVisa
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setHasVisa(opt === 'Sí')}
                        style={{
                          padding: '0.75rem 2rem',
                          borderRadius: '12px',
                          border: active ? '1.5px solid var(--color-brand-ink)' : '1.5px solid var(--color-brand-border)',
                          background: active ? 'var(--color-brand-ink)' : 'white',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          color: active ? 'white' : 'var(--color-brand-dim)',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Extras */}
              {optionalTours.length > 0 && (
                <div>
                  <SectionLabel>¿Algún extra que te llame la atención?</SectionLabel>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-brand-dim)', marginTop: '-0.6rem', marginBottom: '0.85rem', lineHeight: 1.55 }}>
                    Sin precio fijo aún — solo para saber qué te interesa al cotizar.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {optionalTours.map(tour => {
                      const active = selectedAddons.has(tour.id)
                      return (
                        <button
                          key={tour.id}
                          type="button"
                          onClick={() => toggleAddon(tour.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.9rem',
                            padding: '0.9rem 1.1rem',
                            borderRadius: '14px',
                            border: active ? '1.5px solid var(--color-brand-ink)' : '1.5px solid var(--color-brand-border)',
                            background: active ? '#F9F5F7' : 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s',
                            width: '100%',
                          }}
                        >
                          {tour.image && (
                            <div style={{ width: '50px', height: '50px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, background: 'var(--color-brand-surface)' }}>
                              <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                            </div>
                          )}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-brand-ink)', lineHeight: 1.2, marginBottom: '2px' }}>
                              {tour.title}
                            </p>
                            {tour.short && (
                              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-brand-dim)', lineHeight: 1.45 }}>
                                {tour.short}
                              </p>
                            )}
                          </div>
                          <div style={{ width: '22px', height: '22px', borderRadius: '6px', border: active ? '2px solid var(--color-brand-ink)' : '1.5px solid var(--color-brand-border)', background: active ? 'var(--color-brand-ink)' : 'white', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>
                            {active && <span style={{ color: 'white', fontSize: '11px', fontWeight: 700, lineHeight: 1 }}>✓</span>}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Right: summary + CTA ── */}
          <div style={{ background: 'var(--color-brand-ink)', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
              Tu propuesta incluirá
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
              <SummaryRow icon="📅" value={`${days} días`} />
              <SummaryRow icon="👥" value={paxLabel} />
              <SummaryRow icon="✈️" value={`Visa americana: ${hasVisa ? 'Sí' : 'No'}`} />
              <AnimatePresence>
                {selectedAddons.size > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <SummaryRow
                      icon="🎒"
                      value={`${selectedAddons.size} extra${selectedAddons.size !== 1 ? 's' : ''} de interés`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '1.75rem 0' }} />

            <button
              type="button"
              onClick={handleCTA}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                padding: '1rem',
                borderRadius: '14px',
                background: 'var(--color-brand-accent)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.93rem',
                color: 'white',
                letterSpacing: '-0.01em',
                transition: 'opacity 0.15s',
                boxShadow: '0 16px 40px -20px rgba(244,120,152,0.6)',
              }}
            >
              <WhatsAppIcon />
              Enviar propuesta a Flymingo
            </button>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.9rem', lineHeight: 1.5, textAlign: 'center' }}>
              Te respondemos con opciones reales. Sin compromiso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div style={{ border: '1.5px solid var(--color-brand-border)', borderRadius: '12px', padding: '0.9rem 1.1rem', minWidth: '160px', background: 'white' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.7rem', color: 'var(--color-brand-dim)', marginBottom: '0.65rem', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1.5px solid var(--color-brand-border)', background: 'var(--color-brand-surface)', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-brand-ink)' }}
          aria-label={`Disminuir ${label}`}
        >−</button>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-brand-ink)', minWidth: '1.8ch', textAlign: 'center' }}>{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1.5px solid var(--color-brand-border)', background: 'var(--color-brand-surface)', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-brand-ink)' }}
          aria-label={`Aumentar ${label}`}
        >+</button>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
