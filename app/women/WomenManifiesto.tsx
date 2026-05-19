import { womenManifestoData } from "./women.data"

export default function WomenManifesto() {
  return (
    <section id="manifiesto" className="relative bg-white overflow-hidden">

      {/* Número decorativo de fondo */}
      <div
        className="absolute -top-6 -left-4 select-none pointer-events-none leading-none text-[20rem] font-black text-rose-50"
        style={{ fontFamily: "var(--font-display, 'Clash Display', sans-serif)" }}
        aria-hidden
      >
        ✦
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Columna izquierda — etiqueta y línea */}
          <div className="lg:pt-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-rose-400" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-rose-400">
                {womenManifestoData.eyebrow}
              </span>
            </div>

            <h2
              className="text-[#1a0f16] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4vw, 3.25rem)"
              }}
            >
              {womenManifestoData.title}
            </h2>
          </div>

          {/* Columna derecha — texto */}
          <div className="space-y-6 lg:pt-3">
            <p className="font-sans text-base leading-8 text-[#5c3d52] md:text-[1.05rem] font-normal">
              {womenManifestoData.text1}
            </p>
            <p className="font-sans text-base leading-8 text-[#5c3d52] md:text-[1.05rem] font-normal">
              {womenManifestoData.text2}
            </p>

            {/* Línea de cierre decorativa */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-rose-100" />
              <span
                className="text-rose-200 text-2xl select-none"
                style={{ fontFamily: "var(--font-display, 'Clash Display', sans-serif)" }}
                aria-hidden
              >
                ✦
              </span>
              <div className="h-px flex-1 bg-rose-100" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
