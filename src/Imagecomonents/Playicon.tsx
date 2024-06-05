import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const PlayIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/imgplay.png')} style={styles.image} />
  </View>
);

const PlusIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/imgplus.png')} style={styles.image} />
  </View>
);

export { PlayIcon, PlusIcon };

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
  image: {
    width: 50,
    height: 50,
  },
});
