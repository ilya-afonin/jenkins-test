import { createMuiTheme,  Theme } from "@material-ui/core/styles";
import { ruRU } from '@material-ui/core/locale';
import 'typeface-open-sans';

import { EMainColorThem } from "./common/Enums/Enums";

export const mainTheme: Theme = createMuiTheme({
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
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    subtitle1: {
      fontFamily: "'Roboto', 'Open Sans'",
      fontWeight: 600
    }
  }
}, ruRU);
