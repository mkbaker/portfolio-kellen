import React, { Component } from "react";
import "./Contact.css";

//semantic ui
import { Form, TextArea, Input, Button } from "semantic-ui-react";

class Contact extends Component {
    state ={
        name: '',
        email: '',
        message: ''
    }

  sendEmail(name, email, message) {
    // fetch("/send", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     message: message
    //   })
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log("here is the response: ", res);
    //   })
    //   .catch(err => {
    //     console.error("here is the error: ", err);
    //   });
  }

  render() {
    return (
      <div className="contactDiv">
        <Form>
          <Input placeholder="Your name" className="inputBox" />
          <br />
          <Input placeholder="Your email" className="inputBox" />
          <TextArea placeholder="Your message" className="inputBox" />
          <div className="button">
            <Button onClick={this.sendEmail}>Send</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Contact;