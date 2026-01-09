import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import tiaFranImage from "@/assets/tia-fran.jpeg";
import anaPaulaImage from "@/assets/ana-paula.jpeg";

interface ProfissionalCardProps {
  nome: string;
  especialidade: string;
  foto?: string;
  linkAgendamento?: string;
}

const ProfissionalCard = ({ nome, especialidade, foto, linkAgendamento = "#" }: ProfissionalCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted flex items-center justify-center">
        {foto ? (
          <img src={foto} alt={nome} className="w-full h-full object-cover" />
        ) : (
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-primary">
              {nome.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          {nome}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{especialidade}</p>
        <Button asChild className="w-full">
          <a href={linkAgendamento} target="_blank" rel="noopener noreferrer">
            <Calendar className="w-4 h-4 mr-2" />
            Agende sua Consulta
          </a>
        </Button>
      </div>
    </div>
  );
};

const profissionais = [
  {
    nome: "Tia Fran",
    especialidade: "Neurociência e Desenvolvimento Humano",
    foto: tiaFranImage,
    linkAgendamento: "https://form.jotform.com/253494842947068",
  },
  {
    nome: "Dra. Ana Paula",
    especialidade: "Psicopedagogia",
    foto: anaPaulaImage,
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Carla",
    especialidade: "Fonoaudiologia",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Beatriz",
    especialidade: "Terapia Ocupacional",
    linkAgendamento: "#",
  },
  {
    nome: "Dr. Lucas",
    especialidade: "Psicologia Infantil",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Mariana",
    especialidade: "Neuropsicologia",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Juliana",
    especialidade: "Psicomotricidade",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Fernanda",
    especialidade: "Intervenção ABA",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Patrícia",
    especialidade: "Musicoterapia",
    linkAgendamento: "#",
  },
  {
    nome: "Dr. Rafael",
    especialidade: "Educação Física Adaptada",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Camila",
    especialidade: "Nutrição Comportamental",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Isabela",
    especialidade: "Arteterapia",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Renata",
    especialidade: "Estimulação Cognitiva",
    linkAgendamento: "#",
  },
  {
    nome: "Dr. Marcos",
    especialidade: "Neuropediatria",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Letícia",
    especialidade: "Orientação Familiar",
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Amanda",
    especialidade: "Integração Sensorial",
    linkAgendamento: "#",
  },
];

const Agendar = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Agendamento
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Agende sua Avaliação
          </h1>
          <p className="text-lg text-muted-foreground">
            Escolha a profissional e agende sua consulta de forma rápida e prática.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profissionais.map((prof) => (
            <ProfissionalCard
              key={prof.nome}
              nome={prof.nome}
              especialidade={prof.especialidade}
              foto={prof.foto}
              linkAgendamento={prof.linkAgendamento}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Agendar;
