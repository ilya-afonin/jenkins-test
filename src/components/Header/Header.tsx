import React, { useState, ChangeEvent } from "react";
import { Link, LinkProps } from "react-router-dom";
import { AppBar, Tabs } from "@material-ui/core";
import { default as Tab, TabProps } from "@material-ui/core/Tab";
import { ThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "./styles";

/**
 * Компонент Header, основная навигация сайта.
 * @returns {JSX} Хедер и элементы навигации.
 */
export const Header = () => {
  const LinkTab: React.ComponentType<
    TabProps & LinkProps
  > = Tab as React.ComponentType<TabProps & LinkProps>;
  const [value, setValue] = useState(0);
  const classes = useStyles();
  /**
   * Изменяем индекс вкладки.
   * @prop {Event} event кэлбэк при нажатии на вкладку.
   * @prop {Number} newValue Номер вкладки.
   */
  const setHandleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.root}>
        <Tabs
          value={value}
          onChange={setHandleChange}
          indicatorColor={"primary"}
        >
          <LinkTab component={Link} to="/" label="Главная" />
          <LinkTab component={Link} to="/operations" label="Операции" />
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
};
