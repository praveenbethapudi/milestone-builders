import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BedDouble, Bath, Maximize, ChevronLeft } from "lucide-react";
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

interface FilteredUnit {
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
  description: string;
  features: string[];
}

const floorOptions = ["G", "1", "2", "3", "4"];

export function FloorPlans() {
  const [selectedBlock, setSelectedBlock] = useState("B");
  const [selectedFloor, setSelectedFloor] = useState("1");
  const [selectedType, setSelectedType] = useState("2bhk");
  const [selectedUnit, setSelectedUnit] = useState<FilteredUnit | null>(null);
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

  const getFilteredUnits = (): FilteredUnit[] => {
    return unitData
      .filter(unit => {
        const floorMatch = selectedFloor === "G" ?
          unit.floor === "G" :
          unit.floor === selectedFloor;

        const typeMatch = unit.type === `${selectedType.slice(0, 1)}-BHK`;

        return unit.block === selectedBlock &&
               typeMatch &&
               floorMatch &&
               unit.available === 'yes';
      })
      .map(unit => ({
        unit_id: unit.unit_id,
        image: unit.image_link || `/images/${selectedType}/block-${selectedBlock.toLowerCase()}/${selectedBlock}-${unit.unit_id}.jpg`,
        title: `${selectedBlock}-${unit.unit_id}`,
        size: `${unit.type} Unit`,
        area: parseInt(unit.area.toString()),
        price: parseInt(unit.area.toString()) * 5000,
        block: unit.block,
        floor: unit.floor,
        face: unit.face,
        bedrooms: parseInt(unit.bedrooms.toString()),
        bathrooms: parseInt(unit.bathrooms.toString()),
        balcony: parseInt(unit.balcony.toString()),
        available: unit.available,
        description: unit.description || "Luxurious apartment with modern amenities and thoughtfully designed spaces.",
        features: unit.features ? unit.features.split(';') : [
          "Premium flooring",
          "Modern kitchen with quality fittings",
          "Well-ventilated rooms",
          "Ample natural light",
          "Private balcony"
        ]
      }));
  };

  const renderBlockContent = () => (
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
          <Tabs defaultValue="2bhk" value={selectedType} onValueChange={setSelectedType} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="2bhk">2 BHK</TabsTrigger>
              <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
            </TabsList>

            <TabsContent value="2bhk" className="mt-0">
              <div className="sm:h-auto">
                {selectedUnit ? (
                  <div className="bg-card rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 p-4 border-b">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedUnit(null)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-semibold">Block {selectedUnit.block}-{selectedUnit.unit_id}</h3>
                        <span className="text-muted-foreground">Floor {selectedUnit.floor}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2">
                      <div className="h-full">
                        <img
                          src={selectedUnit.image}
                          alt={`Floor plan ${selectedUnit.unit_id}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Unit Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <BedDouble className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Bath className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Maximize className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.area} sq.ft</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">₹</span>
                              <span>{selectedUnit.price.toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Description</h4>
                          <p className="text-muted-foreground">{selectedUnit.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Features</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {selectedUnit.features.map((feature, index) => (
                              <li key={index} className="text-muted-foreground">{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Button 
                            variant="outline"
                            className="w-full"
                            onClick={() => setSelectedUnit(null)}
                          >
                            Back to Units
                          </Button>
                          <Button 
                            className="w-full"
                            onClick={() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Schedule a Visit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <FloorPlanCarousel
                    plans={getFilteredUnits()}
                    onUnitClick={setSelectedUnit}
                  />
                )}
              </div>
            </TabsContent>

            <TabsContent value="3bhk" className="mt-0">
              <div className="sm:h-auto">
                {selectedUnit ? (
                  <div className="bg-card rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 p-4 border-b">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedUnit(null)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-semibold">Block {selectedUnit.block}-{selectedUnit.unit_id}</h3>
                        <span className="text-muted-foreground">Floor {selectedUnit.floor}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2">
                      <div className="h-full">
                        <img
                          src={selectedUnit.image}
                          alt={`Floor plan ${selectedUnit.unit_id}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-6 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Unit Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <BedDouble className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Bath className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Maximize className="h-4 w-4 text-muted-foreground" />
                              <span>{selectedUnit.area} sq.ft</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">₹</span>
                              <span>{selectedUnit.price.toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Description</h4>
                          <p className="text-muted-foreground">{selectedUnit.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">Features</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {selectedUnit.features.map((feature, index) => (
                              <li key={index} className="text-muted-foreground">{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Button 
                            variant="outline"
                            className="w-full"
                            onClick={() => setSelectedUnit(null)}
                          >
                            Back to Units
                          </Button>
                          <Button 
                            className="w-full"
                            onClick={() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Schedule a Visit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <FloorPlanCarousel
                    plans={getFilteredUnits()}
                    onUnitClick={setSelectedUnit}
                  />
                )}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
      ))}
    </Tabs>
  );

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
            and functionality. Filter by block, floor, and type to see available units.
          </p>

          {loading ? (
            <div className="text-center">Loading floor plans...</div>
          ) : (
            <Tabs defaultValue="B" value={selectedBlock} onValueChange={setSelectedBlock}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="A">Block A</TabsTrigger>
                <TabsTrigger value="B">Block B</TabsTrigger>
              </TabsList>

              <TabsContent value="A">
                {renderBlockContent()}
              </TabsContent>

              <TabsContent value="B">
                {renderBlockContent()}
              </TabsContent>
            </Tabs>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default FloorPlans;