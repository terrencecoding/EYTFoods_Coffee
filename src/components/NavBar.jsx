import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SmoothScroll from "./SmoothScroll";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false); //Show nav links
  const [fixedNav, setFixedNav] = useState(false); //make nav static
  const [showTopLink, setShowTopLink] = useState(false); //show link to top

  const links = useRef(null);
  const linksContainer = useRef(null);

  // const handleToggle = () => {
  //   setShowLinks(!showLinks);
  // };
  const handleToggle = () => {
    const linksHeight = links.current.getBoundingClientRect().height;
    const containerHeight =
      linksContainer.current.getBoundingClientRect().height;
    // console.log(containerHeight);
    // console.log(linksHeight);

    if (containerHeight === 0) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = 0;
    }
  };

  const handleClick = () => {
    document.querySelector(".links-container").style.height = 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const navHeight = document
        .getElementById("nav")
        .getBoundingClientRect().height;

      if (scrollHeight > navHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    };

    // adding eventListener for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // removing the eventListener after executed handleScroll function
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // ternary operator for fixed navbar
    <nav id="nav" className={fixedNav ? "fixed-nav" : ""}>
      <div className="nav-center">
        <div className="nav-header">
          {/*Nav header: logo & toggleBtn*/}
          <img src="./img/logo-no-background.png" className="logo" alt="Logo" />
          <button
            className="nav-toggle"
            aria-label="Toggle Navigation"
            onClick={handleToggle}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* nav links */}
        <div ref={linksContainer} className="links-container">
          <ul ref={links} className="links">
            <li>
              <Link className="link" to="/" onClick={handleClick}>
                Home
              </Link>
              {/* <SmoothScroll>
                <a href="#home" className="scroll-link">
                  home
                </a>
              </SmoothScroll> */}
            </li>
            <li>
              <Link className="link" to="/about" onClick={handleClick}>
                About Us
              </Link>
              {/* <SmoothScroll>
                <a href="#about" className="scroll-link">
                  about us
                </a>
              </SmoothScroll> */}
            </li>
            <li>
              <Link className="link" to="/shop" onClick={handleClick}>
                Shop
              </Link>
              {/* <SmoothScroll>
                <a href="#services" className="scroll-link">
                  products
                </a>
              </SmoothScroll> */}
            </li>
            <li>
              <Link className="link" to="/contact" onClick={handleClick}>
                Contact
              </Link>
              {/* <SmoothScroll>
                <a href="#tours" className="scroll-link">
                  contact us
                </a>
              </SmoothScroll> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
