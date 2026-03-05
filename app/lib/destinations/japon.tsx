// app/lib/destinations/japon.ts
import { Destination } from './types'

export const japon: Destination = {
  slug: 'japon',
  name: 'Japón',

  // 📸 Pon estas fotos en: public/destinos/japon/01.jpg ... 04.jpg
  gallery: [
    { src: '/destinos/japon/01.jpg', caption: 'Shibuya nights · Tokio' },
    { src: '/destinos/japon/02.jpg', caption: 'Torii gates · Kioto' },
    { src: '/destinos/japon/03.jpg', caption: 'Dotonbori · Osaka' },
    { src: '/destinos/japon/04.jpg', caption: 'Winter vibes · Alpes Japoneses' },
  ],

  hero: {
    title: 'Japón, en modo Flymingo.',
    subtitle:
      'Tokio, Kioto y Osaka… pero con el twist correcto: rutas curadas, experiencias imperdibles y upgrades que sí valen la pena.',
    videoUrl: '/videos/japon-hero.mp4',
    posterUrl: '/img/japon/poster.jpg',
    priceFrom: { amount: 90890, currency: 'MXN' }, // ✅ el más bajo de tus rutas
  },

  // ✅ 5 rutas reales
  // 📸 Imágenes en: public/destinos/japon/experiencias/*.jpg
  experiences: [
    {
      id: 'japon-estandar',
      kicker: 'La clásica',
      title: 'Japón Estándar · Tokio, Kioto y Osaka',
      days: '10–12 días',
      desc:
        'La ruta que lo tiene todo: energía de Tokio, templos y tradición en Kioto, y comida épica en Osaka. Perfecta para primera vez.',
      priceFrom: { amount: 95890, currency: 'MXN' },
      bg: 'from-sky-500/20 via-teal-400/10 to-indigo-500/15',
      image: '/destinos/japon/experiencias/japon-estandar.jpg',
      highlights: [
        'Tokio (barrios icónicos + day trips)',
        'Kioto (templos, torii, calles tradicionales)',
        'Osaka (gastronomía + vibes nocturnas)',
      ],
    },
    {
      id: 'japon-familiar',
      kicker: 'Familia',
      title: 'Japón Familiar · Disney + Universal',
      days: '9–11 días',
      desc:
        'Para ir con niños (o con tu niña interior): parques top, logística fácil y días balanceados para que se disfrute sin correr.',
      priceFrom: { amount: 90890, currency: 'MXN' },
      image: '/destinos/japon/experiencias/japon-familiar.jpg',
      highlights: [
        'Tokyo Disney Resort (según plan)',
        'Universal Studios Japan (Osaka)',
        'Días suaves + traslados pensados',
      ],
    },
    {
      id: 'japon-historico',
      kicker: 'Historia',
      title: 'Japón Histórico · Clásico + Hiroshima',
      days: '11–13 días',
      desc:
        'Más cultura, más historia y más contraste: lo clásico con un cierre potente en Hiroshima (y Miyajima si el ritmo lo permite).',
      priceFrom: { amount: 102890, currency: 'MXN' },
      image: '/destinos/japon/experiencias/japon-historico.jpg',
      highlights: [
        'Templos y barrios tradicionales',
        'Hiroshima (historia y memoria)',
        'Miyajima (opcional según ritmo)',
      ],
    },
    {
      id: 'japon-playas',
      kicker: 'Playas',
      title: 'Japón Playas · Clásico + Okinawa + Isla al norte',
      days: '12–15 días',
      desc:
        'El combo más “wow”: ciudades icónicas + mar turquesa en Okinawa + un contraste brutal en una isla al norte de Japón.',
      priceFrom: { amount: 118000, currency: 'MXN' },
      image: '/destinos/japon/experiencias/japon-playas.jpg',
      highlights: [
        'Okinawa (playa, relax, snorkel)',
        'Contraste norte (naturaleza + clima)',
        'Clásico Tokio/Kioto/Osaka integrado',
      ],
    },
    {
      id: 'japon-invierno',
      kicker: 'Invierno',
      title: 'Japón Invierno · Clásico + Happo-One',
      days: '11–14 días',
      desc:
        'Para vivir Japón con nieve: ciudades icónicas + ski vibes en Happo-One (Hakuba). Postales, onsens y mood invernal.',
      priceFrom: { amount: 130000, currency: 'MXN' },
      image: '/destinos/japon/experiencias/japon-invierno.jpg',
      highlights: [
        'Happo-One (Hakuba) + nieve',
        'Onsen / hot springs (según destino)',
        'Clásico Tokio/Kioto/Osaka integrado',
      ],
    },
  ],

  // ✅ ScrollStory (tipo Apple)
  // 📸 Imágenes en: public/destinos/japon/story/*.jpg
  scrollStory: [
    {
      id: 'cap-0',
      kicker: 'La ruta típica (bien hecha)',
      title: 'Tokio + Kioto + Osaka',
      desc:
        'Es el “clásico” porque funciona: modernidad, tradición y comida legendaria. La diferencia está en cómo lo curas (y ahí entramos nosotros).',
      bullets: ['Orden lógico sin regresos', 'Hoteles bien ubicados', 'Días balanceados'],
      image: '/destinos/japon/story/01-ruta-clasica.jpg',
      imageAlt: 'Ruta clásica Japón',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-1',
      kicker: 'Tokio',
      title: 'Energía infinita',
      desc:
        'Barrios que se sienten como mundos distintos. De día exploración, de noche luces, shopping y comida que te cambia la vida.',
      bullets: ['Shibuya / Shinjuku', 'Mercados y street food', 'Day trips opcionales'],
      image: '/destinos/japon/story/02-tokio.jpg',
      imageAlt: 'Tokio de noche',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-2',
      kicker: 'Kioto',
      title: 'Tradición que sí se siente',
      desc:
        'Templos, torii, callecitas y esa vibra que te hace bajar la velocidad. Aquí se vive la Japón “de película”.',
      bullets: ['Fushimi Inari', 'Gion', 'Arashiyama (según ritmo)'],
      image: '/destinos/japon/story/03-kioto.jpg',
      imageAlt: 'Kioto torii',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
    {
      id: 'cap-3',
      kicker: 'Osaka',
      title: 'La capital del antojo',
      desc:
        'Osaka es comida, vibra y noches divertidas. El lugar perfecto para cerrar con ganas de volver.',
      bullets: ['Dotonbori', 'Street food', 'Tour gastronómico (imperdible)'],
      image: '/destinos/japon/story/04-osaka.jpg',
      imageAlt: 'Osaka Dotonbori',
      bg: 'from-slate-950 via-slate-900 to-black',
    },
    {
      id: 'cap-4',
      kicker: 'Upgrade premium',
      title: 'Experiencias que se quedan grabadas',
      desc:
        'Japón se vuelve otro nivel cuando metes 2–3 experiencias correctas. No muchas: las que de verdad valen.',
      bullets: ['Ceremonia del té con kimono', 'Sumo en vivo', 'Gastronomía guiada'],
      image: '/destinos/japon/story/05-experiencias.jpg',
      imageAlt: 'Experiencias imperdibles Japón',
      bg: 'from-slate-950 via-slate-900 to-slate-950',
    },
  ],

  includes: {
    title: 'Qué incluye / Qué no incluye',
    subtitle: 'Todo lo esencial + lo que normalmente se te olvida (para que no haya sorpresas).',
    includes: [
      'Hospedaje (o similar)',
      'Traslados principales (o similar)',
      'Ruta curada por Flymingo (o similar)',
    ],
    excludes: ['Propinas', 'Gastos personales', 'Actividades opcionales no mencionadas'],
  },

  // ✅ Tours imperdibles
  // 📸 Imágenes en: public/destinos/japon/tours/*.jpg
  tours: [
    {
      id: 'tea-ceremony-kimono',
      title: 'Ceremonia del té + Kimono',
      short: 'Experiencia tradicional completa: kimono + ceremonia guiada (perfecta para fotos).',
      duration: '1.5–3 hrs',
      intensity: 'Relax',
      season: 'Todo el año',
      badge: 'Top',
      image: '/destinos/japon/tours/tea-ceremony-kimono.jpg',
      highlights: ['Kimono incluido (según opción)', 'Cultura real', 'Fotos wow'],
    },
    {
      id: 'sumo-match',
      title: 'Entrada a pelea/torneo de sumo',
      short: 'Ver sumo en vivo es una de esas cosas que solo entiendes cuando estás ahí.',
      duration: '2–4 hrs',
      intensity: 'Relax',
      season: 'Según calendario',
      badge: 'WOW',
      image: '/destinos/japon/tours/sumo.jpg',
      highlights: ['Experiencia única', 'Asientos según disponibilidad', 'Contexto cultural'],
    },
    {
      id: 'osaka-food-tour',
      title: 'Tour gastronómico en Osaka',
      short: 'Dotonbori + callejones + spots locales: el tour que te convierte en fan de Osaka.',
      duration: '2–4 hrs',
      intensity: 'Relax',
      season: 'Todo el año',
      badge: 'Foodie',
      image: '/destinos/japon/tours/osaka-food-tour.jpg',
      highlights: ['Street food', 'Guía local', 'Rutas con joyas escondidas'],
    },
  ],

  faq: [
    { q: '¿Necesito visa?', a: 'Depende de tu nacionalidad. Te asesoramos en 1 minuto.' },
    {
      q: '¿El precio es fijo?',
      a: 'No. Cambia por fechas, vuelos y disponibilidad. Por eso te damos “desde” y lo cerramos con cotización.',
    },
    { q: '¿Conviene JR Pass?', a: 'Depende de la ruta. Te decimos si sí o si no con números, antes de comprar.' },
  ],
}