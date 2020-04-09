import Color from 'color';
import { Dimensions } from 'react-native';

const Theme = {
  device: {
    x: Dimensions.get('window').width,
    y: Dimensions.get('window').height,
  },
  bases: {},
  colors: {
    PRIMARY: Color.rgb(92, 77, 177),
    SECONDARY: Color.rgb(223, 222, 255),
    INFO: Color.rgb(220, 79, 137),
    DANGER: Color.rgb(183, 0, 0),
    WARNING: Color.rgb(255, 191, 103),
    SUCCESS: Color.rgb(16, 213, 146),
    BLACK: Color.rgb(23, 21, 21),
    WHITE: Color.rgb(250, 250, 250),
    GREY: Color.rgb(112, 112, 112),
    DARKGREY: Color.rgb(64, 64, 64),
    TRANSPARENT: Color.rgb(0, 0, 0).fade(1),
  },
  fontSize: {
    NORMAL: 17,
    MEDIUM: 14,
    SMALL: 12,
    H1: 38,
    H2: 34,
    H3: 28,
    H4: 20,
  },
  fontFamily: {
    REGULAR: 'Montserrat-Regular',
    LIGHT: 'Montserrat-Light',
    BOLD: 'Montserrat-Bold',
    MEDIUM: 'Montserrat-Medium',
    HEAVY: 'Montserrat-ExtraBold',
    ITALIC: 'Montserrat-Italic',
  },
  metrics: {
    tiny: 5,
    small: 10,
    normal: 15,
    medium: 30,
  },
};

export default Theme;
