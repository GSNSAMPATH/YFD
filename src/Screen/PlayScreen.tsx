// import React, { Component } from 'react';
// import { View, Button, Text, StyleSheet, Image, ImageBackground } from 'react-native';
// import Sound from 'react-native-sound';
// import Timeline from '../components/Timeline';

import { Animated, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAudioPlayer } from "../components/AudioPlayerProvider";
import Timeline from "../components/Timeline";
import { Icon, List } from "react-native-paper";
import { BackArrowIcon, BackwerdIcon, FowerdIcon, ListIcon, PlayIcon, PlusIcon } from "../Imagecomonents/Playicon";
import React from "react";
import CurrentSongImage from "../components/CurrentSongImage";
import { useNavigation } from "@react-navigation/native";

// interface AudioPlayerState {
//   isPlaying: boolean;
//   sound: Sound | null;
//   currentTime: number;
//   duration: number;
// }

// export default class AudioPlayer extends Component<{}, AudioPlayerState> {
//   private interval: NodeJS.Timeout | null = null;

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       isPlaying: false,
//       sound: null,
//       currentTime: 0,
//       duration: 0,
//     };
//   }

//   componentDidMount() {
//     Sound.setCategory('Playback', true);
//     const sound = new Sound(
//       'https://song.sgp1.digitaloceanspaces.com/song/212d32fd-43b4-44c1-85e5-8af93d70a9e1.mp3',
//       Sound.MAIN_BUNDLE,
//       (error) => {
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         this.setState({ duration: sound.getDuration() });
//       }
//     );
//     this.setState({ sound });
//     this.interval = setInterval(() => {
//       if (this.state.isPlaying && this.state.sound) {
//         this.state.sound.getCurrentTime((seconds) => {
//           this.setState({ currentTime: seconds });
//         });
//       }
//     }, 1000);
//   }a

