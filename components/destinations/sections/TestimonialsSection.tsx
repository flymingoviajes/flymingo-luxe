'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'
import type { GoogleReview } from '@/lib/google-reviews'
import { initials } from '@/lib/google-reviews'

type ReviewItem = { name: string; ini: string; quote: string; meta: string; rating: number }

const FALLBACK: ReviewItem[] = [
  { name: 'Mariana G.', ini: 'MG', meta: 'Islandia · Pareja', rating: 5, quote: 'Fue el viaje más increíble de mi vida. Todo estaba pensado, cero estrés y puro disfrutar.' },
  { name: 'Fernanda R.', ini: 'FR', meta: 'Islandia · Grupo', rating: 5, quote: 'Hoteles perfectos, rutas hermosas y siempre nos sentíamos acompañadas. Volvería mañana.' },
  { name: 'Ana P.', ini: 'AP', meta: 'Islandia · Primera vez Europa', rating: 5, quote: 'Tenía miedo por el idioma y la logística. Me lo hicieron facilísimo. Una experiencia única.' },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-3 w-3 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Card({ r }: { r: ReviewItem }) {
  return (
    <div style={{ background: 'white', border: '1px solid var(--color-brand-border)', borderRadius: '20px', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stars n={r.rating} />
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', letterSpacing: '-0.01em', color: 'var(--color-brand-ink)', lineHeight: 1.65, flex: 1, marginTop: '1rem' }}>
        &ldquo;{r.quote}&rdquo;
      </p>
      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ height: '2.25rem', width: '2.25rem', borderRadius: '50%', background: 'var(--color-brand-accent-soft)', border: '1px solid rgba(244,120,152,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--color-brand-accent)', flexShrink: 0 }}>
          {r.ini}
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-brand-ink)', lineHeight: 1 }}>{r.name}</p>
          <p className="text-caption mt-0.5">{r.meta}</p>
        </div>
      </div>
    </div>
  )
}

interface Props {
  destination: Destination
  googleReviews?: GoogleReview[]
}

export default function TestimonialsSection({ destination, googleReviews }: Props) {
  const reviews: ReviewItem[] =
    googleReviews && googleReviews.length >= 2
      ? googleReviews.slice(0, 3).map((r) => ({
          name: r.author_name,
          ini: initials(r.author_name),
          quote: r.text,
          meta: 'Google Reviews',
          rating: r.rating,
        }))
      : FALLBACK

  return (
    <section id="testimonios" style={{ background: 'var(--color-brand-surface)', borderTop: '1px solid var(--color-brand-border)' }}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="text-eyebrow-accent mb-3">Lo que dicen</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--color-brand-ink)', lineHeight: 1 }}>
            Historias reales de {destination.name}.
          </h2>
        </motion.div>

        {/* Mobile */}
        <div className="scroll-clip -mx-5 mt-8 sm:hidden">
          <div className="scroll-row gap-4 px-5 pb-3">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-none snap-start w-[84vw]"
              >
                <Card r={r} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 mt-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name + i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <Card r={r} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
