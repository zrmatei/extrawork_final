import React, { useState } from "react";
import Slider from "./Slider";
import "./body.css";
import Parteners from "./Parteners";

function Body() {
  const [hover, setHover] = useState(false);

  const handleOver = () => {
    setHover(true);
  };

  const handleOut = () => {
    setHover(false);
  };

  return (
    <div className="body">
      <div className="slider">
        <Slider />
        <Parteners />
      </div>
      <br />
      <div className="container-body">
        <div
          className="cards"
          style={{
            backgroundColor: hover ? "#F4C2C2" : null,
            color: hover ? "#333" : null,
          }}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <h1>Why us?</h1>
          <p>
            We utilize the latest technology and equipment to deliver
            high-definition visuals and crystal-clear audio. Our commitment to
            staying at the forefront of technological advancements means your
            project benefits from the best tools available in the industry.
          </p>
        </div>
        <div
          className="cards"
          style={{
            backgroundColor: hover ? "#F4C2C2" : null,
            color: hover ? "#333" : null,
          }}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <h1>Our promise</h1>
          <p>
            At Extrawork, we promise to deliver nothing but excellence. Our
            commitment to quality is unwavering, and we ensure that every
            project we undertake meets the highest standards of production. From
            the initial concept to the final cut, we pay meticulous attention to
            detail to provide you with superior results.
          </p>
        </div>
        <div
          className="cards"
          style={{
            backgroundColor: hover ? "#F4C2C2" : null,
            color: hover ? "#333" : null,
          }}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <h1>Customized Solutions</h1>
          <p>
            We understand that every project is unique. That's why we offer
            personalized services to meet your specific requirements. From
            concept development to final production, we tailor our approach to
            ensure your complete satisfaction and the success of your project.
          </p>
        </div>
        <div
          className="cards"
          style={{
            backgroundColor: hover ? "#F4C2C2" : null,
            color: hover ? "#333" : null,
          }}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          <h1>Experience</h1>
          <p>
            With over a decade of experience in the media production industry,
            our team at Extrawork brings a wealth of knowledge and technical
            expertise to every project. From corporate videos to live event
            coverage, our skilled professionals ensure top-notch quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
