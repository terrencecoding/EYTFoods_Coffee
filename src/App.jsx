import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Section from "./components/Section";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import CoffeeShop from "./components/CoffeeShop";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import NotFound from "./components/NotFound";

const App = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > 500) {
        setShowLink(true);
      } else {
        setShowLink(false);
      }
    };

    // Window eventlistener when scroll and execute handleScroll function
    window.addEventListener("scroll", handleScroll);
    return () => {
      // remove eventlistener once executed.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // return all the components in this app
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<CoffeeShop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* Catch-all route */}
      </Routes>
      <Footer />
      <SmoothScroll>
        <a
          className={`scroll-link top-link ${showLink ? "show-link" : ""}`}
          href="#home"
        >
          <i className="fas fa-arrow-up"></i>
        </a>
      </SmoothScroll>
    </div>
  );
};

export default App;
