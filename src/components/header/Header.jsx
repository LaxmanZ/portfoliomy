import React from 'react'
import './header.css'
import CTA from './CTA'
import laxman1 from '../../assets/laxman3.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Laxman Bhajantri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
         <CTA />
         <HeaderSocial />

         <div className='laxman-3'>
          <img src={laxman1} alt="" />
         </div>

         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header