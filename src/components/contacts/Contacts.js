import React from 'react';
import './Contacts.css'

function Contacts() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>

      <div className="row">
        <iframe
          className="map"
          title='location of the company'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632569975602!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen 
        />

        <form action='submit'>
          <h3 data-aos="zoom-in">Tell us something!</h3>
          <input
            data-aos="zoom-in"
            type="text"
            placeholder="your name"
            className="box"
          />
          <input
            data-aos="zoom-in"
            type="email"
            placeholder="your email"
            className="box"
          />
          <input
            data-aos="zoom-in"
            type="number"
            placeholder="your number"
            className="box"
          />
          <textarea
            data-aos="zoom-in"
            placeholder="your message"
            className="box"
            cols="30"
            rows="10"
          />
          <input
            data-aos="zoom-in"
            type="submit"
            value="send message"
            className="btn"
          />
        </form>
      </div>
    </section>
  );
}

export default Contacts;