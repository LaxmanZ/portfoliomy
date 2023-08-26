import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/laxman-bhajantri-b781471a4"
        target="-blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/LaxmanZ" target="-blank">
        <BsGithub />
      </a>
      <a href="https://instgram.com" target="-blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
