import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type FloorPlanCarouselProps = {
  plans: {
    image: string;
    title: string;
    size: string;
    units: string[];
  }[];
};

export default function FloorPlanCarousel({ plans }: FloorPlanCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="p-4 bg-card rounded-lg shadow-md m-2">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-auto object-contain"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="text-muted-foreground">{plan.size}</p>
                  <p className="text-sm">Units: {plan.units.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
