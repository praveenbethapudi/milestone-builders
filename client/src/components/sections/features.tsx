import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/image-carousel";

const features = {
  specifications: [
    "Premium Aluminum Windows",
    "Solid Core Doors",
    "Imported Tiles",
    "Designer Wall Panels",
    "False Ceiling",
    "Automated Curtain Rails",
  ],
  environment: [
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
  "/images/floor/luxury-living-room-marble-flooring.jpg",
  "/images/floor/white-marble-tiles.jpg",
  "/images/floor/beige-living-room-tiles.jpg",
  "/images/floor/beige-marble-tiles.jpg",
  "/images/floor/white-gold-marble-tiles.jpg",
  "/images/floor/modern-lobby-marble-flooring.jpg",
  "/images/floor/white-marble.jpg",
  "/images/floor/brown-marble-tiles.jpg",
];

const floorImages = [
  "/images/floor/luxury-living-room-marble-flooring.jpg",
  "/images/floor/white-marble-tiles.jpg",
  "/images/floor/beige-living-room-tiles.jpg",
  "/images/floor/beige-marble-tiles.jpg",
  "/images/floor/white-gold-marble-tiles.jpg",
  "/images/floor/modern-lobby-marble-flooring.jpg",
  "/images/floor/white-marble.jpg",
  "/images/floor/brown-marble-tiles.jpg",
];

const bathImages = [
  "/images/bath/wc.jpg",
  "/images/bath/basin-1.jpg",
  "/images/bath/basin-2.jpg",
];

const doorImages = ["/images/doors/main-door.jpg", "/images/doors/door.jpg"];

export default function Features() {
  return (
    <section className="py-20 px-4 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: 'url("/images/floor-plan.jpg")' }}
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
                Premium Floor Tiles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <ImageCarousel images={floorImages} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">
                    Choose Your Tiles
                  </h4>
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
                  <h4 className="text-lg font-medium mb-3">
                    Veneer & Laminate Doors
                  </h4>
                  <ul className="space-y-2">
                    <li>• Burma Teak Designer Veneer Maindoors</li>
                    <li>• Pine Designer Laminated Flush Doors</li>
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

        <div className="mt-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">
                Premium Bath Accessories
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <ImageCarousel images={bathImages} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3">
                    Bathroom Accessories
                  </h4>
                  <ul className="space-y-2">
                    <li>• Eligant Single Piece WC</li>
                    <li>• Stylish full height Basins</li>
                    <li>• Provision for in-ceiling Heaters</li>
                    <li>• Hot & Cold water for Shower & Basin</li>
                    <li>• Jacquar Brass Diverters</li>
                    <li>• Recycled Water for WC</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fittings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
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
