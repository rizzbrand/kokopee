import React from "react";
import { Link } from "react-router";
import Transition from "../../components/transition/Transition";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="page contact">
      <section className="contact-hero">
        <div className="contact-hero-img">
          <img src="/contact/hero.jpg" alt="" />
        </div>

        <div className="contact-hero-header">
          <h1>Get in touch</h1>
          <div className="stickers">
            <img src="/stickers.png" alt="" />
          </div>
        </div>

        <div className="contact-form">
          <div className="form-col">
            <div className="form-header">
              <p className="primary">
                Join Us In Advocating For Fair AI In Music. Sign The Petition.
              </p>
              <p>Your Voice Matters</p>
              <button>
                <Link to="/contact">Sign Up</Link>
              </button>
            </div>
            <div className="form-details">
              <div className="join-our-team">
                <p className="primary">Join Our Team</p>
                <p>
                  Want to make a difference? Explore our open positions and
                  apply now. Click the link below to view job details and apply.
                </p>
              </div>
              <div className="divider"></div>
              <div className="careers-cta">
                <p className="primary">
                  <Link to="/">View Positions</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="form-col">
            <div className="form">
              <div className="form-row">
                <div className="form-item">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-item">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-item">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="form-item">
                <input type="text" placeholder="Company Name" />
              </div>
              <div className="form-item">
                <input type="text" placeholder="Where are you located?" />
              </div>
              <div className="form-item">
                <textarea
                  name=""
                  id=""
                  rows={8}
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <div className="submit-btn">
                <p className="primary">
                  <Link to="/">Submit</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-col">
          <div className="contact-banner-header">
            <h2>
              Balanced <br />
              Pitch Inc.
            </h2>
            <p className="primary">1800 vine streethollywood, ca 90028, usa</p>
          </div>

          <div className="banner-contact">
            <p className="primary">Info@balancedpitch.ai</p>
            <p>Established 2024</p>
          </div>
          <div className="banner-info">
            <p>
              Sound Ethics Data offers meticulously curated datasets for machine
              learning, embedded with comprehensive attribution metadata and
              advanced machine learning features.
            </p>
          </div>
        </div>
        <div className="contact-banner-col">
          <div className="contact-banner-img">
            <img src="/contact/banner.jpg" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Transition(Contact);
