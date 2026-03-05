'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Card({
  title,
  items,
  variant,
}: {
  title: string
  items: string[]
  variant: 'include' | 'exclude'
}) {
  const isInclude = variant === 'include'

  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider bg-content1 p-6">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%)]" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span
            className={cx(
              'inline-flex h-8 w-8 items-center justify-center rounded-2xl border text-sm',
              isInclude
                ? 'border-divider bg-content2 text-foreground'
                : 'border-divider bg-content2 text-default-600'
            )}
          >
            {isInclude ? '✓' : '—'}
          </span>

          <div className="text-sm font-semibold text-foreground">{title}</div>
        </div>

        <div className="mt-5 grid gap-3">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-3 text-sm text-default-600">
              <span
                className={cx(
                  'mt-2 h-1.5 w-1.5 rounded-full',
                  isInclude ? 'bg-default-400' : 'bg-default-300'
                )}
              />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function IncludesExcludesSection({ destination }: { destination: Destination }) {
  const block = destination.includes
  if (!block) return null

  const includes = block.includes ?? []
  const excludes = block.excludes ?? []

  if (!includes.length && !excludes.length) return null

  return (
    <section className="relative border-t border-divider bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.07),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="text-xs tracking-[0.24em] uppercase text-default-500">
            {block.title ?? 'Qué incluye'}
          </div>

          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            {block.title ?? 'Qué incluye / Qué no incluye'}
          </h2>

          {block.subtitle ? (
            <p className="mt-3 max-w-2xl text-sm text-default-600">{block.subtitle}</p>
          ) : null}
        </motion.div>

        {/* Mobile carousel */}
        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {includes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="min-w-[86%] snap-center"
            >
              <Card title="Qué incluye" items={includes} variant="include" />
            </motion.div>
          )}

          {excludes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.04 }}
              className="min-w-[86%] snap-center"
            >
              <Card title="Qué no incluye" items={excludes} variant="exclude" />
            </motion.div>
          )}
        </div>

        {/* Desktop grid */}
        <div className="mt-8 hidden grid-cols-2 gap-4 lg:grid">
          {includes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <Card title="Qué incluye" items={includes} variant="include" />
            </motion.div>
          )}

          {excludes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            >
              <Card title="Qué no incluye" items={excludes} variant="exclude" />
            </motion.div>
          )}
        </div>

        <div className="mt-6 text-[11px] text-default-500">
          *Todo puede ajustarse según tu estilo, fechas y presupuesto.
        </div>
      </div>
    </section>
  )
}