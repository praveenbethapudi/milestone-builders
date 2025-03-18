import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { motion, AnimatePresence } from 'framer-motion';
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
import OptimizedImage from "./optimized-image";

interface FloorPlan {
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
}

interface FloorPlanCarouselProps {
  plans: FloorPlan[];
  onUnitClick?: (unit: FloorPlan) => void;
}

interface DetailedViewProps {
  unit: FloorPlan;
  onClose: () => void;
}

function DetailedView({ unit, onClose }: DetailedViewProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">{unit.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <OptimizedImage
                src={unit.image}
                alt={unit.title}
                className="w-full rounded-lg"
                priority
              />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-primary" />
                  <span>{unit.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span>{unit.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-primary" />
                  <span>{unit.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <span>{unit.face} Facing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Block {unit.block}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Floor {unit.floor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-primary" />
                  <span>{unit.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{unit.available}</span>
                </div>
              </div>

              {unit.description && (
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{unit.description}</p>
                </div>
              )}

              {unit.features && unit.features.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {unit.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FloorPlanCarousel({ plans, onUnitClick }: FloorPlanCarouselProps) {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (plans.length === 0) {
    return <div className="text-center p-4">No units available for the selected criteria.</div>;
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={`flex ${plans.length <= 3 ? 'justify-center' : ''}`}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="relative flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 p-1 cursor-pointer"
              onClick={() => onUnitClick?.(plan)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <OptimizedImage 
                  src={plan.image} 
                  alt={`Floor plan ${plan.unit_id}`}
                  priority={index === 0}
                  className="w-full rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
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
            </motion.div>
          ))}
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function App() {
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<FloorPlan | null>(null);

  const handleUnitClick = (unit: FloorPlan) => {
    setSelectedUnit(unit);
    setShowDetailedView(true);
  };

  const handleCloseDetailedView = () => {
    setShowDetailedView(false);
  };

  const examplePlans: FloorPlan[] = [
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
  ];

  return (
    <div>
      <FloorPlanCarousel plans={examplePlans} onUnitClick={handleUnitClick} />
      {showDetailedView && selectedUnit && (
        <DetailedView unit={selectedUnit} onClose={handleCloseDetailedView} />
      )}
    </div>
  );
}

export { App, DetailedView };