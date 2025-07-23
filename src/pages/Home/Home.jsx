import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import { assets } from "../../assets";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={assets.hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={assets.hero_title} alt="" className="caption-img" />
          <p>
            Discover his ties a secret ancient order,a young man living in
            modern istanbul embarks on a quest to save the city from an immortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={assets.play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={assets.info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
