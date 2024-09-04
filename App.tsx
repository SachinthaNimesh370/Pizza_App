import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/LoginScreen';






function App(): React.JSX.Element {

  return (

    <View style={sty.container}>
      <LoginScreen/>
    </View>
    
  );
}

const sty =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  

  }})

export default App;