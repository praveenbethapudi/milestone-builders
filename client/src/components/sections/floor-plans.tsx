import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Maximize } from "lucide-react";
import FloorPlanCarousel from "@/components/ui/floor-plan-carousel";

const blockAPlans = [
  {
    image: "/images/2bhk/block-a/A-103.webp",
    title: "A-103",
    size: "2 BHK Unit",
    area: 1116,
    units: ["203", "303", "403"]
  },
  {
    image: "/images/2bhk/block-a/A-104.webp",
    title: "A-104",
    size: "2 BHK Unit",
    area: 893,
    units: ["204", "304", "404"]
  },
  {
    image: "/images/2bhk/block-a/A-105.webp",
    title: "A-105",
    size: "2 BHK Unit",
    area: 930,
    units: ["205", "305", "405"]
  },
  {
    image: "/images/2bhk/block-a/A-106.webp",
    title: "A-106",
    size: "2 BHK Unit",
    area: 964,
    units: ["206", "306", "406"]
  },
  {
    image: "/images/2bhk/block-a/A-107.webp",
    title: "A-107",
    size: "2 BHK Unit",
    area: 983,
    units: ["207", "307", "407"]
  },
  {
    image: "/images/2bhk/block-a/A-108.webp",
    title: "A-108",
    size: "2 BHK Unit",
    area: 1115,
    units: ["208", "308", "408"]
  }
];

const blockBPlans = [
  {
    image: "/images/2bhk/block-b/B-103.webp",
    title: "B-103",
    size: "2 BHK Unit",
    area: 1111,
    units: ["203", "303", "403"]
  },
  {
    image: "/images/2bhk/block-b/B-104.webp",
    title: "B-104",
    size: "2 BHK Unit",
    area: 893,
    units: ["204", "304", "404"]
  },
  {
    image: "/images/2bhk/block-b/B-105.webp",
    title: "B-105",
    size: "2 BHK Unit",
    area: 930,
    units: ["205", "305", "405"]
  },
  {
    image: "/images/2bhk/block-b/B-106.webp",
    title: "B-106",
    size: "2 BHK Unit",
    area: 964,
    units: ["206", "306", "406"]
  },
  {
    image: "/images/2bhk/block-b/B-107.webp",
    title: "B-107",
    size: "2 BHK Unit",
    area: 983,
    units: ["207", "307", "407"]
  },
  {
    image: "/images/2bhk/block-b/B-108.webp",
    title: "B-108",
    size: "2 BHK Unit",
    area: 1111,
    units: ["208", "308", "408"]
  }
];

