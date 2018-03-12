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
            name: "", 
            email: "", 
            message: "" 
        }
    }


    handleSubmit = e => {
        console.log(e);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...this.state })
        })
        .then(() => alert("Sent! I'll get back to you as soon as I can."))
        .catch(error => alert(error));

        e.preventDefault();
    };

handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;

        return (
            <form 
                name="contact-form"
                className="contact-form"
                onSubmit={this.handleSubmit} 
                method="post"
                data-netlify="true"
                data-netlify-honeypot="catch-field" >
                <div hidden className="form-row">
                    <label hidden >Don't fill this out!</label>
                    <input hidden type="text" name="catch-field" />
                </div>
                <div className="form-row">
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <label>Message:</label>
                    <textarea name="message" value={message} onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <button type="submit" className="btn btn-success">Send</button>
                </div>
            </form>
        );
    }
}