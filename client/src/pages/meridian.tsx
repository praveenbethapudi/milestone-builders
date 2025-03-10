import Hero from "@/components/sections/hero";
import Logo from "@/components/sections/logo";
import Features from "@/components/sections/features";
import Information from "@/components/sections/information";
import Differentiators from "@/components/sections/differentiators";
import Location from "@/components/sections/location";
import Contact from "@/components/sections/contact";
import Amenities from "@/components/sections/amenities";
import Botanical from "@/components/sections/botanical";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import FloorPlans from "@/components/sections/floor-plans";

export default function MeridianPage() {
  return (
    <>
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
      <Footer />
      <WhatsAppButton />
    </>
  );
}
