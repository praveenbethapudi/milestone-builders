import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ui/image-carousel";
import { useState, useEffect } from "react";

const exteriorImages = [
  "/images/building-1.jpg",
  "/images/building-2.jpg",
  "/images/building-3.jpg",
  "/images/building-4.jpg",
  "/images/building-5.jpg",
  "/images/building-6.jpg",
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const targetDate = new Date("2025-10-10").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh]">
      <ImageCarousel images={exteriorImages} />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#FFEA57" }}
          >
            Luxury Living Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-5 max-w-2xl mx-auto text-white">
            Finishing Soon:
          </p>

          <div className="grid grid-cols-4 gap-4 mb-8 max-w-lg mx-auto">
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary text-2xl font-bold">{timeLeft.days}</p>
              <p className="text-white text-sm">Days</p>
            </div>
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary text-2xl font-bold">
                {timeLeft.hours}
              </p>
              <p className="text-white text-sm">Hours</p>
            </div>
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary text-2xl font-bold">
                {timeLeft.minutes}
              </p>
              <p className="text-white text-sm">Minutes</p>
            </div>
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary text-2xl font-bold">
                {timeLeft.seconds}
              </p>
              <p className="text-white text-sm">Seconds</p>
            </div>
          </div>

          {/* <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary font-semibold">Prime Location</p>
              <p className="text-white text-sm">500m from Bommasandra Metro</p>
            </div>
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary font-semibold">Modern Design</p>
              <p className="text-white text-sm">Premium contemporary living</p>
            </div>
            <div className="bg-black/60 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-primary font-semibold">Luxury Amenities</p>
              <p className="text-white text-sm">
                Exclusive resident privileges
              </p>
            </div>
          </div> */}
          <Button
            size="lg"
            className="bg-primary text-black hover:bg-primary/90"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
