import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

export default function WomenIcelandSection() {
  const whatsappLink =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Islandia%20para%20Mujeres%202026."
  const brochureUrl = "/docs/ISLANDIA-x-MUJERES-2026.pdf"

  return (
    <section
      id="islandia"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8fc_0%,#fff3f9_45%,#ffffff_100%)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-[-6%] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-20 right-[-8%] h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-600 shadow-sm">
              Flymingo Women · Viaje insignia
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#4c1f3d] md:text-6xl">
              Islandia para Mujeres 2026
            </h2>

            <p className="mt-4 text-lg font-medium text-pink-600">
              14 al 21 de noviembre de 2026
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#744c67] md:text-lg">
              Nuestro viaje más icónico de Flymingo Women. Una experiencia
              diseñada para mujeres que quieren vivir auroras boreales, paisajes
              épicos, aguas termales y momentos inolvidables en grupo, en una de
              las experiencias más especiales de todo el año.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50/80 p-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
                Alta demanda
              </p>
              <p className="mt-2 text-sm leading-7 text-[#744c67]">
                La salida del <strong>10 al 17 de octubre de 2026</strong> ya se
                encuentra <strong>agotada</strong>. Por eso, esta salida del{" "}
                <strong>14 al 21 de noviembre</strong> es la oportunidad activa
                para unirte a esta experiencia.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-pink-100 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-[#4c1f3d]">
                  Precio
                </p>
                <p className="mt-1 text-2xl font-semibold text-pink-600">
                  $84,890 MXN
                </p>
                <p className="mt-1 text-sm text-[#744c67]">
                  por persona
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-pink-100 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-[#4c1f3d]">
                  Apartado
                </p>
                <p className="mt-1 text-2xl font-semibold text-pink-600">
                  $10,000 MXN
                </p>
                <p className="mt-1 text-sm text-[#744c67]">
                  asegura tu lugar
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                as={Link}
                href={whatsappLink}
                target="_blank"
                radius="full"
                className="bg-pink-500 px-6 text-white shadow-lg shadow-pink-200"
              >
                Pedir informes
              </Button>

              <Button
                as={Link}
                href={brochureUrl}
                target="_blank"
                radius="full"
                variant="bordered"
                className="border-pink-200 bg-white text-pink-700"
              >
                Descargar brochure
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_20px_80px_rgba(236,72,153,0.10)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/women/islandia.jpg"
                  alt="Islandia para Mujeres"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid gap-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-pink-500">
                    Lo principal
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[#744c67]">
                    <li>• Auroras boreales</li>
                    <li>• Círculo de Oro</li>
                    <li>• Costa Sur de Islandia</li>
                    <li>• Aguas termales y paisajes épicos</li>
                    <li>• Experiencia entre mujeres</li>
                    <li>• Acompañamiento Flymingo</li>
                  </ul>
                </div>

                <div className="rounded-[1.25rem] bg-[#fff7fb] p-4">
                  <p className="text-sm font-semibold text-[#4c1f3d]">
                    Nota importante
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#744c67]">
                    Si no cuentas con visa estadounidense, también podemos
                    revisar opción con ruta vía Europa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}