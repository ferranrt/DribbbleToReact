/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../Theme/Theme';

export default function Button(props) {
  const {
    debug,
    block,
    padding,
    margin,
    color,
    border,
    radius,
    style,
    opacity,
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
    shadow,
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
  const buttonStyles = [
    styles.button,
    block && styles.block,
    shadow && styles.shadow,
    primary && styles.primary,
    secondary && styles.secondary,
    info && styles.info,
    color && { borderColor: color, borderWidth: 1 },
    border && { borderWidth: border },
    radius && { borderRadius: radius },
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    success && styles.success,
    warning && styles.warning,
    danger && styles.warning,
    black && styles.black,
    white && styles.white,
    grey && styles.grey,
    dark && styles.darkgrey,
    debug && { borderWidth: 1, borderColor: 'black' },
    style,
  ];

  return (
    <TouchableOpacity
      {...props}
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
    >
      {children}
    </TouchableOpacity>
  );
}
Button.defaultProps = {
  startColor: Theme.colors.PRIMARY,
  endColor: Theme.colors.SECONDARY,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: Theme.colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  block: { width: '100%' },
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
