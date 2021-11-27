import React, { Component } from "react";
// import "./nav.css";
import "./writeNotes.css"
// import logo from "./../../images/logo.png";



export default class WriteNotes extends Component {
  render() {
    return (
     <div className="Write_Notes">
      

      <div class="Write_Notes_cards" >


  <div className="d-flex flex-row mt-2">
        <div className="mr-3 blank_icon"> </div>
        <div className="align-self-center">Internal Notes</div>

        <button className="save-button">Save</button>
  </div>

  <textarea className="form-control mt-3 note_text_area" cols="2" rows="6" placeholder="Lorem ipsum dolor sit amet, is"></textarea>

 
 


</div>


  

     </div>
    );
  }
}