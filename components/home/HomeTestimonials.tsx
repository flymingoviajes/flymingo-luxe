export default function HomeTestimonials() {
  return (
    <section className="bg-content2/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Historias reales, viajes irrepetibles</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Quote text="Nos armó una ruta perfecta: disfrutamos muchísimo y cero estrés." />
          <Quote text="Todo se sentía premium, pero sin complicarnos nada." />
          <Quote text="El itinerario fue exactamente nuestro ritmo. 10/10." />
        </div>
      </div>
    </section>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-divider/70 bg-content1 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm text-foreground/80">“{text}”</p>
      <p className="mt-4 text-xs text-foreground/60">Cliente Flymingo</p>
    </div>
  );
}