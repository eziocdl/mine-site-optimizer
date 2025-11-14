import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
}

interface VideoSectionProps {
  videos: Video[];
  currentLanguage: string;
}

export function VideoSection({ videos, currentLanguage }: VideoSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const content = {
    en: {
      title: "Video Gallery",
      description: "Explore our operations and initiatives through video",
    },
    pt: {
      title: "Galeria de Vídeos",
      description: "Explore nossas operações e iniciativas através de vídeos",
    },
    es: {
      title: "Galería de Videos",
      description: "Explore nuestras operaciones e iniciativas a través de videos",
    },
  };

  const t = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-videos-title">
          {t.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-videos-description">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group"
            data-testid={`button-video-${video.id}`}
          >
            <Card className="overflow-hidden hover-elevate active-elevate-2">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary fill-primary" />
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-left group-hover:text-primary transition-colors" data-testid={`text-video-title-${video.id}`}>
                  {video.title}
                </h3>
              </div>
            </Card>
          </button>
        ))}
      </div>

      {/* Video Player Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0" data-testid="dialog-video-player">
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="iframe-video"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
