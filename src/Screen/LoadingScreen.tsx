import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '573436234058-i58n9m034c1jlhuklkmtmih0epnnodvl.apps.googleusercontent.com',
    });

    const checkLoggedInUser = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedEmail && storedPassword) {
        auth().signInWithEmailAndPassword(storedEmail, storedPassword)
          .then((res) => {
            console.log(res);

            navigation.navigate('Tab');
          })
          .catch((err) => console.log(err));
      }
      else {
        navigation.navigate('Login');
      }
    };

    checkLoggedInUser();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#055751',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});

export default LoadingScreen;
