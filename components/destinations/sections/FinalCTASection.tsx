'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

export default function FinalCTASection({ destination }: { destination: Destination }) {
  const whatsapp =
    'https://wa.me/528716887385?text=' +
    encodeURIComponent(`Hola! Quiero cotizar ${destination.name} ✈️`)

  return (
    <section className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-7 sm:p-10"
        >
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_75%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

          <div className="relative max-w-2xl">
            <div className="text-xs tracking-[0.24em] uppercase text-default-500">
              Listo para hacerlo real
            </div>

            <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              Diseñemos tu {destination.name} perfecto
            </h3>

            <p className="mt-3 text-sm text-default-600">
              Mándanos tus fechas aproximadas y cuántas personas van. Te respondemos con opciones reales.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#wizard"
                className="inline-flex items-center justify-center rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Ir al wizard
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-divider bg-content2 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-content1"
              >
                WhatsApp Flymingo
              </a>
            </div>

            <div className="mt-6 text-[11px] text-default-500">
              www.flymingoviajes.com · Las Quintas 338, El Fresno, Torreón, Coahuila
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}