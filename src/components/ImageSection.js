import React from "react";
import "./ImageSection.css"; 

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="content">
        <div className="text-content">
          <h2 className="title">Meet The Top Features</h2>
          <p className="description">
            Discover a wide range of filters and effects that instantly your portraits into stunning, magazine-worthy shots
          </p>
        </div>
        
        <div className="img-wrapper">
          <div className="img-container">
            <img src="./img/img1.png" alt="Gallery 1" className="gallery-img" />
            <img src="./img/img2.png" alt="Gallery 2" className="gallery-img" />
            <img src="./img/img3.png" alt="Gallery 3" className="gallery-img" />
            <img src="./img/img4.png" alt="Gallery 4" className="gallery-img" />
            <img src="./img/img5.png" alt="Gallery 5" className="gallery-img" />
            <img src="./img/img6.png" alt="Gallery 6" className="gallery-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
