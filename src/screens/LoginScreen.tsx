import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';


// Background Image
const BackgroundImage= ()=>{
    return(
      <Image style={sty.backgroundImage} source={
        require('../../assets/img/pizzaBackground.png')
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
  
   const SignInButton=( p : any)=>{

    const stack =p.stack;

    const GotoHomePage=()=>{
      const email     = 'asd@gmail.com';
      const password = '123';
      if(email==userEmail && password==userPassword){
        // Navigate to the Home screen
        stack.navigate('Home');
      }
      else{
        Alert.alert('Massage','Incorrect Email and Password')
      }
    };

    

    // Input Text Area
    
    const[userEmail,setUserEmail]= useState('')
    const[userPassword,setUserPassword]= useState('')
      

    return(
      <View>
        
        {/* Text Area */}
       <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
       <View style={sty.textFieldArea}>
          {/* Email Field */}
          <View style={sty.textField}>
            <TextInput placeholder='User Email'
                      placeholderTextColor={'#9d9d9d'}
                      style={sty.textInputField}
                      onChangeText={(v)=>setUserEmail(v)}
                      
            />
          </View>
          {/* Password Field */}
          <View style={sty.textField}>
            <TextInput placeholder='User Password'
                      placeholderTextColor={'#9d9d9d'}
                      secureTextEntry
                      style={sty.textInputField}
                      onChangeText={(v)=>setUserPassword(v)}
            />
          </View>
        </View>
       </KeyboardAwareScrollView>
       
        
        {/* Sign In Label Right Side */}
        <View style={sty.signInArea}>
          <View style={sty.signInLabel}>
            <Text style={sty.signInLabelText}>Sign In</Text>
          </View>

        {/* Sign In Button */}
          <View style={sty.signInButtonArea}>
            <TouchableOpacity onPress={GotoHomePage} activeOpacity={0.5}>
              <View style={sty.signInButton}>
                <Icon name="arrow-forward-sharp"  size={45} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    );
   }
  
   const BottamLayer=(p:any)=>{

    const stack =p.stack;

    const GoToSignUp=()=>{
      stack.navigate('SignUp')
    } 

    return(
      <View style={sty.bottomArea}>

        <TouchableOpacity onPress={GoToSignUp} activeOpacity={0.4}>
          <View style={sty.signUpButtonField}>
              <Text style={sty.signUpButton}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        
        <View  style={sty.fgtPasswordButtonField}>
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={sty.signUpButton}>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
   }

 

const LoginScreen = (props:any) => {

  const stack = props.navigation;

  return (
    <View style={sty.container}>

       {/* Background image */}
       <BackgroundImage/>

      {/* Heder Text */}
       <HedederText/>
      
       
       

       {/* Sign In Area */}
       <SignInButton stack={stack}/>

       {/* Bottom  */}
       <BottamLayer stack={stack}/>

      

     </View>
  )
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
      marginTop:100
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
    },
    signInArea:{
      flexDirection:'row',
      marginHorizontal:40,
      position:'absolute',
      marginTop:280,
  
    },
    signInLabel:{
      height:50,
      flex:1,
      justifyContent:'center',
    },
    signInLabelText:{
      fontSize:35,
      fontWeight:'500'
    },
    signInButtonArea:{
      height:60,
      flex:1,
      alignItems:'flex-end'
    },
    signInButton:{
      backgroundColor:'#367cfe',
      height:60,
      width:60,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center'
      
    },
    bottomArea:{
      flexDirection:'row',
      marginHorizontal:40,
      position:'absolute',
      marginTop:900,
    },
    bottomLayer:{
      flexDirection:'row'
    },
    signUpButtonField:{
      height:50,
      flex:1,
      
    },
    signUpButton:{
      fontSize:20
    },
    fgtPasswordButtonField:{
      height:50,
      flex:1,
      alignItems:'flex-end'
      
  
    },
    
    
  })

export default LoginScreen