import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');

  const navigation = useNavigation();

  const handleSignup = async () => {
    if (!password || email || name1 || name2 === '') {
      Alert.alert('Please fill in all fields');
      return;
    }
   
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      Alert.alert('Sign up successful');
      navigation.navigate('Login');
      
    } catch (error) {
      console.log('Error signing up:', error);
      Alert.alert('Sign up failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}/>
  {/* <Text style={styles.title}>Welcome</Text> */}
  <View style={styles.formContainer}>
  <Text style={styles.title}>Sign Up</Text>
  <TextInput style={styles.input} value= {name1} onChangeText={(text) => setName1(text)} placeholder="Enter your First Name" keyboardType="default"  />
  <TextInput style={styles.input} value= {name2} onChangeText={(text) => setName2(text)} placeholder="Enter your Last Name" keyboardType="default" />
  <TextInput style={styles.input} value= {email} onChangeText={(text) => setEmail(text)} placeholder="Enter your Email" keyboardType="email-address" />
  <TextInput style={styles.input} value= {password} onChangeText={(text) => setPassword(text)} placeholder="Enter your Password" secureTextEntry />
  <TextInput style={styles.input} value= {confirmPassword} onChangeText={(text) => setConfirmPassword(text)} placeholder="Confirm Password" secureTextEntry />
 
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
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        justifyContent: 'center',
        shadowColor: '#000',
    
    
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
    
function alert(message: any, email: string | null): any {
  throw new Error('Function not implemented.');
}

