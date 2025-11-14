import { ContactForm } from "@/components/ContactForm";

interface ContactProps {
  currentLanguage: string;
}

export default function Contact({ currentLanguage }: ContactProps) {
  const content = {
    en: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you. Get in touch with our team.",
    },
    pt: {
      title: "Entre em Contato",
      subtitle: "Adoraríamos ouvir de você. Entre em contato com nossa equipe.",
    },
    es: {
      title: "Contáctenos",
      subtitle: "Nos encantaría saber de usted. Póngase en contacto con nuestro equipo.",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ContactForm currentLanguage={currentLanguage} />
        </div>
      </section>
    </div>
  );
}
