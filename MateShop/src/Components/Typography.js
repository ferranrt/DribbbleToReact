/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Theme from '../Theme/Theme';

export default function Typography(props) {
  const {
    debug,
    left,
    center,
    right,
    justify,
    accent,
    primary,
    secondary,
    tertiary,
    success,
    warning,
    danger,
    black,
    white,
    grey,
    dark,
    size,
    height,
    weight,
    spacing,
    margin,
    padding,
    solid,

    h1,
    h2,
    h3,
    title,
    header,
    body,
    small,
    caption,
    transform,
    style,
    bold,
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
  const stylesToRender = [
    /* Default Style */
    styles.text,
    debug && { borderWidth: 1 },
    solid && { backgroundColor: solid },
    /* Alignment */
    left && styles.left,
    center && styles.center,
    right && styles.right,
    justify && styles.justify,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    /* Font Family */
    transform && { textTransform: transform },
    /* Font Size */
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    header && styles.header,
    body && styles.body,
    small && styles.small,
    caption && styles.caption,

    /* Font Color */
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    success && styles.success,
    warning && styles.warning,
    danger && styles.danger,
    black && styles.black,
    white && styles.white,
    grey && styles.grey,
    dark && styles.dark,
    /* Custom Styling override */
    size && { fontSize: size },
    height && { lineHeight: height },
    weight && { fontWeight: weight },
    spacing && { letterSpacing: spacing },
    bold && { ...styles.bold },
    style,
  ];
  return (
    <Text style={stylesToRender} props>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...{ color: Theme.colors.GRAY, textAlignVertical: 'center' },
    ...Theme.fonts.BODY,
  },
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },

  h1: Theme.fonts.H1,
  h2: Theme.fonts.H2,
  h3: Theme.fonts.H3,
  bold: Theme.fonts.BOLD,
  title: Theme.fonts.TITLE,
  header: Theme.fonts.HEADER,
  body: Theme.fonts.BODY,
  caption: Theme.fonts.CAPTION,
  small: Theme.fonts.SMALL,
  accent: { color: Theme.colors.ACCENT },
  primary: { color: Theme.colors.PRIMARY },
  secondary: { color: Theme.colors.SECONDARY },
  tertiary: { color: Theme.colors.TERTIARY },
  success: { color: Theme.colors.SUCCESS },
  warning: { color: Theme.colors.WARNING },
  danger: { color: Theme.colors.DANGER },
  black: { color: Theme.colors.BLACK },
  white: { color: Theme.colors.WHITE },
  grey: { color: Theme.colors.GREY },
  dark: { color: Theme.colors.DARKGRAY },
});
