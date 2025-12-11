import { BookOpen, Brain, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Avaliação Multidisciplinar",
    description: "Diagnóstico completo para identificar perfis neurodiversos: autismo, TDAH, dislexia e outros.",
  },
  {
    icon: BookOpen,
    title: "Metodologia Especializada",
    description: "Intervenções baseadas em evidências, adaptadas às necessidades únicas de cada criança neurodiversa.",
  },
  {
    icon: Heart,
    title: "Desenvolvimento Integral",
    description: "Abordagem que integra aspectos cognitivos, emocionais e sociais do desenvolvimento.",
  },
  {
    icon: Users,
    title: "Parceria com a Família",
    description: "Orientação e capacitação familiar para potencializar o desenvolvimento em casa.",
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
            A Attento nasceu da paixão por ajudar crianças neurodiversas a alcançarem seu potencial máximo. 
            Desenvolvemos metodologias especializadas para autismo, TDAH, dislexia e outros perfis, 
            respeitando a individualidade de cada criança.
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
                O que é Neurodiversidade?
              </h3>
              <p className="text-muted-foreground mb-4">
                Neurodiversidade reconhece que cérebros funcionam de maneiras diferentes — não melhores ou piores, 
                apenas diferentes. Inclui autismo, TDAH, dislexia, dispraxia e outros perfis neurológicos.
              </p>
              <p className="text-muted-foreground">
                Na Attento, celebramos essas diferenças e desenvolvemos metodologias que respeitam 
                e potencializam as habilidades únicas de cada criança neurodiversa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-coral-light/20 p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-coral-dark">15-20%</div>
                <div className="text-sm text-muted-foreground mt-1">são neurodiversos</div>
              </div>
              <div className="bg-teal-light/50 p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-teal">Único</div>
                <div className="text-sm text-muted-foreground mt-1">cada perfil é especial</div>
              </div>
              <div className="bg-secondary p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-primary">Potencial</div>
                <div className="text-sm text-muted-foreground mt-1">habilidades únicas</div>
              </div>
              <div className="bg-muted p-6 rounded-2xl text-center">
                <div className="font-display text-3xl font-bold text-foreground">Intervenção</div>
                <div className="text-sm text-muted-foreground mt-1">faz a diferença</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
