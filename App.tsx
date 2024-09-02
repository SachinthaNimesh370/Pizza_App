import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';


// Background Image
const BackgroundImage= ()=>{
  return(
    <Image style={sty.backgroundImage} source={
      require('./assets/img/pizzaBackground.png')
    }/>
  );
}
//Header text
const HedederText=()=>{
  return(
    <View style={sty.hederTextArea}>
      <Text style={sty.hederText}>
        {'Welcome \n Back'}
      </Text>
    </View>
  )
}
// Input Text Area
const InputTextArea=()=>{
  return(
    <View style={sty.textFieldArea}>
      {/* Email Field */}
      <View style={sty.textField}>
        <TextInput placeholder='User Email'
                   placeholderTextColor={'#9d9d9d'}
         style={sty.textInputField}/>
      </View>

      {/* Password Field */}
      <View style={sty.textField}>
        <TextInput placeholder='User Password'
                   placeholderTextColor={'#9d9d9d'}
                   secureTextEntry
         style={sty.textInputField}/>
      </View>

    </View>
  )
}



function App(): React.JSX.Element {

  return (
    <View style={sty.container}>

      {/* Background image */}
      <BackgroundImage/>

      {/* Heder Text */}
      <HedederText/>

      <Icon name="arrow-forward-sharp" size={30} color="#900" />

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

        {/* Text Area */}
        <InputTextArea/>  
        
      </KeyboardAwareScrollView>
      

    </View>
    
  );
}

const sty =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  backgroundImage:{
    width:'100%',
    height:'100%',
    resizeMode:'stretch',
    position:'absolute'
  },
  hederTextArea:{
    justifyContent:'center',
    marginTop:250
  },
  hederText:{
    fontSize:80,
    fontWeight:'600',
    textAlign:'center',
    color:'white'
  },
  textFieldArea:{
    marginHorizontal:40,
    marginTop:170
  },
  textField:{
    backgroundColor:'white',
    height:55,
    borderRadius:20,
    paddingHorizontal:20,
    marginVertical:10
  },
  textInputField:{
    fontSize:20,
    color:'#3b3b3b',
    fontWeight:'400',
   
    
  }
})



export default App;