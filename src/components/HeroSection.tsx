import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute top-32 right-10 w-64 h-64 bg-coral-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-light/30 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-[15%] animate-float">
        <Star className="w-8 h-8 text-primary/40" fill="currentColor" />
      </div>
      <div className="absolute top-60 right-[20%] animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-6 h-6 text-coral/50" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-[25%] animate-float" style={{ animationDelay: "0.5s" }}>
        <Sparkles className="w-7 h-7 text-teal/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Metodologia especializada para neurodiversos</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Intervenção do{" "}
            <span className="text-5xl font-bold text-gradient-strong">Desenvolvimento Humano</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A Attento é uma clínica especializada em metodologias para neurodiversos — 
            autismo, TDAH, dislexia e outros perfis. Oferecemos um ambiente acolhedor 
            com intervenções personalizadas para o desenvolvimento pleno do seu filho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/agendar">Agende uma Avaliação</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="#sobre">Conheça Nossa Clínica</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Crianças atendidas</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Famílias satisfeitas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
