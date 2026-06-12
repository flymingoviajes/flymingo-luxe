import { Destination } from './types'

export const islandia: Destination = {
  slug: 'islandia',
  name: 'Islandia',

  gallery: [
    { src: '/destinos/islandia/01.jpg', caption: 'Aurora boreal · Reykjavík' },
    { src: '/destinos/islandia/02.jpg', caption: 'Playa negra · Vík' },
    { src: '/destinos/islandia/03.jpg', caption: 'Cascada Skógafoss · Costa Sur' },
    { src: '/destinos/islandia/04.jpg', caption: 'Cueva de hielo · Glaciar Vatnajökull' },
  ],

  hero: {
    title: 'Islandia, como nunca te la imaginaste.',
    subtitle:
      'Auroras boreales, glaciares y paisajes que parecen de otro planeta — diseñado a tu ritmo por Flymingo. Sin groupos genéricos, sin itinerarios de catálogo.',
    videoUrl: '/videos/islandia-hero.mp4',
    posterUrl: '/img/islandia/poster.jpg',
    priceFrom: { amount: 84890, currency: 'MXN' },
  },

  experiences: [
    {
      id: 'primera-vez',
      kicker: 'Más vendido',
      title: 'Primera vez en Islandia',
      days: '7 días / 6 noches',
      desc:
        'La ruta perfecta para conocer Islandia sin complicarte: base en Reykjavík, auroras, Golden Circle y Costa Sur. Lo esencial bien hecho.',
      priceFrom: { amount: 84890, currency: 'MXN' },
      bg: 'from-sky-500/25 via-teal-400/10 to-indigo-500/15',
      image: '/images/destinos/islandia/experiencias/primera-vez.jpg',
      highlights: [
        'Vuelos internacionales incluidos',
        'Hospedaje céntrico en Reykjavík',
        'Tour de Auroras Boreales',
        'Tour Golden Circle',
        'Tour Costa Sur + Cueva de Hielo',
        'Desayunos incluidos',
      ],
    },
    {
      id: 'ring-road',
      kicker: 'Para aventureras',
      title: 'Ring Road — vuelta completa',
      days: '8–10 días',
      desc:
        'El roadtrip más épico de Europa: rodeas toda la isla con paisajes que cambian cada hora. Para quien quiere ver Islandia a fondo.',
      priceFrom: { amount: 98900, currency: 'MXN' },
      image: '/images/destinos/islandia/experiencias/ring-road.jpg',
      highlights: [
        'Vuelta completa por la isla',
        'Fiordos del Este + Norte salvaje',
        'Cascadas, volcanes y lagunas glaciares',
        'Más libertad de ruta y ritmo',
      ],
    },
    {
      id: 'primera-vez-domo',
      kicker: 'Upgrade WOW',
      title: 'Primera vez + noche en domo',
      days: '7 días / 6 noches',
      desc:
        'Todo lo de la ruta clásica, más una noche en domo con vista directa al cielo — la experiencia Islandia "una vez en la vida".',
      priceFrom: { amount: 96900, currency: 'MXN' },
      image: '/images/destinos/islandia/experiencias/primera-vez-domo.jpg',
      highlights: [
        'Todo lo de "Primera vez"',
        '1 noche en domo panorámico',
        'Auroras desde la cama (según clima)',
        'Experiencia premium y muy fotogénica',
      ],
    },
    {
      id: 'solo-mujeres',
      kicker: 'Grupo Flymingo',
      title: 'Islandia Solo Mujeres',
      days: 'Fechas establecidas · Oct / Nov 2026',
      desc:
        'Viaje en grupo de mujeres con ruta cuidada, acompañamiento Flymingo y una vibra increíble: divertida, segura y completamente memorable.',
      priceFrom: { amount: 84890, currency: 'MXN' },
      image: '/images/destinos/islandia/experiencias/solo-mujeres.jpg',
      highlights: [
        'Oct 24–31 · Nov 14–21 · Feb 13–20',
        'Grupo exclusivo de mujeres',
        'Acompañamiento Flymingo 24/7',
        'Habitación individual incluida',
      ],
    },
  ],

  scrollStory: [
    {
      id: 'cap-0',
      kicker: 'El más pedido',
      title: 'Por qué "Primera vez" es la ruta más vendida',
      desc:
        'Reykjavík como base, los tours más icónicos incluidos y un ritmo que te permite disfrutar sin correr. Sin regresar al mismo lugar dos veces.',
      bullets: [
        'Base céntrica en Reykjavík',
        'Auroras + Golden Circle + Costa Sur',
        'Ritmo pensado, no agotador',
      ],
      image: '/destinos/islandia/story/01-primera-vez.jpg',
      imageAlt: 'Reykjavík desde arriba',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-1',
      kicker: 'Día 1',
      title: 'Aterrizas en otro planeta',
      desc:
        'Llegas a Keflavík, te instalas en zona céntrica de Reykjavík y esa primera tarde ya entiendes por qué Islandia cambia la perspectiva. El aire huele diferente.',
      bullets: ['Traslado aeropuerto incluido', 'Hotel en centro caminable', 'Primera noche tranquila'],
      image: '/destinos/islandia/story/02-llegada-reykjavik.jpg',
      imageAlt: 'Centro de Reykjavík de noche',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-2',
      kicker: 'La noche que no olvidas',
      title: 'La cacería de auroras boreales',
      desc:
        'Con guía experto, salís a la oscuridad a buscar el fenómeno. La ruta cambia según el pronóstico de actividad solar. No es suerte — es estrategia.',
      bullets: ['Guía con ruta flexible por pronóstico', 'Spots lejos de la contaminación lumínica', 'Sep–Abr temporada óptima'],
      image: '/destinos/islandia/story/03-auroras.jpg',
      imageAlt: 'Auroras boreales verdes en Islandia',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-3',
      kicker: 'El día más brutal',
      title: 'Golden Circle: géiseres, cascadas y la placa tectónica',
      desc:
        'Thingvellir — donde se separan dos continentes. Geysir — el más activo de Europa. Gullfoss — una cascada que hace temblar el suelo. Todo en un día.',
      bullets: ['Thingvellir (Patrimonio UNESCO)', 'Géiser Strokkur cada 6 minutos', 'Cascada Gullfoss doble nivel'],
      image: '/destinos/islandia/story/04-golden-circle.jpg',
      imageAlt: 'Géiser Strokkur en erupción',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-4',
      kicker: 'Las fotos de tu vida',
      title: 'Costa Sur: playas negras y cascadas de película',
      desc:
        'Seljalandsfoss (la que se puede rodear), Skógafoss, la playa negra de Reynisfjara y el pueblo de Vík. Cada parada es una postal.',
      bullets: ['Seljalandsfoss + Skógafoss', 'Playa negra de Reynisfjara', 'Basalto hexagonal en Vík'],
      image: '/destinos/islandia/story/05-costa-sur.jpg',
      imageAlt: 'Playa de arena negra con formaciones de basalto',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-5',
      kicker: 'El upgrade que cambia todo',
      title: 'Cueva de hielo: dentro del glaciar Vatnajökull',
      desc:
        'El glaciar más grande de Europa por dentro. Azul profundo, silencio absoluto y la sensación de estar en el interior de la Tierra. Solo disponible nov–mar.',
      bullets: ['Equipo de seguridad incluido', 'Guía especializado en glaciares', 'Disponible nov–mar según condiciones'],
      image: '/destinos/islandia/story/06-imperdibles.jpg',
      imageAlt: 'Interior de cueva de hielo azul',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
  ],

  includes: {
    title: 'Qué incluye tu viaje',
    subtitle: 'Sin sorpresas. Todo lo esencial incluido desde el primer día.',
    includes: [
      'Vuelos internacionales ida y vuelta',
      'Hospedaje en habitación individual (6 noches)',
      'Desayunos incluidos todos los días',
      'Tour de Auroras Boreales con garantía de salida',
      'Tour Costa Sur + Cueva de Hielo',
      'Tour Círculo de Oro (Golden Circle)',
      'Traslados aeropuerto',
      'Asesoría y acompañamiento Flymingo 24/7',
    ],
    excludes: [
      'Vuelos nacionales desde tu ciudad (cotizamos juntos)',
      'Comidas y cenas (amplia variedad en Reykjavík)',
      'Propinas (no obligatorias en Islandia)',
      'Gastos personales y compras',
      'Actividades opcionales no incluidas en tu ruta',
      'Seguro de viaje (recomendado, te asesoramos)',
    ],
  },

  tours: [
    {
      id: 'aurora-hunt',
      title: 'Cacería de Auroras Boreales',
      short: 'Salida nocturna con guía experto. Ruta flexible según pronóstico solar.',
      duration: '3–5 hrs',
      intensity: 'Relax',
      season: 'Sep–Abr',
      badge: 'Incluido',
      image: '/destinos/islandia/tours/aurora-hunt.jpg',
      highlights: ['Guía experto con ruta flexible', 'Spots óptimos por pronóstico', 'Garantía de salida'],
    },
    {
      id: 'golden-circle',
      title: 'Círculo de Oro (Golden Circle)',
      short: 'Thingvellir, Geysir y Gullfoss. El día más clásico de Islandia.',
      duration: 'Día completo',
      intensity: 'Relax',
      badge: 'Incluido',
      image: '/destinos/islandia/story/04-golden-circle.jpg',
      highlights: ['Thingvellir UNESCO', 'Géiser Strokkur', 'Cascada Gullfoss'],
    },
    {
      id: 'south-coast',
      title: 'Costa Sur + Cueva de Hielo',
      short: 'Playas negras, cascadas y el glaciar Vatnajökull por dentro.',
      duration: 'Día completo',
      intensity: 'Medio',
      season: 'Nov–Mar (cueva)',
      badge: 'Incluido',
      image: '/destinos/islandia/story/05-costa-sur.jpg',
      highlights: ['Seljalandsfoss + Skógafoss', 'Playa negra Reynisfjara', 'Cueva de hielo (nov–mar)'],
    },
    {
      id: 'blue-lagoon',
      title: 'Blue Lagoon',
      short: 'El spa geotérmico más famoso del mundo. Perfecto para cerrar el viaje.',
      duration: '2–4 hrs',
      intensity: 'Relax',
      badge: 'Opcional',
      image: '/destinos/islandia/tours/blue-lagoon.jpg',
      highlights: ['Aguas termales a 39°C', 'Traslado incluido', 'Entrada y acceso al spa'],
    },
    {
      id: 'snowmobiles',
      title: 'Motos de nieve en glaciar',
      short: 'Aventura sobre el glaciar Langjökull. Adrenalina pura con paisajes brutales.',
      duration: '2–3 hrs',
      intensity: 'Alto',
      season: 'Oct–Abr',
      badge: 'Opcional',
      image: '/destinos/islandia/tours/ice-cave.jpg',
      highlights: ['Glaciar Langjökull', 'Equipo de seguridad incluido', 'Conductor o acompañante'],
    },
  ],

  faq: [
    {
      q: '¿Necesito visa para entrar a Islandia?',
      a: 'Islandia es parte del Espacio Schengen. Si tienes pasaporte mexicano, puedes entrar sin visa hasta 90 días. Si viajas vía EUA necesitas visa americana o ESTA. Te orientamos según tu ruta de vuelo.',
    },
    {
      q: '¿El precio es fijo o puede cambiar?',
      a: 'El precio "desde" es una base. El precio final varía según tus fechas exactas, disponibilidad de vuelos y tipo de habitación. Una vez que cotizamos juntos, te damos precio en firme.',
    },
    {
      q: '¿Las auroras están garantizadas?',
      a: 'La actividad aurora depende del clima y la actividad solar. Lo que garantizamos es la salida con guía experto a los mejores spots según el pronóstico de esa noche. La temporada óptima es septiembre–abril.',
    },
    {
      q: '¿Cuándo es la mejor época para ir?',
      a: 'Para auroras: sep–abr. Para días largos y verde: jun–ago (sol de medianoche). Para cuevas de hielo: nov–mar. Oct–nov es el punto dulce: hay auroras, los precios son más accesibles y el paisaje es espectacular.',
    },
    {
      q: '¿La habitación es individual o compartida?',
      a: 'Individual. El paquete incluye habitación para uso exclusivo tuyo (o de tu pareja si van de a dos). Nadie comparte cuarto con desconocidos.',
    },
    {
      q: '¿Puedo viajar sola siendo mujer?',
      a: 'Absolutamente. Islandia es uno de los países más seguros del mundo y con menor brecha de género. También tenemos el viaje grupal "Islandia Solo Mujeres" con fechas en octubre, noviembre y febrero.',
    },
    {
      q: '¿Cómo funciona el proceso de reserva?',
      a: 'Platicas con nosotros por WhatsApp, elegimos tu ruta y fechas, y apartamos con $10,000 MXN. El resto se puede pagar en mensualidades hasta antes de tu salida. Sin complicaciones.',
    },
    {
      q: '¿Qué pasa si no hay auroras la noche del tour?',
      a: 'El tour sale siempre (sin lluvia extrema). El guía busca el mejor spot posible. Si el clima impide la salida totalmente, se intenta reagendar o se abona como crédito. Es la única variable que la naturaleza controla.',
    },
  ],
}
