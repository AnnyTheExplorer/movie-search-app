import React, { useState } from "react";
import axios from "axios";
import LogoWhite from "../Assets/Images/LogoWhite.png";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const apiKey = "d29112f83889b69aa3cd2aaa9b6210cd";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="nav-logo">
          <img src={LogoWhite} alt="" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && (
          <p
            style={{ fontSize: "18px", color: "white" }}
          >
            Loading...
          </p>
        )}
        <button className="start-btn" style={{ backgroundColor: "red", color: "white", padding: "0px 12px", border: "none" , borderRadius: "6px", cursor: "pointer" }}>Get Started</button>
      </div>
      <div className="results">
        {results.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
