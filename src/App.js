import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Rote,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";

function App() {


  return (
    <Router>
      <div className="App">
        <Header/>
        <Home />
      </div>
    </Router>
  );
}

export default App;
