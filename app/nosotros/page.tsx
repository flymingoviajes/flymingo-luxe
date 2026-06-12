import type { Metadata } from "next";
import Link from "next/link";
import TrackLink from "@/components/TrackLink";

export const metadata: Metadata = {
  title: "Nosotros",
  alternates: { canonical: "https://flymingoviajes.com/nosotros" },
  description:
    "Conoce a Flymingo Viajes — la agencia que diseña itinerarios únicos a tu medida desde 2022. Equipo de expertos en Torreón, siempre a un WhatsApp de distancia.",
};

const WA = "https://wa.me/5218716887385";

// ─── Data ─────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2022",
    title: "Nacimos en línea",
    desc: "Sin oficina, con mucha pasión y una idea clara: hacer viajes completamente personalizados. Lo que empezó digital creció rápido.",
  },
  {
    year: "2023",
    title: "Llegamos a Monterrey",
    desc: "El crecimiento nos llevó a servir a viajeros del norte del país. Misma filosofía, más alcance.",
  },
  {
    year: "2024",
    title: "Torreón, nuestra casa",
    desc: "Abrimos nuestra primera agencia física en Torreón, Coahuila. Una oficina donde puedes venir, sentarte y diseñar tu viaje con nosotros.",
  },
  {
    year: "2026",
    title: "Nació Flymingo Weddings",
    desc: "Porque una boda merece la misma atención que el mejor viaje de tu vida. División especializada en bodas destino.",
  },
];

const ACCOMPANIMENT = [
  {
    icon: "✈",
    title: "Check de vuelos",
    desc: "Verificamos tu vuelo antes de que salgas y te avisamos de cualquier cambio.",
  },
  {
    icon: "🏨",
    title: "Hospedaje confirmado",
    desc: "Confirmación de hotel, habitación y check-in anticipado cuando es posible.",
  },
  {
    icon: "🚗",
    title: "Traslados coordinados",
    desc: "Desde el aeropuerto hasta cada destino, todo coordinado sin sorpresas.",
  },
  {
    icon: "🗺",
    title: "Itinerario día por día",
    desc: "Cada mañana sabes qué sigue. Sin improvisar, sin perder tiempo.",
  },
  {
    icon: "💬",
    title: "Tips 24 horas",
    desc: "¿Dónde comer? ¿Qué llevar? ¿Cómo llegar? Siempre a un mensaje.",
  },
  {
    icon: "🛟",
    title: "Asistencia en tiempo real",
    desc: "Si algo sale mal — y a veces pasa — estamos ahí para resolverlo. Tú sigues tu viaje.",
  },
];

const TEAM = [
  { name: "Sergio", role: "Co-fundador", initials: "S", founder: true },
  { name: "Alexia", role: "Co-fundadora", initials: "A", founder: true },
  { name: "Bárbara", role: "Agente experta", initials: "B", founder: false },
  { name: "María", role: "Agente experta", initials: "M", founder: false },
  { name: "Marysol", role: "Agente experta", initials: "My", founder: false },
];

const CREDENTIALS = [
  { code: "SAT", label: "Registro tributario activo" },
  { code: "SECTUR", label: "Secretaría de Turismo" },
  { code: "PROFECO", label: "Protección al consumidor" },
];

// ─── Page ─────────────────────────────────────────────────────

export default function NosotrosPage() {
  return (
    <main>
      <Hero />
      <Difference />
      <Accompaniment />
      <Historia />
      <Equipo />
      <Confianza />
      <Innovacion />
      <CtaFinal />
    </main>
  );
}

