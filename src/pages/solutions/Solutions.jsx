import React from "react";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";

import "./Solutions.css";

import { ReactLenis, useLenis } from "lenis/react";

const Solutions = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="page solutions">
        <section className="solutions-hero about-hero">
          <div className="solutions-hero-img">
            <ParallaxImage src="/solutions/hero.jpg" alt="" />
          </div>
          <div className="solutions-hero-header about-hero-header">
            <h1>My Bio</h1>
            <div className="stickers">
              {/* <img src="/stickers.png" alt="" /> */}
            </div>
          </div>
          <div className="solutions-hero-info">
            <p className="primary">Afro-Fusion |</p>
            <p className="primary">Conscious Rap</p>
            <p className="primary">| Feel-Good</p>
          
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
              Dkokope is more than music.
             
              </h2>
              <p className="primary">
              It’s rhythm. It’s truth. It’s therapy.
              </p>
            </div>

            {/* <div className="banner-contact">
              <p className="primary">Management@kokopee.com</p>
              <p>Established 2024</p>
            </div> */}
            {/* <div className="banner-info">
              <p>
                We believe in a harmonious balance between creativity and
                technology. By championing artists’ rights and fostering ethical
                AI practices, we’re paving the way for a new era in the music
                industry.
              </p>
            </div> */}
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner.jpg"
                alt="Empowering Creators Through Innovation"
              />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <div className="features-col">
              <img
                src="/solutions/text-bg.png"
                alt="Machine Learning Training Data"
              />
              <h3>
                Popular <br /> Tracks
              </h3>
            </div>
            <div className="features-col">
              <img src="/solutions/text-bg.png" alt="Artist Attribution" />
              <h3>
                Features <br />
                
              </h3>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>01.</p>
              <p>Shine Naa</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Koko pee
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>02.</p>
              <p>3toto</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Koko pee
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>03.</p>
              <p>Respect me </p>
            </div>
            <div className="features-col feature-copy">
              <p>
              Koko pee
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>04.</p>
              <p>Where the money dey</p>
            </div>
            <div className="features-col feature-copy">
              <p>
              ft. Don Jazy 
              </p>
            </div>
          </div>
          <div className="features-copy">
            <div className="features-col feature-title">
              <p>05.</p>
              <p>Made from pain</p>
            </div>
            <div className="features-col feature-copy">
              <p>
                Koko pee
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-callout">
          <div className="callout-bg">
            <ParallaxImage
              src="/solutions/callout-bg.jpg"
              alt="Ethical AI Callout Background"
            />
          </div>

          <div className="callout-copy">
            <h2>
              Responsible <br /> for Creativity <br /> and Beyond
            </h2>
            {/* <p>
              Be part of a movement that values creativity, respects artistic
              contributions, and pioneers ethical AI practices in the music
              industry and beyond.
            </p>
            <br />
            <p>
              In a rapidly advancing digital era, the unchecked use of creative
              works by AI companies raises significant ethical concerns. Without
              proper authorization or transparency, the origin and ownership of
              datasets are often ignored, compromising the rights of artists and
              introducing complex legal challenges.
            </p> */}
          </div>
        </section>

        <section className="rights">
          <h1>Connect</h1>
          <h3>With Me</h3>

          <p className="tagline">You were born to shine. Don’t dim.</p>
          {/* <p>
            By partnering with legal pioneers and industry leaders, we deliver
            innovative solutions to reclaim lost revenue, prevent unauthorized
            use, and actively protect your music and intellectual property in an
            evolving digital landscape.
          </p> */}
        </section>

        <section className="rights-list">
          <div className="right">
            <div className="right-index">
              <p>(01)</p>
            </div>
            <div className="right-title">
              <h3>Socials</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
              <a href="https://www.instagram.com/dkokopee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> 
              <p>Instagram</p> </a>
              </div>

              <div className="right-desc-line">
                 <a href="https://web.facebook.com/dkokopee/" target="_blank" rel="noopener noreferrer">
                 <p>Facebook</p> </a>
              </div>

              <div className="right-desc-line">
              <a href="https://x.com/iskokopee" target="_blank" rel="noopener noreferrer">
                 <p>X</p> </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(02)</p>
            </div>
            <div className="right-title">
              <h3>Stream online</h3>
            </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <a href="https://https://open.spotify.com/track/06SUF7FYcACL7JbCxMLF5M?si=aa5133db0a0f4b3f" target="_blank" rel="noopener noreferrer"> 
                <p>Spotify</p> </a>
              </div>

              <div className="right-desc-line">
                <a href="https://music.apple.com/ng/artist/koko-pee/1227408733" target="_blank" rel="noopener noreferrer">  <p>Apple Music</p> </a>
              </div>

              <div className="right-desc-line">
              <a href="https://audiomack.com/dkokopee/song/shine-na" target="_blank" rel="noopener noreferrer">  <p>Audio mack</p> </a>
              </div>

              <div className="right-desc-line">
              <a href="https://youtube.com/@officialkokopee?si=MwLpDOWduJEYQIrd" target="_blank" rel="noopener noreferrer">  <p>Youtube</p> </a>
              </div>
            
             

            </div>
          </div>
          <div className="right">
            <div className="right-index">
              <p>(03)</p>
            </div>
            <div className="right-title">
              <h3>Management</h3>
              </div>
            <div className="right-desc">
              <div className="right-desc-line">
                <p>Bookings@kokopee.com</p>
              </div>
              <div className="right-desc-line">
                <p>08011223344</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="contact-banner">
          <div className="contact-banner-col">
            <div className="contact-banner-header">
              <h2>
                Shaping <br />
                Tomorrow’s Sound
              </h2>
              <p className="primary">
                Empowering creativity through ethical AI innovation.
              </p>
            </div>

            <div className="banner-contact">
              <p className="primary">Contact@balancedpitch.com</p>
              <p>Founded in 2024</p>
            </div>
            <div className="banner-info">
              <p>
                At Balanced Pitch, we specialize in providing ethically curated
                datasets enriched with detailed attribution metadata and
                advanced AI-ready features, supporting innovation while
                protecting creative rights.
              </p>
            </div>
          </div>
          <div className="contact-banner-col">
            <div className="contact-banner-img">
              <ParallaxImage
                src="/solutions/banner2.jpg"
                alt="Balanced Pitch Innovation"
              />
            </div>
          </div>
        </section> */}

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Solutions);
