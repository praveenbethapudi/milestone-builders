import Hero from "@/components/sections/hero";
import Logo from "@/components/sections/logo";
import Features from "@/components/sections/features";
import Information from "@/components/sections/information";
import Differentiators from "@/components/sections/differentiators";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";
import Amenities from "@/components/sections/amenities";
import Botanical from "@/components/sections/botanical";
import MeridianFooter from "@/components/sections/meridian-footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import FloorPlans from "@/components/sections/floor-plans";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/ui/header";

export default function MeridianPage() {
  return (
    <>
      <Helmet>
        <title>Ultra Luxury Apartments in Electronic City | The Meridian by Milestone Builders</title>
        <meta 
          name="description" 
          content="Experience luxury living at The Meridian - Premium 2 & 3 BHK apartments in Electronic City Phase 2. Features world-class amenities, smart home technology, and stunning views. Just 500m from Bommasandra Metro Station."
        />
        <meta 
          name="keywords" 
          content="electronic city phase 2 apartments, top luxury apartments bangalore, premium flats electronic city, 3 bhk apartments bangalore"
        />
        <link rel="canonical" href="https://milestone.builders/meridian" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <Logo />
        <Information />
        <Amenities />
        <FloorPlans />
        <Differentiators />
        <Features />
        <Botanical />
        <Location />
        <Contact />
        <MeridianFooter />
        <WhatsAppButton />
      </main>
    </>
  );
}
