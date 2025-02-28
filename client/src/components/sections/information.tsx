import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Building2, Car, Trees } from "lucide-react";

const features = [
  {
    title: "Ground Floor Gardens & Sitouts",
    icon: Trees,
    description: "Private garden spaces for ground floor residents",
  },
  {
    title: "Basement Parking",
    icon: Car,
    description: "Secure parking space for all residents",
  },
  {
    title: "Modern Architecture",
    icon: Building2,
    description: "Contemporary design with premium finishes",
  },
];

export default function Information() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          The Meridian Luxury Apartments
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto text-muted-foreground"
        >
          Unlike ordinary residences, The Meridian sets a new benchmark in luxury living with thoughtfully designed spaces, superior construction quality, and unmatched convenience that truly elevates your lifestyle.
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
