// HomeScreen.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Artist, fetchArtists } from '../Config/Api';


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
  const [error, setError] = useState<string | null>(null);

  
    useEffect(() => {
      fetchArtists()
        .then((result) => setArtists(result))
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


    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
      
    },
header: {
  fontSize: 20,
  fontWeight: 'bold',
  marginVertical: 16,
  fontFamily: 'Poppins-Bold',
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



  });

export default HomeScreen;


