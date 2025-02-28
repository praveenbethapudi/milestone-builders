import Hero from "@/components/sections/hero";
import Logo from "@/components/sections/logo";
import Information from "@/components/sections/information";
import Location from "@/components/sections/location";
import Amenities from "@/components/sections/amenities";
import Features from "@/components/sections/features";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Logo />
      <Information />
      <Location />
      <Amenities />
      <Features />
      <Contact />
    </main>
  );
}