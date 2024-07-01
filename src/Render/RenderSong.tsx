import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Song, Artist } from '../Config/types';
import { PlayIcon, PlusIcon } from '../Imagecomonents/Playicon';

interface RenderSongProps {
  item: Song;
  index: number;
  artist: Artist;
  currentSong: Song | null;
  Songlist: Song[];
  togglePlayPause: (song: Song, index: number) => void;
}



const RenderSong = ({ item, index, artist, currentSong, Songlist, togglePlayPause }: RenderSongProps) => (
  console.log(Songlist),
  <View style={styles.song}>
    <Text style={styles.songNumber}>0{index = index + 1}</Text>
    {currentSong?._id === item._id && (
      <Image
        source={require('../Imagecomonents/Image/ezgif-1-daa7034682-unscreen.gif')}
        style={styles.gif}
      />
    )}
    <Image source={{ uri: item.songimageUrl }} style={styles.songImage} />
    <View style={styles.songTextContainer}>
      <Text style={styles.songTitle} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.songSubtitle}>{artist.name}</Text>
    </View>
    <TouchableOpacity onPress={() => togglePlayPause(item, index)} style={styles.songIcon}>
      {currentSong?._id === item._id ? <PlusIcon /> : <PlayIcon />}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  song: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  songTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  songTitle: {
    fontSize: 16,
    color: '#fff',
  },
  songSubtitle: {
    fontSize: 12,
    color: '#fff',
  },
  songNumber: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginRight: 20,
  },
  songIcon: {
    bottom: 3,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  gif: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginRight: 20,
  },
});

export default RenderSong;
