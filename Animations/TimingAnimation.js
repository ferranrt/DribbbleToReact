import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Easing, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

export default function TimingAnimation(props) {
  const rotation = useRef(new Animated.Value(0)).current;

  const spin = () => {
    //Every 4 seconds executed
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1,
      duration: 4000,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start(() => spin());
  };
  useEffect(() => {
    spin();
  });
  const spiner = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const secondspiner = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['380deg', '20deg'],
  });
  const styles = StyleSheet.create({
    box: {
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{rotate: spiner}],
      marginBottom: -15,
    },
    secondBox: {
      height: 100,
      width: 100,
      transform: [{rotate: secondspiner}],
    },
    thirdBox: {
      height: 100,
      width: 100,
      marginTop: -150,
      marginLeft: -70,
      transform: [{rotate: secondspiner}],
    },
  });

  return (
    <View>
      <Animated.View style={styles.box}>
        <Icon name="player-settings" color={'gray'} size={100} />
      </Animated.View>
      <Animated.View style={styles.secondBox}>
        <Icon name="player-settings" color={'gray'} size={100} />
      </Animated.View>
      <Animated.View style={styles.thirdBox}>
        <Icon name="player-settings" color={'gray'} size={100} />
      </Animated.View>
    </View>
  );
}
