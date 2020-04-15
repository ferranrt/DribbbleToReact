import React, {useEffect, useState, useRef} from 'react';
import {View, Animated, Easing, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import TimingAnimation from './TimingAnimation';
import SpringAnimation from './SpringAnimation';
import PanTester from './PanTester';
export default function App() {
  const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  });

  return <PanTester />;
}
