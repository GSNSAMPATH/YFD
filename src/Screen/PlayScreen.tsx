
import { Animated, Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAudioPlayer } from "../components/AudioPlayerProvider";
import Timeline from "../components/Timeline";
import { Icon, List } from "react-native-paper";
import { BackArrowIcon, BackwerdIcon, FowerdIcon, ListIcon, PlayIcon, PlusIcon } from "../Imagecomonents/Playicon";
import React from "react";
import CurrentSongImage from "../components/CurrentSongImage";
import { useNavigation } from "@react-navigation/native";


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
        <TouchableOpacity style={styles.button2} onPress={previousSong}>
     <BackwerdIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={nextSong}>
       <FowerdIcon />
      </TouchableOpacity>
      </View>

     
      </View>
      <View style={{marginTop: '5%', marginBottom: '15%'}}>
      <Timeline/>
      </View>  
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // backgroundColor: '#000',
    // width: '100%',
    // height: '100%',
    // borderBlockColor: 'red',
  },

  Iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
   
    
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
    marginTop: '10%',
    
    
   
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
    backgroundColor: 'black',
  },

  image2:{
    resizeMode: 'cover',
    marginTop: -10,
    opacity: 0.1
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


