import React, { useEffect } from 'react'
import './home.scss';
import { heroIco1, heroIco2, heroIco3, heroIco4, design1, design2, design3, design4, lady, ladyBg, heroIco6, heroIco5, ring3, ring2, instagram, facebook, twitter, google, ring1 } from '../../assets/images/png';
import formBg from '../../assets/images/svg/formBg.svg';
import Aos from 'aos';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <section className="hero-banner">
        <div className="container">
          <div className="hero-banner-div">
            <div className="hbd-grid">
              <div className="hbd-grid1" data-aos="fade-right">
                <div className="hbd-grid1-img1">
                  <img src={heroIco1} alt="heroIco1" />
                </div>
                <div className="hbd-grid1-img2">
                  <img src={heroIco2} alt="heroIco2" />
                </div>
              </div>
              <div className="hbd-grid2" data-aos="zoom-in">
                <div className="hbd-grid2-text">
                  <h1>Meet our design team</h1>
                  <div className="hbd-grid2-text-list">
                    <p>
                      <a href="about">about us</a>|
                      <a href="news">news</a>|
                      <a href="about">reviews</a>|
                      <a href="reviews">articles</a>|
                      <a href="future">#future</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="hbd-grid3" data-aos="fade-left">
                <div className="hbd-grid1-img1">
                  <img src={heroIco3} alt="heroIco3" />
                </div>
                <div className="hbd-grid1-img2">
                  <img src={heroIco4} alt="heroIco4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design">
        <div className="container">
          <div className="design-head" data-aos="zoom-out">
            <h2>Design and Development For Your Business</h2>
          </div>
          <div className="design-grid">
            <div className="design-grid-box">
              <img src={design1} alt="design1" data-aos="fade-right" />
              <div className="design-grid-box-text" data-aos="fade-left">
                <h3>1. STRATERGY</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="design-grid-box">
              <img src={design2} alt="design2" data-aos="fade-right" />
              <div className="design-grid-box-text" data-aos="fade-left">
                <h3>1. BRANDING</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="design-grid-box">
              <img src={design3} alt="design3" data-aos="fade-right" />
              <div className="design-grid-box-text" data-aos="fade-left">
                <h3>1. DESIGN</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
            <div className="design-grid-box">
              <img src={design4} alt="design4" data-aos="fade-right" />
              <div className="design-grid-box-text" data-aos="fade-left">
                <h3>1. MARKEING</h3>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lady">
        <div className="container">
          <div className="lady-div">
            <img src={ladyBg} alt="ladyBg" data-aos="zoom-in" />
            <div className="lady-div-respo">
              <img src={lady} alt="lady" data-aos="fade-right" data-aos-duration="2000" />
            </div>
            <div className="lady-div-round1" data-aos="fade-left"></div>
            <div className="lady-div-round2" data-aos="fade-left"></div>
          </div>
          <div className="lady-grid">
            <div className="lady-grid-div" data-aos="fade-up">
              <h2>01</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="lady-grid-div" data-aos="fade-down">
              <h2>02</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="lady-grid-div" data-aos="fade-up">
              <h2>03</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="lady-grid-div" data-aos="fade-down">
              <h2>04</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="digital">
        <div className="container">
          <div className="digital-img">
            <img src={heroIco3} alt="heroIco3" data-aos="fade-right" />
          </div>
          <div className="digital-div">
            <div className="digital-div-box" data-aos="fade-right">
              <h2>Digital design</h2>
              <p>Lectus sit amet est placerat in egestas. Integer eget aliquet nibh praesent tristique magna sit. Congue quisque egestas diam in arcu cursus.</p>
              <div className="more-button">
                <button>READ MORE</button>
              </div>
              <img src={heroIco4} alt="heroIco4" data-aos="fade-up" />
            </div>
            <div className="digital-div-icon1">
              <img src={heroIco6} alt="heroIco6" data-aos="zoom-out" />
            </div>
            <div className="digital-div-icon2">
              <img src={heroIco5} alt="heroIco5" data-aos="fade-left" />
            </div>
            <div className="digital-div-icon3">
              <img src={ring3} alt="ring3" data-aos="rotate" />
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-linear"></div>
          <div className="what-we-do-div">
            <div className="wwd-grid">
              <div className="wwd-grid1">
                <img src={heroIco3} alt="heroIco3" data-aos="zoom-out-right" />
                <div className="wwd-grid1-abso">
                  <img src={heroIco6} alt="heroIco6" data-aos="fade-right" />
                </div>
              </div>
              <div className="wwd-grid2">
                <div className="wwd-grid2-box" data-aos="fade-left">
                  <img src={ring2} alt="ring2" data-aos="rotate" data-aos-duration="2000" />
                  <h2>What We Do</h2>
                  <p>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. </p>
                  <div className="more-button">
                    <button>LEARN MORE</button>
                  </div>
                </div>
                <div className="wwd-grid2-img" data-aos="fade-up">
                  <img src={heroIco5} alt="heroIco5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio">
        <div className="container">
          <div className="studio-grid">
            <div className="studio-grid-box" data-aos="zoom-in-right">
              <h2>We're a team of makers, a nimble studio of designers and developers</h2>
            </div>
            <div className="studio-grid-box" data-aos="zoom-in-left">
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Rutrum tellus pellentesque eu tincidunt tortor aliquam.</p>
              <div className="stdio-media-icon">
                <a href="https://www.facebook.com/" target='blank'>
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://x.com/?lang=en" target='blank'>
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.instagram.com/" target='blank'>
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target='blank'>
                  <img src={google} alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
        <div className="container">
          <div className="form-div">
            <div className="form-div-img">
              <img src={formBg} alt="formBg" data-aos="zoom-in" />
            </div>
            <div className="form-div-abso">
              <img src={ring2} alt="ring2" data-aos="rotate" />
              <img src={heroIco4} alt="heroIco4" data-aos="fade-left" />
            </div>
            <div className="form-div-box">
              <div className="form-div-box-input">
                <label>Name</label>
                <input type="text" placeholder='Enter your Name' />
              </div>
              <div className="form-div-box-input">
                <label>Email</label>
                <input type="text" placeholder='Enter a valid email eddress' />
              </div>
              <div className="form-div-box-input">
                <label>Message</label>
                <textarea placeholder='Enter your message'></textarea>
              </div>
              <div className="form-div-box-check">
                <input type="checkbox" />
                <label>I accept the <a href="terms">Terms of Service</a></label>
              </div>
              <div className="submit-button">
                <button>SUBMIT</button>
              </div>
            </div>
            <div className="form-div-abso2">
              <img src={ring1} alt="ring1" data-aos="rotate" />
            </div>
            <div className="form-div-round">
              <img src={heroIco3} alt="heroIco3" data-aos="zoom-in" />
            </div>
          </div>
          <div className="form-last-icon">
            <img src={heroIco5} alt="heroIco5" data-aos="fade-right" />
          </div>
        </div>
      </section>
    </div>
  )
}