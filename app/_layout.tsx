// navigation/AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeekView from './screens/WeekView';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="screens/WeekView">
        <Stack.Screen name="screens/WeekView" component={WeekView} options={{ title: 'Week View' }} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
