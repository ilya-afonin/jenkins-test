import React from "react";
import { CardContent } from "@material-ui/core";
import { Page } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Page.Content>
      <Page.Header>
        <Page.Header__Logo />
        <Page.Header__Title variant="h1">CPS</Page.Header__Title>
      </Page.Header>

      <Page.Body>
        <Page.Body__Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam velit
          commodi mollitia in ad iure nulla minus impedit quis, laudantium natus
          odio vel culpa. Illo totam placeat ab temporibus veritatis?
        </Page.Body__Description>
        <Page.Panels>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanel__Link to="/operations">
              {/* <Page.StyledPanel__Image image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanel__Text component="h2">
                  Поиск операций
                </Page.StyledPanel__Text>
              </CardContent>
            </Page.StyledPanel__Link>
          </Page.StyledPanel>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanel__Link to="/directions">
              {/* <Page.StyledPanel__Image image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanel__Text component="h3">
                  Справочники
                </Page.StyledPanel__Text>
              </CardContent>
            </Page.StyledPanel__Link>
          </Page.StyledPanel>
          <Page.StyledPanel elevation={3}>
            <Page.StyledPanel__Link to="/admin">
              {/* <Page.StyledPanel__Image image="/static/images/cards/01.jpg"/> */}
              <CardContent>
                <Page.StyledPanel__Text component="h2">
                  Администрирование
                </Page.StyledPanel__Text>
              </CardContent>
            </Page.StyledPanel__Link>
          </Page.StyledPanel>
        </Page.Panels>
      </Page.Body>
    </Page.Content>
  );
};
