import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Nav from "../nav/Nav";
import WriteNotes from "../writeNotes/WriteNotes";

export default class ChatBody extends Component {
  render() {
    return (
      <>
  
        <div className="main__chatbody">
  
          <div className="hello01">
            <ChatList />
            <ChatContent />
          </div>  

             
             {/* <div className="parent">
               <div className="child1">
                  <UserProfile />
                  </div>
               <div className="child2"> 
               <WriteNotes />
               </div>
             </div> */}

             <div className="parent">


            <UserProfile />
        
            <WriteNotes /> 
            </div>
        </div>
  
  {/* <WriteNotes> */}

      </>
    );
  }
}
