// HomeScreen.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Artist, Song } from '../Config/types';
import { fetchArtists, fetchSongs } from '../Config/Api';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';


// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  // navigation: HomeScreenNavigationProp;
}

// interface Artist {
//   _id: string;
//   name: string;
//   genre: string;
//   image_url: string;
//   songs: string[];
//   __v: number;
// }

  // Add other fields as necessary



const HomeScreen: React.FC<Props> = ({}) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArtists()
      .then((result) => setArtists(result))
      .catch((error) => setError(error.message));

    fetchSongs()
      .then((result) => setSongs(result))
      .catch((error) => setError(error.message));
  }, []);

      


    const renderItem = ({ item }: { item: Artist }) => (
      <View style={styles.item}>
        <Image source={{ uri: item.image_url }} style={[styles.image]} />
        <View style={styles.iconContainer}></View>
        <View style={styles.icon}></View>
        <Text style={styles.title}>{item.name}</Text> 
        {/* <Text style={styles.genre}>{item.genre}</Text> */}
      </View>
      
    ); 
    
    const renderSong = ({ item }: { item: Song }) => (
      <View style={styles.Item2}>
        <Image source={{ uri: item.songimageUrl }} style={[styles.image2]} />
        {/* <Text >{item.title}</Text> */}
     
      </View>
    );





  return (
    <LinearGradient colors={['#360547','#170340', '#000000', '#000000']} style={styles.container}>
      <View>
        <Text style={styles.header}>Top Artists</Text>
      </View>
    
    
      <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        <FlatList
          horizontal
          data={artists}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
      </View>
      <View style={styles.container2}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.header2}> Songs </Text>
    
        </View>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (

      <FlatList
        data={songs}
        renderItem={renderSong}
        keyExtractor={(item) => item._id}
        horizontal
      />

      )}
       </View>

       <View style={styles.container}></View>
  

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

 },

  container2: {
    flex: 1,
    justifyContent: 'center',
    // paddingLeft: 10,
 
  },
    
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    fontFamily: 'Poppins-Bold',
  },

  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    paddingLeft: 17,
  },


  item: {
    marginTop: 20,
    backgroundColor: '#290104',
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 220,
    height: 155,
  },

  Item2: {
    marginTop: 4,
    paddingLeft: 20,
    marginVertical: 16,
    marginHorizontal: -1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',


  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',


  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginTop: -25,
    fontStyle: 'italic',
    textAlign: 'center',
    textTransform: 'capitalize',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
    
  },

  iconContainer: {
    position: 'absolute',
    top: -2,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(215, 47, 45, 0.8)',
    opacity: 0.25,
    borderRadius: 20,
    color: 'white',
  },
  genre: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginTop: -25,
  },

  icon: {
    position: 'absolute',
    right: 12,
    top: 10,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(15, 37, 35, 0.76)',
    opacity: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  errorText: {
    color: 'red',
  },

  image: {
    resizeMode: 'cover',
    marginTop: -10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: 220,
    height: 155,
    borderRadius: 20,
  },

  image2: {
    resizeMode: 'cover',
    marginTop: -10,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: 120,
    height: 100,
    borderRadius: 12,
  },





  });

export default HomeScreen;



