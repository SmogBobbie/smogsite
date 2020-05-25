import React from "react";
import logo from "./logo.svg";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Copyright from "./components/Copyright";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
