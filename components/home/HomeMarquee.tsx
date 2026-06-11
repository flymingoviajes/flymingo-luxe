const ROW1 = ["Islandia", "Japón", "Europa", "Maldivas", "Nueva York", "Grecia", "Tokio", "París", "Bali", "Marruecos"];
const ROW2 = ["Bodas Destino", "Luna de Miel", "Grupos de Amigas", "Rutas a Medida", "Todo Incluido Luxe", "Flymingo Women", "Aventura", "Relax Total"];

const DOT = (
  <span
    aria-hidden="true"
    style={{
      display: "inline-block",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "var(--color-brand-accent)",
      opacity: 0.45,
      flexShrink: 0,
      marginLeft: "2rem",
      marginRight: "2rem",
    }}
  />
);

function Track({ items, cls }: { items: string[]; cls: string }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div className={cls} style={{ display: "flex", alignItems: "center", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
                letterSpacing: "0.01em",
                color: "var(--color-brand-ink)",
                opacity: 0.55,
              }}
            >
              {item}
            </span>
            {DOT}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomeMarquee() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--color-brand-border)",
        borderBottom: "1px solid var(--color-brand-border)",
        background: "white",
        padding: "0.85rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
        overflow: "hidden",
      }}
    >
      <Track items={ROW1} cls="animate-marquee" />
      <Track items={ROW2} cls="animate-marquee-reverse" />
    </div>
  );
}
