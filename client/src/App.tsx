import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from "@/pages/home";
import Meridian from "@/pages/meridian";
import SkyView from "@/pages/skyview";
import NotFound from "@/pages/404";
import TermsOfUse from "@/pages/terms";
import PrivacyPolicy from "@/pages/privacy";
import RefundPolicy from "@/pages/refund";
import FAQ from "@/pages/faq";

function Router() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>The Meridian | Luxury Apartments near Bommasandra Metro, Bangalore</title>
          <meta name="description" content="Discover The Meridian luxury apartments in Electronic City, Bangalore. Premium 2 & 3 BHK with world-class amenities, just 500m from Bommasandra Metro Station." />
          <meta name="keywords" content="luxury apartments bangalore, premium flats electronic city, 2BHK 3BHK luxury apartments, bommasandra metro apartments, gated community bangalore" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The Meridian | Luxury Apartments near Bommasandra Metro, Bangalore" />
          <meta property="og:description" content="Discover The Meridian luxury apartments in Electronic City, Bangalore. Premium 2 & 3 BHK with world-class amenities, just 500m from Bommasandra Metro Station." />
          <meta property="og:url" content="https://meridian-apartments.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="The Meridian | Luxury Apartments near Bommasandra Metro, Bangalore" />
          <meta name="twitter:description" content="Discover The Meridian luxury apartments in Electronic City, Bangalore. Premium 2 & 3 BHK with world-class amenities, just 500m from Bommasandra Metro Station." />
          <link rel="canonical" href="https://themeridian.com" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meridian" element={<Meridian />} />
            <Route path="/skyview" element={<SkyView />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default Router;