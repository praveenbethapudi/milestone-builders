import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import SkyViewFooter from "@/components/sections/skyview-footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function SkyView() {
  return (
    <>
      <Helmet>
        <title>SkyView | Upcoming Luxury Project by Milestone Builders</title>
        <meta 
          name="description" 
          content="SkyView - Our upcoming premium residential project in Bangalore. Register your interest for exclusive pre-launch offers and updates."
        />
        <meta 
          name="keywords" 
          content="upcoming projects bangalore, luxury apartments bangalore, premium residential projects, milestone builders projects"
        />
        <link rel="canonical" href="https://milestone.builders/skyview" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main>
        <section className="relative h-[80vh]">
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
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
                SkyView
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
                Our upcoming luxury residential project
              </p>
              <p className="text-lg mb-12 max-w-2xl mx-auto text-white/80">
                Coming soon to Bangalore
              </p>
            </motion.div>
          </div>
        </section>
        
        <SkyViewFooter />
        <WhatsAppButton />
      </main>
    </>
  );
} 