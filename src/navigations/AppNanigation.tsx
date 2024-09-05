import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomePage from '../screens/HomePage';

const AppNanigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} options={
                {cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}
            }/>
            
            <Stack.Screen name="SignUp" component={SignUpScreen} options={
                {cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}
            } />

            <Stack.Screen name="Home" component={HomePage} options={
                {cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}
            } />
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default AppNanigation