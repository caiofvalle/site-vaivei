import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "351900000000";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const links = {
  Serviços: [
    { label: "Filmagem", href: "#services" },
    { label: "Fotografia", href: "#services" },
    { label: "Eventos & Concertos", href: "#services" },
    { label: "Corporativo", href: "#services" },
  ],
  Estúdio: [
    { label: "Trabalho", href: "#portfolio" },
    { label: "Sobre nós", href: "#about" },
    { label: "Contato", href: "#contact" },
  ],
};

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="relative border-t border-subtle pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-5">
              <span className="text-2xl font-black tracking-[0.15em] text-t1 uppercase">Vaivei</span>
              <span className="text-t4 text-xs tracking-widest uppercase ml-3">Studio</span>
            </div>
            <p className="text-t3 text-sm leading-relaxed max-w-xs mb-6">
              Produção audiovisual em Lisboa. Filmagem, fotografia e cobertura de eventos com visão cinematográfica.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/vaivei.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-t1 hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-t1 hover:border-white/20 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="mailto:hello@vaivei.pt"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-t3 hover:text-t1 hover:border-white/20 transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-t4 text-[10px] tracking-[0.3em] uppercase font-medium mb-5">{category}</p>
              <ul className="flex flex-col gap-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-t3 hover:text-t1 text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-t4 text-xs">
            © {new Date().getFullYear()} Vaivei Studio. Todos os direitos reservados.
          </p>
          <p className="text-t4 text-xs">Lisboa, Portugal</p>
        </div>
      </div>
    </footer>
  );
}
