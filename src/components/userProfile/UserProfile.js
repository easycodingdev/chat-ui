import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
      
      
      <h6 className="" style={{color: "#3F36C4"}}>AI Assistant</h6>

      <div className="d-flex flex-row mt-4">
        <div className="mr-3 blank_icon"> </div>
        <div className="align-self-center">Robots</div>
      </div>

      <input type="text" className="for_field mt-3" placeholder="waiting for commands..." />
      
      <div className="d-flex flex-row mt-3">
        <div className="mr-3 blank_icon"> </div>
        <div className="align-self-center">Actions</div>
      </div>

      <div className="d-flex flex-row mt-3">
      <button className="for_btn">Tax returns</button>
      <button className="for_btn mx-1">Invoice</button>
      <button className="for_btn">Tin number</button>
      </div>

      <div className="d-flex flex-row mt-3">
      <button className="for_btn mr-1">Zakat certificate inquiry</button>
      <button className="for_btn">Reprint VAT certificate</button>
      </div>

      <div className="d-flex flex-row mt-3">
        <div className="mr-3 blank_icon"> </div>
        <div className="align-self-center">Knowledge Bank</div>
      </div>
     
      <div className="for_card mt-3">
        <h6>Lorem ipsum dolor sit</h6>
        <p>sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="for_card mt-3">
        <h6>Lorem ipsum dolor sit</h6>
        <p>sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="for_card mt-3">
        <h6>Lorem ipsum dolor sit</h6>
        <p>sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* <div className="card__content">
            Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
         */}
        
        
        
        {/* <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" />
          </div>
          <h4>Fernando Faucho</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>

        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>

          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>

        </div> */}




      </div>
    );
  }
}
