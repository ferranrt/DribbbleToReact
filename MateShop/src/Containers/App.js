import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Block, Button, Input, Typography } from '../Components';
import IconProvider from '../Theme/IconProvider';
import Theme from '../Theme/Theme';
import Header from '../Components/Header';
import CategoryPicker from '../Components/CategoryPicker';

const App = () => {
  return (
    <NavigationContainer>
      <Block block white padding={Theme.sizes.BASE}>
        <Header />
        <CategoryPicker />
      </Block>
    </NavigationContainer>
  );
};

export default App;
