import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export default function SpringAnimation(props) {
  const springValue = useRef(new Animated.Value(0.1)).current;

  const spring = () => {
    springValue.setValue(0.1);
    Animated.spring(springValue, {
      toValue: 2,
      friction: 1,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    spring();
  });

  const styles = StyleSheet.create({
    box: {
      height: 100,
      width: 100,
      borderRadius: 100,
      backgroundColor: 'red',
      elevation: 2,
      transform: [{scale: springValue}],
    },
  });
  return (
    <TouchableOpacity onPress={() => spring()}>
      <Animated.View style={styles.box} />
    </TouchableOpacity>
  );
}
