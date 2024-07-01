import { View, Text, StyleSheet } from "react-native";
import { useAudioPlayer } from "./AudioPlayerProvider";
import Slider from "@react-native-community/slider";

const Timeline: React.FC = () => {
    const { currentPosition, duration, seek } = useAudioPlayer();
  
    return (
      <View style={{ margin: 20 }}>
        <Slider
          value={currentPosition}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={seek}
          minimumTrackTintColor="#0F8AB8"
          maximumTrackTintColor="white"
          thumbTintColor='white'
        
          step={1}
          style={styles.timeline}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white' }}>{`${Math.floor(currentPosition / 60)}:${Math.floor(currentPosition % 60).toString().padStart(2, '0')}`} </Text>
          <Text style={{ color: 'white' }}> {`${Math.floor(duration / 60)}:${Math.floor(duration % 60).toString().padStart(2, '0')}`}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
     timeline: {
      width: '100%',
      height: 2,
      backgroundColor: '#000',
      color: '#fff',
      marginVertical: 20,
   
    },
  });

  export default Timeline