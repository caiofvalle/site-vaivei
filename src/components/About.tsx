import Image from "next/image";

const stats = [
  { value: "16+", label: "Anos de Experiência" },
  { value: "500+", label: "Projetos Entregues" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-silver w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-[0.04]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">
          {/* Visual side */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/quemsoueu.jpeg"
                alt="Vaivei Studio"
                fill
                unoptimized
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-t1 font-bold text-sm">Vaivei Studio</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase">Lisboa, Portugal</p>
                </div>
              </div>
            </div>


            <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-xl border border-white/06 -z-10" />
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-white/55 text-[11px] tracking-[0.4em] uppercase font-medium">Sobre nós</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-t1 leading-tight mb-8">
              Especialistas em produções de filmes e fotografias.
            </h2>


            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4">
                  <p className="text-t1 text-2xl font-black mb-1">{s.value}</p>
                  <p className="text-white/50 text-xs tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
