import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

import newsImage1 from "@assets/generated_images/Sustainability_reforestation_project_c32f4260.png";
import newsImage2 from "@assets/generated_images/Modern_mining_technology_ca701f58.png";
import newsImage3 from "@assets/generated_images/Team_meeting_boardroom_178135e7.png";

interface NewsProps {
  currentLanguage: string;
}

export default function News({ currentLanguage }: NewsProps) {
  const content = {
    en: {
      title: "Latest News",
      subtitle: "Stay informed about our developments and initiatives",
      articles: [
        {
          title: "Record-Breaking Reforestation Initiative Completed",
          excerpt: "Our cooperative has successfully planted 100,000 trees across reclaimed mining sites, exceeding our annual sustainability goals.",
          date: "2024-01-15",
          category: "Sustainability",
          image: newsImage1,
        },
        {
          title: "New Technology Increases Efficiency by 30%",
          excerpt: "Implementation of AI-powered equipment monitoring has significantly improved operational efficiency while reducing environmental impact.",
          date: "2024-01-10",
          category: "Technology",
          image: newsImage2,
        },
        {
          title: "Q4 Results Exceed Investor Expectations",
          excerpt: "Strong financial performance driven by sustainable practices and strategic partnerships delivers value to stakeholders.",
          date: "2024-01-05",
          category: "Financial",
          image: newsImage3,
        },
      ],
    },
    pt: {
      title: "Últimas Notícias",
      subtitle: "Mantenha-se informado sobre nossos desenvolvimentos e iniciativas",
      articles: [
        {
          title: "Iniciativa de Reflorestamento Recorde Concluída",
          excerpt: "Nossa cooperativa plantou com sucesso 100.000 árvores em áreas de mineração recuperadas, superando nossas metas anuais de sustentabilidade.",
          date: "2024-01-15",
          category: "Sustentabilidade",
          image: newsImage1,
        },
        {
          title: "Nova Tecnologia Aumenta Eficiência em 30%",
          excerpt: "Implementação de monitoramento de equipamentos com IA melhorou significativamente a eficiência operacional enquanto reduz impacto ambiental.",
          date: "2024-01-10",
          category: "Tecnologia",
          image: newsImage2,
        },
        {
          title: "Resultados do Q4 Superam Expectativas dos Investidores",
          excerpt: "Forte desempenho financeiro impulsionado por práticas sustentáveis e parcerias estratégicas entrega valor aos stakeholders.",
          date: "2024-01-05",
          category: "Financeiro",
          image: newsImage3,
        },
      ],
    },
    es: {
      title: "Últimas Noticias",
      subtitle: "Manténgase informado sobre nuestros desarrollos e iniciativas",
      articles: [
        {
          title: "Iniciativa de Reforestación Récord Completada",
          excerpt: "Nuestra cooperativa ha plantado exitosamente 100,000 árboles en sitios mineros recuperados, superando nuestras metas anuales de sostenibilidad.",
          date: "2024-01-15",
          category: "Sostenibilidad",
          image: newsImage1,
        },
        {
          title: "Nueva Tecnología Aumenta Eficiencia en un 30%",
          excerpt: "La implementación de monitoreo de equipos con IA ha mejorado significativamente la eficiencia operacional mientras reduce el impacto ambiental.",
          date: "2024-01-10",
          category: "Tecnología",
          image: newsImage2,
        },
        {
          title: "Resultados del Q4 Superan Expectativas de Inversores",
          excerpt: "Fuerte desempeño financiero impulsado por prácticas sostenibles y asociaciones estratégicas entrega valor a los stakeholders.",
          date: "2024-01-05",
          category: "Financiero",
          image: newsImage3,
        },
      ],
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage === "pt" ? "pt-BR" : currentLanguage === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-news-title">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-news-subtitle">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover-elevate active-elevate-2" data-testid={`card-news-${index}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-news-${index}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge data-testid={`badge-news-category-${index}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span data-testid={`text-news-date-${index}`}>
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-news-title-${index}`}>
                    {article.title}
                  </CardTitle>
                  <CardDescription data-testid={`text-news-excerpt-${index}`}>
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
