import React from "react";
import Transition from "../../components/transition/Transition";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="page updates">
      <section className="updates-hero">
        <h1>Latest Updates</h1>
      </section>

      <section className="filters">
        <div className="filter active">
          <p>All</p>
        </div>
        <div className="filter">
          <p>Resources</p>
        </div>
        <div className="filter">
          <p>Standards</p>
        </div>
        <div className="filter">
          <p>News</p>
        </div>
      </section>

      <section className="articles">
        <div className="articles-row">
          <div className="article">
            <div className="article-img">
              <img src="/updates/article1.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>

          <div className="article">
            <div className="article-img">
              <img src="/updates/article2.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="articles-row">
          <div className="article">
            <div className="article-img">
              <img src="/updates/article3.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>

          <div className="article">
            <div className="article-img">
              <img src="/updates/article4.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="articles-row">
          <div className="article">
            <div className="article-img">
              <img src="/updates/article5.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>

          <div className="article">
            <div className="article-img">
              <img src="/updates/article6.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="articles-row">
          <div className="article">
            <div className="article-img">
              <img src="/updates/article3.jpg" alt="" />
              <div className="article-date">
                <p>6.19.2024 &nbsp; News</p>
              </div>
            </div>
            <div className="article-title">
              <h3>
                The Elvis Act And The Battle Against Unauthorized Ai Voices
              </h3>
            </div>
            <div className="article-link">
              <p className="primary">
                <Link to="/">Read More</Link>
              </p>
            </div>
          </div>

          <div className="article"></div>
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

export default Transition(Updates);
