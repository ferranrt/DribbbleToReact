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
    width,
    padding,
    margin,
    color,
    border,
    radius,
    style,
    opacity,
    accent,
    primary,
    secondary,
    tertiary,
    success,
    warning,
    danger,
    black,
    white,
    gray,
    dark,
    shadow,
    fab,
    fabSize,
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
    width && { width: `${width}%` },
    shadow && styles.shadow,
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    color && { borderColor: color, borderWidth: 1 },
    border && { borderWidth: border },
    radius && { borderRadius: radius },
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    success && styles.success,
    warning && styles.warning,
    danger && styles.danger,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    dark && styles.dark,
    debug && { borderWidth: 1, borderColor: 'black' },
    style,
  ];
  const fabStyle = [
    fab && {},
    fabSize && {
      borderRadius: fabSize,
      height: fabSize,
      width: fabSize,
      ...styles.shadow,
      style,
    },
  ];
  if (fab) {
    return (
      <TouchableOpacity
        {...props}
        style={[buttonStyles, fabStyle]}
        activeOpacity={opacity || 0.8}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      {...props}
      style={buttonStyles}
      activeOpacity={opacity || 0.8}>
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
    padding: 5,
    borderRadius: 5,
    margin: 5,
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
  block: { flex: 1 },
  accent: { backgroundColor: Theme.colors.ACCENT },
  primary: { backgroundColor: Theme.colors.PRIMARY },
  secondary: { backgroundColor: Theme.colors.SECONDARY },
  tertiary: { backgroundColor: Theme.colors.TERTIARY },
  success: { backgroundColor: Theme.colors.SUCCESS },
  warning: { backgroundColor: Theme.colors.WARNING },
  danger: { backgroundColor: Theme.colors.DANGER },
  black: { backgroundColor: Theme.colors.BLACK },
  white: { backgroundColor: Theme.colors.WHITE },
  gray: { backgroundColor: Theme.colors.GRAY },
  dark: { backgroundColor: Theme.colors.DARKGRAY },
  transparent: { backgroundColor: Theme.colors.TRANSPARENT },
});
