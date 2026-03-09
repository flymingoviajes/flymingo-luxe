'use client'

import NextLink from 'next/link'
import { Link } from '@heroui/link'
import { Divider } from '@heroui/divider'
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  ShieldCheck,
  FileText,
} from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/flymingoviajes',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/flymingoviajes',
    icon: Facebook,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5218716887385',
    icon: MessageCircle,
  },
]

const quickLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  { label: 'Aviso de privacidad', href: '/aviso-de-privacidad' },
]

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr]">
          {/* Marca */}
          <div className="max-w-md">
            <div className="mb-4">
              <NextLink
                href="/"
                className="inline-block text-2xl font-semibold tracking-[0.18em] uppercase text-white"
              >
                Flymingo Viajes
              </NextLink>
            </div>

            <p className="text-sm leading-7 text-white/70">
              Viajes personalizados, únicos y hechos a tu medida. Diseñamos
              experiencias memorables con atención cercana, asesoría experta y
              un servicio pensado para acompañarte antes, durante y después de tu viaje.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    isExternal
                    aria-label={item.name}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              Explora
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    as={NextLink}
                    href={item.href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              Contacto
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <a
                  href="https://wa.me/5218716887385"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: 871 688 7385
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <span>Tel. 871 688 7385</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <a
                  href="mailto:hola@flymingoviajes.com"
                  className="transition-colors hover:text-white"
                >
                  reservas@flymingoviajes.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <span>Torreón, Coahuila, México</span>
              </li>
            </ul>
          </div>

          {/* Confianza */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              Confianza Flymingo
            </h3>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <div>
                  <p className="text-white/90">RNT</p>
                  <p>0405035a21363</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <div>
                  <p className="text-white/90">Google Reviews</p>
                  <p>4.9 de calificación</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-white/85" />
                <div>
                  <p className="text-white/90">Atención personalizada</p>
                  <p>
                    Acompañamiento antes, durante y después de tu viaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-8 bg-white/10" />

        <div className="flex flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Flymingo Viajes. Todos los derechos reservados.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              as={NextLink}
              href="/terminos-y-condiciones"
              className="text-white/55 transition-colors hover:text-white"
            >
              Términos y condiciones
            </Link>

            <Link
              as={NextLink}
              href="/aviso-de-privacidad"
              className="text-white/55 transition-colors hover:text-white"
            >
              Aviso de privacidad
            </Link>

            <a
              href="https://flymingoviajes.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/55 transition-colors hover:text-white"
            >
              flymingoviajes.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}