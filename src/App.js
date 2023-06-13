import React from "react";
import "./App.css";
//import Card from "./Card.js";
//import Fruits from "./Fruits";
//import FruitsCounter from "./FruitsCounter";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about-me" className="nav-item">
          AboutMe
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;