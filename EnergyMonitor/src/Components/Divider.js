/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import Theme from '../Theme/Theme';
import Block from './Block';

export default function Divider(props) {
  const { color, hor, ver, style } = props;
  const dividerStyles = [
    styles.divider,
    color && { borderBottomColor: color },
    hor && { marginHorizontal: hor },
    ver && { marginVertical: ver },
    style,
  ];

  return <Block style={dividerStyles} props />;
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    marginVertical: 5,
    borderBottomColor: Theme.colors.GREY.fade(0.5),
    borderBottomWidth: 1,
    elevation: 2,
  },
});
