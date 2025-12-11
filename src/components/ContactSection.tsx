import { Clock, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para responder suas dúvidas e agendar uma visita.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Endereço</div>
                  <div className="text-muted-foreground">
                    Rua Exemplo, 123 - Centro<br />
                    Cidade - Estado, CEP 00000-000
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Telefone / WhatsApp</div>
                  <div className="text-muted-foreground">(00) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">E-mail</div>
                  <div className="text-muted-foreground">contato@clinicaattento.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Horário de Funcionamento</div>
                  <div className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Mapa da localização</p>
            </div>

            <Button asChild size="lg" className="w-full mt-8">
              <Link to="/agendar">
                <Calendar className="w-5 h-5 mr-2" />
                Agende sua Avaliação
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