const floorPlans: Record<string, FloorPlan[]> = {
  "2bhk": [
    {
      id: "2bhk-block-a",
      title: "Block A",
      type: "2 BHK Premium",
      bedrooms: 2,
      bathrooms: 2,
      area: "893-1116 sq.ft",
      price: `₹${(893 * 5000).toLocaleString('en-IN')} - ${(1116 * 5000).toLocaleString('en-IN')}`,
      image: "/images/2bhk/block-a/A-103.webp",
      description: "Premium 2 BHK apartments in Block A with modern amenities and spacious layouts. Features multiple unit configurations to suit your needs.",
      features: [
        "Multiple layout options from 893 to 1116 sq.ft",
        "Well-ventilated rooms with ample natural light",
        "Modern kitchen with premium fittings",
        "Private balcony with garden view",
        "Premium flooring and finishes"
      ]
    },
    {
      id: "2bhk-block-b",
      title: "Block B",
      type: "2 BHK Luxury",
      bedrooms: 2,
      bathrooms: 2,
      area: "893-1111 sq.ft",
      price: `₹${(893 * 5000).toLocaleString('en-IN')} - ${(1111 * 5000).toLocaleString('en-IN')}`,
      image: "/images/2bhk/block-b/B-103.webp",
      description: "Luxury 2 BHK apartments in Block B with premium finishes and thoughtfully designed spaces. Choose from various configurations for your perfect home.",
      features: [
        "Spacious layouts from 893 to 1111 sq.ft",
        "Premium bathroom fittings",
        "Elegant kitchen design",
        "Multiple balcony options",
        "High-quality construction materials"
      ]
    }
  ],
  "3bhk": [
    {
      id: "3bhk-type-a",
      title: "Elegance Suite",
      type: "3 BHK",
      bedrooms: 3,
      bathrooms: 3,
      area: "1550 sq.ft",
      price: "₹1.1Cr onwards",
      image: "/images/floor-plan.jpg",
      description:
        "A luxurious 3 BHK with premium finishes and spacious living areas. Features a modern kitchen and multiple balconies.",
      features: [
        "Master bedroom with walk-in closet and en-suite bathroom",
        "Two additional well-appointed bedrooms",
        "Spacious living and dining area",
        "Modern kitchen with premium appliances",
        "Multiple balconies with panoramic views"
      ]
    },
    {
      id: "3bhk-type-b",
      title: "Prestige Suite",
      type: "3 BHK Premium",
      bedrooms: 3,
      bathrooms: 3,
      area: "1750 sq.ft",
      price: "₹1.25Cr onwards",
      image: "/images/floor-plan.jpg",
      description:
        "Our premium 3 BHK offering with additional space and luxury amenities. Includes a separate dining area and home office space.",
      features: [
        "Oversized master suite with dressing area",
        "Two spacious bedrooms with attached bathrooms",
        "Separate dining area for formal entertaining",
        "Designated home office space",
        "Large wrap-around balcony with city views"
      ]
    }
  ]
};

interface FloorPlan {
  id: string;
  title: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export default function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null);

  return (
    <section id="floor-plans" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">Floor Plans</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore our thoughtfully designed floor plans that maximize space
            and functionality.
          </p>

          {selectedPlan ? (
            <div className="mb-8">
              <Card className="bg-card overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    {selectedPlan.id === "2bhk-block-a" ? (
                      <FloorPlanCarousel plans={blockAPlans} />
                    ) : selectedPlan.id === "2bhk-block-b" ? (
                      <FloorPlanCarousel plans={blockBPlans} />
                    ) : (
                      <img
                        src={selectedPlan.image}
                        alt={selectedPlan.title}
                        className="w-full h-full object-contain rounded-md"
                      />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {selectedPlan.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {selectedPlan.type}
                        </p>
                      </div>
                      <p className="text-xl font-bold">{selectedPlan.price}</p>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <BedDouble className="h-5 w-5 text-muted-foreground" />
                        <span>{selectedPlan.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-muted-foreground" />
                        <span>{selectedPlan.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5 text-muted-foreground" />
                        <span>{selectedPlan.area}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {selectedPlan.description}
                    </p>

                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedPlan(null)}
                        className="flex-1"
                      >
                        Back to Plans
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={() => {
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Schedule a Visit
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ) : (
            <Tabs defaultValue="2bhk" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="2bhk">2 BHK</TabsTrigger>
                <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
              </TabsList>

              <TabsContent value="2bhk" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {floorPlans["2bhk"].map((plan) => (
                    <Card
                      key={plan.id}
                      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        {plan.id === "2bhk-block-a" ? (
                          <FloorPlanCarousel plans={blockAPlans} />
                        ) : plan.id === "2bhk-block-b" ? (
                          <FloorPlanCarousel plans={blockBPlans} />
                        ) : (
                          <img
                            src={plan.image}
                            alt={plan.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">
                          {plan.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {plan.type}
                        </p>

                        <div className="flex gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.bedrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.bathrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.area}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="font-bold">{plan.price}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPlan(plan);
                            }}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="3bhk" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {floorPlans["3bhk"].map((plan) => (
                    <Card
                      key={plan.id}
                      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">
                          {plan.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {plan.type}
                        </p>

                        <div className="flex gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.bedrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.bathrooms}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{plan.area}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="font-bold">{plan.price}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPlan(plan);
                            }}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </motion.div>
      </div>
    </section>
  );
}