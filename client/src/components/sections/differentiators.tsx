import { motion } from "framer-motion";
import { Award, Heart, Shield, Zap } from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Superior Architecture",
    description:
      "While others offer conjested copied spaces, The Meridian features new architectural excellence with practial and optimized use of spaces that transcend into warm and vibrant and homes.",
  },
  {
    icon: Shield,
    title: "Awesome Materials",
    description:
      "Unlike conventional buildings, at the Meridian, we have curated a set of high quality materials in stunning detail that manifests into an overall goodness of customer satisfaction.",
  },
  {
    icon: Zap,
    title: "Eco Friendly",
    description:
      "The Meridian incorporates advanced sustainable design elements like recycling and water conservation systems that reduce your carbon footprint and utility costs.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "Beyond just apartments, we've created a vibrant community with thoughtfully designed common spaces that foster meaningful connections among residents.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          The 'Milestone' Advantage
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto text-muted-foreground"
        >
          What sets The Meridian apart from other residential projects in Jigani
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <item.icon className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
