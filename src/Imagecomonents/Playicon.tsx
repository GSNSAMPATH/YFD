import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const PlayIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/Playimage.png')} style={styles.image} />
  </View>
);

const PlusIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/pause.png')} style={styles.image} />
  </View>
);

export { PlayIcon, PlusIcon };

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 20,
    height: 20,
  },
});
