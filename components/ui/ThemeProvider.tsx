'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

type LandingTheme = 'dark' | 'light'

type Ctx = {
  theme: LandingTheme
  toggleTheme: () => void
  setTheme: (t: LandingTheme) => void
}

const ThemeCtx = createContext<Ctx | null>(null)

export function useLandingTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useLandingTheme must be used inside LandingThemeProvider')
  return ctx
}

export default function LandingThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<LandingTheme>('dark')

  useEffect(() => {
    // persist por landing
    const saved = window.localStorage.getItem('flymingo_landing_theme') as LandingTheme | null
    if (saved === 'light' || saved === 'dark') setTheme(saved)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('flymingo_landing_theme', theme)
    // Este atributo lo usaremos para estilos tipo: [data-landing-theme="light"] ...
    document.documentElement.setAttribute('data-landing-theme', theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  )

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}