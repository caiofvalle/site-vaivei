import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "351900000000";
const WHATSAPP_MESSAGE = "Olá! Vi o vosso trabalho e gostaria de falar sobre um projeto.";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="orb orb-white w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center glow-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] text-white/40 tracking-[0.3em] uppercase font-medium mb-10">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Disponível para novos projetos
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-t1 leading-tight mb-10">
            Vamos criar<br />
            <span className="gradient-text">algo juntos?</span>
          </h2>

          {/* Main CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-sm font-bold px-10 py-5 rounded-full mb-4 tracking-widest uppercase"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
            <ArrowRight size={16} />
          </a>

          <p className="text-t4 text-xs mb-12">Resposta em até 24h</p>

          <div className="section-divider mb-10" />

          {/* Secondary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-t3">
            <a
              href="https://instagram.com/vaivei.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-t1 transition-colors"
            >
              <InstagramIcon size={14} />
              @vaiveipt
            </a>
            <span className="hidden sm:block text-t4">·</span>
            <a
              href="mailto:geral@vaivei.pt"
              className="flex items-center gap-2 hover:text-t1 transition-colors"
            >
              <Mail size={14} />
              geral@vaivei.pt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
