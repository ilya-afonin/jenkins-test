import { DefaultTheme } from "styled-components";
import { EMainColorThem } from "./common/Enums/Enums";

const mainTheme: DefaultTheme = {
  borderRadius: "2px",

  colors: {
    main: EMainColorThem.green,
    secondary: EMainColorThem.lineColor
  }
};

export { mainTheme };
