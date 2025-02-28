import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/image-carousel";

const features = {
  fittings: [
    "Premium Aluminum Windows",
    "Solid Core Doors",
    "Imported Tiles",
    "Designer Wall Panels",
    "False Ceiling",
    "Automated Curtain Rails",
  ],
  bathrooms: [
    "Premium WC",
    "Designer Basins",
    "Hot & Cold Mixer",
    "Jaquar Fittings",
    "Anti-skid Tiles",
    "Rain Shower",
  ],
  security: [
    "10' Boundary Walls",
    "CCTV Surveillance",
    "Access Control",
    "Intercom",
    "Security Personnel",
    "Visitor Management",
  ],
};

const interiorImages = [
  "/images/luxury-living-room-marble-flooring.jpg",
  "/images/white-marble-tiles.jpg",
  "/images/beige-living-room-tiles.jpg",
  "/images/beige-marble-tiles.jpg",
  "/images/white-gold-marble-tiles.jpg",
  "/images/modern-lobby-marble-flooring.jpg",
  "/images/brown-marble-tiles.jpg",
];

const floorImages = [
  "/images/luxury-living-room-marble-flooring.jpg",
  "/images/white-marble-tiles.jpg",
  "/images/beige-living-room-tiles.jpg",
  "/images/beige-marble-tiles.jpg",
  "/images/white-gold-marble-tiles.jpg",
  "/images/modern-lobby-marble-flooring.jpg",
  "/images/brown-marble-tiles.jpg",
];

const doorImages = ["/images/main-door.jpg", "/images/door.jpg"];

export default function Features() {
  return (
    <section className="py-20 px-4 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url("/images/floor-plan.png")' }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Premium Features
        </motion.h2>

        <div className="mt-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Premium Floor Options
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <ImageCarousel images={floorImages} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Floor Features</h4>
                  <ul className="space-y-2">
                    <li>• Polished Galsed Vitrified Tiles (PGVT)</li>
                    <li>• 2x4 large form factor</li>
                    <li>• Premium Marble Tiles</li>
                    <li>• Scratch-Resistant</li>
                    <li>• Water-Resistant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Premium Door Options
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <ImageCarousel images={doorImages} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">Door Features</h4>
                  <ul className="space-y-2">
                    <li>• Burma Teak Designer Veneer Maindoors</li>
                    <li>• Fero Pine Designer Laminated Flush Doors</li>
                    <li>• Solid Core Construction</li>
                    <li>• Premium Hardware Fittings</li>
                    <li>• Scratch-Resistant Finish</li>
                    <li>• Sound Insulation Properties</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fittings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fittings">Fittings</TabsTrigger>
            <TabsTrigger value="bathrooms">Bathrooms</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {Object.entries(features).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardContent className="pt-6">
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 border rounded-lg text-center"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
