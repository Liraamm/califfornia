import React from "react";

import firstBig from "../assets/Property 1=Default.png";
import secondBig from "../assets/Property 1=Variant2.png";
import thirdBig from "../assets/Property 1=Variant3.png";
import fourthBig from "../assets/Property 1=Variant4.png";

const Slider = () => {
  return (
    <div
      className="slider_Div"
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      style={{ position: "absolute", bottom: "30px" }}
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
          style={{ backgroundColor: "#858585" }}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          style={{ backgroundColor: "#858585" }}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          style={{ backgroundColor: "#858585" }}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="3"
          style={{ backgroundColor: "#858585" }}
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={firstBig} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={secondBig} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={thirdBig} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={fourthBig} alt="Fourth slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
          style={{ color: "#B565A8" }}
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
