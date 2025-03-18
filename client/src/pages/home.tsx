import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import HomeFooter from "@/components/sections/home-footer";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Milestone Builders | Top Luxury Residential Projects in Bangalore</title>
        <meta name="description" content="Milestone Builders offers premium residential projects in Bangalore including The Meridian luxury apartments. Explore our portfolio of high-end homes with world-class amenities." />
        <meta name="keywords" content="milestone builders bangalore, luxury residential projects, premium apartments bangalore, high-end residential properties, the meridian apartments, luxury homes bangalore" />
        <meta property="og:title" content="Milestone Builders | Top Luxury Residential Projects in Bangalore" />
        <meta property="og:description" content="Milestone Builders offers premium residential projects in Bangalore including The Meridian luxury apartments. Explore our portfolio of high-end homes with world-class amenities." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Milestone Builders | Top Luxury Residential Projects in Bangalore" />
        <meta name="twitter:description" content="Milestone Builders offers premium residential projects in Bangalore including The Meridian luxury apartments. Explore our portfolio of high-end homes." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://milestone.builders" />
      </Helmet>
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Discover our collection of premium residential projects that
            redefine luxury living
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Meridian Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link to="/meridian" className="block">
                <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src="/images/building-1.webp"
                      alt="The Meridian"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">The Meridian</h3>
                      <p className="text-sm text-white/80">
                        Luxury Apartments in Jigani
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Building2 className="h-5 w-5" />
                      <span className="font-semibold">Ready to Move</span>
                    </div>
                    <p className="text-muted-foreground">
                      Experience luxury living with our carefully curated
                      selection of premium amenities and thoughtfully designed
                      spaces.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* SkyView Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Link to="/skyview" className="block">
                <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden bg-primary/5">
                  <img
                      src="/images/skyview-1.jpg"
                      alt="The Meridian"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clock className="h-20 w-20 text-primary/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">SkyView</h3>
                      <p className="text-sm text-white/80">
                        Our Next Exciting Project
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">Under Development</span>
                    </div>
                    <p className="text-muted-foreground">
                      Stay tuned for our upcoming project that will set new
                      standards in premium living spaces.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
    </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}