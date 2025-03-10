import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './button';
import { 
  ChevronLeft, 
  ChevronRight,
  BedDouble,
  Bath,
  Maximize,
  Compass,
  Building,
  Home,
  IndianRupee,
  CheckCircle2
} from 'lucide-react';

type FloorPlanCarouselProps = {
  plans: {
    unit_id: string;
    image: string;
    title: string;
    size: string;
    area: number;
    price: number;
    block: string;
    floor: string;
    face: string;
    bedrooms: number;
    bathrooms: number;
    balcony: number;
    available: string;
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

    // Auto-scroll every 5 seconds
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-1"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={`Floor plan ${plan.unit_id}`} 
                  className="w-full object-contain rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span className="text-sm font-semibold">Unit {plan.unit_id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span className="text-xs">Floor {plan.floor}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span className="text-xs">Block {plan.block}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4" />
                      <span className="text-xs">{plan.area} sq.ft</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BedDouble className="h-4 w-4" />
                      <span className="text-xs">{plan.bedrooms} Beds</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4" />
                      <span className="text-xs">{plan.bathrooms} Baths</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      <span className="text-xs">{plan.face}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4" />
                      <span className="text-xs">{plan.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400">Available</span>
                  </div>
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