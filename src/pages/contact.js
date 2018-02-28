import React from 'react'
import Link from 'gatsby-link'

const FormMessage = () => (
  <div className="contact-form-message">
  <h2>Drop me a line!</h2>
  <p>
    Do you have a business inquiry? Comment? Question?
    Want to just say hello? I would love to hear from you.
  </p>

  <p>
    Feel free to shoot me an email and I'll get to you as soon as possible!
  </p>
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
    <input className="btn btn-success" type="submit" value="Send" />
  </form>
);

const Contact = () => (
  <div className="contact-wrap">
    <h1>Contact Me</h1>

    <div className="row">
      <FormMessage />
      <ContactForm />
    </div>
  </div>
);

export default Contact;