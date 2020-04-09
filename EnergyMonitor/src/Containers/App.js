import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Block, Typography, Button } from '../Components';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Block block info padding={15}></Block>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
