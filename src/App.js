import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TopNav from "./components/topNav/TopNav";


function App() {
  return (
    <>
      <div className="first_main">

        <div className="for_topNav">   
          <TopNav/>
        </div>

        <div className="__main">
          <Nav />
          <ChatBody />
        </div>
      </div>
    </>
  );
}

export default App;
