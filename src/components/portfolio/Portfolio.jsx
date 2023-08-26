import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/IMG1.jpeg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'CartNest',
    github: 'https://github.com/LaxmanZ/ecommercewebsite',
    demo: 'https://amazona.onrender.com/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'StreamFlix',
    github: 'https://github.com/LaxmanZ/netflix-clone-app',
    demo: 'https://netflix-clone-9eb44.web.app/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'CRUD Operations',
    github: 'https://github.com/LaxmanZ/crudapplicationusingMERN',
    demo: 'https://crudoperations.render.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'FlexFusion',
    github: 'https://github.com/LaxmanZ/gymproject',
    demo: 'https://gymprojectmugiwara.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'FruityShop',
    github: 'https://github.com/LaxmanZ/fruitshopwithjavascript',
    demo: 'https://fruitapp-beryl.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'NFTMintMarket',
    github: 'https://github.com',
    demo: '/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tech-Authentication',
    github: 'https://github.com/LaxmanZ/tech-company-app/tree/master/src',
    demo: '',
  },
  {
    id: 7,
    image: IMG7,
    title: 'ReactTech Nexus',
    github: 'https://github.com/LaxmanZ/technology-app-2/tree/master',
    demo: 'https://reactoneproject.vercel.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="image__object" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target=" _blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
