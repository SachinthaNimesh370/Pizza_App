import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

function App(): React.JSX.Element {

  return (

    <View style={sty.container}>
      {/* <LoginScreen/> */}
      <SignUpScreen/>
    </View>
    
  );
}

const sty =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  

  }})

export default App;