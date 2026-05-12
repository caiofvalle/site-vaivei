import { Camera, Film, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Eventos & Concertos",
    desc: "Cobertura audiovisual ao vivo — festivais, concertos e espetáculos captados com energia e precisão.",
  },
  {
    num: "02",
    title: "Corporativos & Institucionais",
    desc: "Produção profissional para marcas, empresas e instituições. Conteúdo que comunica com clareza.",
  },
  {
    num: "03",
    title: "Promocionais",
    desc: "Campanhas visuais que amplificam a mensagem da sua marca — do conceito à entrega final.",
  },
  {
    num: "04",
    title: "Conteúdo em Real Time",
    desc: "Captação e publicação de conteúdo em tempo real para redes sociais e transmissões em direto.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-white/30" />
          <span className="text-white/55 text-[11px] tracking-[0.4em] uppercase font-medium">
            O que fazemos
          </span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.num}
              className="services-card relative rounded-2xl overflow-hidden p-8 flex flex-col gap-6 cursor-default group"
            >
              {/* subtle inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
              />

              {/* Icons */}
              <div className="flex items-center gap-3 text-t4">
                <Camera size={16} />
                <Film size={16} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-t1 leading-tight tracking-tight uppercase">
                {s.title}
              </h3>

              <div className="section-divider" />

              <p className="text-t3 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold px-8 py-4 rounded-full tracking-widest uppercase border border-white/50 text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Pedir um orçamento
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
