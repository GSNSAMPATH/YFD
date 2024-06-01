import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

interface AudioPlayerState {
  isPlaying: boolean;
  sound: Sound | null;
  currentTime: number;
  duration: number;
}

export default class AudioPlayer extends Component<{}, AudioPlayerState> {
  private interval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      isPlaying: false,
      sound: null,
      currentTime: 0,
      duration: 0,
    };
  }

  componentDidMount() {
    Sound.setCategory('Playback', true);
    const sound = new Sound(
      'https://song.sgp1.digitaloceanspaces.com/song/212d32fd-43b4-44c1-85e5-8af93d70a9e1.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        this.setState({ duration: sound.getDuration() });
      }
    );
    this.setState({ sound });
    this.interval = setInterval(() => {
      if (this.state.isPlaying && this.state.sound) {
        this.state.sound.getCurrentTime((seconds) => {
          this.setState({ currentTime: seconds });
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.state.sound) {
      this.state.sound.release();
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  playSound = () => {
    if (this.state.sound) {
      this.state.sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
      this.setState({ isPlaying: true });
    }
  };

  pauseSound = () => {
    if (this.state.sound) {
      this.state.sound.pause();
      this.setState({ isPlaying: false });
    }
  };

  onSliderChange = (value: number) => {
    if (this.state.sound) {
      this.state.sound.setCurrentTime(value);
      this.setState({ currentTime: value });
    }
  };

  formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  render() {
    return (
        <><ImageBackground
            source={{ uri: 'https://drive.google.com/uc?id=11Z_5ppef_WW7tcwuSdnZ32b0JTTOfP6h' }} // (uri: 'https://song.sgp1.digitaloceanspaces.com/image/8f9e35c1-50f4-4b69-9178-a07ad7e6b4e2.webp')}
            style={styleSheet.container2}
            imageStyle={styleSheet.image2} >
            <View style={styleSheet.container}>
                <Text style={styleSheet.title}>Audio Player</Text>
                <View>
                <Image source={{ uri: 'https://drive.google.com/uc?id=11Z_5ppef_WW7tcwuSdnZ32b0JTTOfP6h' }} style={styleSheet.image} />
                </View>
                <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={this.state.duration}
                    value={this.state.currentTime}
                    onValueChange={this.onSliderChange}
                    minimumTrackTintColor="#5F84F3"
                    maximumTrackTintColor="#ACAFB8"
                    thumbTintColor="#5F84F3" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', padding: 10 }}>
                    <Text>{this.formatTime(this.state.currentTime)}</Text>
                    <Text> {this.formatTime(this.state.duration)}</Text>

                </View>

                <Button title={this.state.isPlaying ? 'Pause' : 'Play'} onPress={this.state.isPlaying ? this.pauseSound : this.playSound} />
            </View>
            </ImageBackground>

        </>
    );
  }
}
  


const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 30
  },

  image: {
    resizeMode: 'cover',
  
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: 220,
    height: 220,
    borderRadius: 120,
    opacity: 0.8,
    margin: 50
    
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: 0.8


  },
  image2: {
    resizeMode: 'cover',
    marginTop: -10,
    
  }


})