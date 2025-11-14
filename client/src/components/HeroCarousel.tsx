import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export function HeroCarousel({ slides, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused, slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="carousel-hero"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          data-testid={`carousel-slide-${index}`}
        >
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
                data-testid={`text-slide-title-${index}`}
              >
                {slide.title}
              </h2>
              <p
                className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md max-w-3xl mx-auto"
                data-testid={`text-slide-subtitle-${index}`}
              >
                {slide.subtitle}
              </p>
              {slide.cta && (
                <Button
                  size="lg"
                  className="bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border"
                  asChild
                  data-testid={`button-slide-cta-${index}`}
                >
                  <a href={slide.cta.link}>{slide.cta.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white h-12 w-12"
            onClick={goToPrevious}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white h-12 w-12"
            onClick={goToNext}
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-carousel-dot-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
