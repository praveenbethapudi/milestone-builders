import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const plants = [
  {
    name: "Temple Tree (Plumeria)",
    image: "/images/botanical/temple-tree-2.webp",
    description: "Fragrant flowering tree adding tropical charm to common areas"
  },
  {
    name: "Golden Shower Tree",
    image: "/images/botanical/Golden-Shower-Tree.webp",
    description: "Majestic yellow blooms cascading through walkways"
  },
  {
    name: "African Mahogany",
    image: "/images/botanical/african-mahogony.webp",
    description: "Luxuriant shade tree offering premium wood characteristics"
  },
  {
    name: "Date Palm",
    image: "/images/botanical/date-palms-1.webp",
    description: "Iconic desert palm creating resort-style landscapes"
  },
  {
    name: "Anthurium",
    image: "/images/botanical/anthurium-andraeanum-2.jpg",
    description: "Tropical flowering plant adorning garden corners"
  },
  {
    name: "Aglaonema",
    image: "/images/botanical/aglaonema-1.webp",
    description: "Chinese Evergreen - Adding colorful foliage to shaded areas"
  },
  {
    name: "Acalypha Wilkesiana",
    image: "/images/botanical/acalypha-wilkesiana-1.webp",
    description: "Copper Leaf - Vibrant foliage for garden borders"
  },
  {
    name: "Tabebuia Rosea",
    image: "/images/botanical/tabebuia-rosea-plant-1.webp",
    description: "Pink Trumpet Tree - Creates stunning pink canopies"
  },
  {
    name: "Royal Bottle Palms",
    image: "/images/botanical/royal-bottle-palms-1.webp",
    description: "Elegant palms creating stately entrance boulevards"
  },
  {
    name: "Silver Oak",
    image: "/images/botanical/silver-oaks-1.webp",
    description: "Graceful evergreen providing year-round shade and beauty"
  },
  {
    name: "Apple Tree",
    image: "/images/botanical/apple-1.webp",
    description: "Ornamental fruit tree adding charm to garden spaces"
  },
  {
    name: "Banganapalli Mango",
    image: "/images/botanical/mango-banganapalli-1.webp",
    description: "Premium mango variety offering sweet fruits and shade"
  }
];

export default function Botanical() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Botanical Haven
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A carefully curated selection of nature's finest specimens, chosen to create 
            a living tapestry of colors, textures, and sustainable beauty throughout our property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plant.description}
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