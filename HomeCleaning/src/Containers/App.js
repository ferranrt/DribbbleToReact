/* eslint-disable no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import WelcomePage from './WelcomePage';
import PlanPage from './PlanPage';
import ProfilePage from './ProfilePage';
import OnDemandPage from './OnDemandPage';
import CalendarPage from './CalendarPage';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <CalendarPage />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
