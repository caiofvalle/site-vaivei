import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "351900000000";
const WHATSAPP_MESSAGE = "Olá! Vi o vosso trabalho e gostaria de falar sobre um projeto.";

export default function WhatsAppFloat() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp"
    >
      <span className="absolute w-14 h-14 rounded-full bg-white/10 animate-ping" />
      <span className="absolute w-14 h-14 rounded-full bg-white/5" />
      <div className="relative w-14 h-14 btn-primary rounded-full flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300">
        <MessageCircle size={22} />
      </div>
    </a>
  );
}
