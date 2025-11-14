import { PhotoGallery } from "@/components/PhotoGallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplet, Recycle, TreePine } from "lucide-react";

import sustainabilityImage from "@assets/generated_images/Sustainability_reforestation_project_c32f4260.png";
import restorationImage from "@assets/generated_images/Environmental_restoration_success_2410dd21.png";
import operationsImage from "@assets/generated_images/Mining_operations_overview_09eaf537.png";

interface SustainabilityProps {
  currentLanguage: string;
}

export default function Sustainability({ currentLanguage }: SustainabilityProps) {
  const content = {
    en: {
      title: "Sustainability & Environmental Responsibility",
      subtitle: "Protecting our planet for future generations",
      commitmentTitle: "Our Environmental Commitment",
      commitmentText: "We believe that responsible mining and environmental stewardship go hand in hand. Our comprehensive sustainability program ensures that every operation minimizes environmental impact while contributing to ecosystem restoration.",
      initiatives: [
        {
          icon: TreePine,
          title: "Reforestation Projects",
          description: "Over 100,000 trees planted in reclaimed mining areas, restoring natural habitats and biodiversity.",
        },
        {
          icon: Droplet,
          title: "Water Conservation",
          description: "Advanced water recycling systems reduce consumption by 75% and prevent contamination.",
        },
        {
          icon: Recycle,
          title: "Waste Reduction",
          description: "95% of mining waste is recycled or repurposed, minimizing landfill impact.",
        },
        {
          icon: Leaf,
          title: "Carbon Neutrality",
          description: "On track to achieve carbon neutrality by 2030 through renewable energy and offset programs.",
        },
      ],
      impactTitle: "Environmental Impact",
      impactMetrics: [
        { value: "100K+", label: "Trees Planted" },
        { value: "75%", label: "Water Saved" },
        { value: "95%", label: "Waste Recycled" },
        { value: "50%", label: "Carbon Reduced" },
      ],
      galleryTitle: "Sustainability in Action",
    },
    pt: {
      title: "Sustentabilidade e Responsabilidade Ambiental",
      subtitle: "Protegendo nosso planeta para as gerações futuras",
      commitmentTitle: "Nosso Compromisso Ambiental",
      commitmentText: "Acreditamos que mineração responsável e gestão ambiental andam juntas. Nosso programa abrangente de sustentabilidade garante que cada operação minimize o impacto ambiental enquanto contribui para a restauração do ecossistema.",
      initiatives: [
        {
          icon: TreePine,
          title: "Projetos de Reflorestamento",
          description: "Mais de 100.000 árvores plantadas em áreas de mineração recuperadas, restaurando habitats naturais e biodiversidade.",
        },
        {
          icon: Droplet,
          title: "Conservação de Água",
          description: "Sistemas avançados de reciclagem de água reduzem o consumo em 75% e previnem contaminação.",
        },
        {
          icon: Recycle,
          title: "Redução de Resíduos",
          description: "95% dos resíduos de mineração são reciclados ou reaproveitados, minimizando impacto em aterros.",
        },
        {
          icon: Leaf,
          title: "Neutralidade de Carbono",
          description: "No caminho para alcançar neutralidade de carbono até 2030 através de energia renovável e programas de compensação.",
        },
      ],
      impactTitle: "Impacto Ambiental",
      impactMetrics: [
        { value: "100K+", label: "Árvores Plantadas" },
        { value: "75%", label: "Água Economizada" },
        { value: "95%", label: "Resíduos Reciclados" },
        { value: "50%", label: "Carbono Reduzido" },
      ],
      galleryTitle: "Sustentabilidade em Ação",
    },
    es: {
      title: "Sostenibilidad y Responsabilidad Ambiental",
      subtitle: "Protegiendo nuestro planeta para las generaciones futuras",
      commitmentTitle: "Nuestro Compromiso Ambiental",
      commitmentText: "Creemos que la minería responsable y la gestión ambiental van de la mano. Nuestro programa integral de sostenibilidad garantiza que cada operación minimice el impacto ambiental mientras contribuye a la restauración del ecosistema.",
      initiatives: [
        {
          icon: TreePine,
          title: "Proyectos de Reforestación",
          description: "Más de 100,000 árboles plantados en áreas mineras recuperadas, restaurando hábitats naturales y biodiversidad.",
        },
        {
          icon: Droplet,
          title: "Conservación de Agua",
          description: "Sistemas avanzados de reciclaje de agua reducen el consumo en un 75% y previenen la contaminación.",
        },
        {
          icon: Recycle,
          title: "Reducción de Residuos",
          description: "El 95% de los residuos mineros se reciclan o reutilizan, minimizando el impacto en vertederos.",
        },
        {
          icon: Leaf,
          title: "Neutralidad de Carbono",
          description: "En camino a lograr neutralidad de carbono para 2030 a través de energía renovable y programas de compensación.",
        },
      ],
      impactTitle: "Impacto Ambiental",
      impactMetrics: [
        { value: "100K+", label: "Árboles Plantados" },
        { value: "75%", label: "Agua Ahorrada" },
        { value: "95%", label: "Residuos Reciclados" },
        { value: "50%", label: "Carbono Reducido" },
      ],
      galleryTitle: "Sostenibilidad en Acción",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  const galleryImages = [
    { id: "1", src: sustainabilityImage, alt: "Reforestation project", category: "All" },
    { id: "2", src: restorationImage, alt: "Environmental restoration", category: "All" },
    { id: "3", src: operationsImage, alt: "Sustainable operations", category: "All" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground" data-testid="text-sustainability-title">
            {t.title}
          </h1>
          <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto" data-testid="text-sustainability-subtitle">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-commitment-title">
              {t.commitmentTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-commitment-description">
              {t.commitmentText}
            </p>
          </div>

          {/* Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {t.initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-initiative-${index}`}>
                  <CardHeader>
                    <Icon className="h-12 w-12 text-accent mb-4" />
                    <CardTitle data-testid={`text-initiative-title-${index}`}>
                      {initiative.title}
                    </CardTitle>
                    <CardDescription data-testid={`text-initiative-description-${index}`}>
                      {initiative.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Impact Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-impact-title">
              {t.impactTitle}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.impactMetrics.map((metric, index) => (
                <Card key={index} className="text-center bg-accent hover-elevate" data-testid={`card-impact-${index}`}>
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-accent-foreground mb-2" data-testid={`text-impact-value-${index}`}>
                      {metric.value}
                    </p>
                    <p className="text-accent-foreground/80" data-testid={`text-impact-label-${index}`}>
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-gallery-title">
              {t.galleryTitle}
            </h2>
            <PhotoGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </div>
  );
}
