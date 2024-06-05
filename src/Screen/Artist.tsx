import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Artist, Song } from '../Config/types';
import { fetchArtist_Songs } from '../Config/Api';
import { View, Image, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'


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

  useEffect(() => {
    fetchArtist_Songs(artist._id)
      .then((result) => setSongs(result.songs));
  }, []);


  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [songs]);



  const renderSong = ({ item, index }: { item: Song; index: number }) => (
    <View style={styles.song}>
      <Text style={styles.songNumber}>0{index + 1}</Text>
      <Image source={{ uri: item.songimageUrl }} style={styles.songImage} />
      <View style={styles.songTextContainer}>
        <Text style={styles.songTitle}numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
        <Text style={styles.songSubtitle}>{artist.name}</Text>
      </View>
      <Button children={undefined}> play </Button>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: artist.image_url }} style={styles.image} />
      <View style={styles.textContainer}/>
      <View style={styles.textContainer2}>
        <Text style={styles.title}>{artist.name}</Text>
        <Text style={styles.subtitle}>{artist.genre}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={renderSong}
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
    // fontStyle: 'italic',
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
    // fontStyle: 'italic',
    marginLeft: 20,
    textTransform: 'capitalize',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
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
  },
  songSubtitle: {
    fontSize: 12,
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingTop: 40,
  },

  songNumber: {
    color: '#fff',  
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginRight: 20,

  },

});

export default ArtistScreen;

