'use client'
import React from 'react'

export default function LandingShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>
}
