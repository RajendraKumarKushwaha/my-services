import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Importing CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "lineicons/dist/lineicons.css";
import "animate.css";
import "tiny-slider/dist/tiny-slider.css";
import "glightbox/dist/css/glightbox.min.css";

// Importing JS
import "bootstrap/dist/js/bootstrap.js";
import "tiny-slider/dist/tiny-slider.js";
import "glightbox/dist/js/glightbox.js";
import WOW from "wow.js";



// Initialize WOW.js
new WOW().init();

// Initialize Glightbox
import GLightbox from "glightbox";
GLightbox();

// Render App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
