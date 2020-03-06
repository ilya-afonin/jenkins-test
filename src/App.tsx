import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Operations from "./containers/Operations";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/operations" component={() => <Operations />} />
          <Route
            exact
            path="*"
            component={() => <div>Error, page not found!</div>}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
