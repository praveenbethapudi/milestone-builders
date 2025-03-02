import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ImageCarousel from "../ui/image-carousel";

const amenities = [
  {
    name: "Swimming Pool",
    image: "/images/amenities/swimming-pool.jpg",
    description: "Temperature-controlled infinity pool with stunning views",
    details: "Perfect for both leisure swimming and morning workouts",
    size: "large",
  },
  {
    name: "Elegant Entrance",
    image: "/images/amenities/landscape-1.jpg",
    description: "Contemporary architectural design with premium finishes",
    details: "Featuring modern landscaping and artistic wall panels",
    size: "large",
  },
  {
    name: "Indoor Games Room",
    image: "/images/amenities/indoor-games.jpg",
    description: "Premium gaming facilities including pool and chess tables",
    details: "Professionally maintained equipment for your entertainment",
    size: "medium",
  },
  {
    name: "Children's Play Area",
    image: "/images/amenities/play-area.jpg",
    description: "Safe and colorful playground with modern equipment",
    details: "Designed for both fun and development",
    size: "medium",
  },
  {
    name: "Fully Equipped Gym",
    image: "/images/amenities/fitness-center.jpg",
    description:
      "State-of-the-art fitness center with cardio and weight sections",
    details: "Professional trainers available on request",
    size: "medium",
  },
  {
    name: "Modern Elevators",
    image: "/images/amenities/elevator.jpg",
    description: "High-speed elevators with elegant interiors",
    details: "Smart card access for enhanced security",
    size: "small",
  },
  {
    name: "Basement Parking",
    image: "/images/amenities/basement-parking.webp",
    description: "Well-lit parking area with dedicated spots",
    details: "24/7 security monitoring for your vehicles",
    size: "medium",
  },
  {
    name: "24/7 CCTV Surveillance",
    image: "/images/amenities/security-cameras.webp",
    description: "Advanced security system with complete coverage",
    details: "Professional security staff monitoring round the clock",
    size: "small",
  },
  {
    name: "Crafted Landscapes",
    image: "/images/amenities/landscape-2.webp",
    description:
      "Zen-inspired garden with artistic sculptures and water features",
    details: "Tranquil spaces perfect for meditation and relaxation",
    size: "large",
  },
];

export default function Amenities() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          Premium Amenities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto text-muted-foreground"
        >
          Experience luxury living with our carefully curated selection of
          world-class amenities, designed to enhance your lifestyle and provide
          ultimate comfort.
        </motion.p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-0 [column-fill:_balance]">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group break-inside-avoid mb-0"
            >
              <Card className="overflow-hidden bg-white border-none rounded-none">
                <div
                  className={`relative overflow-hidden ${
                    amenity.size === "large"
                      ? "aspect-[16/9]"
                      : amenity.size === "medium"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                  }`}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
                    {amenity.name}
                  </h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                  <p className="text-sm text-muted-foreground mt-1 opacity-80">
                    {amenity.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
