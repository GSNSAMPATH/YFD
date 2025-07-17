import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Tab: undefined;
  SignUp: undefined;
};

const SignInScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '573436234058-i58n9m034c1jlhuklkmtmih0epnnodvl.apps.googleusercontent.com',
    });

    // const checkLoggedInUser = async () => {
    //   const storedEmail = await AsyncStorage.getItem('email');
    //   const storedPassword = await AsyncStorage.getItem('password');

    //   if (storedEmail && storedPassword) {
    //     auth().signInWithEmailAndPassword(storedEmail, storedPassword)
    //       .then((res) => {
    //         console.log(res);
       
    //         navigation.navigate('Tab');
    //       })
    //       .catch((err) => console.log(err));
    //   }
    // };

    // checkLoggedInUser();
  }, [navigation]);

  const loginWithEmailAndPassword = async () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    auth().signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log(res);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        Alert.alert("Login Success");
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tab' }],
        });
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Login Failed");
      });
  };

  const [isGoogleAuthEnabled, setIsGoogleAuthEnabled] = useState(true);

  const onGoogleButtonPress = async () => {
    if (!isGoogleAuthEnabled) {
      Alert.alert('Google authentication is not enabled');
      return;
    }

    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert("Login Success");
      navigation.navigate('Tab');
    } catch (error) {
      setIsGoogleAuthEnabled(false);
      Alert.alert('Google authentication failed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your Email" keyboardType="email-address" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter your Password" secureTextEntry />
        <View style={styles.rememberMeContainer}>
          <Text style={{ color: 'white' }}>Remember me  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={loginWithEmailAndPassword}>
          <Text style={{ color: 'white' }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>- OR -</Text>
        <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
          <Text style={{ color: 'black' }}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
        <View style={styles.rememberMeContainer}>
          <Text style={styles.signUpText}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: 'blue' }}>   Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
  signUpText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default SignInScreen;
