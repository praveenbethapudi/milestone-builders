import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ImageCarousel from "../ui/image-carousel";

const amenityImages = [
  "/images/amenities/swimming-pool.jpg",
  "/images/amenities/indoor-games.jpg",
  "/images/amenities/party-hall.jpg",
  "/images/amenities/gym.jpg",
  "/images/amenities/elevator.jpg",
  "/images/amenities/basement-parking.webp",
  "/images/amenities/security-cameras.webp",
  "/images/amenities/palm-landscape.jpg",
  "/images/amenities/floral-garden.jpg",
];

const amenities = [
  "Swimming Pool",
  "Indoor Games Room",
  "Function Hall",
  "Fully Equipped Gym",
  "Modern Elevators",
  "Basement Parking",
  "24/7 CCTV Surveillance",
  "Palm Landscapes",
  "Floral Gardens",
];

export default function Amenities() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Premium Amenities
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-[500px] overflow-hidden">
            <ImageCarousel images={amenityImages} />
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border rounded-lg text-center hover:bg-primary/5 transition-colors"
                  >
                    {amenity}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}