import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-3">ATTENTO</h3>
            <p className="text-background/70 mb-4 max-w-md">
              Clínica de Intervenção do Desenvolvimento Humano. 
              Dedicados ao desenvolvimento de crianças com dislexia e dificuldades de aprendizagem.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@clinicaattento.com.br" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-background/70 hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="block text-background/70 hover:text-primary transition-colors">Sobre</a>
              <a href="#tia-fran" className="block text-background/70 hover:text-primary transition-colors">Tia Fran</a>
              <a href="#servicos" className="block text-background/70 hover:text-primary transition-colors">Serviços</a>
              <a href="#contato" className="block text-background/70 hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4">Serviços</h4>
            <nav className="space-y-2">
              <a href="#servicos" className="block text-background/70 hover:text-primary transition-colors">Avaliação Neuropsicológica</a>
              <a href="#servicos" className="block text-background/70 hover:text-primary transition-colors">Psicopedagogia</a>
              <a href="#servicos" className="block text-background/70 hover:text-primary transition-colors">Fonoaudiologia</a>
              <a href="#servicos" className="block text-background/70 hover:text-primary transition-colors">Terapia Ocupacional</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Clínica Attento. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary" /> para crianças especiais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
