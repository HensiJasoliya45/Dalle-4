import React from "react";
import "./Home.css";

const Home = () => {
  const containerStyle = {
    padding: '50px 20px',
    background: `url('./img/bg.png') no-repeat center center`,
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundAttachment: 'fixed', 
    overflow: 'hidden'
  };
  

  return (
    <>
      <div className="container"  style={containerStyle}>
        <h1 className="logo-title">
          Perfect <img src="./img/text.png" alt="AI Art Generator" className="highlight-img" />
        </h1>
        <p className="subtitle-home">Natural Beauty, Flawless edits</p>
        <div className="download-buttons">
          <div className="button">
            <img src="./img/apple.png" alt="App Store" className="icon" />
            <div>
              <p className="small-text">Download on the</p>
              <h2 className="big-text">App Store</h2>
            </div>
          </div>
          <div className="button">
            <img src="./img/playstore.png" alt="Google Play" className="icon" />
            <div>
              <h2 className="big-text-google">Google Play</h2>
              <p className="small-text-google">'DEN ALIN</p>
            </div>
          </div>
        </div>
        <img src="./img/appstore-cutout.png" alt="Cutout Before" className="cutout-before" />
        <img src="./img/google-cutout.png" alt="Cutout After" className="cutout-after" />
        <img src="./img/download-cutout.png" alt="Cutout top" className="cutout-top" />
        <div className="bottom-image-container">
        <div className="half-circle"></div> 
        </div>
         <img src="./img/phone-img.png" alt="Additional Info" className="bottom-image" />
      </div>
    </>
  );
};

export default Home;
