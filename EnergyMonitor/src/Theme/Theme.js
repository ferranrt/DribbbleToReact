import Color from 'color';
import { Dimensions } from 'react-native';

const Theme = {
  device: {
    x: Dimensions.get('window').width,
    y: Dimensions.get('window').height,
  },
  bases: {},
  colors: {
    PRIMARY: Color.rgb(200, 77, 177),
    SECONDARY: Color.rgb(229, 193, 188),
    INFO: Color.rgb(220, 79, 137),
    DANGER: Color.rgb(239, 58, 56),
    WARNING: Color.rgb(255, 191, 103),
    SUCCESS: Color.rgb(16, 213, 146),
    BLACK: Color.rgb(3, 3, 3),
    WHITE: Color.rgb(247, 247, 247),
    GREY: Color.rgb(179, 169, 166),
    DARKGREY: Color.rgb(92, 87, 88),
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
