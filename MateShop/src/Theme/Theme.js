import Color from 'color';
import { Dimensions } from 'react-native';

const device = {
  x: Dimensions.get('window').width,
  y: Dimensions.get('window').height,
};

const colors = {
  ACCENT: Color.rgb(220, 79, 137),
  PRIMARY: Color.rgb(106, 214, 85),
  SECONDARY: Color.rgb(223, 222, 255),
  TERTIARY: Color.rgb(223, 222, 144),
  DANGER: Color.rgb(183, 0, 0),
  WARNING: Color.rgb(255, 191, 103),
  SUCCESS: Color.rgb(16, 213, 146),
  BLACK: Color.rgb(23, 21, 21),
  WHITE: Color.rgb(249, 249, 249),
  GRAY: Color.rgb(112, 112, 112),
  DARKGRAY: Color.rgb(64, 64, 64),
  TRANSPARENT: Color.rgb(0, 0, 0).fade(1),
};

const sizes = {
  BASE: 16,
  FONT: 14,
  BORDER: 15,
  PADDING: 15,

  H1: 39,
  H2: 29,
  H3: 19,
  TITLE: 18,
  HEADER: 24,
  BODY: 14,
  CAPTION: 12,
  SMALL: 10,
};

// Set CustomFont to false if you want to use default FontFamily
// (i.e Android equals to Roboto)
const CustomFont = false;

const fonts = {
  H1: {
    fontFamily: CustomFont ? 'Montserrat-Light' : null,
    fontSize: sizes.H1,
  },
  H2: {
    fontFamily: CustomFont ? 'Montserrat-Medium' : null,
    fontSize: sizes.H2,
  },
  H3: {
    fontFamily: CustomFont ? 'Montserrat-Regular' : null,
    fontSize: sizes.H3,
  },
  HEADER: {
    fontFamily: CustomFont ? 'Montserrat-Bold' : null,
    fontWeight: CustomFont ? null : 'bold',
    fontSize: sizes.HEADER,
  },
  TITLE: {
    fontFamily: CustomFont ? 'Montserrat-Light' : null,
    fontSize: sizes.TITLE,
  },
  BODY: {
    fontFamily: CustomFont ? 'Montserrat-Medium' : null,
    fontSize: sizes.BODY,
  },
  CAPTION: {
    fontFamily: CustomFont ? 'Montserrat-Light' : null,
    fontSize: sizes.CAPTION,
  },
  SMALL: {
    fontFamily: CustomFont ? 'Montserrat-Medium' : null,
    fontSize: sizes.SMALL,
  },
  BOLD: {
    fontFamily: CustomFont ? 'Montserrat-Bold' : null,
    fontWeight: CustomFont ? null : 'bold',
  },
};
const Theme = { device, colors, sizes, fonts };
export default Theme;
