import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

import teamImage from "@assets/generated_images/Team_meeting_boardroom_178135e7.png";
import facilityImage from "@assets/generated_images/Mining_facility_aerial_view_253cb8d0.png";

interface AboutProps {
  currentLanguage: string;
}

export default function About({ currentLanguage }: AboutProps) {
  const content = {
    en: {
      title: "About Global Mining Cooperative",
      subtitle: "Leading the industry with sustainable practices and innovation",
      missionTitle: "Our Mission",
      missionText: "To extract valuable minerals responsibly while creating lasting value for our members, stakeholders, and the communities we serve. We are committed to excellence, sustainability, and transparency in everything we do.",
      visionTitle: "Our Vision",
      visionText: "To be the world's most trusted and sustainable mining cooperative, setting industry standards for environmental stewardship, social responsibility, and operational excellence.",
      valuesTitle: "Our Values",
      values: [
        {
          icon: Users,
          title: "Community First",
          description: "We prioritize the well-being of our cooperative members and local communities.",
        },
        {
          icon: Target,
          title: "Sustainability",
          description: "Environmental responsibility guides every decision we make.",
        },
        {
          icon: Award,
          title: "Excellence",
          description: "We maintain the highest standards in safety, quality, and operations.",
        },
        {
          icon: Globe,
          title: "Transparency",
          description: "Open communication and accountability to all our stakeholders.",
        },
      ],
      historyTitle: "Our History",
      historyText: "Founded over two decades ago by a group of visionary mining professionals, Global Mining Cooperative has grown from a small regional operation to an international leader in responsible mining. Our journey has been marked by continuous innovation, unwavering commitment to sustainability, and deep respect for the communities we serve.",
      teamTitle: "Expert Team",
      teamText: "Our success is driven by the dedication and expertise of our 500+ cooperative members and employees who bring decades of combined experience in mining, environmental science, and community development.",
    },
    pt: {
      title: "Sobre a Cooperativa de Mineração Global",
      subtitle: "Liderando a indústria com práticas sustentáveis e inovação",
      missionTitle: "Nossa Missão",
      missionText: "Extrair minerais valiosos de forma responsável enquanto criamos valor duradouro para nossos membros, stakeholders e as comunidades que servimos. Estamos comprometidos com excelência, sustentabilidade e transparência em tudo o que fazemos.",
      visionTitle: "Nossa Visão",
      visionText: "Ser a cooperativa de mineração mais confiável e sustentável do mundo, estabelecendo padrões da indústria para gestão ambiental, responsabilidade social e excelência operacional.",
      valuesTitle: "Nossos Valores",
      values: [
        {
          icon: Users,
          title: "Comunidade em Primeiro Lugar",
          description: "Priorizamos o bem-estar de nossos membros cooperados e comunidades locais.",
        },
        {
          icon: Target,
          title: "Sustentabilidade",
          description: "Responsabilidade ambiental guia cada decisão que tomamos.",
        },
        {
          icon: Award,
          title: "Excelência",
          description: "Mantemos os mais altos padrões em segurança, qualidade e operações.",
        },
        {
          icon: Globe,
          title: "Transparência",
          description: "Comunicação aberta e responsabilidade para todos os nossos stakeholders.",
        },
      ],
      historyTitle: "Nossa História",
      historyText: "Fundada há mais de duas décadas por um grupo de profissionais visionários de mineração, a Cooperativa de Mineração Global cresceu de uma pequena operação regional para uma líder internacional em mineração responsável. Nossa jornada foi marcada por inovação contínua, compromisso inabalável com a sustentabilidade e profundo respeito pelas comunidades que servimos.",
      teamTitle: "Equipe Especializada",
      teamText: "Nosso sucesso é impulsionado pela dedicação e expertise de nossos mais de 500 membros cooperados e funcionários que trazem décadas de experiência combinada em mineração, ciência ambiental e desenvolvimento comunitário.",
    },
    es: {
      title: "Sobre la Cooperativa Minera Global",
      subtitle: "Liderando la industria con prácticas sostenibles e innovación",
      missionTitle: "Nuestra Misión",
      missionText: "Extraer minerales valiosos de manera responsable mientras creamos valor duradero para nuestros miembros, stakeholders y las comunidades que servimos. Estamos comprometidos con la excelencia, sostenibilidad y transparencia en todo lo que hacemos.",
      visionTitle: "Nuestra Visión",
      visionText: "Ser la cooperativa minera más confiable y sostenible del mundo, estableciendo estándares de la industria para gestión ambiental, responsabilidad social y excelencia operacional.",
      valuesTitle: "Nuestros Valores",
      values: [
        {
          icon: Users,
          title: "Comunidad Primero",
          description: "Priorizamos el bienestar de nuestros miembros cooperativos y comunidades locales.",
        },
        {
          icon: Target,
          title: "Sostenibilidad",
          description: "La responsabilidad ambiental guía cada decisión que tomamos.",
        },
        {
          icon: Award,
          title: "Excelencia",
          description: "Mantenemos los más altos estándares en seguridad, calidad y operaciones.",
        },
        {
          icon: Globe,
          title: "Transparencia",
          description: "Comunicación abierta y responsabilidad para todos nuestros stakeholders.",
        },
      ],
      historyTitle: "Nuestra Historia",
      historyText: "Fundada hace más de dos décadas por un grupo de profesionales visionarios de la minería, la Cooperativa Minera Global ha crecido de una pequeña operación regional a un líder internacional en minería responsable. Nuestro viaje ha estado marcado por innovación continua, compromiso inquebrantable con la sostenibilidad y profundo respeto por las comunidades que servimos.",
      teamTitle: "Equipo Experto",
      teamText: "Nuestro éxito es impulsado por la dedicación y experiencia de nuestros más de 500 miembros cooperativos y empleados que aportan décadas de experiencia combinada en minería, ciencia ambiental y desarrollo comunitario.",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-about-subtitle">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="hover-elevate" data-testid="card-mission">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4" data-testid="text-mission-title">
                  {t.missionTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-description">
                  {t.missionText}
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate" data-testid="card-vision">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4" data-testid="text-vision-title">
                  {t.visionTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-vision-description">
                  {t.visionText}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-values-title">
              {t.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover-elevate" data-testid={`card-value-${index}`}>
                    <CardContent className="pt-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2" data-testid={`text-value-title-${index}`}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* History */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-history-title">
                {t.historyTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-history-description">
                {t.historyText}
              </p>
            </div>
            <div className="rounded-md overflow-hidden">
              <img
                src={facilityImage}
                alt="Mining facility"
                className="w-full h-auto object-cover"
                data-testid="img-facility"
              />
            </div>
          </div>

          {/* Team */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-md overflow-hidden">
              <img
                src={teamImage}
                alt="Our team"
                className="w-full h-auto object-cover"
                data-testid="img-team"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-team-title">
                {t.teamTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-team-description">
                {t.teamText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
