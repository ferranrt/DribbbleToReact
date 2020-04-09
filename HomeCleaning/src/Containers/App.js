/* eslint-disable no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import PlanPage from './PlanPage';
import ProfilePage from './ProfilePage';
import OnDemandPage from './OnDemandPage';
import CalendarPage from './CalendarPage';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator headerMode="none" initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Plan" component={PlanPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Demand" component={OnDemandPage} />
          <Stack.Screen name="Calendar" component={CalendarPage} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
