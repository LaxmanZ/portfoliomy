import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/Ux Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Gathering and evaluating user requirements, in collaboration
                with product managers and engineers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Illustrating design ideas using storyboards, process flows and
                sitemaps.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build page navigation buttons and search fields.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting usability testing sessions to evaluate the
                effectiveness of the design and gather feedback from users.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Consistently create well-designed, tested code using best
                practices for website development, including mobile and
                responsive site design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create websites and user interfaces, using standard HTML/CSS
                practices, while incorporating data from back-end databases and
                services.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create and maintain workflows with teams to provide visibility
                and to ensure workload balance for consistent visual designs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Maintain updated knowledge of new and emerging industry trends
                and technology.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
