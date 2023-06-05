import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

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
     review: 'One of the best portfolio website I have ever seen...! Nice work keep it up'
  },
  {
    avatar: AVTR2,
    name: 'Nitin Doddamani',
    review: 'The best portfolio website on the google... Would you please send me the source code..? By the way I am huge fan of yours Thank You'
 },
 {
  avatar: AVTR3,
  name: 'Vinayak Mane',
  review: 'Nice Work keep it up Broo ' 
},
{
  avatar: AVTR4,
  name: 'Mahadev Rashinkar',
  review: 'Just awesome bro what have you done broo Nice work broo '
}
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
       // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
           <div className='client__avatar'>
            <img className='client__avatar__img' src={avatar} alt='testimonials__img'/>
           </div>
           <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonial