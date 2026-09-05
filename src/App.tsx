import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HelmetProvider } from 'react-helmet-async';
import { OrganizationSchema } from './components/StructuredData';
import { Analytics } from '@/components/Analytics';
import { HeatmapTracking } from '@/components/HeatmapTracking';
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <OrganizationSchema data={{
            name: "MeiFlume",
            url: "https://meiflume.com",
            logo: "https://meiflume.com/logo.png",
            description: "MeiFlume - Web Development, Software Development and Web App Development Services in Paarl & Cape Town",
            address: {
              addressLocality: "Paarl",
              addressRegion: "Western Cape",
              postalCode: "7646",
              addressCountry: "ZA"
            },
            areaServed: ["Paarl", "Cape Town", "Western Cape", "Winelands", "South Africa"],
            geo: {
              latitude: "-33.7246",
              longitude: "18.9596"
            },
            telephone: "+27720302071",
            email: "info@meiflume.com"
          }} />
          <Analytics />
          <HeatmapTracking />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
