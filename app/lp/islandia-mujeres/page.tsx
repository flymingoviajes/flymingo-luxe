import type { Metadata } from "next";
import Image from "next/image";
import TrackLink from "@/components/TrackLink";
import DateSelector from "./DateSelector";
import VideoPlayer from "./VideoPlayer";
import LpPixelEvents from "./LpPixelEvents";

export const metadata: Metadata = {
  title: "Islandia para Mujeres 2026 — Flymingo Women",
  description:
    "Viaje a Islandia exclusivo para mujeres. Vuelos, hotel individual, desayunos, tour auroras y más. 3 salidas: oct 2026, nov 2026 y feb 2027. Desde $84,890 MXN.",
  robots: { index: false, follow: false },
};

const WA_GENERIC =
  "https://wa.me/5218716887385?text=Hola%20Flymingo,%20vi%20el%20anuncio%20de%20Islandia%20para%20Mujeres%20y%20quiero%20informes.";

const incluye = [
  {
    titulo: "Vuelos ida y vuelta",
    texto: "Vuelos internacionales desde México incluidos en el precio.",
  },
  {
    titulo: "Hospedaje habitación individual",
    texto: "7 noches en hotel. Habitación propia, sin roomie obligatoria.",
  },
  {
    titulo: "Desayunos",
    texto: "Desayuno incluido cada mañana durante los 7 días.",
  },
  {
    titulo: "Tour auroras boreales — con garantía",
    texto: "Si la primera noche no las vemos, salimos otra vez. Sin costo extra.",
  },
  {
    titulo: "Tour Costa Sur + Cueva de Hielo",
    texto: "Cascadas, playas negras y cueva de hielo en un mismo día épico.",
  },
  {
    titulo: "Tour Círculo de Oro",
    texto: "Geysir, Gullfoss y el cráter Kerið. La ruta más icónica de Islandia.",
  },
];

const razones = [
  {
    titulo: "Viajas con quien te entiende",
    texto:
      "No hay que explicar nada. El grupo tiene la misma energía, el mismo ritmo, las mismas ganas de vivirlo todo.",
  },
  {
    titulo: "Itinerario pensado para ustedes",
    texto:
      "No es un paquete genérico. Cada salida está diseñada para que vivan Islandia de una forma que tenga sentido para un grupo de mujeres.",
  },
  {
    titulo: "Flymingo va con ustedes",
    texto:
      "Acompañamiento real, no un número de emergencias. Si algo pasa, estamos. Si algo se puede mejorar en el momento, lo hacemos.",
  },
];

