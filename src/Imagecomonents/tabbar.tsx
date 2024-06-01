import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HomeImage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Imagecomonents/Image/imgHome1.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default HomeImage;

