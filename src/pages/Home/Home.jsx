import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import { assets } from "../../assets";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const API_KEY = import.meta.env.VITE_WATCHMODE_API_KEY;
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
      <div className="more-cards">
        <TitleCards
          title="Bollywood Movies"
          listUrl={`https://api.watchmode.com/v1/list-titles/?types=movie&countries=IN&languages=hi&limit=10&sort_by=popularity_desc`}
        />
        <TitleCards
          title="Popular Movies"
          listUrl={`https://api.watchmode.com/v1/list-titles/?types=movie&sort_by=popularity_desc&limit=10`}
        />

        <TitleCards
          title="Indian Web Series"
          listUrl={`https://api.watchmode.com/v1/list-titles/?types=tv_series&countries=IN&limit=10&sort_by=popularity_desc`}
        />

        <TitleCards
          title="Only On Netflix"
          listUrl={`https://api.watchmode.com/v1/list-titles/?types=movie&sources=netflix&limit=10`}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

