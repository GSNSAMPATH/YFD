import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const PlayIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/Playimage.png')} style={styles.image1} />
  </View>
);

const PlusIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/pause.png')} style={styles.image} />
  </View>
);

const SearchIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/search.png')} style={styles.image} />
  </View>
);

const BackArrowIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/back-arrow2.png')} style={styles.image3} />
  </View>
);

const HomeIcone = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/Home4.png')} style={styles.image} />
  </View>
);

const ListIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/list.png')} style={styles.image} />
  </View>
);

const FowerdIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/forward.png')} style={styles.image} />
  </View>
);

const BackwerdIcon = () => (
  <View style={styles.icon}>
    <Image source={require('../Imagecomonents/Image/rewind.png')} style={styles.image} />
  </View>
)

export { PlayIcon, PlusIcon, SearchIcon, BackArrowIcon, HomeIcone, ListIcon, FowerdIcon, BackwerdIcon };

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
  image1: {
    width: 20,
    height: 20,
    marginLeft: 3,
  },

  image: {
    width: 20,
    height: 20,
  },

  image3: { 
    width: 30,
    height: 35,
    marginTop: 5
    
  }


});
