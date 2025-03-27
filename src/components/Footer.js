import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-logo">
          <img src="./img/logo.png" alt="Logo" />
        </div>

        <p className="footer-description">
          Create Stunning AI Art From Image. Just One Click To Generate High-Quality Image Art
        </p>

        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>

        <div className="footer-social">
          <a href="#"><span className="icon-box"><img src="./img/twitter.png" alt="Twitter" /></span></a>
          <a href="#"><span className="icon-box"><img src="./img/fb.png" alt="Facebook" /></span></a>
          <a href="#"><span className="icon-box"><img src="./img/wp.png" alt="WhatsApp" /></span></a>
          <a href="#"><span className="icon-box"><img src="./img/insta.png" alt="Instagram" /></span></a>
        </div>
      </div>
      <div>
       
     
      </div>
      <div>
        <hr/>
         <p className="footer-copyright">© 2025 Dalle-4. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
