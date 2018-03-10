import React from 'react';
import Link from 'gatsby-link';

import ContactForm from '../components/contact_form.jsx';

const FormMessage = () => (
  <div className="contact-form-message">
  <h2>Drop me a line!</h2>
  <p>
    Do you have a business inquiry? Comment? Question?
    Want to just say hello?
  </p>

  <p>
    Feel free to shoot me a message and I'll get to you as soon as possible!
  </p>
  </div>
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