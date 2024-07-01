import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HomeIcone = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/Image/Home4.png')} style={styles.image} />
  </View>
);

const HomeIcon2 = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/tabImage/HOME2.png')} style={styles.image} />
  </View>
)
  
const UserMusicIcon = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/Image/user-music.png')} style={styles.image} />
  </View>
)

const UserMusicIcon2 = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/tabImage/user-music2.png')} style={styles.image} />
  </View>
)

const PlayerIcon2 = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/tabImage/music-note2.png')} style={styles.image} />
  </View>
)

const PlayerIcon = () => (
  <View style={styles.container}>
    <Image source={require('../Imagecomonents/Image/music-note.png')} style={styles.image} />
  </View>
);


const styles = StyleSheet.create({
  container: {
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

export { HomeIcone, UserMusicIcon, PlayerIcon, HomeIcon2, PlayerIcon2, UserMusicIcon2 };

