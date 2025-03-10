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
    description?: string;
    features?: string[];
  }[];
  onUnitClick?: (unit: any) => void;
};

export default function FloorPlanCarousel({ plans, onUnitClick }: FloorPlanCarouselProps) {
  // Calculate slides per view based on screen size and number of plans
  const getSlidesPerView = () => {
    if (plans.length === 0) return 1;

    const breakpoints = {
      sm: { minWidth: 640, slides: Math.min(2, plans.length) },
      lg: { minWidth: 1024, slides: Math.min(3, plans.length) }
    };

    return {
      slidesToScroll: 1,
      breakpoints: {
        [`(min-width: ${breakpoints.sm.minWidth}px)`]: { slidesToScroll: breakpoints.sm.slides },
        [`(min-width: ${breakpoints.lg.minWidth}px)`]: { slidesToScroll: breakpoints.lg.slides }
      }
    };
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: plans.length > 1,
    ...getSlidesPerView()
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

    // Auto-scroll every 5 seconds if more than one plan
    let autoplayInterval: NodeJS.Timeout | null = null;
    if (plans.length > 1) {
      autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    }

    return () => {
      emblaApi.off('select', onSelect);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect, plans.length]);

  if (plans.length === 0) {
    return <div className="text-center p-4">No units available for the selected criteria.</div>;
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={`flex ${plans.length <= 3 ? 'justify-center' : ''}`}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-1 cursor-pointer"
              onClick={() => onUnitClick?.(plan)}
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

      {plans.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}

type DetailedViewProps = {
  unit: any;
  onClose: () => void;
};

const DetailedView: React.FC<DetailedViewProps> = ({ unit, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <button className="absolute top-2 right-2" onClick={onClose}>
          &times;
        </button>
        <div className="flex">
          <img src={unit.image} alt={`Unit ${unit.unit_id}`} className="w-48 h-48 rounded-md object-cover mr-4" />
          <div>
            <h2>Unit {unit.unit_id}</h2>
            <p><strong>Description:</strong> {unit.description || 'No description provided'}</p>
            <p><strong>Features:</strong> {unit.features?.join(', ') || 'No features provided'}</p>
            {/* Add other details here */}
            <p>Size: {unit.size}</p>
            <p>Area: {unit.area} sq.ft</p>
            <p>Price: {unit.price.toLocaleString('en-IN')}</p>
            <p>Block: {unit.block}</p>
            <p>Floor: {unit.floor}</p>
            <p>Face: {unit.face}</p>
            <p>Bedrooms: {unit.bedrooms}</p>
            <p>Bathrooms: {unit.bathrooms}</p>
            <p>Balcony: {unit.balcony}</p>
            <p>Availability: {unit.available}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<any>(null);

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    setShowDetailedView(true);
  };

  const handleCloseDetailedView = () => {
    setShowDetailedView(false);
  };

  const examplePlans = [
    // Add your plan data here
    {
      unit_id: 'A101',
      image: '/path/to/image1.jpg',
      title: 'Unit A101',
      size: '1000 sq ft',
      area: 1000,
      price: 10000000,
      block: 'A',
      floor: '1',
      face: 'East',
      bedrooms: 2,
      bathrooms: 2,
      balcony: 1,
      available: 'Yes',
      description: 'A spacious 2BHK unit with a balcony.',
      features: ['AC', 'Modular Kitchen', 'Balcony']
    },
    {
      unit_id: 'B202',
      image: '/path/to/image2.jpg',
      title: 'Unit B202',
      size: '1200 sq ft',
      area: 1200,
      price: 12000000,
      block: 'B',
      floor: '2',
      face: 'West',
      bedrooms: 3,
      bathrooms: 2,
      balcony: 2,
      available: 'Yes',
      description: 'A large 3BHK unit with two balconies.',
      features: ['AC', 'Modular Kitchen', 'Balcony', 'Parking']
    }
    // Add more plans...
  ];

  return (
    <div>
      <FloorPlanCarousel plans={examplePlans} onUnitClick={handleUnitClick} />
      {showDetailedView && <DetailedView unit={selectedUnit} onClose={handleCloseDetailedView} />}
    </div>
  );
};


export { App, DetailedView };