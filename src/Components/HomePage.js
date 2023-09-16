import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import "../Components/HomePage.css";
import FeatureMore from "../Assets/Images/FeatureMore.png"

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "d29112f83889b69aa3cd2aaa9b6210cd",
        },
      })
      .then((response) => {
        setTopMovies(response.data.results.slice(0,10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <img src={FeatureMore} alt=" " className="feature-more" />
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="movie-card" data-testid="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <h2 data-testid="movie-title">{movie.title}</h2>
              <p data-testid="movie-release-date">
                Release Date: {movie.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;