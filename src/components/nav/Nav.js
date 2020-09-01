import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}
