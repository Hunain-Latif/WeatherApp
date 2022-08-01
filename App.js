import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Screens/SplashScreen'
import Weather from './src/Components/Weather'
import Fetch from './src/Screens/Fetch';
import Practice from './src/Screens/Practice';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="weather" component={Fetch} />
        {/* <Stack.Screen name='Practice' component={Practice} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})