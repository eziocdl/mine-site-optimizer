import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  categories?: string[];
}

export function PhotoGallery({ images, categories = ["All"] }: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      {categories.length > 1 && (
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2" data-testid="tabs-gallery-categories">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                data-testid={`tab-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square overflow-hidden rounded-md hover-elevate active-elevate-2"
            data-testid={`button-gallery-image-${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden" data-testid="dialog-lightbox">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
                data-testid="img-lightbox-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-lightbox"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium" data-testid="text-lightbox-alt">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
