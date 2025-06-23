import React from "react";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <video autoPlay muted loop playsInline>
          <source src="/footer/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Solutions</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Updates</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p></p>
          <h3>Get in Touch</h3>
          <p className="primary">
             <br />
            
          </p>
          <p>© 2025 kokopee music</p>
        </div>
        <div className="footer-col">
          <p></p>
          <h3></h3>
          <p className="primary">
            <br />
          
          </p>
          <p>Designed by Rizzbrand.site</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Make Your Voice Heard!</p>
        <p>Stand for Ethical AI in Music</p>

        <span>Join our movement to protect and empower music creators.</span>

        <div className="footer-ws"></div>

        <div className="footer-input">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="footer-submit">
          <Link to="/">Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
