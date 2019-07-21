import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./Work.css";
import pic from "../images/githubActivity.png";
import kellenbaker from "../images/kellenbaker.jpg";
import publicSpeaking from "../images/publicSpeaking.jpg";
//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";
import WOW from "wowjs";


class Work extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  handleGithub = () => {
    window.open("http://www.github.com/mkbaker", "_blank");
  };

  handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kellen-baker/", "_blank");
  };

  //this link needs to be changed upon creation of CV page
  handleCV = () => {
    this.props.history.push("/about");
  };

  render() {
    return (
      
      <div className="containerDiv">
        <Card onClick={this.handleGithub} className="wow flipInY">
          <Image src={pic} />
          <Card.Content>
            <Card.Header>GitHub Portfolio</Card.Header>
            <Card.Description>
              Check out my projects on GitHub.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleLinkedIn} className="wow flipInY">
          <Image src={kellenbaker} />
          <Card.Content>
            <Card.Header>LinkedIn Profile</Card.Header>
            <Card.Description>Feel free to connect!</Card.Description>
          </Card.Content>
        </Card>

        <Card onClick={this.handleCV} className="wow flipInY">
          <Image src={publicSpeaking} />
          <Card.Content>
            <Card.Header>Resume / CV</Card.Header>
            <Card.Description>
              View my resume and full CV here.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Work;
