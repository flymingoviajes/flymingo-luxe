import { womenTripsData } from "./women.data"

export default function WomenTripsPreview() {
  return (
    <section id="viajes" className="bg-[#fff8fc]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">
            Salidas destacadas
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#4c1f3d] md:text-5xl">
            Experiencias pensadas para crecer con la comunidad
          </h2>
          <p className="mt-5 text-base leading-8 text-[#744c67]">
            Hoy comenzamos con Islandia y Japón, pero Flymingo Women está diseñado para seguir creciendo con nuevas rutas, nuevas historias y nuevas formas de viajar entre mujeres.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {womenTripsData.map((trip) => (
            <article
              key={trip.slug}
              className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_20px_80px_rgba(236,72,153,0.08)]"
            >
              <div className="aspect-[16/10] bg-[linear-gradient(135deg,#fbcfe8_0%,#fdf2f8_48%,#ffffff_100%)]" />

              <div className="p-7">
                <span className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                  {trip.status}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-[#4c1f3d]">
                  {trip.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#744c67]">
                  {trip.subtitle}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-pink-100 pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-pink-400">
                      Temporada
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#4c1f3d]">
                      {trip.season}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-pink-400">
                      Referencia
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#4c1f3d]">
                      {trip.price}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}