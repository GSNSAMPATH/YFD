import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Song } from '../Config/types';
import { useAudioPlayer } from '../components/AudioPlayerProvider';
import LinearGradient from 'react-native-linear-gradient';
import RenderSong from '../Render/RenderSong';
import { BackArrowIcon } from '../Imagecomonents/Playicon';

interface AlbumScreenProps {
  route: {
    params: {
      title: string;
      releaseDate: string;
      colors: string[];
      songs: Song[];
    };
  };
}

const AlbumScreen = ({ route }: AlbumScreenProps) => {
  const { title, releaseDate, songs, colors  } = route.params;
  const { currentSong,CurrentSongListAndIndex , playSong, stopSong, } = useAudioPlayer();
  const navigation = useNavigation();

  // useEffect(() => {
  //   fetchArtist_Songs(artist._id).then((result) => setArist(result));
  // }, []);
  
  

  const togglePlayPause = (song: Song, index: number) => {
    CurrentSongListAndIndex(songs)
    if (currentSong?._id === song._id) {
      stopSong();
    } else {
      playSong(song, index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={colors} style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <BackArrowIcon />
        </TouchableOpacity> 
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>{new Date(releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
        <Text style={styles.releaseDate}>{new Date(releaseDate).toLocaleTimeString('en-US')}</Text>
      </LinearGradient>
      <View style={styles.listContainer}>       
      <FlatList
          data={songs}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index}) => (
            <RenderSong
              item={item}
              index={index}
              artist={item.artist}
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
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,

    width: '100%',
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  releaseDate: {
    fontSize: 16,
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingTop: 20,
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
  icon: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 2,
    
  
  },
});

export default AlbumScreen;





