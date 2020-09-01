import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
