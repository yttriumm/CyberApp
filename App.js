/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AuthScreen from './src/AuthScreen';
import {StyleSheet, Text, View} from 'react-native';
import MenuScreen from './src/MenuScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from './src/SettingsScreen';
import LoginHistoryScreen from './src/LoginHistoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import SelfServiceScreen from './src/SelfServiceScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{header: () => null}}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="History" component={LoginHistoryScreen} />
        <Stack.Screen name="SelfService" component={SelfServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
