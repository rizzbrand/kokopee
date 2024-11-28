import React from "react";
import Transition from "../../components/transition/Transition";
import Footer from "../../components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import "./Solutions.css";

const Solutions = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page solutions">
        <section className="solutions-hero">
          <div className="solutions-hero-img">
            <img src="/solutions/hero.jpg" alt="" />
          </div>
          <div className="solutions-hero-header">
            <h1>Solutions</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
          <div className="solutions-hero-info">
            <p className="primary">Sound Ethics Data</p>
            <p className="primary">Academia + Beyond</p>
            <p className="primary">AI Rights</p>
            <p className="primary">Ethos API</p>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Balanced <br />
                Pitch Inc.
              </h2>
              <p className="primary">
                1800 vine streethollywood, ca 90028, usa
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Info@balancedpitch.ai</p>
              <p>Established 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Sound Ethics Data offers meticulously curated datasets for
                machine learning, embedded with comprehensive attribution
                metadata and advanced machine learning features.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <img src="/contact/banner.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="" />
              <h3>
                Machine Learning <br /> Training Data
              </h3>
            </div>
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="" />
              <h3>
                Artist <br />
                Attribution
              </h3>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>01.</p>
              <p>Attribution</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Detailed metadata ensures every artist's and rights holder's
                contribution is recognized.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>02.</p>
              <p>Feature Extraction</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Our advanced processing pipeline extracts comprehensive features
                from audio files, ensuring data scientists have access to
                high-quality, detailed datasets for machine learning models
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>03.</p>
              <p>Permissions</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Data scientists only have access to the data they have been
                cleared for, ensuring strict compliance with legal and ethical
                standards.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>04.</p>
              <p>Reporting</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Detailed analytics on dataset usage, providing transparency and
                fostering trust among stakeholders.
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>05.</p>
              <p>Compliance and Transparency</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Our training reports are paving the way for standards in
                training data transparency, offering clear and transparent
                documentation of data sourcing and licensing.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-callout">
          <div className="callout-bg">
            <img src="/solutions/callout-bg.jpg" alt="" />
          </div>

          <div className="callout-copy">
            <h2>
              ethical ai in <br /> academia and <br /> beyond
            </h2>
            <p>
              Join us in embracing AI responsibly, protecting artistic rights,
              and setting new standards for the ethical use of AI in music.
            </p>
            <br />
            <p>
              In today's digital age, AI companies often exploit creative works
              without proper authorization, leading to a lack of transparency
              about the origin and ownership of the datasets used. This not only
              infringes on artists’ rights but also creates ethical and legal
              challenges within the industry.
            </p>
          </div>
        </section>

        <section className="rights">
          <h1>AI Rights</h1>
          <h3>Fighting for Fair</h3>

          <p className="tagline">Empowering artists to protect and monetize.</p>
          <p>
            Through strategic collaboration with legal experts, we provide
            robust solutions to recover lost revenue, combat unauthorized usage,
            and ensure proactive tracking of your music and intellectual
            property.
          </p>
        </section>

        <section className="rights-list">
          <div className="right">
            <div className="right-index">
              <p>(01)</p>
            </div>
            <div className="right-title">
              <h3>Set Your Rules</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(02)</p>
            </div>
            <div className="right-title">
              <h3>Set Your Rules</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(03)</p>
            </div>
            <div className="right-title">
              <h3>Set Your Rules</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
              </div>
              <div className="right-desc-line">
                <p>Music, Voice, NIL (Name, Image, Likeness)</p>
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
              <p className="primary">
                1800 vine streethollywood, ca 90028, usa
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Info@balancedpitch.ai</p>
              <p>Established 2024</p>
            </div>
            <div className="banner-info">
              <p>
                Sound Ethics Data offers meticulously curated datasets for
                machine learning, embedded with comprehensive attribution
                metadata and advanced machine learning features.
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
    </ReactLenis>
  );
};

export default Transition(Solutions);
