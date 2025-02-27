import Hero from "@/components/sections/hero";
import Information from "@/components/sections/information";
import Location from "@/components/sections/location";
import Amenities from "@/components/sections/amenities";
import Features from "@/components/sections/features";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Information />
      <Location />
      <Amenities />
      <Features />
      <Contact />
    </main>
  );
}
