'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

type Chapter = NonNullable<Destination['scrollStory']>[number]

// ── Mobile card ──────────────────────────────────────────────────────────────
function MobileCard({ c, i, total }: { c: Chapter; i: number; total: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
      style={{ borderRadius: '20px', overflow: 'hidden', background: 'var(--color-brand-ink)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Image */}
      {c.image && (
        <div style={{ position: 'relative', aspectRatio: '16/10', background: '#1a0f14', overflow: 'hidden' }}>
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(21,12,16,0.9) 100%)' }} />
          <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
            <span style={{ borderRadius: '100px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', padding: '0.25rem 0.7rem', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
              {i + 1}/{total}
            </span>
          </div>
        </div>
      )}

      {/* Text */}
      <div style={{ padding: '1.35rem 1.35rem 1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.5rem' }}>
          {c.kicker}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.025em', color: 'white', lineHeight: 1.1, marginBottom: '0.65rem' }}>
          {c.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
          {c.desc}
        </p>
        {c.bullets && c.bullets.length > 0 && (
          <ul style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {c.bullets.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-brand-accent)', marginTop: '7px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

// ── Desktop sticky scroll ─────────────────────────────────────────────────────
function DesktopStory({ chapters }: { chapters: Chapter[] }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    const handler = () => {
      const rect = outer.getBoundingClientRect()
      const total = outer.offsetHeight - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / total)
      const next = Math.min(chapters.length - 1, Math.floor(progress * chapters.length))
      setIdx(next)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [chapters.length])

  const c = chapters[idx]

  return (
    // Outer scroll driver — height = N chapters × 100vh
    <div
      ref={outerRef}
      style={{ position: 'relative', height: `${chapters.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex' }}>

        {/* ── Left text panel ── */}
        <div style={{
          width: '42%',
          flexShrink: 0,
          background: 'var(--color-brand-ink)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem 3.5rem 4rem 4rem',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Section label (stays fixed) */}
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '3rem' }}>
            El viaje
          </p>

          {/* Chapter content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.75rem' }}>
                {c.kicker}
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.9rem, 3vw, 3rem)', letterSpacing: '-0.04em', color: 'white', lineHeight: 1, marginBottom: '1.1rem' }}>
                {c.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1.4rem', maxWidth: '34ch' }}>
                {c.desc}
              </p>
              {c.bullets && (
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {c.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-brand-accent)', marginTop: '7px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div style={{ position: 'absolute', right: '1.75rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '0.55rem', alignItems: 'center' }}>
            {chapters.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const outer = outerRef.current
                  if (!outer) return
                  const chunkH = (outer.offsetHeight - window.innerHeight) / chapters.length
                  window.scrollTo({ top: outer.offsetTop + chunkH * i + 2, behavior: 'smooth' })
                }}
                aria-label={`Capítulo ${i + 1}`}
                style={{
                  width: i === idx ? '8px' : '5px',
                  height: i === idx ? '8px' : '5px',
                  borderRadius: '50%',
                  background: i === idx ? 'var(--color-brand-accent)' : 'rgba(255,255,255,0.18)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Chapter counter bottom */}
          <p style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
            {String(idx + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
          </p>
        </div>

        {/* ── Right image panel ── */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          {/* Thin accent edge between panels */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, var(--color-brand-accent), transparent)', opacity: 0.25, zIndex: 3 }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.imageAlt ?? c.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, background: 'var(--color-brand-ink)' }} />
              )}
              {/* Subtle vignette */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(21,12,16,0.2) 0%, transparent 30%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(21,12,16,0.3) 0%, transparent 20%, transparent 75%, rgba(21,12,16,0.4) 100%)' }} />
            </motion.div>
          </AnimatePresence>

          {/* Image caption bottom-right */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${c.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{ position: 'absolute', bottom: '1.5rem', right: '1.75rem', zIndex: 2, textAlign: 'right' }}
            >
              {c.imageAlt && (
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>
                  {c.imageAlt}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ScrollStorySection({ destination }: { destination: Destination }) {
  const chapters = destination.scrollStory ?? []
  if (!chapters.length) return null

  return (
    <section id="story" aria-label="El recorrido" style={{ background: 'var(--color-brand-ink)' }}>

      {/* Section header (visible above everything) */}
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.5rem' }}>
            El recorrido
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 6vw, 3rem)', letterSpacing: '-0.035em', color: 'white', lineHeight: 1 }}>
            Así se ve tu {destination.name}.
          </h2>
        </motion.div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="mx-auto max-w-2xl px-5 pb-14 flex flex-col gap-4 lg:hidden">
        {chapters.map((c, i) => (
          <MobileCard key={c.id} c={c} i={i} total={chapters.length} />
        ))}
      </div>

      {/* Desktop: Apple sticky scroll */}
      <div className="hidden lg:block">
        <DesktopStory chapters={chapters} />
      </div>
    </section>
  )
}
