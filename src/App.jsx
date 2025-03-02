

import { Route, Routes } from "react-router-dom";
import { AboutSection } from "./components/about-component/about-section";
import { FooterSection } from "./components/footer-component/footer-section";
import { HeaderSection } from "./components/header-component/header-section";
import { HeroSection } from "./components/hero-component/hero-section";
import { Preloader } from "./components/preloader/preloader";
import { ServiceSection } from "./components/service-component/service-section";
import { ContactSection } from "./components/contact-component/contact-section";

function App() {


  return (
    <>
      <div>
        <Preloader />
        <HeaderSection />
      </div>

      <div>
        <Routes>
          <Route path="/" element={ <HeroSection />}/>
          <Route path="/" element={ <ServiceSection />}/>
          <Route path="/" element={  <AboutSection />}/>
          <Route path="/contact-us" element={<ContactSection/>}/>
        </Routes>
      </div>
      <div>
        <FooterSection />
      </div>
    </>




  );
}

export default App;
