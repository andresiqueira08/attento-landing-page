import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5500999999999"; // Substitua pelo número real
  const message = "Olá! Tudo bem? Encontrei vocês pelo site e gostaria de agendar uma avaliação.";
  const whatsappUrl = `https://wa.me/557582856964?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden sm:block">Fale Conosco</span>
        </div>
      </div>
      
      {/* Tooltip on mobile */}
      <div className="absolute bottom-full right-0 mb-2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Clique para conversar no WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;
