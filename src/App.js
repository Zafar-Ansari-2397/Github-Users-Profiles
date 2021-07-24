import React from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Alert from "./components/Alert";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./components/GithubState";
import AlertState from "./components/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar icon="fab fa-github" title="Github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
