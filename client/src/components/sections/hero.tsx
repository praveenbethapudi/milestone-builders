import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ui/image-carousel";

const exteriorImages = [
  "/images/building-1.jpg",
  "/images/building-2.jpg",
  "/images/building-3.jpg",
  "/images/building-4.jpg",
  "/images/building-5.jpg",
  "/images/building-6.jpg",
  "/images/building-7.jpg"
];

export default function Hero() {
  return (
    <section className="relative h-[75vh]">
      <ImageCarousel images={exteriorImages} />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Luxury Living Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience premium apartments designed for modern lifestyle
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}