//   componentWillUnmount() {
//     if (this.state.sound) {
//       this.state.sound.release();
//     }
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   playSound = () => {
//     if (this.state.sound) {
//       this.state.sound.play((success) => {
//         if (success) {
//           console.log('successfully finished playing');
//         } else {
//           console.log('playback failed due to audio decoding errors');
//         }
//       });
//       this.setState({ isPlaying: true });
//     }
//   };

//   pauseSound = () => {
//     if (this.state.sound) {
//       this.state.sound.pause();
//       this.setState({ isPlaying: false });
//     }
//   };

//   onSliderChange = (value: number) => {
//     if (this.state.sound) {
//       this.state.sound.setCurrentTime(value);
//       this.setState({ currentTime: value });
//     }
//   };

//   formatTime(timeInSeconds: number): string {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = Math.floor(timeInSeconds % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   }

//   render() {
//     return (
//         <><ImageBackground
//             source={{ uri: 'https://drive.google.com/uc?id=11Z_5ppef_WW7tcwuSdnZ32b0JTTOfP6h' }} // (uri: 'https://song.sgp1.digitaloceanspaces.com/image/8f9e35c1-50f4-4b69-9178-a07ad7e6b4e2.webp')}
//             style={styleSheet.container2}
//             imageStyle={styleSheet.image2} >
//             <View style={styleSheet.container}>
//                 <Text style={styleSheet.title}>Audio Player</Text>
//                 <View>
//                 <Image source={{ uri: 'https://drive.google.com/uc?id=11Z_5ppef_WW7tcwuSdnZ32b0JTTOfP6h' }} style={styleSheet.image} />
//                 </View>

//                 <View>
//                 <Timeline/>
//                 </View>

//                 <Button title={this.state.isPlaying ? 'Pause' : 'Play'} onPress={this.state.isPlaying ? this.pauseSound : this.playSound} />
//             </View>
//             </ImageBackground>

//         </>
//     );
//   }
// }
  


// const styleSheet = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     width: '100%',
//     height: '100%',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 16,
//     fontFamily: 'Poppins-Bold',
//     color: '#fff',
//     marginBottom: 30
//   },

//   image: {
//     resizeMode: 'cover',
  
//     backgroundColor: 'white',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     width: 220,
//     height: 220,
//     borderRadius: 120,
//     opacity: 0.8,
//     margin: 50
    
//   },

//   background: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },

//   container2: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     width: '100%',
//     height: '100%',
//     opacity: 0.8


//   },
//   image2: {
//     resizeMode: 'cover',
//     marginTop: -10,
    
//   }


// })




// PlayerBar component to include the Timeline and play/pause, next, and previous buttons
const PlayerBar: React.FC = () => {
  const { isPlaying, playPause, nextSong, previousSong,currentSong } = useAudioPlayer();
   const navigation = useNavigation();
   

  const defaultImage = require('../Imagecomonents/Image/vinyl-1845272_1280.jpg');
  const currentimage = currentSong?.songimageUrl ? { uri: currentSong.songimageUrl } : defaultImage;
  
  const defaultSongName = 'Audio Player';
  const currentSongName = currentSong?.title ? currentSong.title : defaultSongName;


  return (
  
      <ImageBackground
           source={ currentimage} // (uri: 'https://song.sgp1.digitaloceanspaces.com/image/8f9e35c1-50f4-4b69-9178-a07ad7e6b4e2.webp')}
           style={styles.background}
           imageStyle={styles.image2} >
      <View style={styles.Iconcontainer}>      
          <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <BackArrowIcon />
          </TouchableOpacity>
          <View style={styles.container0}> 
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> {currentSongName}</Text>
          </View>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <ListIcon />
          </TouchableOpacity> 
       </View>
        
        <View style={styles.imagecontainer}>
        <View style={styles.container2}>
        <View style={styles.container4}>
        <View style={styles.container3}>

       <Image source={currentimage} style={styles.image} />
          </View>
          </View>
          </View>

      
  
       <TouchableOpacity onPress={playPause} style={styles.button}>
        {isPlaying ? <PlusIcon /> : <PlayIcon />}
      </TouchableOpacity>
      <View style={styles.Buttoncontainer}>
        <TouchableOpacity style={styles.button2}>
     <BackwerdIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
       <FowerdIcon />
      </TouchableOpacity>
      </View>

     
      </View>   
      <Timeline/>
      <View>
      {/* <Button title="Previous" onPress={previousSong} />

      <Button title="Next" onPress={nextSong} /> */}
      </View>
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    borderBlockColor: 'red',
  },

  Iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -35,
   
    
  },

  container0: {
    alignItems: 'center', 
    alignContent: 'center',
    justifyContent: 'center',
    width: '50%',

  },

  icon: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    // backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    top: -10,
  },



  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },

  image: {
    resizeMode: 'cover',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: 260,
    height: 260,
    borderRadius: 190,
    opacity: 0.8,
    borderColor: 'rgba(0, 4, 11, 0)',
    borderWidth: 15,
   
    
  },

  imagecontainer: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 40,
    
    
   
  },

  container2: {
    // backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 180,
    alignItems: 'center',
    alignContent: 'center',
    padding: 3,
    borderColor: 'rgba(251, 251, 251, 0.04)',
    borderWidth: 10,
  },

  container4: {
    // backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 180,
    alignItems: 'center',
    alignContent: 'center',
    padding: 3,
    borderColor: 'rgba(251, 251, 251, 0.07)',
    borderWidth: 10,
  },

  container3: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 180,
    alignItems: 'center',
    alignContent: 'center',
    padding: 2,
    borderColor: 'rgba(251, 251, 251, 0.15)',
    borderWidth: 10,
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: 'black',
  },

  image2:{
    resizeMode: 'cover',
    marginTop: -10,
    opacity: 0.15
  },

  timeline: {
   
  
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#0F8AB8',
    marginTop: -60,
    width: 60,
    height: 60,
    borderRadius: 50,
  
  },

  Buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
    width: '90%',

  },

  button2: {
    alignItems: 'center', 
    alignContent: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50, 
    marginHorizontal: 50,
    top: 10,
  },

});

export default PlayerBar;


