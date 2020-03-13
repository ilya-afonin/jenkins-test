import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { EMainColorThem } from "../../common/Enums/Enums";

export const useStyles = makeStyles({
  root: {
    backgroundColor: EMainColorThem.green,
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between"
  },
  box: {
    padding: "0 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: EMainColorThem.lineColor
    }
  }
});
