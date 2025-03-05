import { Route, Routes } from "react-router-dom";
import { AboutSection } from "./components/about-component/about-section";
import { FooterSection } from "./components/footer-component/footer-section";
import { HeaderSection } from "./components/header-component/header-section";
import { HeroSection } from "./components/hero-component/hero-section";
import { Preloader } from "./components/preloader/preloader";
import { ServiceSection } from "./components/service-component/service-section";
import { ContactSection } from "./components/contact-component/contact-section";
import { PriceSection } from "./components/price-component/price-section";
import { AboutUs } from "./components/about-component/about-us";
import { Service } from "./components/service-component/services";
import { ClientSection } from "./components/client-component/client-section";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
     
    </>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    
}, [isOpen]);  
  return (
    <>
      <Preloader />
      <HeaderSection setIsOpen={setIsOpen} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactSection />} />
        <Route path="/price" element={<PriceSection />} />
        <Route path="/services" element={<Service />} />
        <Route path="/client" element={<ClientSection />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
