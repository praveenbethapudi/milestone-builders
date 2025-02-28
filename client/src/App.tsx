import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
      <Logo />
      <Information />
      <Features />
      <Differentiators />
      <Location />
      <Contact />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
