import React from 'react';
import './about.css';
import laxman1 from '../../assets/laxman1.jpg';
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={laxman1} alt="Aboub_iimage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of coding Experience</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5 </small>
            </article>

            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Projects</small>
            </article>
          </div>
          <p style={{textAlign: 'justify'}}>
            Highly organized and logical individual with a solid foundation in
            computer programming seeking an opportunity to leverage technical
            skills and excellent communication and interpersonal skills in a
            role at a reputable IT firm. Possessing exceptional teamwork skills
            and a strong desire to learn, and committed to contributing to the
            success of the team and delivering quality results.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
