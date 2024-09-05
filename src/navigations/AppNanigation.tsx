import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AppNanigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default AppNanigation