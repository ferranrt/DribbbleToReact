/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Theme from '../Theme/Theme';

export default function Block(props) {
  const {
    debug,
    color,
    flex,
    block,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    black,
    white,
    grey,
    dark,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
  } = props;

  const handlePaddings = () => {
    let output = null;
    if (typeof padding === 'number') {
      output = {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          output = {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
          break;
        case 2:
          output = {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
          break;
        case 3:
          output = {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
          break;
        default:
          output = {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
          break;
      }
    }
    return output;
  };
  const handleMargins = () => {
    let output = null;
    if (typeof margin === 'number') {
      output = {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }
    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          output = {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
          break;
        case 2:
          output = {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
          break;
        case 3:
          output = {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
          break;
        default:
          output = {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
          break;
      }
    }
    return output;
  };
  const blockStyles = [
    styles.default,
    /* Borders */
    debug && { borderWidth: 1 },
    color && { borderColor: color },
    /* Display direction */
    row && styles.row,
    column && styles.column,
    /*  */
    flex && { flex },
    flex === 'disabled' && { flex: 0 },
    block && styles.block,
    wrap && { flexWrap: 'wrap' },
    /* Alignment  */
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    /* Margins and paddings Handler */
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    /* BackgroundColors */
    primary && styles.primary,
    secondary && styles.secondary,
    info && styles.info,
    success && styles.success,
    warning && styles.warning,
    danger && styles.danger,
    black && styles.black,
    white && styles.white,
    grey && styles.grey,
    dark && styles.darkgrey,
    style,
  ];

  if (animated) {
    return (
      <Animated.View style={blockStyles} props>
        {children}
      </Animated.View>
    );
  }

  return (
    <View style={blockStyles} props>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: Theme.colors.WHITE,
  },
  block: { flex: 1 },
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  center: { alignItems: 'center' },
  middle: { justifyContent: 'center' },
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' },
  top: { justifyContent: 'flex-start' },
  bottom: { justifyContent: 'flex-end' },
  shadow: {
    shadowColor: Theme.colors.GREY,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  card: { borderRadius: 10 },
  primary: { backgroundColor: Theme.colors.PRIMARY },
  secondary: { backgroundColor: Theme.colors.SECONDARY },
  info: { backgroundColor: Theme.colors.INFO },
  success: { backgroundColor: Theme.colors.SUCCESS },
  warning: { backgroundColor: Theme.colors.WARNING },
  danger: { backgroundColor: Theme.colors.DANGER },
  black: { backgroundColor: Theme.colors.BLACK },
  white: { backgroundColor: Theme.colors.WHITE },
  grey: { backgroundColor: Theme.colors.GREY },
  dark: { backgroundColor: Theme.colors.DARKGREY },
  transparent: { backgroundColor: Theme.colors.TRANSPARENT },
});
