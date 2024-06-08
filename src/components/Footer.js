import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>DO NOT MISS OUT ON OFFERS</h2>
        <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
        <div className="footer-middle">
        <p>
          Our goal of positive change is charged by togetherness, 
          <br/>building a global community of charity-driven purpose<br/>
          via streetwear that champions a better world.
        </p>
        <p>#jointhemovement</p>
      </div>
          <div>
            <h3>SHOP</h3>
            <ul>
              <li>HOME</li>
              <li>WOMEN</li>
              <li>MEN</li>
              <li>SPORTS</li>
              <li>MAGAZINE</li>
            </ul>
          </div>
          <div>
            <h3>CORPORATE INFO</h3>
            <ul>
              <li>CAREER</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>PRESS</li>
              <li>CORPORATE GOVERNANCE</li>
            </ul>
          </div>
          <div>
            <h3>HELP</h3>
            <ul>
              <li>CUSTOMER SERVICE</li>
              <li>LEGAL & PRIVACY</li>
              <li>CONTACT</li>
              <li>REPORT A SCAM</li>
              <li>COOKIE NOTICE</li>
              <li>COOKIE SETTINGS</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <div className="footer-copyright">
          <p>
            The content of this site is copyright-protected and is the property of House of Origin.
          </p>
          <p className="footer-logo">HOUSE OF ORIGIN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
