import React from "react";
import HeroDesc from "../Assets/Images/HeroDesc.png"
import "../Components/HeroSection.css";
import SearchBar from "../Components/SearchBar.js";

function HeroSection() {
  return (
    <div className="hero-section">
      <SearchBar />
      <img
        src={HeroDesc}
        alt="John Wick Movie Description"
        className="movie-desc"
      />
    </div>
  );
}

export default HeroSection;
