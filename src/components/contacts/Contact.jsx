import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0gp5rgc',
      'template_q2lm4ke',
      form.current,
      'NO138rk3LUerBgKXf'
    );

    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>laxmanbhajantri547@gmail.com</h5>
            <a href="mailto:laxmanbhajantri547@gmail.com" target=" _blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instgram</h4>
            <h5>laxman_547</h5>
            <a href="https://ig.me/laxman_547" target=" _blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9606163548</h5>
            {/* <h5>+91 9606163548</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone+9606163548"
              target=" _blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of the contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
