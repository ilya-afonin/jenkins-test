import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { EMainColorThem } from "../../common/Enums/Enums";

export const useStyles = makeStyles({
  root: {
    backgroundColor: (EMainColorThem.green)
  }
});
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: EMainColorThem.lineColor
    }
  }
});
