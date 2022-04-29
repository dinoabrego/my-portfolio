import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <h1>Dino Abrego
        </h1>
        <ul className="header">
          <li><NavLink to="/">About Me</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
        <div className="content">
                <Route path="/" component={AboutMe}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/resume" component={Resume}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
