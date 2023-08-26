import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';
// Navigation,Scrollbar

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sachin Dasar',
    review:
      'Working with  Laxman has been an absolute pleasure. His expertise as a developer is evident in every project he takes on.',
  },
  {
    avatar: AVTR2,
    name: 'Nitin Doddamani',
    review:
      'I have had the privilege of collaborating with Laxman on multiple projects, and his skills as a frontend developer never cease to impress me.',
  },
  {
    avatar: AVTR3,
    name: 'Vinayak Mane',
    review:
      'We both worked on same projects in college he is very good at frontend and backend. very Hardworking Person ',
  },
  {
    avatar: AVTR4,
    name: 'Mahadev Rashinkar',
    review:
      'His skill set, coupled with his eagerness to explore new technologies, showcases his dedication to delivering top-notch results. ',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img
                  className="client__avatar__img"
                  src={avatar}
                  alt="testimonials__img"
                />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
