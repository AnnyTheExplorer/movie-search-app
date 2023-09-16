import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import "./MovieDetails.css";
import TopTrailer from "../Assets/Images/TopTrailer.png";
import StarOptions from "../Assets/Images/StarOptions.png";
import RightCard from "../Assets/Images/RightCard.png";
import TopRated from "../Assets/Images/TopRated.png";

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
          <img src={TopTrailer} alt="" className="top-trailer" />
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <div className="trailer-info">
              <div className="info-nav">
                <span>Top Gun: Maverick</span>
                <span>2022</span>
                <span>PG-13</span>
                <span>2h 10m</span>
                <span className="button">Action</span>
                <span className="button">Drama</span>
              </div>
              <p>
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifices from those chosen to fly it.
              </p>
              <div className="casts">
                <p>
                  Director:<span className="cast-name">Joseph Kosinski</span>
                </p>
                <p>
                  Writers:
                  <span className="cast-name">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p>
                  Stars:
                  <span className="cast-name">
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                </p>
              </div>
              <div className="top-rated">
                <img src={TopRated} alt="" />
              </div>
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
