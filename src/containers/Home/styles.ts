import { Link } from "react-router-dom";

import { Lock } from "@material-ui/icons";
import { Card, Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const Content = styled(Container)`
  font-size: 20px;
  font-weight: 500;
  padding: 0 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
` as typeof Container;

const Header = styled.div`
  margin: 0 auto 30px;
`;

const Header__Logo = styled(Lock)`
  width: 50px;
})
`;

const Header__Title = styled(Typography)`
  display: inline-block;
  margin-left: 5px;
` as typeof Typography;

const Body = styled.div``;

const Body__Description = styled.p`
  margin-bottom: 30px;
`;

const Panels = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 -15px;
`;

const StyledPanel = styled(Card)`
  flex: 0 0 33.33333%;
  max-width: 250px;
  margin: 0 15px;
  height: 150px;
  background-color: #046a38;
  position: relative;
` as typeof Card;

const StyledPanel__Link = styled(Link)`
  display: flex;
  height: 100%;
  border-radius: 3px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;

const StyledPanel__Text = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  padding: 0 20px;
  color: #fff;
` as typeof Typography;

const StyledPanel__Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Page = {
  Content,
  Header,
  Header__Logo,
  Header__Title,
  Body,
  Body__Description,
  Panels,
  StyledPanel,
  StyledPanel__Link,
  StyledPanel__Text,
  StyledPanel__Image
};
