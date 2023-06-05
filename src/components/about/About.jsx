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
              <small>3+ Years of coding Experience</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15 </small>
            </article>

            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            Strong desire to be part of a progressive organization that allows
            me to effectively use my knowledge and technical skills and
            Proficient in C++,Java, HTML, CSS, JavaScript, reactJS, NodeJS and
            MySQL. Passionate about implementing and launching new projects.
            Ability to translate business requirements into technical solutions.
            be part of a dynamic team that works towards overall growth of the
            organization. Currently looking for a job position in a company to
            fully utilize this knowledge.
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
