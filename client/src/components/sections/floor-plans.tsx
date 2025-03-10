import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Maximize } from "lucide-react";
import FloorPlanCarousel from "@/components/ui/floor-plan-carousel";
import unitsData from "@/lib/units.csv";

type Unit = {
  unit_number: string;
  block: string;
  floor: string;
  area: number;
  size: string;
  price: number;
  face: string;
  balcony_count: number;
  available: string;
  image_link: string;
};

// Floor level mapping
const FLOOR_LABELS = ["Ground", "First", "Second", "Third", "Fourth"] as const;
type FloorLabel = typeof FLOOR_LABELS[number];

// Parse units data
const units: Unit[] = unitsData.split('\n')
  .slice(1) // Skip header row
  .map(row => {
    const [unit_number, block, floor, area, size, price, face, balcony_count, available, image_link] = row.split(',');
    return {
      unit_number,
      block,
      floor,
      area: Number(area),
      size,
      price: Number(price),
      face,
      balcony_count: Number(balcony_count),
      available,
      image_link
    };
  });

export default function FloorPlans() {
  const [selectedFloor, setSelectedFloor] = useState<FloorLabel>("Ground");
  const [selectedType, setSelectedType] = useState("2bhk");

  // Filter units based on selected floor and type
  const filteredUnits = units.filter(unit =>
    unit.floor === selectedFloor &&
    unit.size.startsWith(selectedType.charAt(0))
  );

  // Group units by block
  const blockAUnits = filteredUnits.filter(unit => unit.block === 'A');
  const blockBUnits = filteredUnits.filter(unit => unit.block === 'B');

  // Transform units for carousel
  const transformUnitsForCarousel = (units: Unit[]) => units.map(unit => ({
    image: unit.image_link,
    title: `${unit.block}-${unit.unit_number}`,
    size: unit.size,
    area: unit.area,
    units: [unit.unit_number],
  }));

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

          <Tabs defaultValue="Ground" className="w-full" onValueChange={(value) => setSelectedFloor(value as FloorLabel)}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
              {FLOOR_LABELS.map((floor) => (
                <TabsTrigger key={floor} value={floor}>{floor} Floor</TabsTrigger>
              ))}
            </TabsList>

            {FLOOR_LABELS.map((floor) => (
              <TabsContent key={floor} value={floor}>
                <Tabs defaultValue="2bhk" onValueChange={setSelectedType}>
                  <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                    <TabsTrigger value="2bhk">2 BHK</TabsTrigger>
                    <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
                  </TabsList>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Block A Card */}
                    <Card className="overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <FloorPlanCarousel plans={transformUnitsForCarousel(blockAUnits)} />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">Block A</h3>
                        <p className="text-primary font-medium mb-3">
                          {selectedType.toUpperCase()} Premium
                        </p>
                        <div className="flex gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedType === "2bhk" ? "2" : "3"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedType === "2bhk" ? "2" : "3"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {blockAUnits.length > 0
                                ? `${Math.min(...blockAUnits.map(u => u.area))}-${Math.max(...blockAUnits.map(u => u.area))} sq.ft`
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">
                            {blockAUnits.length > 0
                              ? `₹${Math.min(...blockAUnits.map(u => u.price)).toLocaleString('en-IN')} onwards`
                              : "N/A"}
                          </p>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Block B Card */}
                    <Card className="overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <FloorPlanCarousel plans={transformUnitsForCarousel(blockBUnits)} />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">Block B</h3>
                        <p className="text-primary font-medium mb-3">
                          {selectedType.toUpperCase()} Luxury
                        </p>
                        <div className="flex gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedType === "2bhk" ? "2" : "3"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{selectedType === "2bhk" ? "2" : "3"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {blockBUnits.length > 0
                                ? `${Math.min(...blockBUnits.map(u => u.area))}-${Math.max(...blockBUnits.map(u => u.area))} sq.ft`
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold">
                            {blockBUnits.length > 0
                              ? `₹${Math.min(...blockBUnits.map(u => u.price)).toLocaleString('en-IN')} onwards`
                              : "N/A"}
                          </p>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Tabs>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}