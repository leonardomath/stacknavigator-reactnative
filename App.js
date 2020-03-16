import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/components/Home'
import Details from './src/components/Details'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'Bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
