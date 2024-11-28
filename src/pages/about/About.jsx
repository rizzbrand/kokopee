import React from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import "./About.css";

const About = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page about">
        <section className="solutions-hero">
          <div className="solutions-hero-img">
            <img src="/about/hero.jpg" alt="" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>Our Story</h1>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
          </div>
          <div className="about-hero-info">
            <p>Advocating For Artists’ Rights & New Standards For Ethical AI</p>
          </div>
        </section>
        <section className="about-us">
          <div className="about-us-col">
            <div className="sign-up-card">
              <div className="sign-up-img">
                <img src="/about/hero.jpg" alt="" />
              </div>
              <div className="sign-up-card-header">
                <h3>
                  Join us in advocating for fair AI in music. Sign the petition!
                </h3>
                <p>Your Voice Matters</p>
              </div>
              <div className="sign-up-cta">
                <button>
                  <Link to="/">Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="about-us-col">
            <h3>
              We are musicians and artists who want to make sure future
              generations can have thriving careers in music post-AI.
            </h3>
            <p>
              We do this by advocating for artists’ rights and new standards for
              ethical AI. We partner with universities in their music and data
              science departments working with the next generation of the music
              industry. We innovate solutions in ethical licensing and AI rights
              management. We put this to the test by developing artists,
              creating music and content that embraces AI in search of the next
              generation of music.
            </p>
            <div className="about-us-cta">
              <button>
                <Link to="/">Talk to us</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="team-bg">
            <img src="/about/team-bg.jpg" alt="" />
          </div>
          <div className="team-header">
            <h3>The Sound Ethics</h3>
            <h1>Team</h1>
            <div className="join-team-card">
              <h3>Join the Team</h3>
              <p>
                We embrace a decentralized organization to empower our team,
                foster innovation, and respond swiftly to meet the rapid advance
                of AI.
              </p>
              <div className="join-team-cta">
                <button>
                  <Link to="/">Careers</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="team-list">
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <img src="/about/team1.jpg" alt="" />
                </div>
                <div className="player-info">
                  <h3>James O'Brien</h3>
                  <p>Founder Co-CEO</p>
                </div>
                <div className="player-desc">
                  <p>
                    James has dedicated over 30 years to the music industry,
                    blending his roles as a producer, composer, and developer
                    with a passion for advocating artists' rights in the
                    evolving digital landscape.
                  </p>
                </div>
                <div className="player-social">
                  <Link to="/">LinkedIn</Link>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <img src="/about/team2.jpg" alt="" />
                </div>
                <div className="player-info">
                  <h3>James O'Brien</h3>
                  <p>Founder Co-CEO</p>
                </div>
                <div className="player-desc">
                  <p>
                    James has dedicated over 30 years to the music industry,
                    blending his roles as a producer, composer, and developer
                    with a passion for advocating artists' rights in the
                    evolving digital landscape.
                  </p>
                </div>
                <div className="player-social">
                  <Link to="/">LinkedIn</Link>
                </div>
              </div>
            </div>
            <div className="team-list-row">
              <div className="team-player">
                <div className="player-img">
                  <img src="/about/team3.jpg" alt="" />
                </div>
                <div className="player-info">
                  <h3>James O'Brien</h3>
                  <p>Founder Co-CEO</p>
                </div>
                <div className="player-desc">
                  <p>
                    James has dedicated over 30 years to the music industry,
                    blending his roles as a producer, composer, and developer
                    with a passion for advocating artists' rights in the
                    evolving digital landscape.
                  </p>
                </div>
                <div className="player-social">
                  <Link to="/">LinkedIn</Link>
                </div>
              </div>
              <div className="team-player">
                <div className="player-img">
                  <img src="/about/team4.jpg" alt="" />
                </div>
                <div className="player-info">
                  <h3>James O'Brien</h3>
                  <p>Founder Co-CEO</p>
                </div>
                <div className="player-desc">
                  <p>
                    James has dedicated over 30 years to the music industry,
                    blending his roles as a producer, composer, and developer
                    with a passion for advocating artists' rights in the
                    evolving digital landscape.
                  </p>
                </div>
                <div className="player-social">
                  <Link to="/">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-marquee">
          <div class="marquee_container">
            <div class="marquee">
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
            </div>
            <div class="marquee">
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
              <h1>First Text</h1>
              <h1>Second Text</h1>
              <h1>Third Text</h1>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="service-row">
            <div className="service-title">
              <h3>01.</h3>
              <h3>Absolute Respect for Creative Copyright</h3>
            </div>
            <div className="service-desc">
              <p>No Training Models Without Direct Consent</p>
              <p>
                We insist on transparent attribution of training data. Preserve
                the legacy and rights of human works that fuel AI progress.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>02.</h3>
              <h3>Innovation and Collaboration</h3>
            </div>
            <div className="service-desc">
              <p>We Cannot Rely On Policymakers To "Fix" This Problem</p>
              <p>
                While we advocate for legislative support, we place greater
                emphasis on collective efforts and industry self-regulation. We
                support the creation, adoption, and facilitation of legal
                frameworks and ethical guidelines.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>03.</h3>
              <h3>Standards in AI Rights</h3>
            </div>
            <div className="service-desc">
              <p>Metadata Is Key for Correct Attributions in AI Applications</p>
              <p>
                Standardizing AI rights is essential, focusing on copyrights and
                attributions of training data. We collaborate with industry
                partners to create open AI rights frameworks, ensuring ethical
                integration of AI that respects all stakeholders' rights.
              </p>
            </div>
          </div>
          <div className="service-row">
            <div className="service-title">
              <h3>04.</h3>
              <h3>Education for Ethical AI Advocacy</h3>
            </div>
            <div className="service-desc">
              <p>The Power of Knowledge to Transform the Music Industry</p>
              <p>
                Our commitment lies in educating artists, industry
                professionals, data scientists, and the broader public about
                AI's implications for music rights.
              </p>
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

export default Transition(About);
