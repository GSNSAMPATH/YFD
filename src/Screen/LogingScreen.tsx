import React from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity, ScrollViewBase } from 'react-native';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import { FacebookButton, GoogleButton } from '../Imagecomonents/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}/>
      {/* <Text style={styles.title}>Welcome</Text> */}
      <View style={styles.formContainer}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Enter your Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
      <View style={styles.rememberMeContainer}>
        <Text>Remember me  </Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => {}} >
        <Text style={{color: 'white'}}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>- OR -</Text>
      <View style={styles.socialContainer}>
          <FacebookButton />
          <GoogleButton />
      
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Don't have an Account? Sign up</Text>
      </TouchableOpacity>
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
    height: 490,
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
    color: 'white',
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

export default SignInScreen;
