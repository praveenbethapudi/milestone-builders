import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import OptimizedImage from "./optimized-image";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const navigate = (direction: number) => {
    setCurrentIndex((current) => {
      const newIndex = current + direction;
      if (newIndex >= images.length) return 0;
      if (newIndex < 0) return images.length - 1;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <OptimizedImage
          key={currentIndex}
          src={images[currentIndex]}
          alt="Carousel image"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          priority={currentIndex === 0}
        />
      </AnimatePresence>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={() => navigate(1)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
