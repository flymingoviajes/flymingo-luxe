import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

export default function WomenJapanSection() {
  const whatsappLink =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Jap%C3%B3n%20para%20Mujeres."
  const brochureUrl = "/docs/JAPON-PARA-MUJERES.pdf"

  return (
    <section
      id="japon"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff7fb_45%,#fff2f8_100%)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[-8%] h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-[0_20px_80px_rgba(236,72,153,0.10)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/women/japon.jpg"
                  alt="Japón para Mujeres"
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
                    <li>• Tokio, Osaka y Nara</li>
                    <li>• Cultura, modernidad y tradición</li>
                    <li>• Tren bala y experiencias icónicas</li>
                    <li>• Viaje entre mujeres</li>
                    <li>• Acompañamiento Flymingo</li>
                  </ul>
                </div>

                <div className="rounded-[1.25rem] bg-[#fff7fb] p-4">
                  <p className="text-sm font-semibold text-[#4c1f3d]">
                    Ideal para
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#744c67]">
                    mujeres que sueñan con Japón y quieren vivirlo de una forma
                    bonita, emocionante y memorable, acompañadas por otras
                    mujeres con la misma ilusión de descubrir Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-600 shadow-sm">
                Flymingo Women · Nueva experiencia
              </span>

              <span className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
                Nuevo
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#4c1f3d] md:text-6xl">
              Japón para Mujeres
            </h2>

            <p className="mt-4 text-lg font-medium text-pink-600">
              24 de octubre al 04 de noviembre
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#744c67] md:text-lg">
              Una nueva experiencia de Flymingo Women para vivir Japón entre
              mujeres. Un viaje pensado para mezclar tradición, modernidad,
              momentos inolvidables y una energía única en uno de los destinos
              más soñados del mundo.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-rose-200 bg-rose-50/80 p-4 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">
                Lugares limitados
              </p>
              <p className="mt-2 text-sm leading-7 text-[#744c67]">
                Este viaje es <strong>nuevo</strong> y ya solo quedan{" "}
                <strong>10 lugares disponibles</strong>. Si te interesa Japón,
                este es el mejor momento para apartar antes de que se agote.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-pink-100 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-[#4c1f3d]">
                  Precio
                </p>
                <p className="mt-1 text-2xl font-semibold text-pink-600">
                  $89,385 MXN
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
        </div>
      </div>
    </section>
  )
}