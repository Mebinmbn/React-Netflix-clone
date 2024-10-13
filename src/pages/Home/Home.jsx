// import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitileCards from "../../components/TitleCards/TitileCards";
import Footer from "../../components/Footer/Footer";

const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            A blind lawyer by day, vigilante by night. Matt Murdock fights the
            crime of New York as Daredevil.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" /> Info
            </button>
          </div>
          <TitileCards />
        </div>
      </div>
      <div className="more-cards">
        <TitileCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitileCards title={"Only on Netflix"} category={"popular"} />
        <TitileCards title={"Upcoming"} category={"upcoming"} />
        <TitileCards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default home;
