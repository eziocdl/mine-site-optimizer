import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Report } from "@shared/schema";

interface ReportsSectionProps {
  reports: Report[];
  currentLanguage: string;
}

export function ReportsSection({ reports, currentLanguage }: ReportsSectionProps) {
  const content = {
    en: {
      title: "Reports & Documentation",
      description: "Access our comprehensive reports on social, environmental, and financial performance",
      all: "All Reports",
      social: "Social",
      environmental: "Environmental",
      financial: "Financial",
      download: "Download",
    },
    pt: {
      title: "Relatórios e Documentação",
      description: "Acesse nossos relatórios completos sobre desempenho social, ambiental e financeiro",
      all: "Todos os Relatórios",
      social: "Social",
      environmental: "Ambiental",
      financial: "Financeiro",
      download: "Baixar",
    },
    es: {
      title: "Informes y Documentación",
      description: "Acceda a nuestros informes completos sobre desempeño social, ambiental y financiero",
      all: "Todos los Informes",
      social: "Social",
      environmental: "Ambiental",
      financial: "Financiero",
      download: "Descargar",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const categoryColors = {
    social: "bg-chart-1 text-white",
    environmental: "bg-chart-2 text-white",
    financial: "bg-chart-3 text-white",
  };

  const filteredReports = (category: Report["category"] | "all") => {
    return category === "all" ? reports : reports.filter(r => r.category === category);
  };

  const ReportCard = ({ report }: { report: Report }) => (
    <Card className="hover-elevate" data-testid={`card-report-${report.id}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2" data-testid={`text-report-title-${report.id}`}>
              {report.title}
            </CardTitle>
            <CardDescription data-testid={`text-report-description-${report.id}`}>
              {report.description}
            </CardDescription>
          </div>
          <Badge className={categoryColors[report.category]} data-testid={`badge-report-category-${report.id}`}>
            {t[report.category as keyof typeof t]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span data-testid={`text-report-size-${report.id}`}>{report.fileSize}</span>
            <span>•</span>
            <span data-testid={`text-report-year-${report.id}`}>{report.year}</span>
          </div>
          <Button size="sm" data-testid={`button-download-report-${report.id}`}>
            <Download className="h-4 w-4 mr-2" />
            {t.download}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-reports-title">
          {t.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-reports-description">
          {t.description}
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2" data-testid="tabs-report-categories">
          <TabsTrigger value="all" data-testid="tab-reports-all">{t.all}</TabsTrigger>
          <TabsTrigger value="social" data-testid="tab-reports-social">{t.social}</TabsTrigger>
          <TabsTrigger value="environmental" data-testid="tab-reports-environmental">{t.environmental}</TabsTrigger>
          <TabsTrigger value="financial" data-testid="tab-reports-financial">{t.financial}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports("all").map(report => <ReportCard key={report.id} report={report} />)}
        </TabsContent>

        <TabsContent value="social" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports("social").map(report => <ReportCard key={report.id} report={report} />)}
        </TabsContent>

        <TabsContent value="environmental" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports("environmental").map(report => <ReportCard key={report.id} report={report} />)}
        </TabsContent>

        <TabsContent value="financial" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports("financial").map(report => <ReportCard key={report.id} report={report} />)}
        </TabsContent>
      </Tabs>
    </section>
  );
}
