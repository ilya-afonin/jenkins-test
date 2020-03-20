import { createGlobalStyle } from 'styled-components';

import opensansWoff from './opensans.woff';
import opensansWoff2 from './opensans.woff2';
import opensansTtf from './opensans.ttf';
import opensansItalicWoff from './opensansitalic.woff';
import opensansItalicTtf from './opensansitalic.ttf';
import opensansItalicWoff2 from './opensansitalic.woff2';
import opensansLightWoff from './opensanslight.woff';
import opensansLightWoff2 from './opensanslight.woff2';
import opensansLightTtf from './opensanslight.ttf';
import opensansLightItalicWoff from './opensanslightitalic.woff';
import opensansLightItalicWoff2 from './opensanslightitalic.woff2';
import opensansLightItalicTtf from './opensanslightitalic.ttf';
import opensansSemiBoldWoff from './opensanssemibold.woff';
import opensansSemiBoldWoff2 from './opensanssemibold.woff2';
import opensansSemiBoldTtf from './opensanssemibold.ttf';
import opensansSemiBoldItalicWoff from './opensanssemibolditalic.woff';
import opensansSemiBoldItalicWoff2 from './opensanssemibolditalic.woff2';
import opensansSemiBoldItalicTtf from './opensanssemibolditalic.ttf';
import opensansBoldWoff from './opensansbold.woff';
import opensansBoldWoff2 from './opensansbold.woff2';
import opensansBoldTtf from './opensansbold.ttf';
import opensansBoldItalicWoff from './opensansbolditalic.woff';
import opensansBoldItalicWoff2 from './opensansbolditalic.woff2';
import opensansBoldItalicTtf from './opensansbolditalic.ttf';
import opensansExtraBoldWoff from './opensansextrabold.woff';
import opensansExtraBoldWoff2 from './opensansextrabold.woff2';
import opensansExtraBoldTtf from './opensansextrabold.ttf';
import opensansExtraBoldItalicWoff from './opensansextrabolditalic.woff';
import opensansExtraBoldItalicWoff2 from './opensansextrabolditalic.woff2';
import opensansExtraBoldItalicTtf from './opensansextrabolditalic.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans'), local('OpenSans'), 
      url(${opensansWoff2}) format('woff2'), url(${opensansWoff}) format('woff'), url(${opensansTtf}) format('truetype');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Italic'), local('OpenSans-Italic'), 
      url(${opensansItalicWoff2}) format('woff2'), url(${opensansItalicWoff}) format('woff'), url(${opensansItalicTtf}) format('truetype');
      font-weight: 400;
      font-style: italic;
  }
      @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Light'), local('OpenSans-Light'), 
      url(${opensansLightWoff2}) format('woff2'), url(${opensansLightWoff}) format('woff'), url(${opensansLightTtf}) format('truetype');
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Light Italic'), local('OpenSansLight-Italic'), 
      url(${opensansLightItalicWoff2}) format('woff2'), url(${opensansLightItalicWoff}) format('woff'), url(${opensansLightItalicTtf}) format('truetype');
      font-weight: 300;
      font-style: italic;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Semibold'), local('OpenSans-Semibold'), 
      url(${opensansSemiBoldWoff2}) format('woff2'), url(${opensansSemiBoldWoff}) format('woff'), url(${opensansSemiBoldTtf}) format('truetype');
      font-weight: 600;
      font-style: normal;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Semibold Italic'), local('OpenSans-SemiboldItalic'), 
      url(${opensansSemiBoldItalicWoff2}) format('woff2'), url(${opensansSemiBoldItalicWoff}) format('woff'), url(${opensansSemiBoldItalicTtf}) format('truetype');
      font-weight: 600;
      font-style: italic;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Bold'), local('OpenSans-Bold'), 
      url(${opensansBoldWoff2}) format('woff2'), url(${opensansBoldWoff}) format('woff'), url(${opensansBoldTtf}) format('truetype');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'), 
      url(${opensansBoldItalicWoff2}) format('woff2'), url(${opensansBoldItalicWoff}) format('woff'), url(${opensansBoldItalicTtf}) format('truetype');
      font-weight: 700;
      font-style: italic;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Extrabold'), local('OpenSans-Extrabold'), 
      url(${opensansExtraBoldWoff2}) format('woff2'), url(${opensansExtraBoldWoff}) format('woff'), url(${opensansExtraBoldTtf}) format('truetype');
      font-weight: 800;
      font-style: normal;
  }
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans Extrabold Italic'), local('OpenSans-ExtraboldItalic'), 
      url(${opensansExtraBoldItalicWoff2}) format('woff2'), url(${opensansExtraBoldItalicWoff}) format('woff'), url(${opensansExtraBoldItalicTtf}) format('truetype');
      font-weight: 800;
      font-style: italic;
  }
`;
