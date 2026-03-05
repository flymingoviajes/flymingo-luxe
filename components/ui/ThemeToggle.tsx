'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // ✅ Forzamos la clase .dark en <html> siempre que cambie el tema
  useEffect(() => {
    if (!mounted) return
    const current = theme === 'system' ? resolvedTheme : theme
    document.documentElement.classList.toggle('dark', current === 'dark')
  }, [theme, resolvedTheme, mounted])

  if (!mounted) return <div className="h-9 w-[92px]" />

  const current = theme === 'system' ? resolvedTheme : theme
  const isDark = current === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
      aria-label="Cambiar tema"
    >
      <span className="text-base">{isDark ? '🌙' : '☀️'}</span>
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}