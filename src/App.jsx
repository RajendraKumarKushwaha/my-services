

import { AboutSection } from "./components/about-component/about-section";
import { FooterSection } from "./components/footer-component/footer-section";
import { HeaderSection } from "./components/header-component/header-section";
import { HeroSection } from "./components/hero-component/hero-section";
import { ServiceSection } from "./components/service-component/service-section";

// import WOW from "wow.js";
// import { tns } from "tiny-slider/src/tiny-slider";
// import GLightbox from "glightbox";
// import Isotope from "isotope-layout";
// import imagesLoaded from "imagesloaded";
// import { useEffect } from "react";


function App() {
 

  return (

    <div>

        <HeaderSection/>
        <HeroSection/>
        <ServiceSection/>
        <AboutSection/>
        <FooterSection/>

    </div>




  );
}

export default App;
