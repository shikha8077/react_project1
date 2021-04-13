import React from "react";
// import ReactDOM from 'react-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Link, Switch, } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (

    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Services} />

          <Route path="/contact" exact component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>

  )
}
export default App;