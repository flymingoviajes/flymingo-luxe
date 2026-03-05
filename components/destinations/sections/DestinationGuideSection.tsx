'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-xs text-default-600">
      {children}
    </span>
  )
}

function SmallCard({
  title,
  items,
  icon,
}: {
  title: string
  items: string[]
  icon?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6">
      {/* glow: suave en light, más notorio en dark */}
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

      <div className="relative">
        <div className="flex items-center gap-2">
          {icon ? (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-divider bg-content2 text-sm">
              {icon}
            </span>
          ) : null}
          <div className="text-sm font-semibold text-foreground">{title}</div>
        </div>

        <div className="mt-5 grid gap-3">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-3 text-sm text-default-600">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MapCard({ title, subtitle, src }: { title: string; subtitle?: string; src: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

      <div className="relative p-6">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-default-500">{subtitle}</div> : null}
      </div>

      <div className="relative aspect-[16/10] w-full">
        <iframe
          title="Mapa"
          src={src}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="relative p-6 pt-4">
        <div className="text-[11px] text-default-500">
          *Mockup: luego podemos cambiar el mapa según ruta (Ring Road, Golden Circle, etc.).
        </div>
      </div>
    </div>
  )
}

export default function DestinationGuideSection({ destination }: { destination: Destination }) {
  // ✅ MOCKUP: luego lo conectamos a datos reales por destino.
  const seasons = [
    { label: 'Invierno', desc: 'Auroras, hielo, cuevas, nieve', temp: '-5 a 5°C' },
    { label: 'Primavera', desc: 'Menos gente, clima variable, paisajes verdes', temp: '0 a 10°C' },
    { label: 'Verano', desc: 'Días larguísimos, roadtrip perfecto', temp: '8 a 15°C' },
    { label: 'Otoño', desc: 'Colores, auroras regresan, buen balance', temp: '0 a 10°C' },
  ]

  const idealFor = ['Primer viaje “wow”', 'Parejas', 'Amigas', 'Fotografía', 'Aventura + confort']

  const packing = [
    'Chamarra impermeable + rompevientos',
    'Capa térmica (base layer) + fleece',
    'Botas impermeables (suela antiderrapante)',
    'Guantes, gorro y buff',
    'Traje de baño (Blue Lagoon / spas)',
  ]

  const quickTips = [
    'El clima cambia en minutos: vístete por capas.',
    'Manejarás: roadtrip = libertad total.',
    'Lleva adaptador europeo y power bank.',
    'Nosotros te armamos rutas con tiempos reales (sin correr).',
  ]

  // Reykjavik embed (mockup). Luego podemos hacerlo por destino/ruta.
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17433.796245586525!2d-21.953!3d64.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b9eedcedc3%3A0xec912ca230d26071!2sReykjav%C3%ADk%2C%20Islandia!5e0!3m2!1ses-419!2smx!4v1730000000000'

  return (
    <section id="guia" className="relative border-t border-divider bg-background">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.08),transparent_45%)]" />

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
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">Guía del destino</div>
            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              Todo lo que tienes que saber de {destination.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-default-600">
              Una mini guía práctica: clima, para quién es ideal, qué empacar y mapa base. (Mockup)
            </p>
          </div>

          <a
            href="#wizard"
            className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content1 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-content2"
          >
            Ir al wizard
          </a>
        </motion.div>

        {/* Chips */}
        <div className="mt-7 flex flex-wrap gap-2">
          {idealFor.map((x) => (
            <Pill key={x}>{x}</Pill>
          ))}
        </div>

        {/* Seasons: mobile carousel */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {seasons.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.03 }}
              className="shrink-0 min-w-[86%] snap-center"
            >
              <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6">
                <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-foreground">{s.label}</div>
                    <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-[11px] font-semibold text-foreground">
                      {s.temp}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-default-600">{s.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-12">
          {/* seasons */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {seasons.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.04 }}
                  className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-lg font-semibold text-foreground">{s.label}</div>
                      <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-[11px] font-semibold text-foreground">
                        {s.temp}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-default-600">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* map */}
          <div className="lg:col-span-5">
            <MapCard
              title="Ubicación base"
              subtitle="Ejemplo: Reykjavík (punto de inicio típico)"
              src={mapSrc}
            />
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <SmallCard title="Qué empacar (básico)" items={packing} icon="🧳" />
          <SmallCard title="Tips Flymingo" items={quickTips} icon="✨" />
        </div>

        <div className="mt-6 text-[11px] text-default-500">
          *Mockup: cuando quieras, lo hacemos dinámico por destino (clima real, mapa por ruta, checklist editable).
        </div>
      </div>
    </section>
  )
}