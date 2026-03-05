// app/lib/destinations/islandia.ts
import { Destination } from './types'

export const islandia: Destination = {
  slug: 'islandia',
  name: 'Islandia',

  gallery: [
    { src: '/destinos/islandia/01.jpg', caption: 'Aurora night · Reykjavík' },
    { src: '/destinos/islandia/02.jpg', caption: 'Black sand beach · Vík' },
    { src: '/destinos/islandia/03.jpg', caption: 'Black sand beach · Vík' },
    { src: '/destinos/islandia/04.jpg', caption: 'Black sand beach · Vík' },
  ],

  hero: {
    title: 'Islandia, como nunca te la imaginaste.',
    subtitle:
      'Una landing tipo Apple: visual, premium y muy Flymingo. Diseña tu viaje y ve el precio “desde” en vivo.',
    videoUrl: '/videos/islandia-hero.mp4',
    posterUrl: '/img/islandia/poster.jpg',
    priceFrom: { amount: 84890, currency: 'MXN' },
  },

  experiences: [
    {
      id: 'primera-vez',
      kicker: 'Primera vez',
      title: 'Primera vez · Reykjavík + Tours icónicos',
      days: '7 días',
      desc:
        'El viaje perfecto para conocer Islandia por primera vez: vuelos, hotel céntrico y los tours que sí o sí tienes que vivir.',
      priceFrom: { amount: 84890, currency: 'MXN' },
      bg: 'from-sky-500/25 via-teal-400/10 to-indigo-500/15',
      image: '/destinos/islandia/experiencias/primera-vez.jpg',
      highlights: [
        'Vuelos internacionales',
        'Hospedaje céntrico (o similar)',
        'Traslados (o similar)',
        'Tour de Auroras Boreales (o similar)',
        'Tour Golden Circle (o similar)',
        'Tour Costa Sur (o similar)',
      ],
    },
    {
      id: 'ring-road',
      kicker: 'Ruta completa',
      title: 'Ring Road · Vuelta por toda la isla',
      days: '8–10 días',
      desc:
        'Para quien quiere lo más completo: roadtrip épico por Islandia, con paisajes que cambian cada día.',
      priceFrom: { amount: 94890, currency: 'MXN' },
      image: '/destinos/islandia/experiencias/ring-road.jpg',
      highlights: [
        'Vuelta completa por Islandia',
        'Naturaleza brutal + pueblos y spots icónicos',
        'Más variedad de paisajes (según ruta/temporada)',
      ],
    },
    {
      id: 'primera-vez-domo',
      kicker: 'Upgrade WOW',
      title: 'Primera vez + 1 noche en Domo',
      days: '7 días',
      desc:
        'La misma ruta de primera vez, pero con una noche especial en domo para vivir Islandia en modo “una vez en la vida”.',
      priceFrom: { amount: 94890, currency: 'MXN' },
      image: '/destinos/islandia/experiencias/primera-vez-domo.jpg',
      highlights: [
        'Todo lo de “Primera vez”',
        '1 noche en domo (o similar)',
        'Experiencia premium para fotos y auroras (según clima)',
      ],
    },
    {
      id: 'solo-mujeres',
      kicker: 'Grupo Flymingo',
      title: 'Islandia Solo Mujeres · Fechas establecidas',
      days: 'Fechas específicas',
      desc:
        'Viaje en grupo de mujeres, con ruta cuidada, acompañamiento y vibe Flymingo: divertido, seguro y ultra memorable.',
      priceFrom: { amount: 84890, currency: 'MXN' },
      image: '/destinos/islandia/experiencias/solo-mujeres.jpg',
      highlights: [
        'Fechas establecidas',
        'Grupo solo mujeres',
        'Experiencia curada + acompañamiento Flymingo',
      ],
    },
  ],

  scrollStory: [
    {
      id: 'cap-0',
      kicker: 'El viaje “Primera vez”',
      title: 'Qué es y por qué es el más vendido',
      desc:
        'Es la ruta ideal para conocer Islandia sin complicarte: vuelos + hotel céntrico + traslados + los tours más icónicos.',
      bullets: [
        'Diseñado para primera vez',
        'Base en Reykjavík (céntrico, walkable)',
        'Tours clave incluidos (o similar)',
      ],
      image: '/destinos/islandia/story/01-primera-vez.jpg',
      imageAlt: 'Ruta primera vez en Islandia',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-1',
      kicker: 'Llegada a Islandia',
      title: 'Reykjavík: tu base nórdica',
      desc:
        'Llegas, te instalas en zona céntrica y esa primera tarde te cae el veinte: esto sí es otro planeta (pero en modo comfy).',
      bullets: ['Hotel céntrico (o similar)', 'Centro caminable', 'Primera noche suave y rica'],
      image: '/destinos/islandia/story/02-llegada-reykjavik.jpg',
      imageAlt: 'Centro de Reykjavík',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-2',
      kicker: 'La magia nocturna',
      title: 'Tour de Auroras Boreales',
      desc:
        'Sales con guía a cazar auroras según pronóstico. No es “ver si hay”: es ir a donde hay más probabilidad (clima manda).',
      bullets: ['Guía + ruta flexible', 'Mejor ventana según pronóstico', 'Experiencia icónica'],
      image: '/destinos/islandia/story/03-auroras.jpg',
      imageAlt: 'Auroras boreales en Islandia',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-3',
      kicker: 'El día que entiendes Islandia',
      title: 'Golden Circle: power trip',
      desc:
        'Géiseres, cascadas y una vibra épica. El clásico que se siente como “primer golpe de Islandia” (y sí, pega fuerte).',
      bullets: ['Thingvellir', 'Geysir', 'Gullfoss'],
      image: '/destinos/islandia/story/04-golden-circle.jpg',
      imageAlt: 'Golden Circle en Islandia',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-4',
      kicker: 'Postales reales',
      title: 'Costa Sur: la Islandia de película',
      desc:
        'Playas negras, cascadas y paisajes que parecen render. Aquí salen las fotos más “no mms, ¿dónde estás?”',
      bullets: ['Cascadas icónicas', 'Vík + playa negra', 'Paisajes volcánicos'],
      image: '/destinos/islandia/story/05-costa-sur.jpg',
      imageAlt: 'Costa Sur de Islandia',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-5',
      kicker: 'Imperdibles opcionales',
      title: 'Motos de nieve + Cuevas de hielo',
      desc:
        'Si quieres subirlo a modo WOW: aventura en hielo. Son experiencias opcionales (según temporada), pero de las que se quedan grabadas.',
      bullets: [
        'Motos de nieve (según operación/temporada)',
        'Cuevas de hielo (según temporada)',
        'Nivel “bucket list”',
      ],
      image: '/destinos/islandia/story/06-imperdibles.jpg',
      imageAlt: 'Motos de nieve y cuevas de hielo',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
  ],

  includes: {
    title: 'Qué incluye / Qué no incluye',
    subtitle: 'Todo lo esencial + lo que normalmente se te olvida (para que no haya sorpresas).',
    includes: [
      'Hospedaje (o similar)',
      'Traslados principales (o similar)',
      'Tours base según ruta (o similar)',
    ],
    excludes: ['Propinas', 'Gastos personales', 'Actividades opcionales no mencionadas'],
  },

  tours: [
    {
      id: 'aurora-hunt',
      title: 'Aurora Hunt (cacería de auroras)',
      short: 'Salida nocturna con guía + spots pro según pronóstico.',
      duration: '3–5 hrs',
      intensity: 'Relax',
      season: 'Sep–Abr',
      badge: 'Top',
      image: '/destinos/islandia/tours/aurora-hunt.jpg',
      highlights: ['Guía experto', 'Ruta flexible', 'Fotos pro tip'],
    },
    {
      id: 'ice-cave',
      title: 'Cueva de hielo + glaciar',
      short: 'Experiencia wow dentro de un glaciar (según temporada).',
      duration: '4–6 hrs',
      intensity: 'Medio',
      season: 'Nov–Mar',
      badge: 'WOW',
      image: '/destinos/islandia/tours/ice-cave.jpg',
      highlights: ['Equipo incluido', 'Seguridad', 'Paisajes brutales'],
    },
    {
      id: 'blue-lagoon',
      title: 'Blue Lagoon (entrada + traslado)',
      short: 'Spa icónico para cerrar el viaje como reina.',
      duration: '2–4 hrs',
      intensity: 'Relax',
      badge: 'Premium',
      image: '/destinos/islandia/tours/blue-lagoon.jpg',
      highlights: ['Traslado', 'Timing ideal', 'Upgrade opcional'],
    },
  ],

  faq: [
    { q: '¿Necesito visa?', a: 'Depende de tu nacionalidad. Te asesoramos en 1 minuto.' },
    { q: '¿El precio es fijo?', a: 'No. Cambia por fechas, vuelos y disponibilidad.' },
  ],
}