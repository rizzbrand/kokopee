import React from "react";
import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <img src="/footer/footer.jpg" alt="" />
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/">About</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/">Solutions</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/">News</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/">Contact</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>Questions</p>
          <h3>Contact Us</h3>
          <p className="primary">
            Info@soundethics.ai <br />
            LinkedIn / Careers
          </p>
          <p>© 2024 Sound Ethics Inc.</p>
        </div>
        <div className="footer-col">
          <p>Visiting?</p>
          <h3>Finding Us</h3>
          <p className="primary">
            1800 Vine Street <br />
            Hollywood, CA 90028, USA
          </p>
          <p>Made by SFCO</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Your voice matters!</p>
        <p>Advocate for Fair AI in Music</p>

        <span>Sign our petition and support the future of music artists</span>

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
