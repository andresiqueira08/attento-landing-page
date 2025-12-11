import { BookOpen, Brain, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Avaliação Especializada",
    description: "Diagnóstico preciso com avaliação neuropsicológica completa para identificar necessidades específicas.",
  },
  {
    icon: BookOpen,
    title: "Intervenção Pedagógica",
    description: "Métodos de ensino adaptados para crianças com dislexia e dificuldades de aprendizagem.",
  },
  {
    icon: Heart,
    title: "Acompanhamento Emocional",
    description: "Suporte psicológico para desenvolver autoestima e confiança nas crianças.",
  },
  {
    icon: Users,
    title: "Orientação Familiar",
    description: "Envolvemos a família no processo de desenvolvimento para melhores resultados.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Clínica de Intervenção do Desenvolvimento Humano
          </h2>
          <p className="text-lg text-muted-foreground">
            A Attento nasceu da paixão por ajudar crianças a superarem suas dificuldades de aprendizagem. 
            Acreditamos que toda criança tem potencial único e merece o suporte adequado para florescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                O que é a Dislexia?
              </h3>
              <p className="text-muted-foreground mb-4">
                A dislexia é um transtorno específico de aprendizagem que afeta a leitura, escrita e soletração. 
                Não está relacionada à inteligência - muitas pessoas com dislexia são extremamente criativas e talentosas.
              </p>
              <p className="text-muted-foreground">
                Com a intervenção adequada, crianças com dislexia podem desenvolver estratégias eficazes 
                para superar seus desafios e alcançar sucesso acadêmico e pessoal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-coral-light/20 p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-coral-dark">5-10%</div>
                <div className="text-sm text-muted-foreground mt-1">da população mundial</div>
              </div>
              <div className="bg-teal-light/50 p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-teal">Hereditária</div>
                <div className="text-sm text-muted-foreground mt-1">fator genético</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-primary">Tratável</div>
                <div className="text-sm text-muted-foreground mt-1">com intervenção</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-foreground">Precoce</div>
                <div className="text-sm text-muted-foreground mt-1">diagnóstico ideal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
