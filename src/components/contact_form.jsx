import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'gatsby-plugin-react-helmet';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    };

    render() {
        return (
            <form className="contact-form"
                name="contact"
                method="post"
                action="/thanks/"
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