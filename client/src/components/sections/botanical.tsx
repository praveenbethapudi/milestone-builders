import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const plants = [
  {
    name: "Temple Tree (Plumeria)",
    image: "/images/botanical/temple-tree-2.webp",
    description: "Fragrant flowering tree adding tropical charm to common areas",
    size: "large",
  },
  {
    name: "Golden Shower Tree",
    image: "/images/botanical/Golden-Shower-Tree.webp",
    description: "Majestic yellow blooms cascading through walkways",
    size: "medium",
  },
  {
    name: "African Mahogany",
    image: "/images/botanical/african-mahogony.webp",
    description: "Luxuriant shade tree offering premium wood characteristics",
    size: "large",
  },
  {
    name: "Date Palm",
    image: "/images/botanical/date-palms-1.webp",
    description: "Iconic desert palm creating resort-style landscapes",
    size: "medium",
  },
  {
    name: "Silver Oak",
    image: "/images/botanical/silver-oaks-1.webp",
    description: "Graceful evergreen providing year-round shade and beauty",
    size: "large",
  },
  {
    name: "Aglaonema",
    image: "/images/botanical/aglaonema-1.webp",
    description: "Chinese Evergreen - Adding colorful foliage to shaded areas",
    size: "medium",
  },
  {
    name: "Acalypha Wilkesiana",
    image: "/images/botanical/acalypha-wilkesiana-1.webp",
    description: "Copper Leaf - Vibrant foliage for garden borders",
    size: "small",
  },
  {
    name: "Tabebuia Rosea",
    image: "/images/botanical/tabebuia-rosea-plant-1.webp",
    description: "Pink Trumpet Tree - Creates stunning pink canopies",
    size: "large",
  },
  {
    name: "Royal Bottle Palms",
    image: "/images/botanical/royal-bottle-palms-1.webp",
    description: "Elegant palms creating stately entrance boulevards",
    size: "medium",
  },
  {
    name: "Anthurium",
    image: "/images/botanical/anthurium-andraeanum-2.jpg",
    description: "Tropical flowering plant adorning garden corners",
    size: "small",
  },
  {
    name: "Apple Tree",
    image: "/images/botanical/apple-1.webp",
    description: "Ornamental fruit tree adding charm to garden spaces",
    size: "medium",
  },
  {
    name: "Banganapalli Mango",
    image: "/images/botanical/mango-banganapalli-1.webp",
    description: "Premium mango variety offering sweet fruits and shade",
    size: "small",
  },
];

export default function Botanical() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + plants.length) % plants.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 6;
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 768) return 4;
    return 3;
  };

  const visiblePlants = [...plants.slice(currentIndex), ...plants.slice(0, currentIndex)].slice(0, getVisibleCount());

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary">
            Botanical Haven
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated selection of nature's finest specimens, chosen
            to create a living tapestry of colors, textures, and sustainable
            beauty throughout our property.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-hidden">
            {visiblePlants.map((plant, index) => (
              <motion.div
                key={`${plant.name}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white"
              >
                <div className={`relative ${
                  plant.size === "large"
                    ? "aspect-[16/9]"
                    : plant.size === "medium"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-2 bg-white">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 text-primary group-hover:text-primary/80 transition-colors truncate">
                    {plant.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {plant.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}