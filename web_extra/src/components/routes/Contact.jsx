import React, { useEffect, useState } from "react";
import Bar from "../Bar";
import Header from "../Header";
import Footer from "../Footer";
import QRCode from "qrcode";
import "./contact_body.css";
import { dark } from "@mui/material/styles/createPalette";

function Contact() {
  const [qr, setQr] = useState("");

  useEffect(() => {

    var options = {
        color: {
            dark: "#333",
            light:"#0000"
          }

    }

    const url = "https://www.facebook.com/extraworkmedia";
    QRCode.toDataURL(url, options,(err, url_f) => {
      if (err) return console.error(err);
      else setQr(url_f);
    });
  });

  return (
    <div>
      <Bar />
      <br />
      <Header />
      <div className="contact-elem">
        <div className="banner-text">
          <h1>Contact us</h1>
        </div>
        <div className="info-contact">
          <div className="text-zone">
            <h2>Interested in working with us?</h2>
            <h3>Find us at</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5787843002868!2d26.135640099999996!3d44.4623077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f965688d7d67%3A0xa8999b9fcd65d3c1!2sExtrawork%20Media%20Production!5e0!3m2!1sro!2sro!4v1716388354016!5m2!1sro!2sro"
              width="600"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <h2>follow our work on media</h2>
            <img src={qr} alt="qr-code" id="qr-code" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
