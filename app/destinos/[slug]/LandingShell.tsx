// LandingShell.tsx
'use client'
import React from 'react'

export default function LandingShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg)', color: 'var(--fg)' }}
    >
      {children}
    </div>
  )
}