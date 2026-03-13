export default function WeddingsCTA() {
  return (
    <section className="bg-[#fcf8f2]">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="overflow-hidden rounded-[2rem] border border-[#ead7d1] bg-[linear-gradient(135deg,rgba(255,245,241,0.98),rgba(255,255,255,0.95),rgba(244,232,218,0.9))] p-6 shadow-[0_24px_70px_rgba(165,136,116,0.10)] sm:p-8 lg:rounded-[2.4rem] lg:p-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88d87]">
              Flymingo Weddings
            </p>

            <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[#5a4a42] sm:text-4xl lg:text-5xl">
              El siguiente paso puede ser mucho más claro, bonito y emocionante.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8 lg:text-lg">
              Descubran una colección pensada para ayudarles a elegir mejor,
              entender cómo funciona su boda destino y acercarse a una propuesta
              que sí se sienta como ustedes.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#7c6b63] sm:text-base sm:leading-8">
              Empiecen por explorar sus opciones favoritas o agenden una
              videollamada para aterrizar destino, estilo, invitados y lo que
              realmente quieren vivir.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button className="w-full rounded-full bg-[#c78c87] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(199,140,135,0.22)] transition hover:scale-[1.01] sm:w-auto sm:px-7">
                Diseñar mi boda
              </button>

              <button className="w-full rounded-full border border-[#e5d8cd] bg-white px-6 py-4 text-sm font-medium text-[#6d5d54] transition hover:bg-[#fffaf7] sm:w-auto sm:px-7">
                Agendar videollamada
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}