import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Vaivei transformou a cobertura do nosso festival. As imagens falam por si — energia, emoção e profissionalismo do início ao fim.",
    name: "Ricardo Alves",
    role: "Diretor de Produção",
    company: "NOS Alive",
  },
  {
    text: "Trabalhar com a Vaivei foi uma experiência completamente diferente. Captaram a essência do projeto de uma forma que eu próprio não conseguia descrever.",
    name: "Marta Santos",
    role: "Artista",
    company: "Independente",
  },
  {
    text: "Resultado final acima das expectativas. Equipa dedicada, visão criativa e entrega pontual. Já estamos a planear o próximo projeto juntos.",
    name: "João Ferreira",
    role: "CMO",
    company: "Grupo Visabeira",
  },
];

const clients = [
  "SONAE", "MUNDO PROPÍCIO", "NOS", "VTEX", "CTLP", "WULOP", "AVATIM", "COALA", "AVK", "OAKBERRY",
];

export default function SocialProof() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="orb orb-white w-[500px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Client logos header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-white/30" />
          <span className="text-white/55 text-[11px] tracking-[0.4em] uppercase font-medium">Clientes & Parceiros</span>
        </div>
      </div>

      {/* Full-width white bar */}
      <div className="bg-white px-6 py-6 flex flex-wrap justify-center gap-x-8 gap-y-4 mb-24">
        {clients.map((client) => (
          <span
            key={client}
            className="text-black text-base sm:text-xl md:text-2xl tracking-[0.15em] uppercase font-black cursor-default"
          >
            {client}
          </span>
        ))}
      </div>

      {/* Testimonials — guardado, não visível
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-divider mb-24" />
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-white/30" />
          <span className="text-white/55 text-[11px] tracking-[0.4em] uppercase font-medium">O que dizem</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 flex flex-col gap-5">
              <Quote size={20} className="text-white/20" />
              <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="section-divider" />
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-white/45 text-xs tracking-wide mt-0.5">{t.role} · {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
}
