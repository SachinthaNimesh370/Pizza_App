import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
          {'Create \n Account'}
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
          <TextInput placeholder='User Name'
                     placeholderTextColor={'#9d9d9d'}
           style={sty.textInputField}/>
        </View>

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
   const SignInButton=(p:any)=>{
    const stack = p.stack;

    

    return(
      <View style={sty.signInArea}>
        <View style={sty.signInLabel}>
          <Text style={sty.signInLabelText}>Sign Up</Text>
        </View>
        <View style={sty.signInButtonArea}>
          <TouchableOpacity  activeOpacity={0.5}>
            <View style={sty.signInButton}>
              <Icon name="arrow-forward-sharp"  size={45} color="white" />
            </View>
          </TouchableOpacity>
          
  
        </View>
      </View>
    );
   }
  
   const BottamLayer=(p:any)=>{

    const stack = p.stack;

    const GotoSignIn =()=>{
      stack.navigate('Login');
    }

    return(
      <View style={sty.bottomArea}>
        <View  style={sty.fgtPasswordButtonField}>
            <TouchableOpacity onPress={GotoSignIn} activeOpacity={0.4}>
            <Text style={sty.signUpButton}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
   }

const SignUpScreen = (props:any) => {
  const stack = props.navigation;

  return (
    <View style={sty.container}>

       {/* Background image */}
       <BackgroundImage/>

      {/* Heder Text */}
       <HedederText/>

       <Icon name="arrow-forward-sharp" size={50} color="#900" />
      
      
       {/* Text Area */}
       <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
         <InputTextArea/> 
       </KeyboardAwareScrollView>

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
      marginTop:40
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
      marginTop:780,
  
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

export default SignUpScreen
