import React, {useRef} from 'react';
import {View, PanResponder, StyleSheet} from 'react-native';

export default function PanTester() {
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log('onPanResponderGrant');
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove');
        console.log('EVT');
        console.log(
          'Page (Root): [' +
            evt.nativeEvent.pageX +
            ',' +
            evt.nativeEvent.pageY +
            ']',
        );
        console.log(
          'Location: [' +
            evt.nativeEvent.locationX +
            ',' +
            evt.nativeEvent.locationY +
            ']',
        );
        console.log(evt.nativeEvent.target);

        //console.log('GESTURE');
        //console.log('X:' + gestureState.moveX + 'Y:' + gestureState.moveY);
        //console.log('X0:' + gestureState.x0 + ' Y0:' + gestureState.y0);
        //console.log('DX:' + gestureState.dx + ' DY:' + gestureState.dy);
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease');
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        console.log('onPanResponderTerminate');
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      borderWidth: 1,
      marginVertical: 10,
    },
  });
  return (
    <View style={{flex: 1}}>
      <View style={styles.container} {...panResponder.panHandlers} />
      <View style={styles.container} {...panResponder.panHandlers} />
      <View style={styles.container} {...panResponder.panHandlers} />
    </View>
  );
}
