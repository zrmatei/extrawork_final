import React from "react";
import Bar from "../Bar";
import Header from "../Header";
import Footer from "../Footer";
import "./service_body.css";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Services() {

    const [hover, setHover] = useState(false);

    const handleEnter = () => {
      setHover(true);
    };
  
    const handleOut = () => {
      setHover(false);
    };
  


  return (
    <div>
      <Bar />
      <br />
      <Header />
      <div className="main-services">
        <div className="photo-services">
          <img src="src\assets\s1.jpg" alt="s1" />
          <img src="src\assets\s2.jpg" alt="s2" />
          <img src="src\assets\s3.jpg" alt="s3" />
          <img src="src\assets\s4.jpg" alt="s4" />
        </div>

        <div className="elem-list">
          <div className="card-s"
          onMouseEnter={handleEnter}
          onMouseOut={handleOut}
          >
            <div className="text">
              <h2 className={`underline ${hover ? "hovered" : ""}`}>
                Audio-video production services
                </h2>
              <h3>Specialized in:</h3>
              <ul>
                <li className="text">Hybrid conferences</li>
                <li className="text">Event platform</li>
                <li className="text">Indoor and outdoor live streaming</li>
                <li className="text">Webinars</li>
                <li className="text">Conferences with public</li>
              </ul>
            </div>
          </div>

          <div className="card-s"
          onMouseEnter={handleEnter}
          onMouseDown={handleOut}
          >
            <div className="text">
              <h2 className={`underline ${hover ? "hovered" : ""}`}>Equipment</h2>
              <h3>
                We use professional broadcast equipment, equipment that
                guarantees us stability and flexibility in production
              </h3>
              <ul>
                <li className="text">Canon ENG 4K cameras or Cinema EOS 4k</li>
                <li className="text">PTZ Canon CN-R cameras</li>
                <li className="text">HP and Supermicro emission servers (multi-processor)</li>
                <li className="text">
                  Sennheiser, Sony, and JBL audio equipment (lavaliers,
                  microphones, headset, IEM)
                </li>
                <li className="text">
                  Hybridization systems for premium platforms (ZOOM, Teams,
                  etc.)
                </li>
                <li className="text">
                  Professional lighting (Kinoflow, Astera, Arri, Aputure,
                  Nanlite)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
