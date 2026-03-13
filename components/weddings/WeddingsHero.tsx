"use client";

import Link from "next/link";

const highlights = [
  {
    title: "Xcaret Weddings",
    text: "Para parejas que sueñan con una boda destino espectacular, con una experiencia premium para ustedes y sus invitados.",
  },
  {
    title: "AVA Cancún",
    text: "Para quienes imaginan una boda moderna, elegante y visualmente hermosa desde el primer momento.",
  },
  {
    title: "Palace / Moon Palace",
    text: "Para parejas que quieren una boda bien organizada, con grandes beneficios para el grupo y más facilidad para sus invitados.",
  },
];

export default function WeddingsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e9dfd2]">
      <div className="absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_18%_10%,rgba(244,196,201,0.26),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(231,214,190,0.34),transparent_28%),radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.8),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ead7d1] bg-white/75 px-4 py-2 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d7a6a3]" />
              <span className="text-sm text-[#8b6f67]">Flymingo Weddings</span>
            </div>

            <h1 className="mt-6 max-w-5xl text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[#5a4a42] sm:text-5xl md:text-6xl lg:text-7xl">
              Bodas destino
              <span className="block text-[#c78c87]">
                curadas con intención.
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[#7e6f67] sm:text-lg sm:leading-8 md:text-xl">
              En Flymingo Weddings te ayudamos a encontrar una boda hermosa,
              bien pensada y mucho más clara para ustedes y sus invitados.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8b7b72] sm:text-base sm:leading-8 md:text-lg">
              Empiecen por descubrir qué estilo de boda imaginan, qué destino
              les atrae más y cuál de nuestras colecciones va mejor con lo que
              quieren vivir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/weddings/designer"
                className="w-full rounded-full bg-[#c78c87] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_14px_40px_rgba(199,140,135,0.22)] transition hover:scale-[1.01] sm:w-auto sm:text-base"
              >
                Diseñar mi boda
              </Link>

              <Link
                href="/weddings/designer"
                className="w-full rounded-full border border-[#e5d8cd] bg-white/80 px-7 py-4 text-center text-sm font-medium text-[#6d5d54] shadow-sm backdrop-blur transition hover:bg-white sm:w-auto sm:text-base"
              >
                Empezar experiencia
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-[#eadfd4] bg-white/85 p-4 shadow-sm backdrop-blur-xl sm:rounded-[1.6rem] sm:p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#b39a8d]">
                  Colección destacada
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#5c4d45]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#7b6c64]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}