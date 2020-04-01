import { createMuiTheme,  Theme } from "@material-ui/core/styles";
import { ruRU } from '@material-ui/core/locale';

import { EMainColorThem } from "./common/Enums/Enums";

export const mainTheme: Theme = createMuiTheme({
  spacing: 5,
  borderRadius: '2px',
  palette: {
    primary: {
      main: EMainColorThem.green,
    },
    secondary: {
      main: EMainColorThem.lineColor
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    fontSize: 13
  }
}, ruRU);
