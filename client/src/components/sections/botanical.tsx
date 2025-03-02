import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const plants = [
  {
    name: "Tabebuia Rosea",
    image: "/images/tabebuia-rosea-plant-1.webp",
    description: "Pink Trumpet Tree - Creates stunning pink canopies along the avenue"
  },
  {
    name: "Temple Tree",
    image: "/images/temple-tree-1.jpg",
    description: "Plumeria - Fragrant flowering tree adding tropical charm to common areas"
  },
  {
    name: "Golden Shower Tree",
    image: "/images/Golden-Shower-Tree.webp",
    description: "Cassia Fistula - Majestic yellow blooms cascading through walkways"
  },
  {
    name: "Royal Bottle Palms",
    image: "/images/royal-bottle-palms-1.webp",
    description: "Elegant palms creating stately entrance boulevards"
  },
  {
    name: "Silver Oak",
    image: "/images/silver-oaks-1.webp",
    description: "Graceful evergreen providing year-round shade and beauty"
  },
  {
    name: "African Mahogany",
    image: "/images/african-mahogony.webp",
    description: "Luxuriant shade tree offering premium wood characteristics"
  },
  {
    name: "Date Palm",
    image: "/images/date-palms-1.webp",
    description: "Iconic desert palm creating resort-style landscapes"
  },
  {
    name: "Anthurium",
    image: "/images/anthurium-andraeanum-2.jpg",
    description: "Tropical flowering plant adorning garden corners"
  },
  {
    name: "Aglaonema",
    image: "/images/aglaonema-1.webp",
    description: "Chinese Evergreen - Adding colorful foliage to shaded areas"
  },
  {
    name: "Acalypha Wilkesiana",
    image: "/images/acalypha-wilkesiana-1.webp",
    description: "Copper Leaf - Vibrant foliage for garden borders"
  },
  {
    name: "Mango Banganapalli",
    image: "/images/mango-banganapalli-1.webp",
    description: "Premium mango variety offering sweet fruits and shade"
  },
  {
    name: "Jackfruit",
    image: "/images/jack-fruit-1.webp",
    description: "Tropical fruit tree providing both food and shade"
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
            Experience nature's finest selection in our meticulously curated landscape. 
            Each plant has been chosen for its beauty, sustainability, and contribution 
            to creating a serene living environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground">
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
