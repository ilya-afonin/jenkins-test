import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Operations from "./containers/Operations";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/operations" component={Operations} />
          <Route
            exact
            path="*"
            render={() => <div>Error, page not found!</div>}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