export default function IslandiaMujeresLP() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <LpPixelEvents />

      {/* ── Mini header ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-brand-border)",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.04em",
            color: "var(--color-brand-ink)",
          }}
        >
          Flymingo
          <span style={{ color: "var(--color-brand-accent)" }}>.</span>
        </span>

        <TrackLink
          href={WA_GENERIC}
          className="btn btn-accent"
          style={{ fontSize: "0.78rem", padding: "0.4rem 1rem" }}
          label="LP Islandia — Header CTA"
        >
          Quiero informes
        </TrackLink>
      </header>

      <main style={{ paddingTop: "56px" }}>

        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            minHeight: "92svh",
            display: "flex",
            alignItems: "flex-end",
            background: "var(--color-brand-ink)",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/women/islandia.jpg"
              alt="Islandia — auroras boreales y glaciares"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,8,18,0.95) 0%, rgba(10,8,18,0.5) 50%, rgba(10,8,18,0.15) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div
            className="px-5 sm:px-8 pb-10 sm:pb-16"
            style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}
          >
            {/* Urgency badge */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  background: "var(--color-brand-neon)",
                  color: "white",
                  borderRadius: "999px",
                  padding: "0.3rem 0.9rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <span
                  className="animate-pulse"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Solo mujeres · 1 lugar disponible nov 2026
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 10vw, 9rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "white",
              }}
            >
              <span style={{ display: "block", fontWeight: 200 }}>Islandia</span>
              <span style={{ display: "block", fontWeight: 800 }}>para</span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--color-brand-accent)",
                }}
              >
                mujeres.
              </span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(0.92rem, 2.5vw, 1.1rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "34rem",
                marginTop: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              8 días con un grupo de mujeres que entienden la misma energía.
              Auroras boreales, glaciares y aguas termales. Sin itinerarios
              rígidos, sin compromisos innecesarios.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "2.25rem",
              }}
            >
              <TrackLink
                href={WA_GENERIC}
                className="btn btn-accent"
                label="LP Islandia — Hero CTA"
              >
                Pedir informes por WhatsApp
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <a
                href="/docs/ISLANDIA-x-MUJERES-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost-white"
              >
                Ver brochure
              </a>
            </div>

            {/* Price anchor — responsive grid on mobile */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.15)",
                paddingTop: "1.25rem",
              }}
              className="grid grid-cols-3 gap-3 sm:flex sm:gap-8 sm:items-start"
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Desde
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.35rem, 4vw, 2.4rem)",
                    letterSpacing: "-0.04em",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  $84,890
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.2rem",
                  }}
                >
                  MXN / persona
                </p>
              </div>

              <div
                className="hidden sm:block"
                style={{ width: "1px", background: "rgba(255,255,255,0.1)", alignSelf: "stretch" }}
              />

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Apartado
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.35rem, 4vw, 2.4rem)",
                    letterSpacing: "-0.04em",
                    color: "var(--color-brand-accent)",
                    lineHeight: 1,
                  }}
                >
                  $10,000
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.2rem",
                  }}
                >
                  MXN · asegura tu lugar
                </p>
              </div>

              <div
                className="hidden sm:block"
                style={{ width: "1px", background: "rgba(255,255,255,0.1)", alignSelf: "stretch" }}
              />

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Duración
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.35rem, 4vw, 2.4rem)",
                    letterSpacing: "-0.04em",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  8 días
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "0.2rem",
                  }}
                >
                  3 salidas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Date selector ── */}
        <section
          className="px-5 sm:px-8 py-14 sm:py-20"
          style={{ background: "var(--color-brand-surface)" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="text-eyebrow-accent mb-3">Elige tu salida</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                marginBottom: "2.5rem",
              }}
            >
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
                Tres fechas.
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 200,
                  fontStyle: "italic",
                  color: "var(--color-brand-ink)",
                  opacity: 0.3,
                }}
              >
                Una sola tuya.
              </span>
            </h2>
            <DateSelector />
          </div>
        </section>

        {/* ── Qué incluye ── */}
        <section
          className="px-5 sm:px-8 py-14 sm:py-20"
          style={{ background: "white" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">

              {/* Left: headline + no-incluye note */}
              <div className="lg:sticky lg:top-24">
                <p className="text-eyebrow-accent mb-3">Incluido en el precio</p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.88,
                  }}
                >
                  <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
                    Todo lo que
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontWeight: 800,
                      fontStyle: "italic",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    importa,
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontWeight: 200,
                      color: "var(--color-brand-ink)",
                      opacity: 0.28,
                    }}
                  >
                    incluido.
                  </span>
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                    color: "var(--color-brand-ink)",
                    opacity: 0.6,
                    marginTop: "1.25rem",
                    marginBottom: "1.75rem",
                    maxWidth: "30rem",
                  }}
                >
                  Vuelos, hotel individual, desayunos y los tres tours más
                  importantes del viaje ya están dentro del precio. Lo demás
                  se puede agregar como opcional.
                </p>

                {/* No incluye box */}
                <div
                  style={{
                    borderRadius: "16px",
                    border: "1px solid var(--color-brand-border)",
                    background: "var(--color-brand-surface)",
                    padding: "1.25rem 1.25rem",
                  }}
                >
                  <p className="text-eyebrow-accent mb-3">No incluye</p>
                  <div className="space-y-2">
                    {["Comidas y cenas", "Actividades adicionales", "Seguro de viaje (muy recomendado)", "Tours y experiencias extras"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span
                          style={{
                            height: "5px",
                            width: "5px",
                            borderRadius: "50%",
                            background: "var(--color-brand-border)",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.83rem",
                            color: "var(--color-brand-ink)",
                            opacity: 0.45,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: includes list */}
              <div className="space-y-0">
                {incluye.map((item, i) => (
                  <div
                    key={item.titulo}
                    className="flex items-start gap-4 py-5"
                    style={{
                      borderBottom:
                        i < incluye.length - 1
                          ? "1px solid var(--color-brand-border)"
                          : "none",
                    }}
                  >
                    {/* Check icon */}
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "rgba(14,182,120,0.1)",
                        border: "1px solid rgba(14,182,120,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-brand-green)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </span>

                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.97rem",
                          letterSpacing: "-0.025em",
                          color: "var(--color-brand-ink)",
                          lineHeight: 1.2,
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.titulo}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          fontSize: "0.85rem",
                          lineHeight: 1.65,
                          color: "var(--color-brand-ink)",
                          opacity: 0.55,
                        }}
                      >
                        {item.texto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section
          className="px-5 sm:px-8 py-14 sm:py-20"
          style={{ background: "var(--color-brand-surface)" }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="text-eyebrow-accent mb-3">El viaje en video</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                marginBottom: "2rem",
              }}
            >
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
                Míralo antes
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 200,
                  fontStyle: "italic",
                  color: "var(--color-brand-ink)",
                  opacity: 0.3,
                }}
              >
                de decidir.
              </span>
            </h2>
            <VideoPlayer tiktokId="7649469248775015687" />
          </div>
        </section>

        {/* ── Por qué mujeres ── */}
        <section
          className="px-5 sm:px-8 py-14 sm:py-20"
          style={{ background: "white" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="text-eyebrow-accent mb-3">Flymingo Women</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                marginBottom: "3rem",
              }}
            >
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
                Por qué un grupo
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 200,
                  fontStyle: "italic",
                  color: "var(--color-brand-ink)",
                  opacity: 0.3,
                }}
              >
                solo de mujeres
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--color-brand-accent)",
                }}
              >
                lo cambia todo.
              </span>
            </h2>

            <div
              className="grid grid-cols-1 lg:grid-cols-3"
              style={{ borderTop: "1px solid var(--color-brand-border)" }}
            >
              {razones.map((r, i) => (
                <div
                  key={r.titulo}
                  className={`py-7 sm:py-8 lg:py-10 ${i < razones.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""}`}
                  style={{
                    paddingLeft: "0",
                    paddingRight: "0",
                  }}
                  // On desktop, add horizontal padding inside the columns
                >
                  <div className={`${i === 0 ? "lg:pr-8" : i === razones.length - 1 ? "lg:pl-8" : "lg:px-8"}`}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        letterSpacing: "-0.025em",
                        color: "var(--color-brand-ink)",
                        lineHeight: 1.2,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {r.titulo}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: "0.88rem",
                        lineHeight: 1.75,
                        color: "var(--color-brand-ink)",
                        opacity: 0.6,
                      }}
                    >
                      {r.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── editorial dark full-bleed */}
        <section
          className="px-5 sm:px-8 py-20 sm:py-28"
          style={{
            position: "relative",
            background: "var(--color-brand-ink)",
            overflow: "hidden",
          }}
        >
          {/* Decorative large text behind */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-0.05em",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(14rem, 35vw, 32rem)",
              letterSpacing: "-0.06em",
              lineHeight: 1,
              color: "rgba(255,255,255,0.028)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            IS
          </span>

          <div
            style={{
              position: "relative",
              maxWidth: "680px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-brand-accent)",
                marginBottom: "1.75rem",
              }}
            >
              Flymingo Women · Islandia 2026 – 2027
            </p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                marginBottom: "1.75rem",
              }}
            >
              <span style={{ display: "block", fontWeight: 200, color: "rgba(255,255,255,0.35)" }}>
                El único lugar
              </span>
              <span style={{ display: "block", fontWeight: 800, color: "white" }}>
                que queda
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--color-brand-accent)",
                }}
              >
                es el tuyo.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                marginBottom: "2.25rem",
                maxWidth: "34rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Noviembre tiene 1 lugar. Octubre y febrero siguen abiertos.
              Escríbenos, te compartimos todo y elegimos juntas la fecha que
              te quede.
            </p>

            <TrackLink
              href={WA_GENERIC}
              className="btn btn-accent"
              style={{ fontSize: "0.97rem", padding: "0.9rem 2rem" }}
              label="LP Islandia — Final CTA"
            >
              Quiero informes por WhatsApp
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </TrackLink>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.28)",
                marginTop: "1.1rem",
                letterSpacing: "0.02em",
              }}
            >
              Sin compromiso · Respuesta en minutos · Apartado desde $10,000 MXN
            </p>

            {/* Divider */}
            <div
              style={{
                width: "1px",
                height: "3rem",
                background: "rgba(255,255,255,0.1)",
                margin: "2.5rem auto",
              }}
            />

            {/* Three quick stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "1.5rem 0",
              }}
            >
              {[
                { val: "8", label: "días en Islandia" },
                { val: "$84,890", label: "MXN / persona" },
                { val: "3", label: "salidas" },
              ].map((s, i, arr) => (
                <div
                  key={s.val}
                  style={{
                    textAlign: "center",
                    borderRight:
                      i < arr.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                    padding: "0 0.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
                      letterSpacing: "-0.04em",
                      color: "white",
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.35)",
                      marginTop: "0.3rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LP Footer ── */}
        <footer
          style={{
            background: "#06040e",
            padding: "1.5rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Flymingo<span style={{ color: "var(--color-brand-accent)" }}>.</span>
          </span>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Flymingo Viajes · Torreón, Coahuila · +52 871 688 7385
          </p>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.22)",
              textDecoration: "none",
            }}
          >
            Volver al sitio
          </a>
        </footer>
      </main>
    </div>
  );
}
