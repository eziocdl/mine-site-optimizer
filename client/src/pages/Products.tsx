import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@assets/generated_images/Mineral_products_showcase_a5690e1c.png";

interface ProductsProps {
  currentLanguage: string;
}

export default function Products({ currentLanguage }: ProductsProps) {
  const content = {
    en: {
      title: "Our Products",
      subtitle: "High-quality minerals extracted with sustainable practices",
      products: [
        {
          name: "Premium Copper Ore",
          category: "Copper",
          description: "High-grade copper ore extracted using environmentally responsible methods. Ideal for industrial applications and manufacturing.",
          specifications: "Purity: 99.5% | Grade: A+ | Origin: Sustainable sources",
        },
        {
          name: "Refined Gold",
          category: "Precious Metals",
          description: "Ethically sourced gold refined to the highest standards. Perfect for jewelry, investment, and industrial use.",
          specifications: "Purity: 99.9% | Certification: Conflict-free | Processing: Advanced refining",
        },
        {
          name: "Iron Ore Concentrate",
          category: "Iron",
          description: "Premium iron ore concentrate for steel production. Consistent quality and reliable supply chain.",
          specifications: "Fe Content: 68% | Size: -200 mesh | Monthly capacity: 50,000 MT",
        },
        {
          name: "Silver Bullion",
          category: "Precious Metals",
          description: "Investment-grade silver produced with minimal environmental impact. Certified and traceable.",
          specifications: "Purity: 99.9% | Form: Bars & Granules | Certification: ISO compliant",
        },
        {
          name: "Zinc Concentrate",
          category: "Industrial Metals",
          description: "High-quality zinc concentrate for galvanizing and alloy production.",
          specifications: "Zn Content: 55% | Lead: <2% | Cadmium: <0.5%",
        },
        {
          name: "Nickel Ore",
          category: "Industrial Metals",
          description: "Premium nickel ore for stainless steel and battery production.",
          specifications: "Ni Content: 1.8% | Moisture: <35% | Processing: Direct shipping",
        },
      ],
    },
    pt: {
      title: "Nossos Produtos",
      subtitle: "Minerais de alta qualidade extraídos com práticas sustentáveis",
      products: [
        {
          name: "Minério de Cobre Premium",
          category: "Cobre",
          description: "Minério de cobre de alta qualidade extraído usando métodos ambientalmente responsáveis. Ideal para aplicações industriais e manufatura.",
          specifications: "Pureza: 99,5% | Grau: A+ | Origem: Fontes sustentáveis",
        },
        {
          name: "Ouro Refinado",
          category: "Metais Preciosos",
          description: "Ouro de origem ética refinado aos mais altos padrões. Perfeito para joalheria, investimento e uso industrial.",
          specifications: "Pureza: 99,9% | Certificação: Livre de conflitos | Processamento: Refino avançado",
        },
        {
          name: "Concentrado de Minério de Ferro",
          category: "Ferro",
          description: "Concentrado de minério de ferro premium para produção de aço. Qualidade consistente e cadeia de suprimentos confiável.",
          specifications: "Teor de Fe: 68% | Tamanho: -200 mesh | Capacidade mensal: 50.000 MT",
        },
        {
          name: "Barras de Prata",
          category: "Metais Preciosos",
          description: "Prata grau investimento produzida com mínimo impacto ambiental. Certificada e rastreável.",
          specifications: "Pureza: 99,9% | Forma: Barras e Grânulos | Certificação: Compatível com ISO",
        },
        {
          name: "Concentrado de Zinco",
          category: "Metais Industriais",
          description: "Concentrado de zinco de alta qualidade para galvanização e produção de ligas.",
          specifications: "Teor de Zn: 55% | Chumbo: <2% | Cádmio: <0,5%",
        },
        {
          name: "Minério de Níquel",
          category: "Metais Industriais",
          description: "Minério de níquel premium para produção de aço inoxidável e baterias.",
          specifications: "Teor de Ni: 1,8% | Umidade: <35% | Processamento: Embarque direto",
        },
      ],
    },
    es: {
      title: "Nuestros Productos",
      subtitle: "Minerales de alta calidad extraídos con prácticas sostenibles",
      products: [
        {
          name: "Mineral de Cobre Premium",
          category: "Cobre",
          description: "Mineral de cobre de alta calidad extraído usando métodos ambientalmente responsables. Ideal para aplicaciones industriales y manufactura.",
          specifications: "Pureza: 99,5% | Grado: A+ | Origen: Fuentes sostenibles",
        },
        {
          name: "Oro Refinado",
          category: "Metales Preciosos",
          description: "Oro de origen ético refinado a los más altos estándares. Perfecto para joyería, inversión y uso industrial.",
          specifications: "Pureza: 99,9% | Certificación: Libre de conflictos | Procesamiento: Refinado avanzado",
        },
        {
          name: "Concentrado de Mineral de Hierro",
          category: "Hierro",
          description: "Concentrado de mineral de hierro premium para producción de acero. Calidad consistente y cadena de suministro confiable.",
          specifications: "Contenido de Fe: 68% | Tamaño: -200 mesh | Capacidad mensual: 50,000 MT",
        },
        {
          name: "Lingotes de Plata",
          category: "Metales Preciosos",
          description: "Plata grado inversión producida con mínimo impacto ambiental. Certificada y trazable.",
          specifications: "Pureza: 99,9% | Forma: Barras y Gránulos | Certificación: Conforme a ISO",
        },
        {
          name: "Concentrado de Zinc",
          category: "Metales Industriales",
          description: "Concentrado de zinc de alta calidad para galvanización y producción de aleaciones.",
          specifications: "Contenido de Zn: 55% | Plomo: <2% | Cadmio: <0,5%",
        },
        {
          name: "Mineral de Níquel",
          category: "Metales Industriales",
          description: "Mineral de níquel premium para producción de acero inoxidable y baterías.",
          specifications: "Contenido de Ni: 1,8% | Humedad: <35% | Procesamiento: Envío directo",
        },
      ],
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-products-title">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-subtitle">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.products.map((product, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-product-${index}`}>
                <div className="aspect-video overflow-hidden rounded-t-md">
                  <img
                    src={productImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-product-${index}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl" data-testid={`text-product-name-${index}`}>
                      {product.name}
                    </CardTitle>
                    <Badge data-testid={`badge-product-category-${index}`}>
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription data-testid={`text-product-description-${index}`}>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground" data-testid={`text-product-specs-${index}`}>
                    {product.specifications}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
