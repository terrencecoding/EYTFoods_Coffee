import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <header style={{ minHeight: isHome ? "100vh" : "20vh" }} id="home">
      {/* navbar */}
      <NavBar />
      {/* banner */}
      {isHome ? <Banner /> : ""}
    </header>
  );
};

export default Header;
