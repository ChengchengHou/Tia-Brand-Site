import React from "react";
import { Logo2 } from "../../icons/Logo2";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="div-24">
        <Logo2 className="logo" />
        <div className="text-wrapper-12">Your Health, Personalized</div>
      </div>

      <div className="div-25">
        <p className="contact-asktia-tia">
          <a className="text-wrapper-14">
            asktia@tia.com
            <br />
          </a>
          <a href="tel:+38589239090" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-14">123 456 7890</span>
          </a>
        </p>

        <div className="div-26">
          <ul>
            <li>
              <a>Company</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>DEI</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
          </ul>
        </div>

        <div className="div-26">
          <ul>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>TikTok</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="div-27">
        <div className="text-wrapper-9">© Tia 2025. All rights reserved.</div>
      </div>

      <div className="utitliy-links">
        <a
          href="https://assets.asktia.com/pdfs/tia-privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPP
        </a>
        <a
          href="https://asktia.com/membership-terms-of-use"
          target="_blank"
          rel="noopener noreferrer"
        >
          Membership Terms
        </a>
        <a
          href="https://asktia.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>

        <a
          href="https://asktia.com/credits"
          target="_blank"
          rel="noopener noreferrer"
        >
          Credits
        </a>
      </div>
    </footer>
  );
};

export default Footer;
