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

const HeaderLogo = styled(Lock)`
  width: 50px;
})
`;

const HeaderTitle = styled(Typography)`
  display: inline-block;
  margin-left: 5px;
` as typeof Typography;

const Body = styled.div``;

const BodyDescription = styled.p`
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
  background-color: ${props => props.theme.colors.main};
  position: relative;
` as typeof Card;

const StyledPanelLink = styled(Link)`
  display: flex;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  align-items: center;
  justify-content: center;
`;

const StyledPanelText = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  padding: 0 20px;
  color: #fff;
` as typeof Typography;

const StyledPanelImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Page = {
  Content,
  Header,
  HeaderLogo,
  HeaderTitle,
  Body,
  BodyDescription,
  Panels,
  StyledPanel,
  StyledPanelLink,
  StyledPanelText,
  StyledPanelImage
};
