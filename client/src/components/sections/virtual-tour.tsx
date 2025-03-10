
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TourItem {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  panoramaUrl?: string;
}

const tourItems: TourItem[] = [
  {
    title: "Lobby Entrance",
    description: "Experience the grand entrance and welcoming lobby area",
    thumbnailUrl: "/images/building-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
  },
  {
    title: "Swimming Pool",
    description: "Tour our stunning infinity pool nestled in beautiful landscapes",
    thumbnailUrl: "/images/amenities/swimming-pool.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
  },
  {
    title: "Sample Apartment",
    description: "Walk through our fully furnished model apartment",
    thumbnailUrl: "/images/building-3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
  }
];

export default function VirtualTour() {
  const [selectedTour, setSelectedTour] = useState<TourItem | null>(null);

  return (
    <section id="virtual-tour" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Virtual Tours</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Experience our property from the comfort of your home with our immersive virtual tours and video walkthroughs.
          </p>
          
          {selectedTour ? (
            <div className="mb-8">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video w-full">
                  <iframe 
                    src={selectedTour.videoUrl} 
                    title={selectedTour.title}
                    className="w-full h-full" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{selectedTour.title}</h3>
                  <p className="text-muted-foreground mb-4">{selectedTour.description}</p>
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedTour(null)}
                  >
                    Back to Gallery
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tourItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedTour(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.thumbnailUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button 
                      className="mt-4 w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTour(item);
                      }}
                    >
                      Watch Tour
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
