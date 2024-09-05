import React from 'react';
import './gesture-handler';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AppNanigation from './src/navigations/AppNanigation';

function App(): React.JSX.Element {

  return (

    <View style={sty.container}>
      <AppNanigation/>
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
    </View>
    
  );
}

const sty =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  

  }})

export default App;