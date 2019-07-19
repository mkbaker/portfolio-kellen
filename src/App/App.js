import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

//components
import Navbar from "../Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
        </Router>
      </div>
    );
    
  }
}

export default App;
