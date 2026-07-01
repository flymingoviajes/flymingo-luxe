import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de Flymingo Viajes conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: { canonical: "https://flymingoviajes.com/aviso-de-privacidad" },
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "1 de julio de 2026";

export default function AvisoPrivacidadPage() {
  return (
    <main style={{ background: "var(--color-brand-canvas)" }}>
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8 lg:py-36">

        {/* Header */}
        <p className="text-eyebrow-accent mb-8">Legal</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "var(--color-brand-ink)",
            marginBottom: "0.75rem",
          }}
        >
          Aviso de Privacidad
        </h1>
        <p className="text-caption mb-16">Última actualización: {LAST_UPDATED}</p>

        <div
          className="prose-legal"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            lineHeight: 1.85,
            color: "var(--color-brand-dim)",
          }}
        >
          <Section title="1. Responsable del tratamiento">
            <p>
              <strong style={{ color: "var(--color-brand-ink)" }}>Flymingo Viajes</strong> (en adelante "Flymingo"),
              con domicilio en Las Quintas 338, Torreón, Coahuila, México, es el responsable del tratamiento
              de sus datos personales conforme a lo dispuesto por la{" "}
              <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</em> (LFPDPPP).
            </p>
            <p>
              Contacto de privacidad:{" "}
              <a href="mailto:reservas@flymingoviajes.com" style={{ color: "var(--color-brand-accent)" }}>
                reservas@flymingoviajes.com
              </a>
            </p>
          </Section>

          <Section title="2. Datos personales que recabamos">
            <p>Flymingo puede recabar las siguientes categorías de datos personales:</p>
            <ul>
              <li>Datos de identificación: nombre, apellidos.</li>
              <li>Datos de contacto: número de teléfono/WhatsApp, correo electrónico.</li>
              <li>Datos de preferencias de viaje: destinos de interés, fechas, número de viajeros, presupuesto.</li>
              <li>Datos de navegación: cookies, dirección IP, páginas visitadas (a través de herramientas de analítica como Google Analytics, Meta Pixel y Microsoft Clarity).</li>
            </ul>
            <p>No recabamos datos personales sensibles (salud, biometría, ideología, etc.).</p>
          </Section>

          <Section title="3. Finalidades del tratamiento">
            <p>Sus datos personales serán utilizados para las siguientes finalidades <strong style={{ color: "var(--color-brand-ink)" }}>necesarias</strong>:</p>
            <ul>
              <li>Responder a solicitudes de cotización e información de viajes.</li>
              <li>Diseñar y confirmar itinerarios personalizados.</li>
              <li>Gestionar reservas y pagos con proveedores turísticos.</li>
              <li>Brindar atención al cliente antes, durante y después del viaje.</li>
              <li>Cumplir con obligaciones legales y contractuales.</li>
            </ul>
            <p>
              De manera <strong style={{ color: "var(--color-brand-ink)" }}>secundaria</strong> (puede oponerse
              sin que ello afecte la prestación del servicio):
            </p>
            <ul>
              <li>Envío de información sobre promociones, nuevos destinos o viajes grupales.</li>
              <li>Medición del desempeño de campañas publicitarias (Google Ads, Meta Ads).</li>
              <li>Análisis de comportamiento en el sitio web para mejora de experiencia.</li>
            </ul>
          </Section>

          <Section title="4. Transferencia de datos">
            <p>
              Flymingo podrá compartir sus datos con proveedores de servicios turísticos (aerolíneas, hoteles,
              operadores) exclusivamente para la prestación del servicio contratado. Dichos terceros actúan como
              encargados del tratamiento y están sujetos a obligaciones de confidencialidad.
            </p>
            <p>
              Sus datos de navegación son procesados por Google LLC (Analytics, Ads), Meta Platforms Inc.
              (Pixel) y Microsoft Corporation (Clarity) con fines de análisis y publicidad. Estas transferencias
              se realizan en términos de sus propias políticas de privacidad.
            </p>
            <p>
              No vendemos, rentamos ni cedemos sus datos personales a terceros con fines comerciales propios.
            </p>
          </Section>

          <Section title="5. Derechos ARCO">
            <p>
              Usted tiene derecho a <strong style={{ color: "var(--color-brand-ink)" }}>Acceder, Rectificar,
              Cancelar u Oponerse</strong> (derechos ARCO) al tratamiento de sus datos personales, así como
              a revocar el consentimiento otorgado y limitar el uso o divulgación de sus datos.
            </p>
            <p>
              Para ejercer estos derechos, envíe un correo a{" "}
              <a href="mailto:reservas@flymingoviajes.com" style={{ color: "var(--color-brand-accent)" }}>
                reservas@flymingoviajes.com
              </a>{" "}
              con el asunto "Derechos ARCO", indicando su nombre completo, el derecho que desea ejercer y
              los datos a los que hace referencia. Daremos respuesta en un plazo máximo de 20 días hábiles.
            </p>
          </Section>

          <Section title="6. Cookies y tecnologías de rastreo">
            <p>
              Nuestro sitio web utiliza cookies y píxeles de seguimiento para mejorar la experiencia del usuario
              y medir el desempeño de campañas publicitarias. Las herramientas que utilizamos incluyen:
            </p>
            <ul>
              <li><strong style={{ color: "var(--color-brand-ink)" }}>Google Analytics 4</strong> — Análisis de tráfico y comportamiento.</li>
              <li><strong style={{ color: "var(--color-brand-ink)" }}>Google Ads</strong> — Medición de conversiones publicitarias.</li>
              <li><strong style={{ color: "var(--color-brand-ink)" }}>Meta Pixel</strong> — Medición de campañas en Facebook e Instagram.</li>
              <li><strong style={{ color: "var(--color-brand-ink)" }}>Microsoft Clarity</strong> — Grabación de sesiones y mapas de calor.</li>
              <li><strong style={{ color: "var(--color-brand-ink)" }}>Google Tag Manager</strong> — Gestión de etiquetas de seguimiento.</li>
            </ul>
            <p>
              Puede deshabilitar las cookies desde la configuración de su navegador, aunque esto puede
              afectar la funcionalidad del sitio.
            </p>
          </Section>

          <Section title="7. Cambios al aviso de privacidad">
            <p>
              Flymingo se reserva el derecho de modificar este aviso de privacidad en cualquier momento.
              Los cambios serán publicados en esta misma página con la fecha de última actualización.
              Le recomendamos consultarlo periódicamente.
            </p>
          </Section>

          <Section title="8. Autoridad competente">
            <p>
              Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede
              acudir al Instituto Nacional de Transparencia, Acceso a la Información y Protección de
              Datos Personales (INAI) en{" "}
              <a href="https://www.inai.org.mx" target="_blank" rel="noreferrer" style={{ color: "var(--color-brand-accent)" }}>
                www.inai.org.mx
              </a>.
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--color-brand-border)" }}>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50"
            style={{ color: "var(--color-brand-dim)" }}
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.05rem",
          letterSpacing: "-0.02em",
          color: "var(--color-brand-ink)",
          marginBottom: "0.85rem",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}
