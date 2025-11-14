import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FooterProps {
  cooperativeName?: string;
  currentLanguage: string;
}

export function Footer({
  cooperativeName = "Global Mining Cooperative",
  currentLanguage,
}: FooterProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language: currentLanguage }),
      });

      if (response.ok) {
        toast({
          title: currentLanguage === "pt" ? "Inscrição confirmada!" : currentLanguage === "es" ? "¡Suscripción confirmada!" : "Subscription confirmed!",
          description: currentLanguage === "pt" ? "Você se inscreveu na nossa newsletter." : currentLanguage === "es" ? "Te has suscrito a nuestro boletín." : "You've subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: currentLanguage === "pt" ? "Erro" : currentLanguage === "es" ? "Error" : "Error",
        description: currentLanguage === "pt" ? "Falha ao inscrever. Tente novamente." : currentLanguage === "es" ? "Error al suscribirse. Inténtalo de nuevo." : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  const content = {
    en: {
      about: "About",
      aboutText: "Leading mining cooperative committed to sustainable practices, environmental responsibility, and investor transparency.",
      quickLinks: "Quick Links",
      reports: "Reports",
      social: "Social Report",
      environmental: "Environmental Report",
      financial: "Financial Report",
      contact: "Contact",
      newsletter: "Newsletter",
      newsletterText: "Stay updated with our latest news and initiatives",
      emailPlaceholder: "Enter your email",
      subscribe: "Subscribe",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    pt: {
      about: "Sobre",
      aboutText: "Cooperativa de mineração líder comprometida com práticas sustentáveis, responsabilidade ambiental e transparência para investidores.",
      quickLinks: "Links Rápidos",
      reports: "Relatórios",
      social: "Relatório Social",
      environmental: "Relatório Ambiental",
      financial: "Relatório Financeiro",
      contact: "Contato",
      newsletter: "Newsletter",
      newsletterText: "Fique atualizado com nossas últimas notícias e iniciativas",
      emailPlaceholder: "Digite seu email",
      subscribe: "Inscrever",
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
    },
    es: {
      about: "Acerca de",
      aboutText: "Cooperativa minera líder comprometida con prácticas sostenibles, responsabilidad ambiental y transparencia para inversores.",
      quickLinks: "Enlaces Rápidos",
      reports: "Informes",
      social: "Informe Social",
      environmental: "Informe Ambiental",
      financial: "Informe Financiero",
      contact: "Contacto",
      newsletter: "Boletín",
      newsletterText: "Mantente actualizado con nuestras últimas noticias e iniciativas",
      emailPlaceholder: "Ingresa tu correo electrónico",
      subscribe: "Suscribirse",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <footer className="border-t bg-card mt-20">
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-chart-3" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-about">
              {t.about}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.aboutText}
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="button-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="button-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="button-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="button-social-youtube">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-quick-links">
              {t.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about">
                <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-about">
                  {content[currentLanguage as keyof typeof content]?.about || content.en.about}
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-products">
                  {currentLanguage === "pt" ? "Produtos" : currentLanguage === "es" ? "Productos" : "Products"}
                </Button>
              </Link>
              <Link href="/investors">
                <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-investors">
                  {currentLanguage === "pt" ? "Investidores" : currentLanguage === "es" ? "Inversores" : "Investors"}
                </Button>
              </Link>
              <Link href="/sustainability">
                <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-sustainability">
                  {currentLanguage === "pt" ? "Sustentabilidade" : currentLanguage === "es" ? "Sostenibilidad" : "Sustainability"}
                </Button>
              </Link>
            </nav>
          </div>

          {/* Reports */}
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-reports">
              {t.reports}
            </h3>
            <nav className="flex flex-col gap-2">
              <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-social-report">
                {t.social}
              </Button>
              <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-environmental-report">
                {t.environmental}
              </Button>
              <Button variant="link" className="h-auto p-0 justify-start text-sm text-muted-foreground hover:text-foreground" data-testid="link-footer-financial-report">
                {t.financial}
              </Button>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-newsletter">
              {t.newsletter}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.newsletterText}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="w-full" data-testid="button-newsletter-submit">
                {t.subscribe}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} {cooperativeName}. {t.rights}
          </p>
          <div className="flex gap-4">
            <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
              {t.privacy}
            </Button>
            <Button variant="link" className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
              {t.terms}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
