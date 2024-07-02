import React from 'react';
import './footer.scss';
import { facebookF, twitterF, instagramF, linkedinF } from '../../assets/images/png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>Welcome to Phoenix Developer where creativity meets technology. We are a passionate team of designers, developers, and strategists dedicated to crafting beautiful, user-centric websites that help businesses thrive in the digital age. With years of experience and a keen eye for detail, we transform ideas into digital realities.</p>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <ul>
              <li>12 Amazon Street, Nevada, US State</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: contact@phoenixdeveloper.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/offring"}>Offring</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us:</h2>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookF} alt="facebookF" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterF} alt="twitterF" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramF} alt="instagramF" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinF} alt="linkedinF" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
