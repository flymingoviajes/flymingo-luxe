export default function FlymingoEurotripStudioMockup() {
  const steps = [
    { id: '01', title: 'Estilo', active: true },
    { id: '02', title: 'Ruta', active: false },
    { id: '03', title: 'Hoteles', active: false },
    { id: '04', title: 'Presupuesto', active: false },
    { id: '05', title: 'Contacto', active: false },
  ]

  const travelStyles = [
    'Romántico',
    'Girls Trip',
    'Foodie',
    'Arte & historia',
    'Luxe relajado',
    'Luna de miel',
  ]

  const routes = [
    {
      name: 'Clásico soñado',
      days: '10–12 días',
      cities: ['París', 'Lucerna', 'Venecia', 'Roma'],
    },
    {
      name: 'Iconic capitals',
      days: '8–10 días',
      cities: ['Londres', 'París', 'Ámsterdam'],
    },
    {
      name: 'Euro summer chic',
      days: '12–14 días',
      cities: ['Barcelona', 'Niza', 'Florencia', 'Costa Amalfitana'],
    },
  ]

  const selectedCities = ['París', 'Lucerna', 'Venecia', 'Roma']
  const experiences = [
    'Trenes panorámicos',
    'Tours en español',
    'Hoteles boutique',
    'Traslados privados',
    'Experiencias gastronómicas',
    'Seguro de viaje',
  ]

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,123,172,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(88,164,255,0.18),transparent_28%),linear-gradient(180deg,#08101d_0%,#0b1424_40%,#07111f_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs tracking-[0.26em] text-white/80 uppercase backdrop-blur">
              Flymingo Eurotrip Studio
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Europa, <span className="text-white/60">diseñada</span> a tu manera.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              Una experiencia interactiva para que tu clienta arme su Eurotrip ideal con ciudades,
              estilo, ritmo, hoteles y presupuesto, mientras tu equipo recibe un brief comercial mucho
              más completo y listo para cotizar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02]">
                Empezar mi Eurotrip
              </button>
              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                Ver rutas inspiración
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: '100%', label: 'A la medida' },
                { value: 'Multi-país', label: 'Rutas combinadas' },
                { value: 'Premium', label: 'Experiencia Flymingo' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                  <div className="text-2xl font-semibold tracking-[-0.03em]">{item.value}</div>
                  <div className="mt-1 text-sm text-white/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-white/12 bg-white/8 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/50">Preview experiencia</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Diseña tu Eurotrip</h2>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Mockup funcional
                </div>
              </div>

              <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`min-w-[118px] rounded-2xl border px-4 py-3 ${
                      step.active
                        ? 'border-white/20 bg-white text-slate-950'
                        : 'border-white/10 bg-white/5 text-white/70'
                    }`}
                  >
                    <div className="text-[10px] tracking-[0.22em] uppercase">{step.id}</div>
                    <div className="mt-2 text-sm font-medium">{step.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-[#0c1729]/80 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Paso 1</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">¿Qué estilo de viaje buscas?</h3>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55 md:block">
                    2 minutos aprox.
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {travelStyles.map((style, index) => (
                    <button
                      key={style}
                      className={`rounded-2xl border p-4 text-left transition ${
                        index === 0
                          ? 'border-pink-300/30 bg-gradient-to-br from-pink-300/20 to-white/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/8'
                      }`}
                    >
                      <div className="text-sm font-medium">{style}</div>
                      <div className="mt-1 text-xs text-white/55">
                        Curado para crear una ruta alineada a esta vibra.
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-sm font-medium">Siguiente: arma tu ruta ideal</div>
                    <div className="text-xs text-white/50">Ciudades, orden, noches y ritmo del viaje.</div>
                  </div>
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Rutas inspiración</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Plantillas editables para empezar rápido.
            </h2>
          </div>
          <button className="hidden rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm text-white/80 md:block">
            Ver todas
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {routes.map((route, index) => (
            <div
              key={route.name}
              className={`group rounded-[30px] border p-6 transition ${
                index === 0
                  ? 'border-pink-300/20 bg-[linear-gradient(180deg,rgba(255,140,190,0.16),rgba(255,255,255,0.04))]'
                  : 'border-white/10 bg-white/5 hover:bg-white/7'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/75">
                  {route.days}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-white/35">Editable</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{route.name}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {route.cities.map((city) => (
                  <span key={city} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/80">
                    {city}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="text-sm text-white/55">La clienta puede modificar ciudades, noches y estilo.</div>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition group-hover:scale-[1.02]">
                  Usar ruta
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">Constructor de ruta</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Así se vería la experiencia principal.</h2>
              </div>
              <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs text-sky-100">
                Interfaz sugerida
              </div>
            </div>

            <div className="mt-7 rounded-[28px] border border-white/10 bg-[#0c1729] p-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900">París</div>
                <div className="h-px flex-1 min-w-[28px] bg-gradient-to-r from-white/35 to-transparent" />
                <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/85">Lucerna</div>
                <div className="h-px flex-1 min-w-[28px] bg-gradient-to-r from-white/35 to-transparent" />
                <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/85">Venecia</div>
                <div className="h-px flex-1 min-w-[28px] bg-gradient-to-r from-white/35 to-transparent" />
                <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/85">Roma</div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Ritmo de viaje</div>
                  <div className="mt-3 flex gap-2">
                    {['Relax', 'Balanceado', 'Dinámico'].map((pace, index) => (
                      <button
                        key={pace}
                        className={`rounded-full px-4 py-2 text-sm ${
                          index === 1 ? 'bg-white text-slate-900' : 'border border-white/10 bg-white/5 text-white/75'
                        }`}
                      >
                        {pace}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Tipo de traslado</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Trenes', 'Mixto', 'Más eficiente'].map((item, index) => (
                      <span
                        key={item}
                        className={`rounded-full px-4 py-2 text-sm ${
                          index === 0 ? 'bg-white text-slate-900' : 'border border-white/10 bg-white/5 text-white/75'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Nivel de hospedaje</div>
                  <div className="mt-3 space-y-2 text-sm text-white/70">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                      <span>Boutique con encanto</span>
                      <span className="text-pink-200">Seleccionado</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                      <span>Premium comfort</span>
                      <span className="text-white/40">Disponible</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2">
                      <span>Luxe signature</span>
                      <span className="text-white/40">Disponible</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Experiencias clave</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experiences.map((item, index) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-2 text-sm ${
                          index < 3
                            ? 'border border-emerald-300/20 bg-emerald-300/10 text-emerald-100'
                            : 'border border-white/10 bg-white/5 text-white/70'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 text-sm text-amber-50/90">
                Recomendación inteligente: para 10 a 12 días, esta combinación funciona excelente y mantiene un ritmo premium sin saturar el viaje.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[34px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">Resumen en vivo</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Tu Eurotrip Flymingo</h2>

              <div className="mt-6 space-y-3">
                {[
                  ['Ruta', selectedCities.join(' · ')],
                  ['Duración', '10–12 días'],
                  ['Estilo', 'Romántico'],
                  ['Ritmo', 'Balanceado'],
                  ['Hospedaje', 'Boutique con encanto'],
                  ['Presupuesto', '$65,000 – $90,000 MXN'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#0c1729] px-4 py-3">
                    <span className="text-sm text-white/48">{label}</span>
                    <span className="max-w-[62%] text-right text-sm font-medium text-white/90">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-pink-300/15 bg-gradient-to-br from-pink-300/14 to-white/5 p-4">
                <div className="text-sm font-medium">Lead score estimado: alto</div>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Interés claro, ruta definida, perfil premium y apertura a experiencias adicionales.
                </p>
              </div>

              <button className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900">
                Quiero mi propuesta personalizada
              </button>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">Qué recibe ventas</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Brief comercial listo para trabajar.</h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'Ciudades elegidas',
                  'Orden de ruta',
                  'Estilo de viaje',
                  'Presupuesto estimado',
                  'Fechas tentativas',
                  'Interés en MSI',
                  'Experiencias deseadas',
                  'Nivel de hotel',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#0c1729] px-4 py-3 text-sm text-white/76">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
