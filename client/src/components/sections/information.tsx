import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Building2, Car, Trees } from "lucide-react";

const features = [
  {
    title: "ELegent Landscapes",
    icon: Trees,
    description:
      "This luxury apartment boasts a well thought out landscape with beautiful palms and floral trees.",
  },
  {
    title: "Basement Parking",
    icon: Car,
    description:
      "Parking space for all residents are secured in the basement leaving room for stunning landscapes.",
  },
  {
    title: "Modern Architecture",
    icon: Building2,
    description:
      "Contemporary design with premium fittings and finishes, sets us apart from the rest.",
  },
];

export default function Information() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url("/images/pool-view-compressed.jpg")' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          What makes us the #1 choice for your luxury living?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto text-muted-foreground"
        >
          Unlike ordinary residences, The Meridian sets a new benchmark in
          luxury living with thoughtfully designed spaces, superior construction
          quality, and unmatched convenience that truly elevates your lifestyle.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}