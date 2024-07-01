import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

 

  const handleSignup = () => {
    console.log('Sign up with email:', email, 'password:', password);
  };

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}/>
  {/* <Text style={styles.title}>Welcome</Text> */}
  <View style={styles.formContainer}>
  <Text style={styles.title}>Sign Up</Text>
  <TextInput style={styles.input} placeholder="Enter your First Name" keyboardType="default" />
  <TextInput style={styles.input} placeholder="Enter your Last Name" keyboardType="default" />
  <TextInput style={styles.input} placeholder="Enter your Email" keyboardType="email-address" />
  <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
  <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
 
  <View style={styles.rememberMeContainer}>


  </View>
  <TouchableOpacity style={styles.button}  onPress={handleSignup} >
    <Text style={{color: 'white'}}>SIGN UP</Text>
  </TouchableOpacity>

  <View style={styles.socialContainer}>

  
  </View>
  </View>

</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal : 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#055751',
        
      },
      imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#054C43',
        width: 280,
        height: 280,
        borderBottomRightRadius: 630,
      },
      formContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        opacity: 0.8,
        width: '90%',
        height: 500,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
      },
      input: {
        height: 40,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 10,
        borderRadius: 10,
        fontStyle: 'italic',
      },
      rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      forgotPassword: {
        color: 'blue',
      },
    
      button: {
        backgroundColor: '#054C43',
        padding: 10,
        borderRadius: 10,
    
    
      },
      orText: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'gray',
      },
      socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '50%',
      },
      signUpText: {
        textAlign: 'center',
        color: 'blue',
        marginBottom: 20,
      },
    });
    
    export default Signup;
    
