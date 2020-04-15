/* eslint-disable no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import ProductPage from './ProductPage';
import MainPage from './MainPage';

const App = () => {
  return (
    <NavigationContainer>
      <MainPage />
    </NavigationContainer>
  );
};

export default App;
