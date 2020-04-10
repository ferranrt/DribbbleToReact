/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Theme from '../Theme/Theme';
import Typography from './Typography';

export default function Input(props) {
  const {
    children,
    debug,
    margins,
    paddings,
    label,
    leftIcon,
    rightIcon,
    bordered,
    bgcolor,
    fontColor,
    radius,
    style,
    containerStyle,
    inputStyle,
    underline,
    shadow,
  } = props;

  const handlePaddings = () => {
    let output = null;
    if (typeof paddings === 'number') {
      output = {
        paddingTop: paddings,
        paddingRight: paddings,
        paddingBottom: paddings,
        paddingLeft: paddings,
      };
    }

    if (typeof paddings === 'object') {
      const paddingSize = Object.keys(paddings).length;
      switch (paddingSize) {
        case 1:
          output = {
            paddingTop: paddings[0],
            paddingRight: paddings[0],
            paddingBottom: paddings[0],
            paddingLeft: paddings[0],
          };
          break;
        case 2:
          output = {
            paddingTop: paddings[0],
            paddingRight: paddings[1],
            paddingBottom: paddings[0],
            paddingLeft: paddings[1],
          };
          break;
        case 3:
          output = {
            paddingTop: paddings[0],
            paddingRight: paddings[1],
            paddingBottom: paddings[2],
            paddingLeft: paddings[1],
          };
          break;
        default:
          output = {
            paddingTop: paddings[0],
            paddingRight: paddings[1],
            paddingBottom: paddings[2],
            paddingLeft: paddings[3],
          };
          break;
      }
    }
    return output;
  };
  const handleMargins = () => {
    let output = null;
    if (typeof margins === 'number') {
      output = {
        marginTop: margins,
        marginRight: margins,
        marginBottom: margins,
        marginLeft: margins,
      };
    }
    if (typeof margins === 'object') {
      const marginSize = Object.keys(margins).length;
      switch (marginSize) {
        case 1:
          output = {
            marginTop: margins[0],
            marginRight: margins[0],
            marginBottom: margins[0],
            marginLeft: margins[0],
          };
          break;
        case 2:
          output = {
            marginTop: margins[0],
            marginRight: margins[1],
            marginBottom: margins[0],
            marginLeft: margins[1],
          };
          break;
        case 3:
          output = {
            marginTop: margins[0],
            marginRight: margins[1],
            marginBottom: margins[2],
            marginLeft: margins[1],
          };
          break;
        default:
          output = {
            marginTop: margins[0],
            marginRight: margins[1],
            marginBottom: margins[2],
            marginLeft: margins[3],
          };
          break;
      }
    }
    return output;
  };

  const styles = StyleSheet.create({
    root: { flex: 1 },
    defaultContainerStyle: {
      margin: 0,
      paddingHorizontal: 15,
      paddingVertical: 5,
    },
    defaultInputStyle: {
      borderRadius: 10,
      marginHorizontal: 5,
      paddingVertical: 5,
      flex: 1,
      fontSize: Theme.sizes.BASE,
      textAlign: 'center',
    },
    underlineContainer: {
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.GRAY,
    },
    shadow: {
      shadowColor: Theme.colors.GRAY,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 5,
    },
  });

  const inputStyles = [
    styles.defaultInputStyle,
    fontColor && { color: fontColor },
    inputStyle,
  ];

  const containerStyles = [
    styles.defaultContainerStyle,
    underline && styles.underlineContainer,
    radius && { borderRadius: radius },
    bordered && { borderWidth: 0.5, borderColor: bordered },
    margins && { ...handleMargins() },
    paddings && { ...handlePaddings() },
    shadow && styles.shadow,
    bgcolor && { backgroundColor: bgcolor },
    containerStyle,
  ];
  return (
    <View style={[styles.root, style, debug && { borderWidth: 1 }]}>
      {label && (
        <Typography title bold gray>
          {label}
        </Typography>
      )}
      <View style={containerStyles}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {leftIcon}
          <TextInput
            {...props}
            placeholderTextColor={fontColor}
            style={inputStyles}>
            {children}
          </TextInput>
          {rightIcon}
        </View>
      </View>
    </View>
  );
}
