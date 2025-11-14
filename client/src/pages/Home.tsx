import { HeroCarousel } from "@/components/HeroCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Leaf, Shield } from "lucide-react";
import { Link } from "wouter";

import heroImage1 from "@assets/generated_images/Mining_facility_aerial_view_253cb8d0.png";
import heroImage2 from "@assets/generated_images/Team_meeting_boardroom_178135e7.png";
import heroImage3 from "@assets/generated_images/Sustainability_reforestation_project_c32f4260.png";
import heroImage4 from "@assets/generated_images/Mineral_products_showcase_a5690e1c.png";
import heroImage5 from "@assets/generated_images/Modern_mining_technology_ca701f58.png";
import testimonial1 from "@assets/generated_images/Testimonial_portrait_stakeholder_be686177.png";
import testimonial2 from "@assets/generated_images/Investor_portrait_professional_4d4f36d5.png";
import testimonial3 from "@assets/generated_images/Community_member_portrait_33db9d20.png";

interface HomeProps {
  currentLanguage: string;
}

export default function Home({ currentLanguage }: HomeProps) {
  const content = {
    en: {
      heroSlides: [
        {
          title: "Building a Sustainable Future",
          subtitle: "Leading the mining industry with responsible practices and innovative technology",
          cta: { text: "Learn More", link: "/about" },
        },
        {
          title: "Trusted by Investors Worldwide",
          subtitle: "Delivering consistent returns while maintaining environmental responsibility",
          cta: { text: "Investor Relations", link: "/investors" },
        },
        {
          title: "Environmental Stewardship",
          subtitle: "Committed to restoring ecosystems and protecting our planet for future generations",
          cta: { text: "Our Sustainability", link: "/sustainability" },
        },
        {
          title: "Quality Products, Global Reach",
          subtitle: "Extracting and refining premium minerals for industries worldwide",
          cta: { text: "View Products", link: "/products" },
        },
        {
          title: "Innovation Drives Excellence",
          subtitle: "Leveraging cutting-edge technology to maximize efficiency and safety",
          cta: { text: "Explore Technology", link: "/about" },
        },
      ],
      aboutTitle: "About Global Mining Cooperative",
      aboutText: "We are a leading mining cooperative committed to sustainable extraction practices, environmental responsibility, and creating value for our stakeholders. With over two decades of experience, we've established ourselves as industry leaders in responsible mining.",
      aboutCta: "Learn More About Us",
      statsTitle: "Our Impact",
      stats: [
        { value: "20+", label: "Years of Experience", icon: TrendingUp },
        { value: "500+", label: "Cooperative Members", icon: Users },
        { value: "95%", label: "Environmental Compliance", icon: Leaf },
        { value: "100%", label: "Safety Record", icon: Shield },
      ],
      productsTitle: "Featured Products",
      productsDescription: "Discover our range of high-quality minerals",
      viewAllProducts: "View All Products",
      newsTitle: "Latest News",
      newsDescription: "Stay updated with our recent developments",
      viewAllNews: "View All News",
      testimonialsTitle: "What Our Partners Say",
      testimonialsDescription: "Trusted by stakeholders worldwide",
      ctaTitle: "Ready to Partner With Us?",
      ctaDescription: "Join us in building a sustainable future through responsible mining",
      ctaButton: "Get in Touch",
    },
    pt: {
      heroSlides: [
        {
          title: "Construindo um Futuro Sustentável",
          subtitle: "Liderando a indústria de mineração com práticas responsáveis e tecnologia inovadora",
          cta: { text: "Saiba Mais", link: "/about" },
        },
        {
          title: "Confiável por Investidores Globalmente",
          subtitle: "Entregando retornos consistentes mantendo responsabilidade ambiental",
          cta: { text: "Relações com Investidores", link: "/investors" },
        },
        {
          title: "Gestão Ambiental",
          subtitle: "Comprometidos em restaurar ecossistemas e proteger nosso planeta para gerações futuras",
          cta: { text: "Nossa Sustentabilidade", link: "/sustainability" },
        },
        {
          title: "Produtos de Qualidade, Alcance Global",
          subtitle: "Extraindo e refinando minerais premium para indústrias em todo o mundo",
          cta: { text: "Ver Produtos", link: "/products" },
        },
        {
          title: "Inovação Impulsiona Excelência",
          subtitle: "Aproveitando tecnologia de ponta para maximizar eficiência e segurança",
          cta: { text: "Explorar Tecnologia", link: "/about" },
        },
      ],
      aboutTitle: "Sobre a Cooperativa de Mineração Global",
      aboutText: "Somos uma cooperativa de mineração líder comprometida com práticas de extração sustentável, responsabilidade ambiental e criação de valor para nossos stakeholders. Com mais de duas décadas de experiência, nos estabelecemos como líderes do setor em mineração responsável.",
      aboutCta: "Saiba Mais Sobre Nós",
      statsTitle: "Nosso Impacto",
      stats: [
        { value: "20+", label: "Anos de Experiência", icon: TrendingUp },
        { value: "500+", label: "Membros Cooperados", icon: Users },
        { value: "95%", label: "Conformidade Ambiental", icon: Leaf },
        { value: "100%", label: "Recorde de Segurança", icon: Shield },
      ],
      productsTitle: "Produtos Destacados",
      productsDescription: "Descubra nossa gama de minerais de alta qualidade",
      viewAllProducts: "Ver Todos os Produtos",
      newsTitle: "Últimas Notícias",
      newsDescription: "Fique atualizado com nossos desenvolvimentos recentes",
      viewAllNews: "Ver Todas as Notícias",
      testimonialsTitle: "O Que Nossos Parceiros Dizem",
      testimonialsDescription: "Confiável por stakeholders em todo o mundo",
      ctaTitle: "Pronto para Fazer Parceria Conosco?",
      ctaDescription: "Junte-se a nós na construção de um futuro sustentável através da mineração responsável",
      ctaButton: "Entre em Contato",
    },
    es: {
      heroSlides: [
        {
          title: "Construyendo un Futuro Sostenible",
          subtitle: "Liderando la industria minera con prácticas responsables y tecnología innovadora",
          cta: { text: "Saber Más", link: "/about" },
        },
        {
          title: "Confiable por Inversores a Nivel Mundial",
          subtitle: "Entregando rendimientos consistentes mientras mantenemos responsabilidad ambiental",
          cta: { text: "Relaciones con Inversores", link: "/investors" },
        },
        {
          title: "Gestión Ambiental",
          subtitle: "Comprometidos a restaurar ecosistemas y proteger nuestro planeta para futuras generaciones",
          cta: { text: "Nuestra Sostenibilidad", link: "/sustainability" },
        },
        {
          title: "Productos de Calidad, Alcance Global",
          subtitle: "Extrayendo y refinando minerales premium para industrias en todo el mundo",
          cta: { text: "Ver Productos", link: "/products" },
        },
        {
          title: "La Innovación Impulsa la Excelencia",
          subtitle: "Aprovechando tecnología de vanguardia para maximizar eficiencia y seguridad",
          cta: { text: "Explorar Tecnología", link: "/about" },
        },
      ],
      aboutTitle: "Sobre la Cooperativa Minera Global",
      aboutText: "Somos una cooperativa minera líder comprometida con prácticas de extracción sostenible, responsabilidad ambiental y creación de valor para nuestros stakeholders. Con más de dos décadas de experiencia, nos hemos establecido como líderes del sector en minería responsable.",
      aboutCta: "Saber Más Sobre Nosotros",
      statsTitle: "Nuestro Impacto",
      stats: [
        { value: "20+", label: "Años de Experiencia", icon: TrendingUp },
        { value: "500+", label: "Miembros Cooperativos", icon: Users },
        { value: "95%", label: "Cumplimiento Ambiental", icon: Leaf },
        { value: "100%", label: "Récord de Seguridad", icon: Shield },
      ],
      productsTitle: "Productos Destacados",
      productsDescription: "Descubra nuestra gama de minerales de alta calidad",
      viewAllProducts: "Ver Todos los Productos",
      newsTitle: "Últimas Noticias",
      newsDescription: "Manténgase actualizado con nuestros desarrollos recientes",
      viewAllNews: "Ver Todas las Noticias",
      testimonialsTitle: "Lo Que Dicen Nuestros Socios",
      testimonialsDescription: "Confiable por stakeholders en todo el mundo",
      ctaTitle: "¿Listo para Asociarse con Nosotros?",
      ctaDescription: "Únase a nosotros en la construcción de un futuro sostenible a través de la minería responsable",
      ctaButton: "Contáctenos",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const slides = [
    { image: heroImage1, ...t.heroSlides[0] },
    { image: heroImage2, ...t.heroSlides[1] },
    { image: heroImage3, ...t.heroSlides[2] },
    { image: heroImage4, ...t.heroSlides[3] },
    { image: heroImage5, ...t.heroSlides[4] },
  ];

  const testimonials = [
    {
      id: "1",
      name: "Sarah Mitchell",
      role: "Investment Director",
      company: "Global Fund Partners",
      quote: currentLanguage === "pt" 
        ? "Uma parceria excepcional. Seu compromisso com a sustentabilidade e transparência nos tornou investidores confiantes." 
        : currentLanguage === "es"
        ? "Una asociación excepcional. Su compromiso con la sostenibilidad y transparencia nos ha convertido en inversores confiados."
        : "An exceptional partnership. Their commitment to sustainability and transparency has made us confident investors.",
      image: testimonial1,
    },
    {
      id: "2",
      name: "Dr. James Chen",
      role: "Environmental Consultant",
      company: "EcoTech Solutions",
      quote: currentLanguage === "pt"
        ? "As práticas ambientais da cooperativa estabelecem o padrão ouro para a indústria de mineração."
        : currentLanguage === "es"
        ? "Las prácticas ambientales de la cooperativa establecen el estándar de oro para la industria minera."
        : "The cooperative's environmental practices set the gold standard for the mining industry.",
      image: testimonial2,
    },
    {
      id: "3",
      name: "Maria Rodriguez",
      role: "Community Leader",
      company: "Local Development Council",
      quote: currentLanguage === "pt"
        ? "Eles realmente se importam com as comunidades locais. Suas iniciativas sociais fizeram uma diferença tangível."
        : currentLanguage === "es"
        ? "Realmente se preocupan por las comunidades locales. Sus iniciativas sociales han marcado una diferencia tangible."
        : "They genuinely care about local communities. Their social initiatives have made a tangible difference.",
      image: testimonial3,
    },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel slides={slides} />

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-home-about-title">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-home-about-description">
              {t.aboutText}
            </p>
            <Link href="/about">
              <Button size="lg" data-testid="button-home-about-cta">
                {t.aboutCta}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-home-stats-title">
            {t.statsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-4xl font-bold mb-2" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-home-testimonials-title">
              {t.testimonialsTitle}
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-home-testimonials-description">
              {t.testimonialsDescription}
            </p>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-home-cta-title">
            {t.ctaTitle}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90" data-testid="text-home-cta-description">
            {t.ctaDescription}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-primary"
              data-testid="button-home-cta"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
