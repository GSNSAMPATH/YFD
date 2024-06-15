import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeIcone } from '../Imagecomonents/Playicon';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <HomeIcone/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
