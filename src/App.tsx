import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// State pages
import Delhi from "./pages/states/Delhi";
import UttarPradesh from "./pages/states/UttarPradesh";
import HimachalPradesh from "./pages/states/HimachalPradesh";
import TamilNadu from "./pages/states/TamilNadu";
import Kerala from "./pages/states/Kerala";
import Karnataka from "./pages/states/Karnataka";
import WestBengal from "./pages/states/WestBengal";
import Odisha from "./pages/states/Odisha";
import Bihar from "./pages/states/Bihar";
import Rajasthan from "./pages/states/Rajasthan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* State routes */}
          <Route path="/explore/delhi" element={<Delhi />} />
          <Route path="/explore/uttar-pradesh" element={<UttarPradesh />} />
          <Route path="/explore/himachal-pradesh" element={<HimachalPradesh />} />
          <Route path="/explore/tamil-nadu" element={<TamilNadu />} />
          <Route path="/explore/kerala" element={<Kerala />} />
          <Route path="/explore/karnataka" element={<Karnataka />} />
          <Route path="/explore/west-bengal" element={<WestBengal />} />
          <Route path="/explore/odisha" element={<Odisha />} />
          <Route path="/explore/bihar" element={<Bihar />} />
          <Route path="/explore/rajasthan" element={<Rajasthan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
