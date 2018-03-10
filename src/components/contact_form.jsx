import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'gatsby-plugin-react-helmet';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Submitting form data`);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact-form", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
    
    };

    render() {
        return (
            <form className="contact-form"
                name="contact-form"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit} >
                <input type="hidden" name="bot-field" />
                <div className="form-row">
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <label>Message</label>
                    <textarea name="message" onChange={this.handleChange} />
                </div>
                <div>
                    <input className="btn btn-success" type="submit" value="Send" />
                </div>
            </form>
        );
    }
}