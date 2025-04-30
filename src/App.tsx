
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Now from "./pages/Now";
import Reflections from "./pages/Reflections"; // This is now "Off the Record"
import ReflectionDetail from "./pages/ReflectionDetail";
import Portfolio from "./pages/Portfolio";
import CoFoundingDetail from "./pages/CoFoundingDetail";
import AngelInvestmentDetail from "./pages/AngelInvestmentDetail";
import Contact from "./pages/Contact";
import NotFoundCustom from "./pages/NotFoundCustom";
import Manifesto from "./pages/Manifesto";
import Advices from "./pages/Advices";
import TravelInMyHead from "./pages/TravelInMyHead"; // New page

// Layout
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/now" element={<Now />} />
              <Route path="/reflections" element={<Reflections />} />
              <Route path="/reflections/:slug" element={<ReflectionDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/cofounding/:slug" element={<CoFoundingDetail />} />
              <Route path="/portfolio/investments/:slug" element={<AngelInvestmentDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/advices" element={<Advices />} />
              <Route path="/travel-in-my-head" element={<TravelInMyHead />} />
              <Route path="*" element={<NotFoundCustom />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
