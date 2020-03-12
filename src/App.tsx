import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Operations from "./containers/Operations";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  useEffect(() => {
    fetchDataPost();
    fetchDataGet();
  }, []);

  // Отправляем логин и пароль
  const fetchDataPost = async () => {
    let username = "test_user";
    let password = "test_user";
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    await fetch("/httpbridge-server/login", {
      method: "POST",
      credentials: "include",
      body: formData
    });
  };

  // Получаем куки и кладём в sessionStorage
  const fetchDataGet = async () => {
    const response = await fetch(
      "httpbridge-server/csrfToken/get?moduleId=cpsadminservice",
      {
        method: "GET",
        credentials: "include"
      }
    );
    const result = await response.json();
    sessionStorage.setItem("csrfToken", result.token);
  };

  return (
    <div className="app">
      <Header />
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
