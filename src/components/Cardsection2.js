import React from "react";
import "./Cardsection2.css";

function Cardsection2() {

  const imgStyle = {
    background: `url('./img/cardimg.png') no-repeat center center`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  };
  return (
   <>
    <div className="best-for-container" >
      <div className="best-for-card" style={imgStyle}>
        <h2 className="card-title-download">Best For Advanced Editing</h2>
        <p className="card-description">Join milions worldwide who trust FaceApp for effortless, stunning photo edits </p>
        <div className="spacer"></div>
        <div className="sub-card">
          <p className="sub-card-text">Experience the power of highly acclaimed photo editing app, a global favorite since 2017</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cardsection2;
