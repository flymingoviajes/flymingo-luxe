'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

type FAQ = { q: string; a: string }

function Item({ item }: { item: FAQ }) {
  return (
    <details className="group rounded-2xl border border-divider bg-content1 px-5 py-4">
      <summary className="cursor-pointer list-none text-sm font-semibold text-foreground">
        <div className="flex items-center justify-between gap-4">
          <span>{item.q}</span>
          <span className="text-default-500 transition group-open:rotate-45">＋</span>
        </div>
      </summary>
      <div className="mt-3 text-sm text-default-600">{item.a}</div>
    </details>
  )
}

export default function FAQSection({ destination }: { destination: Destination }) {
  const faqs: FAQ[] = [
    {
      q: '¿Cómo aparto mi lugar?',
      a: 'Te ayudamos a elegir ruta y fechas en el wizard. Luego definimos anticipo y forma de pago (normal o 6 MSI).',
    },
    {
      q: '¿Qué pasa si cambian los precios?',
      a: 'Los precios dependen de disponibilidad, temporada y vuelos. Por eso el wizard te da un estimado y lo cerramos con cotización formal.',
    },
    {
      q: '¿Necesito visa para Islandia?',
      a: 'Depende de tu nacionalidad y escalas. En la cotización te indicamos requisitos y recomendaciones.',
    },
    {
      q: '¿Puedo personalizar la ruta?',
      a: 'Sí. Esta landing es el punto de partida. Podemos ajustar hoteles, noches, experiencias y ritmo del viaje.',
    },
  ]

  return (
    <section id="faq" className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.07),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="text-xs tracking-[0.24em] uppercase text-default-500">FAQ</div>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Resolvemos tus dudas rápido
          </h2>
          <p className="mt-3 text-sm text-default-600">
            Si no está aquí, nos escribes por WhatsApp y lo resolvemos contigo.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <Item key={f.q} item={f} />
          ))}
        </div>
      </div>
    </section>
  )
}