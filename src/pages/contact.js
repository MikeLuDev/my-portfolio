import React from 'react'
import Link from 'gatsby-link'

const FormMessage = () => (
  <div className="contact-form-message">
  <h2>Drop me a line!</h2>
  </div>
);

const ContactForm = () => (
  <form className="contact-form">
    Name:
    <input type="text" />
    Email:
    <input type="text" />
    Message:
    <textarea type="textarea" />
    <input className="btn" type="submit" value="Send" />
  </form>
);

const Contact = () => (
  <div className="contact-wrap">
    <h1>Contact Me</h1>

    <div className="row">
      <ContactForm />
      <FormMessage />
    </div>
  </div>
);

export default Contact;