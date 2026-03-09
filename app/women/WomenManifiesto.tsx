import { womenManifestoData } from "./women.data"

export default function WomenManifesto() {
  return (
    <section id="manifiesto" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500">
            {womenManifestoData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#4c1f3d] md:text-5xl">
            {womenManifestoData.title}
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#744c67] md:text-lg">
            <p>{womenManifestoData.text1}</p>
            <p>{womenManifestoData.text2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}