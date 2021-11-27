import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TopNav from "./components/topNav/TopNav";
import WriteNotes from "./components/writeNotes/WriteNotes";

function App() {
  return (
    <>
      <div className="first_main">
        <div className="for_topNav">
          <TopNav />
        </div>

        {/* display: flex;
  
    width: 100%;
    background-color: #E3E3E3; */}
        <div className="hello">
        {/* max-height: 100vh;
    background: blue; */}
          <div class="_nav">
            <Nav />
          </div>
          <div className="__main">
            <ChatBody />
          </div>
        </div>

        {/* <div className="write_Notes_card">
          <WriteNotes />
        </div> */}

      </div>
    </>
  );
}

export default App;
