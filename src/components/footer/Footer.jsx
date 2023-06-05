import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        mugivara club
      </a>

      <ul className="parmalinks">
        <li>
          {" "}
          <a href="/">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiOutlineFacebook />
        </a>
        <a href="https://instgram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mugivara club's. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
