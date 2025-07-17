import React, { useState } from 'react';

import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const UpdatePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');

  const updatePassword = async () => {
    try {
      const user = auth().currentUser;

      if (user) {
        await user.updatePassword(newPassword);
        Alert.alert('Password updated successfully!');
      } else {
        Alert.alert('No user is currently logged in.');
      }
    } catch (error) {
      Alert.alert('Error updating password:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <Button title="Update Password" onPress={updatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default UpdatePasswordScreen;
