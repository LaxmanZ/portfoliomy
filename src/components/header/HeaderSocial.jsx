import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
    <a href="https://linkedin.com" target="-blank"><BsLinkedin/></a>
    <a href="https://github.com" target="-blank"><BsGithub/></a>
    <a href="https://instgram.com" target="-blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial