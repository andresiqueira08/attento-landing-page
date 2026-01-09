import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import tiaFranImage from "@/assets/tia-fran.jpeg";
import anaPaulaImage from "@/assets/ana-paula.jpeg";
import andreiaAraujoImage from "@/assets/Andreia Araujo.jpeg";
import amandaCarolinaImage from "@/assets/Amanda Carolina.jpeg";
import marceloSandersImage from "@/assets/marcelo-sanders.jpeg";
import valmirAlvesImage from "@/assets/valmir-alves.jpeg";
import janayneImage from "@/assets/janayne.jpeg";
import geissaImage from "@/assets/geissa.jpeg";
import keilaImage from "@/assets/keila-melo.jpeg";
import sabrineImage from "@/assets/sabrine-canonici.jpeg";
import thaisImage from "@/assets/thais-nascimento.jpeg";
import kesiaImage from "@/assets/kessia-araujo.jpeg";
import jenniferImage from "@/assets/jenifer.jpeg";
import francyneImage from "@/assets/francyne-roque.jpeg";
import manoelaImage from "@/assets/manoela-carolina.jpeg";
import patriciaLimaImage from "@/assets/patricia-lima.jpeg";
import ruthImage from "@/assets/ruth-sampaio.jpeg";
import patriciaSundesImage from "@/assets/patricia-sandes.jpeg";
import filipeImage from "@/assets/filipe-ferreira.jpeg";
import tacianaImage from "@/assets/taciana-costa.jpeg";

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
    nome: "Dra. Sabrine Canonici",
    especialidade: "Neuropsicopedagoga",
    foto: sabrineImage,
    linkAgendamento: "https://inforempresa.com.br/sabrinecanonici?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBxKgRVlUuXDFATn24CVzwDsd8doo5GFhtPQYh1T_RKRMimBfIDcuo8FNuPE_aem_wESEXqhDJSKl1J0tfXXCyA",
  },
  {
    nome: "Dra. Larisse Farias",
    especialidade: "Fisioterapeuta",
    foto: anaPaulaImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Larisse%20Farias",
  },
  {
    nome: "Dra. Andreia Araujo",
    especialidade: "Pediatria",
    foto: andreiaAraujoImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Andreia%20Araujo",
  },
  {
    nome: "Dra. Amanda Carolina",
    especialidade: "Psicóloga",
    foto: amandaCarolinaImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Amanda%20Carolina",
  },
  {
    nome: "Dr. Marcelo Sanders",
    especialidade: "Psicólogo",
    foto: marceloSandersImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dr.%20Marcelo%20Sanders",
  },
  {
    nome: "Dr. Valmir Alves",
    especialidade: "Psicólogo",
    foto: valmirAlvesImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dr.%20Valmir%20Alves",
  },
  {
    nome: "Dra. Janayne Chrisnayle",
    especialidade: "Psicóloga infatil",
    foto: janayneImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Janayne%20ChrisNayle",
  },
  {
    nome: "Dra. Geissa Larissa",
    especialidade: "Atendimento de neurodesenvolvimento infantil",
    foto: geissaImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Geissa%20Larissa",
  },
  {
    nome: "Dra. Keila Melo",
    especialidade: "Psicopedagoga",
    foto: keilaImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Keila%20Melo",
  },
  {
    nome: "Dra. Thais Nascimento",
    especialidade: "Psicóloga",
    foto: thaisImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Thais%20Nascimento",
  },
  {
    nome: "Dra. Kesia Araujo",
    especialidade: "Psicopedagoga",
    foto: kesiaImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Kesia%20Araujo",
  },
  {
    nome: "Dra. Jennifer Reis",
    especialidade: "Fisioterapeuta",
    foto: jenniferImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Jennifer%20Reis",
  },
  {
    nome: "Dra. Francyne Roque",
    especialidade: "Terapeuta ocupacional",
    foto: francyneImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Francyne%20Roque",
  },
  {
    nome: "Dra. Manoela Carolina",
    especialidade: "Psicologa infantil",
    foto: manoelaImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Manoela%20Carolina",
  },
  {
    nome: "Dr. Filipe Ferreira",
    especialidade: "Fisioterapeuta",
    foto: filipeImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dr.%20Filipe%20Ferreira",
  },
  {
    nome: "Dra. Patricia Lima",
    especialidade: "Neuropsicopedagoga",
    foto: patriciaLimaImage,
    linkAgendamento: "https://wa.me/557582856964?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dra.%20Patricia%20Lima",
  },
  {
    nome: "Dra. Taciana Costa",
    especialidade: "Terapeuta ocupacional",
    foto: tacianaImage,
    linkAgendamento: "https://wa.me/5587991356711?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20%20Dr.%20Taciana%20Costa",
  },
  {
    nome: "Dra. Ruth Sampaio",
    especialidade: "Psicóloga",
    foto: ruthImage,
    linkAgendamento: "#",
  },
  {
    nome: "Dra. Patricia Sandes",
    especialidade: "Nutrição",
    foto: patriciaSundesImage,
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
