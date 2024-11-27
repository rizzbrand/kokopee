import React from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router";

import "./Home.css";

const Home = () => {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-img">
          <img src="/home/hero.jpg" alt="" />
        </div>

        <div className="hero-header">
          <h1>
            Balanced <br /> Pitch
          </h1>
          <p>In the Dawn of AI Revolution</p>
          <div className="stickers">
            <img src="/stickers.png" alt="" />
          </div>
          <button>
            <Link to="/contact">Get in touch</Link>
          </button>
        </div>

        <div className="news-article">
          <div className="news-article-title">
            <p className="primary">
              Riaa takes on suno and udio: ai <br /> copyright clash
            </p>
          </div>
          <div className="news-article-info">
            <p>7.1.2024</p>
            <p>News</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transition(Home);
