import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/landing";
import MeridianPage from "@/pages/meridian";
import ComingSoon from "@/pages/coming-soon";
import NotFound from "@/pages/not-found";
import TermsOfUse from "@/pages/terms";
import PrivacyPolicy from "@/pages/privacy";
import RefundPolicy from "@/pages/refund";

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/meridian" element={<MeridianPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
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