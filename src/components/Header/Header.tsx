import React from "react";
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
import { IUserInfo } from "../../common/Interfaces/Interfaces";
import { ERoutingPath } from "../../common/Enums/Enums";
import { useStyles } from "./styles";

interface IHeader extends RouteComponentProps {
  userInfo: IUserInfo | null;
}
/**
 * Компонент Header, основная навигация сайта.
 * @returns {JSX} Хедер и элементы навигации.
 * @prop {string} match Параметры роутинга.
 * @prop {object} value User info.
 */
const Header = (props: IHeader): JSX.Element => {
  const {
    location: { pathname }
  } = props;
  const { userInfo } = props;
  const LinkTab: React.ComponentType<
    TabProps & LinkProps
  > = Tab as React.ComponentType<TabProps & LinkProps>;
  const classes = useStyles();
  const pathName = (path: string): number | void => {
    switch (path) {
      case ERoutingPath.main:
        return 0;
      case ERoutingPath.operations:
        return 1;
      case ERoutingPath.directions:
        return 2;
      case ERoutingPath.admin:
        return 3;
      default:
        break;
    }
  };

  const renderUserInfo = () => {
    if (userInfo !== null) {
      return (
        <>
          <Typography variant="subtitle2">{`Логин: ${
            userInfo.user.login
          }`}</Typography>
        </>
      );
    } else {
      return <CircularProgress size={30} />;
    }
  };
  return (
    <AppBar className={classes.root}>
      <Tabs
        value={pathName(pathname)}
        classes={{ indicator: classes.colorActiveTab }}
      >
        <LinkTab component={Link} to={ERoutingPath.main} label="Главная" />
        <LinkTab
          component={Link}
          to={ERoutingPath.operations}
          label="Операции"
        />
        <LinkTab
          component={Link}
          to={ERoutingPath.directions}
          label="Справочники"
        />
        <LinkTab
          component={Link}
          to={ERoutingPath.admin}
          label="Администрирование"
        />
      </Tabs>
      <Box className={classes.box}>{renderUserInfo()}</Box>
    </AppBar>
  );
};

export default withRouter(Header);
