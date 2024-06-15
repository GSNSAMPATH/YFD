import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useAudioPlayer } from './AudioPlayerProvider'; // Adjust the path as needed

const CurrentSongImage: React.FC = () => {
  const { currentSong } = useAudioPlayer();

  if (!currentSong) {
    return null;
  }

  return (

      <Image source={{ uri: currentSong.songimageUrl }} style={styles.image} />
 
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    padding: 10,

  },
});

export default CurrentSongImage;
