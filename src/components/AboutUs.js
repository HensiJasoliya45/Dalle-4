import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
    <div className="about-container">
      <div className="about-row">
        <h2 className="about-title">About Us</h2>
        <div className="info-box">
          <img
            src="./img/arrow.png"
            className="arrow-icon"
            alt="Arrow"
          />
          <p>
          <strong>8 years</strong> of hands-on experience with Artificial
          Intelligence, Ashirwad is responsible for designing and developing the
          state-of-the-art image and video AI models used in our{" "}
          <strong>Dalle-4</strong> service. Ashirwad oversees the strategic
          development of all Dalle-4 IP.
        </p>
        </div>
      </div>

      <div className="info-box">
        <img
          src="./img/arrow.png"
          className="arrow-icon"
          alt="Arrow"
        />
        <p>
            <strong>Dalle-4</strong> has amazing features like{" "}
            <strong>
              Text to Image, Image to Image, Face Swap, Baby Predict, Cloth
              Swap, and more
            </strong>
            . Those all are handled by intelligent models and some artificial
            intelligence.
          </p>
        
      </div>
    </div>
    </>
  );
}
