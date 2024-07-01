// HomeScreen.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { AlbumData, Artist, Song } from '../Config/types';
import { fetchArtists, fetchSongs,fetchAlbums } from '../Config/Api';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Album from '../components/Album';
import { useNavigation } from '@react-navigation/native';
import { useAudioPlayer } from '../components/AudioPlayerProvider';
import { SearchIcon } from '../Imagecomonents/Playicon';


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

  // Add other fields as necessaryinterface 


const HomeScreen: React.FC<Props> = ({}) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<AlbumData[]>([]);

  const navigation = useNavigation();
  

  const { currentSong, playSong, stopSong } = useAudioPlayer();

  useEffect(() => {
    fetchArtists()
      .then((result) => setArtists(result))
      .catch((error) => setError(error.message));

    fetchSongs()
      .then((result) => setSongs(result))
      .catch((error) => setError(error.message));

    fetchAlbums()
      .then((result) => setAlbums(result))
      .catch((error) => setError(error.message));
  }, []);

      

    const renderItem = ({ item }: { item: Artist }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Artist', { artist: item })}>
        <View style={styles.item}>
          <Image source={{ uri: item.image_url }} style={[styles.image]} />
          <View style={styles.iconContainer}></View>
          <View style={styles.icon}></View>
          <Text style={styles.title}>{item.name}</Text>  
        </View> 
      </TouchableOpacity>

      
    ); 
    
    const renderSong = ({ item }: { item: Song }) => (
      <TouchableOpacity onPress={() => {
        playSong(item);
        navigation.navigate('Player');
      }}>
        <View style={styles.Item2}>
          <Image source={{ uri: item.songimageUrl }} style={[styles.image2]} />
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );

 




  return (
    
    <LinearGradient colors={['#360547','#170340', '#000000', '#000000']} style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ marginRight: '20%' }} >
          <View style={styles.hambeken}/>
          <View style={styles.hambeken2}/>
          <View style={styles.hambeken}/>
        </TouchableOpacity>
        <Text style={styles.header}>Top Artists</Text>
        <TouchableOpacity style={{ marginLeft: '25%' }} onPress={() => navigation.navigate('Search')}>
          <SearchIcon/>
        </TouchableOpacity>
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
          <View style={{ flexDirection: 'column', marginLeft: '65%', marginTop: 7.5 }}>
          <View style={styles.viwew3}/>
          <View style={styles.viwew2}/>
        
          </View>
    
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

       <View style={styles.container2}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.header2}> Albums</Text>
            <View style={{ flexDirection: 'column', marginLeft: '63%', marginTop: 7.5}}>
              <View style={styles.viwew3}/>
              <View style={styles.viwew2}/>
            </View>
         </View>
       {error ? (
            <Text style={styles.errorText}>Error: {error}</Text>

    ) : (
      
      <FlatList
        horizontal
        data={albums}
        renderItem={({ item }) => (
          <Album
            title={item.title}
            releaseDate={item.releaseDate}
            colors={item.colors} songs={item.songs}          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />

    )}
    </View>
  

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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    
  },

  viwew2: {
    width: 14,
    height: 4,
    backgroundColor: '#AFB2B3',
    margin: 1,
    borderRadius: 40,
    transform: [{ rotate: '-40deg' }],

    
  },

  viwew3: {
    width: 14,
    height: 4,
    backgroundColor: '#AFB2B3',
    margin: 1,
    borderRadius: 40,
    transform: [{ rotate: '40deg' }],

    
  },

  hambeken: {
    width: 20,
    height: 2,
    backgroundColor: '#fff',
    margin: 3,
    borderRadius: 40,

  },

  hambeken2: {
    width: 20,
    height: 2,
    backgroundColor: '#fff',
    margin: 2,
    marginLeft: -4,

  },
    
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },

  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    paddingLeft: 20,
    color: '#fff',
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
    marginTop: 20,
    // paddingLeft: 20,
    marginVertical: 16,
    marginHorizontal: -1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    width: 120,
    height: 125,
    marginLeft: 20,
    
  },

  text:{
    marginTop: 5,
    color: '#706875',
    fontSize: 12,


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

  list:{
    marginTop: 2,
    padding: 20,

  }





  });

export default HomeScreen;