// ─── Hero ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ background: "var(--color-brand-canvas)", borderBottom: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-28 lg:px-12 lg:pt-44 lg:pb-40">

        <p className="text-eyebrow-accent mb-12">Nosotros</p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.2rem, 8vw, 7.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.3 }}>La agencia que</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>no te deja</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>solo.</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pb-3">
            <p className="text-sm font-light leading-loose" style={{ color: "var(--color-brand-dim)" }}>
              Somos Flymingo Viajes — una agencia que cree que el mejor viaje de tu vida no debería parecerse al de nadie más. Desde 2022 diseñamos itinerarios únicos, a tu ritmo, con acompañamiento real antes y durante cada viaje.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackLink href={WA} className="btn btn-accent" label="Nosotros Hero — Hablar con nosotros">
                Hablar con nosotros
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
            </div>
            <div className="flex gap-8">
              {[["2022", "Fundación"], ["200+", "Viajeros"], ["4.9★", "Reviews"]].map(([v, l]) => (
                <div key={l} className="flex flex-col gap-0.5">
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.03em", color: "var(--color-brand-ink)", lineHeight: 1 }}>{v}</span>
                  <span className="text-caption">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Difference ───────────────────────────────────────────────

function Difference() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-eyebrow-accent mb-10">Lo que nos hace diferentes</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>No vendemos</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>paquetes.</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3, marginTop: "0.1em" }}>Vendemos tu viaje.</span>
            </div>
            <p className="mt-10 text-sm font-light leading-loose max-w-xs" style={{ color: "var(--color-brand-dim)" }}>
              Cada itinerario que diseñamos es único. Parte de ti — de tus fechas, tu estilo, tu presupuesto, lo que quieres vivir. Y termina cuando llegas a casa.
            </p>
          </div>

          <div>
            {[
              {
                num: "01",
                title: "A tu ritmo, no al de un grupo",
                desc: "No hay paquetes armados, no hay horarios fijos de otro. Tú decides el ritmo: intenso, tranquilo o balanceado. El itinerario se adapta a ti.",
              },
              {
                num: "02",
                title: "Estamos contigo en todo momento",
                desc: "Antes de viajar, durante el viaje y al regresar. Si algo cambia, si algo falla, si tienes una duda a las 2 am — ahí estamos.",
              },
              {
                num: "03",
                title: "Un WhatsApp de distancia",
                desc: "No hay sistema de tickets, no hay formularios. Un mensaje directo, una persona real que conoce tu viaje y te responde.",
              },
              {
                num: "04",
                title: "Contrato en cada viaje",
                desc: "Todo lo que te prometemos queda en papel. Tú tienes la certeza de que vamos a cumplir lo que acordamos.",
              },
            ].map((item, i) => (
              <div key={item.num}>
                <hr className="divider" />
                <div className="grid grid-cols-[3.5rem_1fr] gap-6 py-10">
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--color-brand-accent)", paddingTop: "0.15rem" }}>
                    {item.num}
                  </span>
                  <div>
                    <h4 style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>{item.title}</h4>
                    <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <hr className="divider" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Accompaniment ────────────────────────────────────────────

function Accompaniment() {
  return (
    <section style={{ background: "var(--color-brand-surface)" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">

        <p className="text-eyebrow-accent mb-10">Acompañamiento real</p>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }} className="mb-20">
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Desde el primer mensaje</span>
          <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>hasta que llegas a casa.</span>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 border-t border-brand-border">
          {ACCOMPANIMENT.map((item) => (
            <div
              key={item.title}
              className="border-b border-r border-brand-border"
              style={{ padding: "2rem" }}
            >
              <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "1rem", lineHeight: 1 }} aria-hidden="true">{item.icon}</span>
              <h4 style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.6rem" }}>{item.title}</h4>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex items-start gap-4 rounded-2xl p-6"
          style={{ background: "rgba(255,45,120,0.04)", border: "1px solid rgba(255,45,120,0.12)" }}
        >
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-brand-neon)", flexShrink: 0, marginTop: "0.4rem", boxShadow: "0 0 8px rgba(255,45,120,0.5)" }} />
          <p className="text-sm font-light leading-loose" style={{ color: "var(--color-brand-dim)" }}>
            <strong style={{ color: "var(--color-brand-ink)", fontWeight: 700 }}>Si algo sale mal, ahí estamos.</strong>{" "}
            Vuelos cancelados, hoteles sobrevendidos, tours que cambian — pasa. Pero cuando estás con Flymingo, no lo resuelves tú solo.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Historia ─────────────────────────────────────────────────

function Historia() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">

        <p className="text-eyebrow-accent mb-10">Nuestra historia</p>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }} className="mb-20">
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>De una pantalla</span>
          <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>a tu ciudad.</span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:divide-x md:divide-brand-border">
          {TIMELINE.map((item) => (
            <div key={item.year} className="flex flex-col gap-5 py-10 md:py-0 md:px-10 first:pl-0 last:pr-0 border-b border-brand-border md:border-b-0 last:border-b-0">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.04em", color: "var(--color-brand-accent)", lineHeight: 1 }}>
                {item.year}
              </span>
              <div>
                <h4 style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.5rem" }}>{item.title}</h4>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Equipo ───────────────────────────────────────────────────

function Equipo() {
  return (
    <section style={{ background: "var(--color-brand-canvas)" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">

        <p className="text-eyebrow-accent mb-10">El equipo</p>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }} className="mb-20">
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Las personas detrás</span>
          <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>de tu viaje.</span>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-start gap-4">
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  maxWidth: "160px",
                  background: member.founder ? "var(--gradient-accent)" : "var(--color-brand-surface)",
                  border: member.founder ? "none" : "1px solid var(--color-brand-border)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.03em",
                  color: member.founder ? "white" : "var(--color-brand-accent)",
                }}
              >
                {member.initials}
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", lineHeight: 1.1 }}>
                  {member.name}
                  {member.founder && (
                    <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-brand-accent)", marginLeft: "0.4rem", verticalAlign: "middle" }} />
                  )}
                </p>
                <p className="text-caption mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-caption max-w-md">
          Punto rosa = fundador. Todos nuestros agentes son expertos en los destinos que venden — ninguno recomienda un lugar que no conoce.
        </p>
      </div>
    </section>
  );
}

// ─── Confianza ────────────────────────────────────────────────

function Confianza() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">

          <div>
            <p className="text-eyebrow-accent mb-10">Viaja con confianza</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>En regla.</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>En serio.</span>
            </div>
            <p className="mt-10 text-sm font-light leading-loose max-w-xs" style={{ color: "var(--color-brand-dim)" }}>
              Puedes verificarnos. Estamos registrados ante las instancias que regulan el turismo en México. Nada está fuera de orden.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.code}
                  className="flex flex-col gap-2 items-center text-center rounded-2xl py-6 px-4"
                  style={{ border: "1px solid var(--color-brand-border)", background: "var(--color-brand-surface)" }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)" }}>
                    {c.code}
                  </span>
                  <span className="text-caption text-center leading-tight">{c.label}</span>
                </div>
              ))}
            </div>

            {/* Contract feature — la más importante */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "var(--color-brand-ink)", position: "relative", overflow: "hidden" }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 80% 110%, rgba(244,120,152,0.15) 0%, transparent 60%)" }} />
              <div className="relative">
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.3rem, 2vw, 1.6rem)", letterSpacing: "-0.025em", color: "white", display: "block", lineHeight: 1.1 }}>
                  Contrato en cada viaje.
                </span>
                <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Todo lo que acordamos queda por escrito. Te comprometemos en papel lo que te prometemos de palabra. Sin letra chica.
                </p>
                <div className="mt-5 flex gap-4 text-xs font-light" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-sans)", letterSpacing: "0.05em" }}>
                  <span>✓ Vuelos</span>
                  <span>✓ Hoteles</span>
                  <span>✓ Tours</span>
                  <span>✓ Traslados</span>
                </div>
              </div>
            </div>

            {/* Invoice feature */}
            <div
              className="flex items-center gap-4 rounded-2xl p-5"
              style={{ border: "1px solid var(--color-brand-border)", background: "var(--color-brand-surface)" }}
            >
              <span style={{ fontSize: "1.5rem" }} aria-hidden="true">🧾</span>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.015em", color: "var(--color-brand-ink)" }}>
                  ¿Necesitas factura?
                </p>
                <p className="text-caption mt-0.5">La hacemos. Estamos al corriente con el SAT.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Innovación ───────────────────────────────────────────────

