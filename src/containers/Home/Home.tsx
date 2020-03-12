import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import { useStyles } from "./styles";

//TODO: Переписать на styled components

export const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.content}>
      <div className={classes.contentHeader}>
        <Lock className={classes.contentHeaderLogo} />
        <h1 className={classes.contentHeaderTitle}>CPS</h1>
      </div>
      <div className={classes.contentBody}>
        <div className={classes.contentBodyDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam velit
          commodi mollitia in ad iure nulla minus impedit quis, laudantium natus
          odio vel culpa. Illo totam placeat ab temporibus veritatis?
        </div>
        <div className={classes.panels}>
          <Card className={classes.panel} elevation={3}>
            <Link to="/operations" className={classes.panelLink}>
              {/* <CardMedia
                className={classes.panelImage}
                image="/static/images/cards/01.jpg"
              /> */}
              <CardContent>
                <Typography className={classes.panelText} component="h2">
                  Поиск операций
                </Typography>
              </CardContent>
            </Link>
          </Card>
          <Card className={classes.panel} elevation={3}>
            <Link to="/directions" className={classes.panelLink}>
              {/* <CardMedia
                className={classes.panelImage}
                image="/static/images/cards/02.jpg"
              /> */}
              <CardContent>
                <Typography className={classes.panelText} component="h2">
                  Справочники
                </Typography>
              </CardContent>
            </Link>
          </Card>
          <Card className={classes.panel} elevation={3}>
            <Link to="/admin" className={classes.panelLink}>
              {/* <CardMedia component="img"
                className={classes.panelImage}
                image="/static/images/cards/03.jpg"
              /> */}
              <CardContent>
                <Typography className={classes.panelText} component="h2">
                  Администрирование
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </Container>
  );
};
