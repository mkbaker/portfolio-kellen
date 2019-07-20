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
import About from "../About/About";



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Route exact path='/about' component={About} />
          
        </Router>
      </div>
    );
    
  }
}

export default App;
