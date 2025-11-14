import { ReportsSection } from "@/components/ReportsSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import type { Report } from "@shared/schema";

interface InvestorsProps {
  currentLanguage: string;
}

export default function Investors({ currentLanguage }: InvestorsProps) {
  const content = {
    en: {
      title: "Investor Relations",
      subtitle: "Transparency and value creation for our stakeholders",
      financialTitle: "Financial Performance",
      financialDescription: "Consistent growth and sustainable returns",
      metrics: [
        { label: "Annual Revenue", value: "$250M", icon: DollarSign },
        { label: "YoY Growth", value: "+18%", icon: TrendingUp },
        { label: "ROI", value: "22%", icon: BarChart3 },
        { label: "Stakeholders", value: "500+", icon: Users },
      ],
      whyInvestTitle: "Why Invest With Us",
      whyInvestItems: [
        {
          title: "Proven Track Record",
          description: "Over 20 years of consistent growth and profitability in the mining sector.",
        },
        {
          title: "Sustainable Practices",
          description: "Environmental responsibility drives long-term value and reduces regulatory risks.",
        },
        {
          title: "Transparent Governance",
          description: "Regular reporting, open communication, and accountable leadership.",
        },
        {
          title: "Diversified Portfolio",
          description: "Multiple mineral types and geographic locations reduce investment risk.",
        },
      ],
    },
    pt: {
      title: "Relações com Investidores",
      subtitle: "Transparência e criação de valor para nossos stakeholders",
      financialTitle: "Desempenho Financeiro",
      financialDescription: "Crescimento consistente e retornos sustentáveis",
      metrics: [
        { label: "Receita Anual", value: "$250M", icon: DollarSign },
        { label: "Crescimento Anual", value: "+18%", icon: TrendingUp },
        { label: "ROI", value: "22%", icon: BarChart3 },
        { label: "Stakeholders", value: "500+", icon: Users },
      ],
      whyInvestTitle: "Por Que Investir Conosco",
      whyInvestItems: [
        {
          title: "Histórico Comprovado",
          description: "Mais de 20 anos de crescimento consistente e lucratividade no setor de mineração.",
        },
        {
          title: "Práticas Sustentáveis",
          description: "Responsabilidade ambiental impulsiona valor a longo prazo e reduz riscos regulatórios.",
        },
        {
          title: "Governança Transparente",
          description: "Relatórios regulares, comunicação aberta e liderança responsável.",
        },
        {
          title: "Portfólio Diversificado",
          description: "Múltiplos tipos de minerais e localizações geográficas reduzem risco de investimento.",
        },
      ],
    },
    es: {
      title: "Relaciones con Inversores",
      subtitle: "Transparencia y creación de valor para nuestros stakeholders",
      financialTitle: "Desempeño Financiero",
      financialDescription: "Crecimiento consistente y retornos sostenibles",
      metrics: [
        { label: "Ingresos Anuales", value: "$250M", icon: DollarSign },
        { label: "Crecimiento Anual", value: "+18%", icon: TrendingUp },
        { label: "ROI", value: "22%", icon: BarChart3 },
        { label: "Stakeholders", value: "500+", icon: Users },
      ],
      whyInvestTitle: "Por Qué Invertir con Nosotros",
      whyInvestItems: [
        {
          title: "Historial Comprobado",
          description: "Más de 20 años de crecimiento consistente y rentabilidad en el sector minero.",
        },
        {
          title: "Prácticas Sostenibles",
          description: "La responsabilidad ambiental impulsa valor a largo plazo y reduce riesgos regulatorios.",
        },
        {
          title: "Gobernanza Transparente",
          description: "Informes regulares, comunicación abierta y liderazgo responsable.",
        },
        {
          title: "Portafolio Diversificado",
          description: "Múltiples tipos de minerales y ubicaciones geográficas reducen riesgo de inversión.",
        },
      ],
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const reports: Report[] = [
    {
      id: "1",
      title: currentLanguage === "pt" ? "Relatório Anual 2024" : currentLanguage === "es" ? "Informe Anual 2024" : "Annual Report 2024",
      category: "financial",
      fileSize: "2.4 MB",
      downloadUrl: "#",
      year: 2024,
      description: currentLanguage === "pt" ? "Desempenho financeiro completo e perspectivas" : currentLanguage === "es" ? "Desempeño financiero completo y perspectivas" : "Comprehensive financial performance and outlook",
    },
    {
      id: "2",
      title: currentLanguage === "pt" ? "Relatório de Sustentabilidade 2024" : currentLanguage === "es" ? "Informe de Sostenibilidad 2024" : "Sustainability Report 2024",
      category: "environmental",
      fileSize: "1.8 MB",
      downloadUrl: "#",
      year: 2024,
      description: currentLanguage === "pt" ? "Iniciativas ambientais e métricas de impacto" : currentLanguage === "es" ? "Iniciativas ambientales y métricas de impacto" : "Environmental initiatives and impact metrics",
    },
    {
      id: "3",
      title: currentLanguage === "pt" ? "Relatório de Impacto Social 2024" : currentLanguage === "es" ? "Informe de Impacto Social 2024" : "Social Impact Report 2024",
      category: "social",
      fileSize: "1.5 MB",
      downloadUrl: "#",
      year: 2024,
      description: currentLanguage === "pt" ? "Engajamento comunitário e desenvolvimento social" : currentLanguage === "es" ? "Compromiso comunitario y desarrollo social" : "Community engagement and social development",
    },
    {
      id: "4",
      title: currentLanguage === "pt" ? "Resultados Q3 2024" : currentLanguage === "es" ? "Resultados Q3 2024" : "Q3 2024 Results",
      category: "financial",
      fileSize: "980 KB",
      downloadUrl: "#",
      year: 2024,
      description: currentLanguage === "pt" ? "Desempenho financeiro trimestral" : currentLanguage === "es" ? "Desempeño financiero trimestral" : "Quarterly financial performance",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-investors-title">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-investors-subtitle">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-financial-title">
              {t.financialTitle}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-financial-description">
              {t.financialDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center hover-elevate" data-testid={`card-metric-${index}`}>
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold mb-2" data-testid={`text-metric-value-${index}`}>
                      {metric.value}
                    </p>
                    <p className="text-muted-foreground" data-testid={`text-metric-label-${index}`}>
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why Invest */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-why-invest-title">
              {t.whyInvestTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.whyInvestItems.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-why-invest-${index}`}>
                  <CardHeader>
                    <CardTitle data-testid={`text-why-invest-item-title-${index}`}>
                      {item.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-why-invest-item-description-${index}`}>
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Reports */}
          <ReportsSection reports={reports} currentLanguage={currentLanguage} />
        </div>
      </section>
    </div>
  );
}
