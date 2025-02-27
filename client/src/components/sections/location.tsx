import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Train, Building, ShoppingBag } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface LocationItem {
  name: string;
  distance: string;
}

interface LocationCardProps {
  title: string;
  icon: LucideIcon;
  items: LocationItem[];
  image: string;
}

const locations = {
  metro: [
    { name: "Bommasandra Metro", distance: "0.5 km" },
    { name: "BMTC Stop", distance: "0.2 km" }
  ],
  techParks: [
    { name: "Satva Texonic", distance: "2 km" },
    { name: "HCL Tech Park", distance: "3 km" }
  ],
  malls: [
    { name: "New Mall", distance: "1 km" },
    { name: "DMart", distance: "1.5 km" }
  ]
};

const locationImages = [
  "https://images.unsplash.com/photo-1667868118709-5d9c7b150031",
  "https://images.unsplash.com/photo-1736117705462-34145ac33bdf",
  "https://images.unsplash.com/photo-1595350576575-e481a38122bd"
];

export default function Location() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Prime Location
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <LocationCard
            title="Metro Connectivity"
            icon={Train}
            items={locations.metro}
            image={locationImages[0]}
          />
          <LocationCard
            title="Tech Parks"
            icon={Building}
            items={locations.techParks}
            image={locationImages[1]}
          />
          <LocationCard
            title="Shopping & Entertainment"
            icon={ShoppingBag}
            items={locations.malls}
            image={locationImages[2]}
          />
        </div>
      </div>
    </section>
  );
}

function LocationCard({ title, icon: Icon, items, image }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Icon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.name} className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-muted-foreground">{item.distance}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}