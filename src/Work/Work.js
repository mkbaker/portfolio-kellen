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
//semantic ui
import { Card, Icon, Image } from "semantic-ui-react";
import Grid from "@material-ui/core/Grid";

class Work extends Component {
  render() {
    return (
      <div className="containerDiv">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <Image src={pic} />
              <Card.Content>
                <Card.Header>GitHub Portfolio</Card.Header>
                <Card.Description>
                  Check out my projects on GitHub.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid>
          
          <Grid item xs={4}>
            <Card>
              <Image src={kellenbaker} />
              <Card.Content>
                <Card.Header>LinkedIn Profile</Card.Header>
                <Card.Description>
                  Feel free to connect!
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid>


        </Grid>
      </div>
    );
  }
}

export default Work;
