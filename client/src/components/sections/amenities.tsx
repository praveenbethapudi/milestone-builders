import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ImageCarousel from "../ui/image-carousel";

const amenityImages = [
  "https://images.unsplash.com/photo-1605882171181-e31b036e4ceb",
  "https://images.unsplash.com/photo-1517676284413-49b63f9007fe",
  "https://images.unsplash.com/photo-1530268578403-df6e89da0d30"
];

const amenities = [
  "24/7 Security",
  "Fitness Center",
  "Swimming Pool",
  "Children's Play Area",
  "Landscaped Gardens",
  "Community Hall"
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
                    className="p-4 border rounded-lg text-center"
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
