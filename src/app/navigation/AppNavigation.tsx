import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from '@screens/Home';

export type AppParamList = {
  home: undefined;
};

const AuthStack = createNativeStackNavigator<AppParamList>();

export default function AppNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <AuthStack.Screen name="home" component={Home} />
    </AuthStack.Navigator>
  );
}
