import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Maximize } from "lucide-react";
import FloorPlanCarousel from "@/components/ui/floor-plan-carousel";

interface Unit {
  unit_id: string;
  block: string;
  floor: string;
  area: number;
  type: string;
  price: number;
  face: string;
  bedrooms: number;
  bathrooms: number;
  balcony: number;
  description: string;
  features: string;
  available: string;
  image_link: string;
}

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
  },
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
  },
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

const floorOptions = ["G", "1", "2", "3", "4"];

export default function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [unitData, setUnitData] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/units.csv')
      .then(response => response.text())
      .then(csv => {
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          return headers.reduce((obj: any, header, index) => {
            obj[header.trim()] = values[index]?.trim();
            return obj;
          }, {});
        }).filter(unit => unit.unit_id); 
        setUnitData(data);
        setLoading(false);
      });
  }, []);

  const getAvailableUnits = (block: string, type: string) => {
    return unitData
      .filter(unit => {
        const floorMatch = selectedFloor === "G" ? 
          unit.floor === "G" : 
          unit.floor === selectedFloor;

        return unit.block === block && 
               unit.type === `${type}-BHK` && 
               floorMatch &&
               unit.available === 'yes';
      })
      .map(unit => unit.unit_id);
  };

  const getFilteredPlans = (blockPlans: any[], block: string, type: string) => {
    const availableUnits = getAvailableUnits(block, type);
    return blockPlans.filter(plan => {
      const unitNumbers = plan.units.map((unitNum: string) => unitNum);
      return unitNumbers.some(num => availableUnits.includes(num));
    });
  };

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
            and functionality. Filter by floor to see available units.
          </p>

          {loading ? (
            <div className="text-center">Loading floor plans...</div>
          ) : (
            <Tabs defaultValue="1" value={selectedFloor} onValueChange={setSelectedFloor}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
                <TabsTrigger value="G">Ground</TabsTrigger>
                <TabsTrigger value="1">Floor 1</TabsTrigger>
                <TabsTrigger value="2">Floor 2</TabsTrigger>
                <TabsTrigger value="3">Floor 3</TabsTrigger>
                <TabsTrigger value="4">Floor 4</TabsTrigger>
              </TabsList>

              {floorOptions.map((floor) => (
                <TabsContent key={floor} value={floor}>
                  <Tabs defaultValue="2bhk" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                      <TabsTrigger value="2bhk">2 BHK</TabsTrigger>
                      <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
                    </TabsList>

                    <TabsContent value="2bhk" className="mt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="overflow-hidden">
                          <div className="aspect-[4/3] overflow-hidden">
                            <FloorPlanCarousel 
                              plans={getFilteredPlans(blockAPlans, "A", "2")} 
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Block A</h3>
                            <p className="text-primary font-medium mb-3">2 BHK Premium</p>
                            <div className="flex gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <BedDouble className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">2</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Bath className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">2</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">893-1116 sq.ft</span>
                              </div>
                            </div>
                            <Button className="w-full">View Details</Button>
                          </CardContent>
                        </Card>

                        <Card className="overflow-hidden">
                          <div className="aspect-[4/3] overflow-hidden">
                            <FloorPlanCarousel 
                              plans={getFilteredPlans(blockBPlans, "B", "2")} 
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Block B</h3>
                            <p className="text-primary font-medium mb-3">2 BHK Luxury</p>
                            <div className="flex gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <BedDouble className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">2</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Bath className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">2</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">893-1111 sq.ft</span>
                              </div>
                            </div>
                            <Button className="w-full">View Details</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="3bhk" className="mt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="overflow-hidden">
                          <div className="aspect-[4/3] overflow-hidden">
                            <FloorPlanCarousel 
                              plans={getFilteredPlans(block3APlans, "A", "3")} 
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Block A</h3>
                            <p className="text-primary font-medium mb-3">3 BHK Premium</p>
                            <div className="flex gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <BedDouble className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">3</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Bath className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">3</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">1450-1491 sq.ft</span>
                              </div>
                            </div>
                            <Button className="w-full">View Details</Button>
                          </CardContent>
                        </Card>

                        <Card className="overflow-hidden">
                          <div className="aspect-[4/3] overflow-hidden">
                            <FloorPlanCarousel 
                              plans={getFilteredPlans(block3BPlans, "B", "3")} 
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Block B</h3>
                            <p className="text-primary font-medium mb-3">3 BHK Luxury</p>
                            <div className="flex gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <BedDouble className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">3</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Bath className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">3</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Maximize className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">1351-1420 sq.ft</span>
                              </div>
                            </div>
                            <Button className="w-full">View Details</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </motion.div>
      </div>
    </section>
  );
}