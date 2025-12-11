import { BookOpen, Brain, MessageSquare, Puzzle, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica",
    description: "Avaliação completa para identificar dislexia, TDAH e outros transtornos de aprendizagem.",
    color: "bg-coral-light/20 text-coral-dark",
  },
  {
    icon: BookOpen,
    title: "Intervenção Psicopedagógica",
    description: "Sessões individualizadas para desenvolver habilidades de leitura, escrita e raciocínio.",
    color: "bg-teal-light/50 text-teal",
  },
  {
    icon: Puzzle,
    title: "Estimulação Cognitiva",
    description: "Atividades lúdicas que desenvolvem memória, atenção e funções executivas.",
    color: "bg-secondary text-primary",
  },
  {
    icon: MessageSquare,
    title: "Fonoaudiologia",
    description: "Tratamento especializado para dificuldades de fala, linguagem e processamento auditivo.",
    color: "bg-coral-light/20 text-coral-dark",
  },
  {
    icon: Sparkles,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de habilidades motoras e de coordenação essenciais para a aprendizagem.",
    color: "bg-teal-light/50 text-teal",
  },
  {
    icon: Users,
    title: "Orientação aos Pais",
    description: "Grupos de apoio e orientações práticas para auxiliar no desenvolvimento em casa.",
    color: "bg-secondary text-primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Cuidado completo para o desenvolvimento do seu filho
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma abordagem multidisciplinar, com profissionais especializados 
            trabalhando em conjunto para os melhores resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <a href="#contato" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Saiba mais →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-hero p-8 md:p-12 rounded-3xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Pronto para dar o primeiro passo?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Agende uma avaliação inicial e descubra como podemos ajudar 
              seu filho a alcançar todo seu potencial.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="#contato">Agende Agora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
