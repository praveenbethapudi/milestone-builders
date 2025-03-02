import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Hero from "./components/sections/hero";
import Logo from "./components/sections/logo";
import Features from "./components/sections/features";
import Information from "./components/sections/information";
import Differentiators from "./components/sections/differentiators";
import Location from "./components/sections/location";
import Contact from "./components/sections/contact";
import TermsOfUse from "./pages/terms";
import PrivacyPolicy from "./pages/privacy";
import RefundPolicy from "./pages/refund";
import Amenities from "./components/sections/amenities";
import Botanical from "./components/sections/botanical";
import Footer from "./components/sections/footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Logo />
      <Information />
      <Amenities />
      <Differentiators />
      <Features />
      <Botanical />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default Router;
