import React from "react";
import "./App.css";
//import Card from "./Card.js";
//import Fruits from "./Fruits";
//import FruitsCounter from "./FruitsCounter";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="#" className="nav-item">Homepage</a>
        <a href="#" className="nav-item">AboutMe</a>
      </nav>
      <Homepage />
      <AboutMe />
    </div>
  );
}

export default App;