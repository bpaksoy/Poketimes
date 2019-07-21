import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./containers/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Post from "./containers/Post";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
