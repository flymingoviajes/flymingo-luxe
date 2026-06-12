'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

export default function HeroVideo({ destination }: { destination: Destination }) {
  return (
    <section
      aria-label={`Hero ${destination.name}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-brand-ink)', // dark fallback — never shows white
      }}
    >
      {/* ── Video + overlays ─────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <video
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          autoPlay muted loop playsInline preload="metadata"
          poster={destination.hero?.posterUrl ?? undefined}
        >
          {destination.hero?.videoUrl && <source src={destination.hero.videoUrl} type="video/mp4" />}
        </video>

        {/* Cinematic grade: warm vignette from top + heavy bottom */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,6,9,0.42)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,6,9,0.75) 0%, rgba(10,6,9,0.15) 45%, rgba(10,6,9,0.05) 60%, rgba(10,6,9,0.8) 100%)' }} />
        {/* Brand glow — left shoulder */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 60% at 5% 20%, rgba(244,120,152,0.14) 0%, transparent 55%)' }} />
        {/* Grain texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.035\'/%3E%3C/svg%3E")', backgroundSize: '180px', mixBlendMode: 'overlay', pointerEvents: 'none' }} />

        {/* Top hairline */}
        <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '1px', background: 'linear-gradient(to right, transparent 10%, rgba(244,120,152,0.4) 40%, rgba(244,120,152,0.4) 60%, transparent 90%)' }} />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div
        className="relative mx-auto max-w-7xl w-full px-6 sm:px-8"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '2.5rem', paddingBottom: '3rem' }}
      >
        {/* Top row: brand chip + destination chip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <Chip>Flymingo Viajes</Chip>
          <ChipAccent>{destination.name}</ChipAccent>
        </motion.div>

        {/* Spacer — pushes headline to lower half */}
        <div style={{ flex: 1 }} />

        {/* Editorial headline block */}
        <div style={{ maxWidth: '860px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)',
              letterSpacing: '-0.045em',
              lineHeight: 0.92,
              color: 'white',
              margin: 0,
            }}
          >
            {destination.hero?.title ?? destination.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.22 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: 'rgba(255,255,255,0.62)',
              lineHeight: 1.7,
              maxWidth: '52ch',
              marginTop: '1.6rem',
            }}
          >
            {destination.hero?.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginTop: '2.4rem' }}
          >
            <a
              href="#cotizador"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1rem 2.25rem',
                borderRadius: '14px',
                background: 'var(--color-brand-accent)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                boxShadow: '0 24px 64px -32px rgba(244,120,152,0.75)',
                transition: 'opacity 0.15s',
              }}
            >
              Armar mi viaje
              <span aria-hidden="true" style={{ fontSize: '1.1em' }}>→</span>
            </a>

            <a
              href="#story"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 1.85rem',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                color: 'rgba(255,255,255,0.88)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background 0.15s, border-color 0.15s',
              }}
            >
              Ver el recorrido
            </a>
          </motion.div>
        </div>

        {/* Bottom row: metadata line + scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          {/* Left: destination metadata */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Meta label="Duración" value="7–14 días" />
            <MetaDivider />
            <Meta label="Tipo" value="Personalizado" />
            <MetaDivider />
            <Meta label="Pagos" value="6 MSI disponibles" />
          </div>

          {/* Right: scroll indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}>
              scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      borderRadius: '100px',
      border: '1px solid rgba(255,255,255,0.14)',
      background: 'rgba(255,255,255,0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      padding: '0.3rem 0.9rem',
      fontSize: '0.6rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      color: 'rgba(255,255,255,0.72)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
    }}>
      {children}
    </span>
  )
}

function ChipAccent({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      borderRadius: '100px',
      border: '1px solid rgba(244,120,152,0.3)',
      background: 'rgba(244,120,152,0.1)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      padding: '0.3rem 0.9rem',
      fontSize: '0.6rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      color: 'rgba(244,120,152,0.9)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
    }}>
      {children}
    </span>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '3px' }}>{label}</p>
      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>{value}</p>
    </div>
  )
}

function MetaDivider() {
  return <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.12)', alignSelf: 'center' }} />
}
