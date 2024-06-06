import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Artist, Song } from '../Config/types';
import { fetchArtist_Songs } from '../Config/Api';
import { View, Image, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderSong from '../Render/RenderSong';
import { useAudioPlayer } from '../components/AudioPlayerProvider';

interface ArtistScreenProps {
  route: {
    params: {
      artist: Artist;
    };
  };
}

const ArtistScreen = ({ route }: ArtistScreenProps) => {
  const { artist } = route.params;
  const { colors } = useTheme();
  const [songs, setSongs] = useState<Song[]>([]);
  const navigation = useNavigation();
  const { currentSong, playSong, stopSong } = useAudioPlayer();

  useEffect(() => {
    fetchArtist_Songs(artist._id).then((result) => setSongs(result.songs));
  }, []);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [songs]);

  const togglePlayPause = (song: Song) => {
    if (currentSong?._id === song._id) {
      stopSong();
    } else {
      playSong(song);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: artist.image_url }} style={styles.image} />
      <View style={styles.textContainer} />
      <View style={styles.textContainer2}>
        <Text style={styles.title}>{artist.name}</Text>
        <Text style={styles.subtitle}>{artist.genre}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <RenderSong
              item={item}
              index={index}
              artist={artist}
              currentSong={currentSong}
              togglePlayPause={togglePlayPause}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  textContainer: {
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(97, 38, 11, 0.8)',
    opacity: 0.55,
    borderRadius: 20,
    padding: 10,
    height: 400,
  },
  textContainer2: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    paddingTop: 270,
    marginLeft: 20,
    textTransform: 'capitalize',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  subtitle: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    paddingTop: 290,
    marginLeft: 20,
    textTransform: 'capitalize',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingTop: 40,
  },
});

export default ArtistScreen;
