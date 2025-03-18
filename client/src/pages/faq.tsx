import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Milestone Builders</title>
        <meta 
          name="description" 
          content="Find answers to common questions about The Meridian luxury apartments in Electronic City, Bangalore. Learn about amenities, pricing, floor plans, and more."
        />
        <meta 
          name="keywords" 
          content="luxury apartments FAQ, Electronic City apartments, Bommasandra Metro Station, luxury living Bangalore"
        />
        <meta property="og:title" content="Frequently Asked Questions | Milestone Builders" />
        <meta property="og:description" content="Find answers to common questions about The Meridian luxury apartments in Electronic City, Bangalore." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Frequently Asked Questions | Milestone Builders" />
        <meta name="twitter:description" content="Find answers to common questions about The Meridian luxury apartments in Electronic City, Bangalore." />
        <link rel="canonical" href="https://milestone.builders/faq" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Find answers to common questions about The Meridian luxury apartments
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  Which is the most luxurious apartment in Bangalore?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  The Meridian by Milestone Builders stands as one of the most luxurious apartment complexes in Bangalore. Our meticulously designed living spaces feature premium finishes, cutting-edge smart home technology, and world-class amenities that create an unparalleled living experience. Located in Electronic City Phase 2, just 500m from Bommasandra Metro Station, The Meridian offers the perfect blend of luxury, convenience, and strategic location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  Which is the most luxurious area in Bangalore?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Electronic City has emerged as one of Bangalore's premier luxury residential areas, especially for tech professionals and discerning homeowners. This thriving hub combines the convenience of being near major tech companies with excellent infrastructure, green spaces, and premium lifestyle amenities. The Meridian's location in Electronic City Phase 2 provides residents with the perfect balance of connectivity, comfort, and luxury living standards that define Bangalore's most coveted neighborhoods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  What is the price range for luxury apartments in Bangalore?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Luxury apartments in Bangalore typically range from ₹1.5 crore to ₹5 crore and above, depending on location, size, amenities, and builder reputation. The Meridian offers exceptional value within this range, with our premium 2 & 3 BHK apartments starting at competitive prices considering the unmatched quality, amenities, and prime location near Bommasandra Metro Station. We offer flexible payment plans and financing options to make your luxury home ownership journey seamless.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  What amenities are included in The Meridian luxury apartments?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  The Meridian features an extensive array of world-class amenities including a temperature-controlled infinity pool, fully-equipped fitness center, landscaped gardens, meditation pavilion, children's play area, multi-purpose hall, 24/7 security with CCTV surveillance, high-speed elevators, power backup, and dedicated covered parking. Our apartments are also equipped with smart home features, premium finishes, and energy-efficient systems to enhance your living experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  Why is Electronic City a prime location for luxury living?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Electronic City offers an ideal setting for luxury living due to its proximity to major tech companies, excellent connectivity via the upcoming metro line, good educational institutions, healthcare facilities, and shopping destinations. The area has seen significant infrastructure development while maintaining green spaces. The Meridian's location just 500m from Bommasandra Metro Station further enhances its appeal, offering residents convenience without compromising on the serenity of a premium residential enclave.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  What are the floor plan options at The Meridian?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  The Meridian offers thoughtfully designed 2 BHK and 3 BHK floor plans that maximize space efficiency while providing ample natural light and ventilation. Our 2 BHK apartments range from 1250-1450 sq ft, while our 3 BHK units offer 1650-1950 sq ft of luxurious living space. Each layout is crafted to balance private and common areas, with premium finishes and fittings throughout. Virtual tours and detailed floor plans are available at our experience center or through our sales team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  What is the possession timeline for The Meridian?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Tower A of The Meridian is ready for immediate occupancy, while Tower B is scheduled for completion by June 2025. Our construction follows a carefully planned timeline with regular updates provided to homebuyers. We prioritize quality construction and timely delivery, with all necessary approvals and certifications in place to ensure a smooth handover process. Our dedicated customer relationship team will guide you through each step from booking to possession.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  How can I book an apartment at The Meridian?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Booking an apartment at The Meridian is a straightforward process. You can begin by visiting our experience center in Electronic City or scheduling a virtual tour through our website. Our sales consultants will help you select the perfect unit based on your preferences and budget. A booking amount of 10% secures your chosen apartment, with flexible payment plans available for the remaining amount. We also assist with home loan arrangements through our banking partners for a seamless purchase experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Have more questions? Contact our sales team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/meridian">Explore The Meridian</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
