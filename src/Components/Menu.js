import React from "react";
import "./Menu.css";
import LogoBlack from "../Assets/Images/LogoBlack.png";
import HomeIcon from "../Assets/Images/HomeIcon.png";
import ProjectorIcon from "../Assets/Images/ProjectorIcon.png";
import TvIcon from "../Assets/Images/TvIcon.png";
import AlarmIcon from "../Assets/Images/AlarmIcon.png";
import QuizCard from "../Assets/Images/QuizCard.png";
import LogOut from "../Assets/Images/LogOut.png";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <img src={LogoBlack} alt="logo" />
      </div>
      <div className="navs">
        <div className="nav-option">
          <span>
            <img src={HomeIcon} alt="" />
          </span>
          <span>Home</span>
        </div>
        <div
          className="nav-option"
          style={{ backgroundColor: "#f8e8eb", color: "#be113c" }}
        >
          <span>
            <img src={ProjectorIcon} alt="" />
          </span>
          <span>Movies</span>
        </div>
        <div className="nav-option">
          <span>
            <img src={TvIcon} alt="" />
          </span>
          <span>TV Series</span>
        </div>
        <div className="nav-option">
          <span>
            <img src={AlarmIcon} alt="" />
          </span>
          <span>Upcoming</span>
        </div>
      </div>
      <div className="quiz-card">
        <img src={QuizCard} alt="" />
      </div>
      <div className="log-out">
        <img src={LogOut} alt="" />
      </div>
    </div>
  );
}

export default Menu;
