import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

export default function WomenCTA() {
  const whatsappLink =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20de%20Flymingo%20Women."

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/women/cta-bg.jpg"
          alt="Flymingo Women CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,249,0.88)_0%,rgba(255,235,245,0.90)_50%,rgba(255,255,255,0.96)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:px-10">
        <span className="inline-flex rounded-full border border-pink-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-600 shadow-sm">
          Flymingo Women
        </span>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#4c1f3d] md:text-6xl">
          Viajes que se viven distinto cuando los compartes con mujeres increíbles
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#744c67] md:text-lg">
          Descubre nuestras experiencias para mujeres, pregunta por salidas activas
          o únete a la lista de espera para enterarte primero de los próximos destinos.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            as={Link}
            href={whatsappLink}
            target="_blank"
            radius="full"
            className="bg-pink-500 px-6 text-white shadow-lg shadow-pink-200"
          >
            Quiero informes
          </Button>

          <Button
            as={Link}
            href="#top"
            radius="full"
            variant="bordered"
            className="border-pink-200 bg-white text-pink-700"
          >
            Volver al inicio
          </Button>
        </div>

        <p className="mt-6 text-sm text-[#8b6780]">
          Islandia y Japón son solo el comienzo. Muy pronto llegarán nuevas experiencias.
        </p>
      </div>
    </section>
  )
}