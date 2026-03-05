'use client'

import React, { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import type { Destination } from '@/app/lib/destinations/types'

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function ScrollStorySection({ destination }: { destination: Destination }) {
  const chapters = destination.scrollStory ?? []
  const [idx, setIdx] = useState(0)

  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.35 })

  const activeIndex = useMemo(() => {
    const n = Math.max(chapters.length, 1)
    return (p: number) => clamp(Math.floor(p * n), 0, n - 1)
  }, [chapters.length])

  useMotionValueEvent(smooth, 'change', (p) => {
    if (!chapters.length) return
    const next = activeIndex(p)
    setIdx((prev) => (prev === next ? prev : next))
  })

  if (!chapters.length) return null
  const current = chapters[idx]

  return (
    <section id="story" className="relative border-t border-divider bg-background">
      {/* fondo sutil (menos “tech glow”) */}
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-100 bg-[radial-gradient(circle_at_18%_10%,rgba(232,76,139,0.10),transparent_45%),radial-gradient(circle_at_82%_26%,rgba(45,212,191,0.07),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.05),transparent_45%)]" />

      {/* -------- MOBILE (Carrusel) -------- */}
      <div className="relative mx-auto max-w-6xl px-5 py-14 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="text-xs tracking-[0.24em] uppercase text-default-500">Scroll story</div>
          <h2 className="mt-2 text-3xl font-semibold text-foreground">Así se siente el viaje</h2>

          {/* hairline signature */}
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-primary/55 via-primary/12 to-transparent" />

          <p className="mt-3 max-w-2xl text-sm text-default-600">
            En móvil lo dejamos como carrusel para que sea cómodo.
          </p>
        </motion.div>

        <div className="mt-8 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {chapters.map((c) => (
            <article
              key={c.id}
              className="min-w-[86%] snap-center overflow-hidden rounded-3xl border border-divider bg-content1 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.22)] dark:shadow-[0_40px_120px_-70px_rgba(0,0,0,0.65)]"
            >
              {/* top hairline */}
              <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-80" />

              <div className="relative aspect-[16/12]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.image ?? ''})` }}
                  aria-label={c.imageAlt ?? c.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
              </div>

              <div className="p-5">
                <div className="text-xs tracking-[0.24em] uppercase text-default-500">
                  {c.kicker ?? 'Capítulo'}
                </div>
                <div className="mt-2 text-lg font-semibold text-foreground">{c.title}</div>
                <div className="mt-2 text-sm text-default-600">{c.desc}</div>

                <div className="mt-4 grid gap-2">
                  {c.bullets.slice(0, 4).map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-default-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* -------- DESKTOP (texto izquierda / media derecha) -------- */}
      <div className="relative hidden lg:block">
        <div ref={ref} className="relative h-[240vh]">
          <div className="sticky top-0">
            <div className="mx-auto max-w-6xl px-5 py-16">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-3xl"
              >
                <div className="text-xs tracking-[0.24em] uppercase text-default-500">Scroll story</div>
                <h2 className="mt-2 text-4xl font-semibold text-foreground">
                  Un capítulo distinto conforme bajas.
                </h2>

                {/* hairline signature */}
                <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary/55 via-primary/12 to-transparent" />

                <p className="mt-4 text-default-600">
                  Texto grande + visual limpio a la derecha (como tu referencia).
                </p>
              </motion.div>

              <div className="mt-12 grid grid-cols-12 gap-10">
                {/* LEFT */}
                <div className="col-span-6">
                  <div className="max-w-xl">
                    <div className="text-xs tracking-[0.24em] uppercase text-default-500">
                      {current.kicker ?? 'Capítulo'} · {idx + 1}/{chapters.length}
                    </div>

                    <h3 className="mt-4 text-5xl font-semibold leading-[1.05] text-foreground">
                      {current.title}
                    </h3>

                    <p className="mt-5 text-base leading-relaxed text-default-600">
                      {current.desc}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {current.bullets.slice(0, 5).map((b) => (
                        <div key={b} className="flex items-start gap-3 text-sm text-default-600">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-default-400" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* stepper luxe */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {chapters.map((c, i) => {
                        const active = i === idx
                        return (
                          <button
                            key={c.id}
                            onClick={() => setIdx(i)}
                            className={cx(
                              'rounded-full border px-3 py-1 text-xs transition',
                              active
                                ? 'border-primary/35 bg-content2 text-foreground shadow-[0_18px_60px_-45px_rgba(232,76,139,0.45)]'
                                : 'border-divider bg-content1 text-default-600 hover:bg-content2'
                            )}
                            aria-label={`Ir a ${c.title}`}
                          >
                            {i + 1}
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-6 text-[11px] text-default-500">
                      Tip: esto luego lo conectamos al wizard para “personalizar” capítulos según estilo de viaje.
                    </div>
                  </div>
                </div>

                {/* RIGHT: media card magazine frame */}
                <div className="col-span-6">
                  <div className="sticky top-24">
                    <div className="relative overflow-hidden rounded-[30px] border border-divider bg-content1 shadow-[0_50px_140px_-80px_rgba(0,0,0,0.35)] dark:shadow-[0_60px_170px_-90px_rgba(0,0,0,0.75)]">
                      {/* top hairline */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-80" />

                      <div className="relative aspect-[16/11] w-full">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={current.id}
                            className="absolute inset-0"
                            initial={{ opacity: 0, y: 8, scale: 1.01 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 1.01 }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                          >
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${current.image ?? ''})` }}
                              aria-label={current.imageAlt ?? current.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/35" />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* caption bar */}
                      <div className="flex items-center justify-between gap-3 p-5">
                        <div className="text-sm font-semibold text-foreground">{current.title}</div>
                        <div className="text-xs text-default-500">{current.kicker ?? `Capítulo ${idx + 1}`}</div>
                      </div>

                      {/* subtle rose glow */}
                      <div className="pointer-events-none absolute -inset-40 opacity-25 dark:opacity-100 bg-[radial-gradient(circle_at_35%_30%,rgba(232,76,139,0.10),transparent_55%)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* lista de capítulos */}
              <div className="mt-12 grid grid-cols-3 gap-3">
                {chapters.map((c, i) => {
                  const active = i === idx
                  return (
                    <button
                      key={c.id}
                      onClick={() => setIdx(i)}
                      className={cx(
                        'rounded-3xl border p-4 text-left transition',
                        'shadow-[0_25px_80px_-60px_rgba(0,0,0,0.18)] dark:shadow-[0_35px_110px_-70px_rgba(0,0,0,0.55)]',
                        active
                          ? 'border-primary/25 bg-content2'
                          : 'border-divider bg-content1 hover:bg-content2'
                      )}
                    >
                      <div className="text-xs tracking-[0.24em] uppercase text-default-500">
                        {c.kicker ?? 'Capítulo'}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-foreground">{c.title}</div>
                      <div className="mt-1 text-xs text-default-600">{c.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}