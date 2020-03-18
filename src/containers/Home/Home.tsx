import React from "react";
import { CardContent } from "@material-ui/core";
import { Page } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Page.Content>
      <Page.Header>
        <Page.HeaderLogo />
        <Page.HeaderTitle variant="h1">CPS</Page.HeaderTitle>
      </Page.Header>

      <Page.Body>
        <Page.BodyDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam velit
          commodi mollitia in ad iure nulla minus impedit quis, laudantium natus
          odio vel culpa. Illo totam placeat ab temporibus veritatis?
        </Page.BodyDescription>
        <Page.Panels>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanelLink to="/operations">
              {/* <Page.StyledPanelImage image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanelText component="h2">
                  Поиск операций
                </Page.StyledPanelText>
              </CardContent>
            </Page.StyledPanelLink>
          </Page.StyledPanel>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanelLink to="/directions">
              {/* <Page.StyledPanelImage image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanelText component="h3">
                  Справочники
                </Page.StyledPanelText>
              </CardContent>
            </Page.StyledPanelLink>
          </Page.StyledPanel>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanelLink to="/admin">
              {/* <Page.StyledPanelImage image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanelText component="h2">
                  Администрирование
                </Page.StyledPanelText>
              </CardContent>
            </Page.StyledPanelLink>
          </Page.StyledPanel>
        </Page.Panels>
      </Page.Body>
    </Page.Content>
  );
};
