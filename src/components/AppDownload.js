import React from "react";
import "./AppDownload.css";

export default function AppDownload() {
  const downloadbgStyle = {
    
    background: `url('./img/cardimg.png') no-repeat top right`,
    backgroundSize: '100% 60%',
    overflow: 'hidden',
  };
  return (
    <div className="container-box"  >
      <div className="app-card" >

        <div className="left-panel" >
          <img src="./img/left-img.png" alt="App Preview" />
        </div>
        
        <div className="right-panel" style={downloadbgStyle}>
          <img className="logo-icon" src="./img/logo.png" alt="App Logo" />
          
          <div className="card-title">Download Latest Version Of The App From</div>
          <img className="qr-code" src="./img/down-img.png" alt="QR Code or App Store Badge" />
        </div>
      </div>
    </div>
  );
}