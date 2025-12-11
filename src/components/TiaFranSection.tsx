import { Award, GraduationCap, Heart, Star } from "lucide-react";

const TiaFranSection = () => {
  return (
    <section id="tia-fran" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-light/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder - would be replaced with actual photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-coral-light/30 to-teal-light/30 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Foto da Tia Fran</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">10+ Anos</div>
                  <div className="text-sm text-muted-foreground">de dedicação</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Conheça</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Tia Fran
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Francisca, carinhosamente conhecida como Tia Fran, é a fundadora e alma da Clínica Attento. 
              Com uma trajetória dedicada ao desenvolvimento infantil, ela transformou sua paixão por 
              ajudar crianças em uma missão de vida.
            </p>
            <p className="text-muted-foreground mb-8">
              Especializada em intervenção pedagógica para crianças com dificuldades de aprendizagem, 
              Tia Fran desenvolveu metodologias únicas que combinam técnicas baseadas em evidências 
              científicas com uma abordagem acolhedora e humanizada. Seu trabalho já impactou 
              positivamente centenas de famílias.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Formação Especializada</div>
                  <div className="text-sm text-muted-foreground">Psicopedagogia e Neuroaprendizagem</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Star className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Metodologia Própria</div>
                  <div className="text-sm text-muted-foreground">Técnicas exclusivas e eficazes</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Heart className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Abordagem Humanizada</div>
                  <div className="text-sm text-muted-foreground">Cada criança é única</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Award className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Resultados Comprovados</div>
                  <div className="text-sm text-muted-foreground">Transformando vidas</div>
                </div>
              </div>
            </div>

            <blockquote className="mt-8 p-6 bg-coral-light/10 rounded-2xl border-l-4 border-primary">
              <p className="text-foreground italic">
                "Cada criança carrega em si um potencial imenso. Nosso papel é descobrir a chave 
                que abre a porta do aprendizado para cada uma delas."
              </p>
              <footer className="mt-3 font-semibold text-primary">— Tia Fran</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiaFranSection;