function Innovacion() {
  return (
    <section style={{ background: "var(--color-brand-surface)", borderTop: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-eyebrow-accent mb-10">Siempre evolucionando</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Tecnología al</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>servicio tuyo.</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { label: "IA en itinerarios", desc: "Usamos inteligencia artificial para diseñar rutas más precisas, más rápidas y mejor ajustadas a lo que buscas." },
              { label: "Cotizaciones al instante", desc: "Gracias a nuestros sistemas actualizados, podemos darte opciones reales en minutos, no en días." },
              { label: "Destinos en tendencia", desc: "Siempre monitoreamos qué destinos están emergiendo para ofrecerte opciones antes de que se pongan caros o saturados." },
            ].map((item, i) => (
              <div key={item.label}>
                {i > 0 && <hr className="divider" />}
                <div className="py-6">
                  <h4 style={{ fontSize: "1.05rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{item.label}</h4>
                  <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────

function CtaFinal() {
  return (
    <section style={{ background: "white", borderTop: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-44 text-center">

        <p className="text-eyebrow-accent mb-10">¿Empezamos?</p>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.3 }}>Tu viaje</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>empieza con</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>un mensaje.</span>
        </div>

        <p className="mt-10 mx-auto max-w-sm text-sm font-light leading-loose" style={{ color: "var(--color-brand-dim)" }}>
          Cuéntanos adónde quieres ir. Nosotros hacemos el resto.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <TrackLink href={WA} className="btn btn-accent" label="Nosotros CTA — Escribirnos">
            Escribirnos por WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </TrackLink>
          <Link href="/destinos" className="btn btn-outline">Ver destinos</Link>
        </div>

        <p className="mt-7 text-caption">Sin compromiso · Respuesta en menos de 24 h · Siempre hay alguien</p>
      </div>
    </section>
  );
}
