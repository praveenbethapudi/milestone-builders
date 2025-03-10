import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type FloorPlanCarouselProps = {
  plans: {
    unit_id: string;
    image: string;
    title: string;
    size: string;
    area: number;
    price: number;
  }[];
};

export default function FloorPlanCarousel({ plans }: FloorPlanCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
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

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);

    // Auto-scroll every 3 seconds
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 h-full p-2"
            >
              <div className="relative h-full rounded-lg overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-contain rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="text-sm">Area: {plan.area} sq.ft</p>
                  <p className="text-sm">Price: ₹{plan.price.toLocaleString('en-IN')}</p>
                  <p className="text-xs">Unit: {plan.unit_id}</p>
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