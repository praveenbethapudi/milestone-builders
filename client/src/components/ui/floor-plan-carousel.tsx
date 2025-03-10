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
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {plans.map((plan, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div className="p-2 h-full">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-contain rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="text-sm">{plan.size}</p>
                  <p className="text-xs">Units: {plan.units.join(', ')}</p>
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