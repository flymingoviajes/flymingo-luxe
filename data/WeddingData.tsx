export interface WeddingPackage {
  id: string;
  name: string;
  hotelChain: string;
  hotelName: string;
  basePrice: number;
  currency: 'USD' | 'MXN';
  minGuests: number;
  maxGuests?: number;
  minRooms?: number;
  minNights?: number;
  inclusions: string[];
  extraPaxPrice?: number;
  locations: string[];
  style: 'Luxury' | 'Modern' | 'Tropical' | 'Classic';
  flymingoPerks: string[];
}

export const HOTELS_DATA = [
  {
    id: 'xcaret-mexico',
    name: 'Hotel Xcaret México',
    chain: 'Xcaret',
    location: 'Riviera Maya',
    style: 'Luxury',
    image: 'https://picsum.photos/seed/xcaret/1200/800',
    description: 'Un concepto único "All-Fun Inclusive" con acceso ilimitado a parques.',
    perks: ['Acceso ilimitado a Parques Xcaret', 'Transportación Aeropuerto-Hotel-Aeropuerto', 'Servicio 5 Diamantes'],
    packages: [
      {
        id: 'xcaret-atardecer',
        name: 'Atardecer',
        basePrice: 3950,
        currency: 'USD',
        minGuests: 50,
        extraPaxPrice: 220,
        minRooms: 25,
        minNights: 3,
        inclusions: [
          'Ceremonia simbólica',
          'Locación para ceremonia',
          'Cóctel (1 hora) con canapés',
          'Cena (3 horas) buffet o emplatado',
          'Barra libre nacional',
          'Flores para la pareja (2 piezas)',
          'Sesión de fotos (2 horas) con Xtudio Xcaret'
        ],
        flymingoPerks: ['Upgrade de habitación garantizado', 'Desayuno romántico post-boda']
      }
    ]
  },
  {
    id: 'hard-rock-los-cabos',
    name: 'Hard Rock Hotel Los Cabos',
    chain: 'Hard Rock',
    location: 'Los Cabos',
    style: 'Modern',
    image: 'https://picsum.photos/seed/hrcabos/1200/800',
    description: 'Vibrante, lujoso y con el espíritu del Rock & Roll frente al Pacífico.',
    perks: ['Sound Check (Visita de inspección 4 días)', 'Plan B Incluido (Salones de respaldo)', 'Montajes Complementarios'],
    packages: [
      {
        id: 'hr-complementaria',
        name: 'Ceremonia Complementaria',
        basePrice: 0,
        currency: 'USD',
        minGuests: 32,
        minRooms: 10,
        minNights: 2,
        inclusions: [
          'Ubicación de la ceremonia',
          'Estructura de la ceremonia',
          'Asientos para 32 personas',
          'Bouquet y boutonniere',
          'Pastel de un piso',
          'Sistema de audio',
          'Coordinador de bodas'
        ],
        flymingoPerks: ['Crédito de $20 USD por cuarto noche para extras', '10% comisión en extras arriba de $7k USD']
      }
    ]
  },
  {
    id: 'ava-resort',
    name: 'AVA Resort Cancun',
    chain: 'RCD Hotels',
    location: 'Cancún',
    style: 'Luxury',
    image: 'https://picsum.photos/seed/ava/1200/800',
    description: 'La nueva era del lujo en Cancún. Todas las habitaciones con vista al mar.',
    perks: ['100% Habitaciones Ocean Front', 'Concepto de Lujo Contemporáneo', 'Gastronomía de Autor'],
    packages: [
      {
        id: 'ava-sunset',
        name: 'Sunset',
        basePrice: 6000,
        currency: 'USD',
        minGuests: 32,
        inclusions: [
          'Estructura circular de madera con flores',
          'Solista para la ceremonia (Violín/Sax)',
          'Vino espumoso para 32 invitados',
          'Pastel de dos pisos',
          'AVA Honeymoon Experience'
        ],
        flymingoPerks: ['Habitación de los novios en cortesía (5 noches)', 'Upgrade a la siguiente categoría']
      }
    ]
  },
  {
    id: 'dreams-jade',
    name: 'Dreams Jade Resort & Spa',
    chain: 'Dreams',
    location: 'Riviera Maya',
    style: 'Classic',
    image: 'https://picsum.photos/seed/dreams/1200/800',
    description: 'Elegancia clásica y romance en un entorno tropical familiar.',
    perks: ['Pista de Baile LED incluida', 'Locaciones Premium sin costo de renta', 'Iluminación Vintage con bulbos'],
    packages: [
      {
        id: 'dreams-diamante',
        name: 'Paquete Diamante 2026',
        basePrice: 125000,
        currency: 'MXN',
        minGuests: 30,
        extraPaxPrice: 2300,
        inclusions: [
          'Ceremonia Maya, Simbólica o Civil',
          'Cóctel privado con canapés mexicanos',
          'Recepción 4 horas con DJ',
          'Menú de Torna Boda',
          'Masaje de 50 min para la pareja'
        ],
        flymingoPerks: ['Mimosas y botanas en habitación de la novia', 'Cupón de 1 noche para aniversario']
      }
    ]
  },
  {
    id: 'nobu-los-cabos',
    name: 'Nobu Hotel Los Cabos',
    chain: 'Nobu',
    location: 'Los Cabos',
    style: 'Luxury',
    image: 'https://picsum.photos/seed/nobu/1200/800',
    description: 'Minimalismo japonés fusionado con la energía de Cabo San Lucas.',
    perks: ['Gastronomía Nobu Signature', 'Arquitectura Minimalista de Lujo', 'Spa de Clase Mundial'],
    packages: [
      {
        id: 'nobu-zen',
        name: 'Zen Experience',
        basePrice: 5500,
        currency: 'USD',
        minGuests: 40,
        inclusions: [
          'Ceremonia frente al mar',
          'Cena de 4 tiempos Nobu Style',
          'Barra libre premium (4 horas)',
          'Decoración minimalista elegante'
        ],
        flymingoPerks: ['Cena privada para los novios en Nobu Restaurant', 'Upgrade a Zen Suite']
      }
    ]
  },
  {
    id: 'le-blanc-cancun',
    name: 'Le Blanc Spa Resort Cancun',
    chain: 'Palace Resorts',
    location: 'Cancún',
    style: 'Luxury',
    image: 'https://picsum.photos/seed/leblanc/1200/800',
    description: 'El epítome del lujo todo incluido solo para adultos en Cancún.',
    perks: ['Servicio de Mayordomo Personalizado', 'Hidroterapia de Clase Mundial', 'Vinos de Alta Gama'],
    packages: [
      {
        id: 'le-blanc-royale',
        name: 'Royale Wedding',
        basePrice: 8000,
        currency: 'USD',
        minGuests: 20,
        inclusions: [
          'Ceremonia en terraza privada con vista al mar',
          'Recepción de lujo con menú gourmet',
          'Pastel de bodas de autor',
          'Desayuno en la cama el día siguiente'
        ],
        flymingoPerks: ['Crédito de $1500 USD para el Spa', 'Transportación privada VIP']
      }
    ]
  }
];

export const DESTINATIONS = [
  'Cancún',
  'Riviera Maya',
  'Los Cabos'
];

export const WEDDING_STYLES = [
  {
    id: 'Luxury',
    name: 'Eco-Chic Luxury',
    description: 'Conexión profunda con la naturaleza y servicio de clase mundial.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'Modern',
    name: 'Rock & Roll Glam',
    description: 'Energía vibrante, música y un ambiente moderno y audaz.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'Classic',
    name: 'Classic Romance',
    description: 'Elegancia atemporal, romance tradicional y detalles sofisticados.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'Tropical',
    name: 'Tropical Bliss',
    description: 'Relajación total, pies en la arena y brisa marina.',
    icon: 'Palmtree',
    image: 'https://images.unsplash.com/photo-1520939817393-452bacf1094c?auto=format&fit=crop&q=80&w=800'
  }
];
