import React, { Component } from "react";
// import "./nav.css";
import "./topNav.css"
// import logo from "./../../images/logo.png";
import dot from "./../../images/dot.png";
import bellIcon from "./../../images/bell-icon.png";
import person from "./../../images/person.jpg";


export default class TopNav extends Component {
  render() {
    return (
     <div className="Top_Nav">
         <nav className="navbar navbar-expand-lg navbar-light bg-light for_top_nav">
  <a className="navbar-brand" href="#" style={{color: "#3F36C4"}}>Zakat, Tax and Customs Authority</a>

  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    
    <img src={dot}  alt="" />
    <img src={bellIcon} className="mx-2" alt="" />

    <img src={person} className="person_circle mr-3" alt="" />


    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

  </div>
</nav>
     </div>
    );
  }
}