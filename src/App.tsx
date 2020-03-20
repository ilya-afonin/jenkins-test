import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { mainTheme } from "./theme";
import store from "./redux/store";
import Home from "./containers/Home";
import Operations from "./containers/Operations";
import Header from "./components/Header";
import { IUserInfo } from "./common/Interfaces/Interfaces";
import GlobalFonts from './fonts/fonts';
import "./App.css";

const App = (): JSX.Element => {
  const [value, setValue] = useState < IUserInfo | null>(null);
  useEffect(() => {
    const asyncFetch = async (): Promise<void> => {
      await fetchDataPost();
      await fetchDataGet();
    };
    asyncFetch();
  }, []);

  // Берём данные юзера и отрисовываем в хэдере.
  const fetchUserInfo = async (token: string): Promise<void> => {
    const url = 'httpbridge-server/invoke/cpsadminservice/userService/userInfo';
    let formData = new FormData();
    formData.append('csrfToken', token);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    const result = await response.json();
    await setValue(result);
  };

  // Отправляем логин и пароль и получаем куки.
  const fetchDataPost = async (): Promise<void> => {
    let username = 'test_user';
    let password = 'test_user';
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    await fetch('httpbridge-server/login', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
  };

  // Получаем токен и кладём в sessionStorage
  const fetchDataGet = async (): Promise<void> => {
    const response = await fetch('httpbridge-server/csrfToken/get?moduleId=cpsadminservice', {
      method: 'GET',
      credentials: 'include',
    });
    const result = await response.json();
    sessionStorage.setItem("session_token", result.token);
    return fetchUserInfo(result.token);
  };
  return (
  <Provider store={store}>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={mainTheme}>
        <ThemeProvider theme={mainTheme}>
          <GlobalFonts/>
          <div className="app">            
            <Router>
              <Header userInfo={value} />
              <div className="app-content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/operations" component={Operations} />
                  <Route exact path="/directions" render={() => <div>directions</div>} />
                  <Route exact path="/admin" render={() => <div>admin</div>} />
                  <Route exact path="*" render={() => <div>Error, page not found!</div>} />
                </Switch>
              </div>
            </Router>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </Provider>
  );
};

export default App;
