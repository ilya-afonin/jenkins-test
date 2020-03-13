import React, { useState, ChangeEvent } from "react";
import {
  Link,
  LinkProps,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import {
  AppBar,
  Tabs,
  Box,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { default as Tab, TabProps } from "@material-ui/core/Tab";
import { ThemeProvider } from "@material-ui/core/styles";
import { IUserInfo } from "../../common/Interfaces/Interfaces";
import { ERoutingPath } from "../../common/Enums/Enums";
import { useStyles, theme } from "./styles";

interface IHeader extends RouteComponentProps {
  userInfo: IUserInfo | null;
}
/**
 * Компонент Header, основная навигация сайта.
 * @returns {JSX} Хедер и элементы навигации.
 * @prop {string} match Параметры роутинга.
 */
const Header = (props: IHeader): JSX.Element => {
  const { userInfo } = props;
  const LinkTab: React.ComponentType<
    TabProps & LinkProps
  > = Tab as React.ComponentType<TabProps & LinkProps>;
  const [value, setValue] = useState(() => {
    const {
      location: { pathname }
    } = props;
    switch (pathname) {
      case ERoutingPath.main:
        return 0;
      case ERoutingPath.operations:
        return 1;
      default:
        break;
    }
  });
  const classes = useStyles();
  /**
   * Изменяем индекс вкладки.
   * @prop {Event} event кэлбэк при нажатии на вкладку.
   * @prop {Number} newValue Номер вкладки.
   */
  const setHandleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const renderUserInfo = () => {
    if (userInfo !== null) {
      return (
        <>
          <Typography variant="subtitle2">{`Логин: ${
            userInfo.login
          }`}</Typography>
          <Typography variant="subtitle2">{`Роль: ${
            userInfo.rang
          }`}</Typography>
        </>
      );
    } else {
      return <CircularProgress size={30} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.root}>
        <Tabs
          value={value}
          onChange={setHandleChange}
          indicatorColor={"primary"}
        >
          <LinkTab component={Link} to={ERoutingPath.main} label="Главная" />
          <LinkTab
            component={Link}
            to={ERoutingPath.operations}
            label="Операции"
          />
        </Tabs>
        <Box className={classes.box}>{renderUserInfo()}</Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default withRouter(Header);
