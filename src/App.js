import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Buttons from "./Buttons";
import Home from "./Home";
import Navbar from "./Navbar";
import "./App.css"
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <>

      <Navbar/>
      <Router>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/list'} component={Buttons}/>
            <Route exact path={'/register'} component={Register}/>
          <Route exact path={'/login'} component={Login}/>
      </Router>
    </>
  );
}

export default App;
