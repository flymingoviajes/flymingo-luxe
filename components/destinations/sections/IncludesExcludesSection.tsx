'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

export default function IncludesExcludesSection({ destination }: { destination: Destination }) {
  const block = destination.includes
  if (!block) return null
  const includes = block.includes ?? []
  const excludes = block.excludes ?? []
  if (!includes.length && !excludes.length) return null

  return (
    <section style={{ background: 'var(--color-brand-surface)', borderTop: '1px solid var(--color-brand-border)' }}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="text-eyebrow-accent mb-3">{block.title ?? 'Qué incluye'}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--color-brand-ink)', lineHeight: 1 }}>
            Sin sorpresas.
          </h2>
          {block.subtitle && (
            <p className="text-caption mt-3 max-w-xl">{block.subtitle}</p>
          )}
        </motion.div>

        {/* Mobile */}
        <div className="scroll-clip -mx-5 mt-8 md:hidden">
          <div className="scroll-row gap-4 px-5 pb-3">
            {includes.length > 0 && <IncludeCard title="Qué incluye" items={includes} variant="include" />}
            {excludes.length > 0 && <IncludeCard title="Qué no incluye" items={excludes} variant="exclude" />}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 mt-8">
          {includes.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <IncludeCard title="Qué incluye" items={includes} variant="include" />
            </motion.div>
          )}
          {excludes.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.06 }}>
              <IncludeCard title="Qué no incluye" items={excludes} variant="exclude" />
            </motion.div>
          )}
        </div>

        <p className="text-caption mt-5">*Todo puede ajustarse según tu estilo, fechas y presupuesto.</p>
      </div>
    </section>
  )
}

function IncludeCard({ title, items, variant }: { title: string; items: string[]; variant: 'include' | 'exclude' }) {
  const isInclude = variant === 'include'
  return (
    <div
      className={variant === 'include' ? 'flex-none snap-start w-[84vw] md:w-auto' : 'flex-none snap-start w-[84vw] md:w-auto'}
      style={{ background: 'white', border: '1px solid var(--color-brand-border)', borderRadius: '20px', padding: '1.75rem', height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <span style={{ height: '2rem', width: '2rem', borderRadius: '10px', background: isInclude ? 'var(--color-brand-green-soft)' : 'var(--color-brand-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0, color: isInclude ? 'var(--color-brand-green)' : 'var(--color-brand-muted)' }}>
          {isInclude ? '✓' : '—'}
        </span>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', color: 'var(--color-brand-ink)' }}>{title}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {items.map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <span style={{ height: '6px', width: '6px', borderRadius: '50%', background: isInclude ? 'var(--color-brand-green)' : 'var(--color-brand-muted)', marginTop: '7px', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--color-brand-dim)', lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
