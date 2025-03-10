import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Maximize } from "lucide-react";
import FloorPlanCarousel from "@/components/ui/floor-plan-carousel";

const blockAPlans = [
  {
    image: "/images/2bhk/block-a/A-103.jpg",
    title: "A-103",
    size: "2 BHK Unit",
    area: 1116,
    units: ["203", "303", "403"]
  },
  {
    image: "/images/2bhk/block-a/A-104.jpg",
    title: "A-104",
    size: "2 BHK Unit",
    area: 893,
    units: ["204", "304", "404"]
  },
  {
    image: "/images/2bhk/block-a/A-105.jpg",
    title: "A-105",
    size: "2 BHK Unit",
    area: 930,
    units: ["205", "305", "405"]
  },
  {
    image: "/images/2bhk/block-a/A-106.jpg",
    title: "A-106",
    size: "2 BHK Unit",
    area: 964,
    units: ["206", "306", "406"]
  },
  {
    image: "/images/2bhk/block-a/A-107.jpg",
    title: "A-107",
    size: "2 BHK Unit",
    area: 983,
    units: ["207", "307", "407"]
  },
  {
    image: "/images/2bhk/block-a/A-108.jpg",
    title: "A-108",
    size: "2 BHK Unit",
    area: 1115,
    units: ["208", "308", "408"]
  }
];

const blockBPlans = [
  {
    image: "/images/2bhk/block-b/B-103.jpg",
    title: "B-103",
    size: "2 BHK Unit",
    area: 1111,
    units: ["203", "303", "403"]
  },
  {
    image: "/images/2bhk/block-b/B-104.jpg",
    title: "B-104",
    size: "2 BHK Unit",
    area: 893,
    units: ["204", "304", "404"]
  },
  {
    image: "/images/2bhk/block-b/B-105.jpg",
    title: "B-105",
    size: "2 BHK Unit",
    area: 930,
    units: ["205", "305", "405"]
  },
  {
    image: "/images/2bhk/block-b/B-106.jpg",
    title: "B-106",
    size: "2 BHK Unit",
    area: 964,
    units: ["206", "306", "406"]
  },
  {
    image: "/images/2bhk/block-b/B-107.jpg",
    title: "B-107",
    size: "2 BHK Unit",
    area: 983,
    units: ["207", "307", "407"]
  },
  {
    image: "/images/2bhk/block-b/B-108.jpg",
    title: "B-108",
    size: "2 BHK Unit",
    area: 1111,
    units: ["208", "308", "408"]
  }
];

const block3APlans = [
  {
    image: "/images/3bhk/block-a/A-101.jpg",
    title: "A-101",
    size: "3 BHK Unit",
    area: 1491,
    units: ["201", "301", "401"]
  },
  {
    image: "/images/3bhk/block-a/A-102.jpg",
    title: "A-102",
    size: "3 BHK Unit",
    area: 1450,
    units: ["202", "302", "402"]
  }
];

const block3BPlans = [
  {
    image: "/images/3bhk/block-b/B-101.jpg",
    title: "B-101",
    size: "3 BHK Unit",
    area: 1420,
    units: ["201", "301", "401"]
  },
  {
    image: "/images/3bhk/block-b/B-102.jpg",
    title: "B-102",
    size: "3 BHK Unit",
    area: 1351,
    units: ["202", "302", "402"]
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
      image: "/images/2bhk/block-a/A-103.jpg",
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
      image: "/images/2bhk/block-b/B-103.jpg",
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
      id: "3bhk-block-a",
      title: "Block A",
      type: "3 BHK Premium",
      bedrooms: 3,
      bathrooms: 3,
      area: "1450-1491 sq.ft",
      price: `₹${(1450 * 5000).toLocaleString('en-IN')} - ${(1491 * 5000).toLocaleString('en-IN')}`,
      image: "/images/3bhk/block-a/A-101.jpg",
      description: "Premium 3 BHK apartments in Block A with luxurious amenities and spacious layouts. Features large bedrooms and modern design.",
      features: [
        "Spacious layouts from 1450 to 1491 sq.ft",
        "Master bedroom with walk-in closet",
        "Modern kitchen with premium appliances",
        "Multiple balconies with panoramic views",
        "Premium flooring and designer finishes"
      ]
    },
    {
      id: "3bhk-block-b",
      title: "Block B",
      type: "3 BHK Luxury",
      bedrooms: 3,
      bathrooms: 3,
      area: "1351-1420 sq.ft",
      price: `₹${(1351 * 5000).toLocaleString('en-IN')} - ${(1420 * 5000).toLocaleString('en-IN')}`,
      image: "/images/3bhk/block-b/B-101.jpg",
      description: "Luxury 3 BHK apartments in Block B with premium finishes and thoughtfully designed spaces. Perfect for families seeking comfort and elegance.",
      features: [
        "Elegant layouts from 1351 to 1420 sq.ft",
        "Spacious bedrooms with attached bathrooms",
        "Designer kitchen with modern amenities",
        "Private balconies with garden views",
        "High-end finishes throughout"
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
                        {plan.id === "3bhk-block-a" ? (
                          <FloorPlanCarousel plans={block3APlans} />
                        ) : plan.id === "3bhk-block-b" ? (
                          <FloorPlanCarousel plans={block3BPlans} />
                        ) : (
                          <img
                            src={plan.image}
                            alt={plan.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                        <p className="text-primary font-medium mb-3">{plan.type}</p>

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