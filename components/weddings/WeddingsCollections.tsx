type PackageItem = {
  name: string;
  price: string;
  text: string;
};

type Collection = {
  eyebrow: string;
  title: string;
  location: string;
  intro: string;
  fit: string;
  bullets: string[];
  packages: PackageItem[];
  badge: string;
};

const collections: Collection[] = [
  {
    eyebrow: "Riviera Maya",
    title: "Xcaret Weddings",
    location: "Hotel Xcaret México · Hotel Xcaret Arte",
    intro:
      "Para parejas que quieren una boda destino que se sienta como una experiencia completa para ustedes y sus invitados.",
    fit:
      "Ideal si sueñan con algo premium, memorable y con una propuesta muy fuerte en hospitalidad, gastronomía y experiencia.",
    bullets: [
      "Experiencia premium y muy aspiracional",
      "Gran valor para invitados que quieren vivir más que solo el evento",
      "Perfecto para parejas que quieren algo especial desde el inicio",
    ],
    packages: [
      {
        name: "Atardecer",
        price: "Desde $75,000 MXN aprox.",
        text:
          "Una gran puerta de entrada al universo Xcaret, con ceremonia, cóctel, cena y beneficios especiales para la pareja.",
      },
      {
        name: "Alux",
        price: "Desde $140,000 MXN aprox.",
        text:
          "Una opción más elevada para parejas que buscan una celebración más estructurada, elegante y con mayor presencia.",
      },
    ],
    badge: "Premium experience",
  },
  {
    eyebrow: "Cancún",
    title: "AVA Resort Cancún",
    location: "AVA Cancún",
    intro:
      "Para parejas que quieren una boda moderna, elegante y visualmente hermosa desde el primer vistazo.",
    fit:
      "Ideal si la estética, la atmósfera y las fotos son parte fundamental de cómo imaginan su gran día.",
    bullets: [
      "Colección visual, chic y contemporánea",
      "Paquetes con estilos muy definidos",
      "Excelente para parejas que quieren una boda editorial",
    ],
    packages: [
      {
        name: "Sunset",
        price: "$6,000 USD",
        text:
          "Una propuesta luminosa, romántica y fresca, perfecta para una boda bonita y muy bien presentada.",
      },
      {
        name: "Willow",
        price: "$7,000 USD",
        text:
          "Una opción cálida y sofisticada, con una estética orgánica y elegante frente al mar.",
      },
      {
        name: "Golden",
        price: "$8,000 USD",
        text:
          "La versión más editorial y glamorosa de la colección AVA para una boda con gran presencia visual.",
      },
    ],
    badge: "Visual & chic",
  },
  {
    eyebrow: "Cancún",
    title: "Palace / Moon Palace",
    location: "Moon Palace Cancún · Palace Weddings",
    intro:
      "Para parejas que quieren una boda hermosa, pero también una mejor estrategia para sus invitados.",
    fit:
      "Ideal si el tamaño del grupo, las habitaciones y los beneficios por reservación son parte importante de su decisión.",
    bullets: [
      "Muy fuerte para grupos y logística",
      "Beneficios claros según habitaciones reservadas",
      "Gran apoyo para parejas con muchos invitados",
    ],
    packages: [
      {
        name: "Colección Complementaria",
        price: "Sujeto a mínimo de grupo",
        text:
          "Una forma muy atractiva de comenzar con ceremonia, cena semi privada y beneficios para la pareja al cumplir los mínimos.",
      },
      {
        name: "Beneficios por Grupo",
        price: "Según habitaciones reservadas",
        text:
          "Mientras más grande sea el grupo, mayores pueden ser las ventajas para los novios: eventos privados, upgrades y mejores condiciones.",
      },
    ],
    badge: "Ideal para grupos",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#ead7d1] bg-[#fbf2ef] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9f756f]">
      {children}
    </span>
  );
}

export default function WeddingsCollections() {
  return (
    <section className="border-b border-[#e9dfd2] bg-[#f8f2eb]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88d87]">
            Colección Flymingo Weddings
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[#5a4a42] sm:text-4xl lg:text-5xl">
            Empiecen por una colección que sí vaya con ustedes.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8 lg:text-lg">
            Seleccionamos algunas de nuestras propuestas favoritas para que puedan
            descubrir estilos distintos de boda destino y empezar por la opción
            que mejor se adapte a lo que imaginan.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-[#eadfd4] bg-white/80 p-4 sm:mt-6 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#b39a8d]">
            Importante
          </p>
          <p className="mt-2 text-sm leading-6 text-[#7a6961] sm:text-[15px]">
            Los precios mostrados aquí corresponden al{" "}
            <span className="font-semibold text-[#5f5048]">
              paquete de boda de los novios
            </span>
            . El viaje y hospedaje de los invitados se cotiza por separado.
          </p>
        </div>

        <div className="mt-8 space-y-5 sm:mt-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="overflow-hidden rounded-[1.5rem] border border-[#eadfd4] bg-white shadow-sm"
            >
              <div className="border-b border-[#efe5db] bg-[linear-gradient(135deg,rgba(244,232,218,0.95),rgba(255,255,255,0.75))] px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#b39a8d]">
                    {collection.eyebrow}
                  </p>
                  <Badge>{collection.badge}</Badge>
                </div>

                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#5a4a42]">
                  {collection.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#9a8578]">
                  {collection.location}
                </p>
              </div>

              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-sm leading-7 text-[#76655d] sm:text-[15px]">
                  {collection.intro}
                </p>

                <div className="mt-4 rounded-[1.2rem] border border-[#efe5db] bg-[#fffaf7] p-4">
                  <p className="text-sm leading-6 font-medium text-[#5f5048]">
                    {collection.fit}
                  </p>
                </div>

                <div className="mt-4 space-y-2.5">
                  {collection.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-xl border border-[#f0e7de] bg-[#fffdfb] px-3.5 py-3 text-sm leading-6 text-[#7b6a61]"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[#efe5db] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#b29c8f]">
                    Paquetes destacados
                  </p>

                  <div className="mt-3 space-y-3">
                    {collection.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className="rounded-[1.2rem] border border-[#eadfd4] bg-[#fffefd] p-4"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold leading-tight text-[#5a4a42]">
                              {pkg.name}
                            </h4>

                            <span className="inline-flex w-fit items-center rounded-full border border-[#ead7d1] bg-[#fbf2ef] px-3 py-1 text-[11px] font-semibold text-[#9f756f]">
                              {pkg.price}
                            </span>

                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b49a8c]">
                              Paquete de boda para los novios
                            </p>
                          </div>

                          <p className="text-sm leading-6 text-[#82726a]">
                            {pkg.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <button className="w-full rounded-full bg-white px-5 py-3.5 text-sm font-medium text-[#6d5d54] border border-[#e5d8cd] transition hover:bg-[#fffaf7]">
                    Quiero conocer esta colección
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}