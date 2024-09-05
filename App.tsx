import React from 'react';
import './gesture-handler';
import { StyleSheet, View } from 'react-native';
import AppNanigation from './src/navigations/AppNanigation';

function App(): React.JSX.Element {

  return (

    <View style={sty.container}>
      
      {/* Login Page Navigation */}
      <AppNanigation/>
    </View>
    
  );
}

const sty =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  

  }})

export default App;