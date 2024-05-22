import React from "react";
import { Carousel } from "antd";
import "./slider.css";

function Slider() {
  return (
    <div className="carousel">
      <Carousel autoplay>
        <div>
          <img src="src/assets/img2.jpg" alt="img-2" />
        </div>
        <div>
          <img src="src/assets/img3.jpg" alt="img-3" />
        </div>
        <div>
          <img src="src/assets/img4.jpeg" alt="img-4" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
