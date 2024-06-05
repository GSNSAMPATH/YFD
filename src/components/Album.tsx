// src/components/Album.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Song {
  _id: string;
  title: string;
  artist: string;
  duration: number;
  songimageUrl: string;
  songurl: string;
}

interface AlbumProps {
  title: string;
  releaseDate: string;
  songs: Song[];
  colors: string[];
}

const Album: React.FC<AlbumProps> = ({ title, releaseDate, songs, colors }) => {
  return (
    <TouchableOpacity>
      <LinearGradient colors={colors} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 120,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 6,
    color: '#fff',
    marginBottom: 10,
  },
  songsContainer: {
    marginTop: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songTitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Album;
