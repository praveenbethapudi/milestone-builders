import { motion } from "framer-motion";

const plants = [
  {
    name: "Temple Tree (Plumeria)",
    image: "/images/botanical/temple-tree-2.webp",
    description: "Fragrant flowering tree adding tropical charm to common areas",
    size: "large"
  },
  {
    name: "Golden Shower Tree",
    image: "/images/botanical/Golden-Shower-Tree.webp",
    description: "Majestic yellow blooms cascading through walkways",
    size: "medium"
  },
  {
    name: "African Mahogany",
    image: "/images/botanical/african-mahogony.webp",
    description: "Luxuriant shade tree offering premium wood characteristics",
    size: "small"
  },
  {
    name: "Date Palm",
    image: "/images/botanical/date-palms-1.webp",
    description: "Iconic desert palm creating resort-style landscapes",
    size: "medium"
  },
  {
    name: "Anthurium",
    image: "/images/botanical/anthurium-andraeanum-2.jpg",
    description: "Tropical flowering plant adorning garden corners",
    size: "small"
  },
  {
    name: "Aglaonema",
    image: "/images/botanical/aglaonema-1.webp",
    description: "Chinese Evergreen - Adding colorful foliage to shaded areas",
    size: "medium"
  },
  {
    name: "Acalypha Wilkesiana",
    image: "/images/botanical/acalypha-wilkesiana-1.webp",
    description: "Copper Leaf - Vibrant foliage for garden borders",
    size: "large"
  },
  {
    name: "Tabebuia Rosea",
    image: "/images/botanical/tabebuia-rosea-plant-1.webp",
    description: "Pink Trumpet Tree - Creates stunning pink canopies",
    size: "medium"
  },
  {
    name: "Royal Bottle Palms",
    image: "/images/botanical/royal-bottle-palms-1.webp",
    description: "Elegant palms creating stately entrance boulevards",
    size: "small"
  },
  {
    name: "Silver Oak",
    image: "/images/botanical/silver-oaks-1.webp",
    description: "Graceful evergreen providing year-round shade and beauty",
    size: "large"
  },
  {
    name: "Apple Tree",
    image: "/images/botanical/apple-1.webp",
    description: "Ornamental fruit tree adding charm to garden spaces",
    size: "medium"
  },
  {
    name: "Banganapalli Mango",
    image: "/images/botanical/mango-banganapalli-1.webp",
    description: "Premium mango variety offering sweet fruits and shade",
    size: "small"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden
                ${plant.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${plant.size === 'medium' ? 'col-span-1 row-span-2' : ''}
                ${plant.size === 'small' ? 'col-span-1 row-span-1' : ''}
              `}
            >
              <div className="absolute inset-0">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1 text-primary">
                    {plant.name}
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-2">
                    {plant.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}