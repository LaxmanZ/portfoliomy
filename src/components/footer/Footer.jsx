import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

const footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Tech Laxman
      </a>

      <ul className="parmalinks">
        <li>
          {' '}
          <a href="/">Home</a>
        </li>
        <li>
          {' '}
          <a href="#about">About</a>
        </li>
        <li>
          {' '}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {' '}
          <a href="#services">Services</a>
        </li>
        <li>
          {' '}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {' '}
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          {' '}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/laxman-bhajantri-b781471a4">
          <BsLinkedin />
        </a>
        <a href="https://github.com/LaxmanZ">
          <BsGithub />
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
