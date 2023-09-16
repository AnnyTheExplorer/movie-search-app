import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import "./MovieDetails.css";
import TopTrailer from "../Assets/Images/TopTrailer.png";
import StarOptions from "../Assets/Images/StarOptions.png";
import RightCard from "../Assets/Images/RightCard.png";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "d29112f83889b69aa3cd2aaa9b6210cd",
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="movie-details" style={{ display: "flex" }}>
      <Menu />
      <div className="movies">
        <div className="top">
          <img src={TopTrailer} alt="" className="trailer" />
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="trailer-info">
              <h1 data-testid="movie-title">{movieDetails.title}</h1>
              <p data-testid="movie-release-date">
                Release Date (UTC): {movieDetails.release_date}
              </p>
              <p data-testid="movie-runtime">
                Runtime (minutes): {movieDetails.runtime}
              </p>
              <p data-testid="movie-overview">{movieDetails.overview}</p>
            </div>
          </div>
          <div className="bottom-right">
            <div className="img-1">
              <img src={StarOptions} alt="" />
            </div>
            <div className="img-2">
              <img src={RightCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
