import React from "react";

import sliderLeft from "../assets/SliderLeft.svg";
import sliderRight from "../assets/SliderRight.svg";
import Hero from "../assets/HeroHomePage.svg";
import All from "../assets/All.png";
import Decor from "../assets/Decor.png";
import Parfume from "../assets/Parfume.png";
import Skincare from "../assets/Skincare.svg";

import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img class="sliderLeft" src={sliderLeft} alt="sliderLeft" />
        <h1
          className="heroText"
          style={{ fontSize: "35px", marginTop: "5%", fontWeight: "bold" }}
        >
          Califfornia - косметика, которая поможет вам подчеркнуть вашу красоту
          и придать образу новые краски
        </h1>
        <Slider />
        <img class="sliderRight" src={sliderRight} alt="sliderRight" />
      </div>
      <div className="Hero" style={{ marginTop: "3%" }}>
        <img
          src={Hero}
          alt="Hero"
          className="Hero"
          style={{ cursor: "default", width: "100%" }}
        />
      </div>
      <h2
        className="homePageTextCatalog"
        style={{ fontWeight: "bold", fontSize: "65px", marginTop: "5%" }}
      >
        Каталог
      </h2>
      <div className="catalogOptions">
        <img src={All} alt="All" style={{ width: "83%" }} />
        <img src={Decor} alt="Decor" style={{ width: "83%" }} />
        <img src={Parfume} alt="Parfume" style={{ width: "83%" }} />
        <img src={Skincare} alt="Skincare" style={{ width: "83%" }} />
      </div>
    </div>
  );
};

export default HomePage;
