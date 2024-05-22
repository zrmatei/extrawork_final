import React, { useEffect, useState } from "react";
import Bar from "../Bar";
import Header from "../Header";
import Footer from "../Footer";
import "./about_body.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function About() {
  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleOut = () => {
    setHover(false);
  };

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400 && window.scrollY < 550) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Bar />
      <br />
      <Header />
      <div className="contain-info-about">
        <img
          src="src\assets\camera.webp"
          alt="banner"
          className="banner-image"
          draggable="false"
        />
        <div className="banner-text">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="container-body-about">
        <div
          className="body-elem"
          onMouseEnter={handleEnter}
          onMouseLeave={handleOut}
        >
          <span>
            <h2 className={`underline ${hover ? "hovered" : ""}`}>
              Who are we?
            </h2>
          </span>
          <p className={`para ${hover ? "hovered" : ""}`}>
            We are a media production company specialized in online
            broadcasting. Our team has a vast experience in the television, film
            and avertising production domain. Our wide range of equipment that
            we posses allows us to create and support any kind of requested
            video production by our clients.
          </p>
          <div className={`info1 ${scroll ? "appear" : ""}`}>
            <h3>Among our partners:</h3>
            <ul className="list-info">
              <li>Bucharest Oncological Institute</li>
              <li>National Society of Oncology of Romania</li>
              <li>University of Medicine and Pharmacy of Craiova</li>
              <li>Nordic Pharma</li>
              <li>Canon Romania</li>
              <li>Huawei Romania</li>
              <li>Photosetup</li>
              <li>F64 Studio</li>
              <li>METRO ROMANIA</li>
              <li>Auto Cobalcescu</li>
              <li>Creative Broadcast Solution</li>
              <li>BRITISH COUNCIL ROMANIA</li>
              <li>Alexandrion Group</li>
            </ul>
          </div>

          <div className={`info2 ${scroll ? "appear" : ""}`}>
            <h3>Our Production:</h3>
            <ul className="list-info">
              <li>
                National Society of Medical Oncology Conference in Romania,
                editions 2019, 2020, 2021, 2022 (over 150 speakers, 3 days, 2-3
                simultaneous rooms)
              </li>
              <li>
                Craiova Connect Conference within UMF Craiova, edition 2022
                (over 55 speakers, 3 days, 3 simultaneous rooms, LIVE surgeries)
              </li>
              <li>
                Bucharest Oncological Institute Days, editions 2020, 2021, 2022
                (over 100 speakers, hybrid, 3 days, 3 simultaneous rooms)
              </li>
              <li>
                Young Oncologists Forum, editions 2021, 2022 (over 100 speakers,
                hybrid, 3 days, 2 simultaneous rooms)
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows">
            <ArrowBackIcon fontSize="large" />
            <ArrowForwardIcon fontSize="large"/>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default About;
