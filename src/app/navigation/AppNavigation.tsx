import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from '@screens/Home';
import PokemonDetail from '@screens/PokemonDetail';

export type AppParamList = {
  home: undefined;
  pokemonDetail: undefined;
};

const AppStack = createNativeStackNavigator<AppParamList>();

export default function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="pokemonDetail" component={PokemonDetail} />
    </AppStack.Navigator>
  );
}
