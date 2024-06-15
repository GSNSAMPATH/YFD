// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Navigation/TabNavigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Artists from './src/Screen/Artist';
import { AudioPlayerProvider } from './src/components/AudioPlayerProvider';
import AlbumScreen from './src/Screen/AlbumScreen';
import ArtistScreen from './src/Screen/Artist';
import Timeline from './src/components/Timeline';
import SearchScreen from './src/Screen/searchscreen';

const stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <AudioPlayerProvider  playlist={[]}>
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Tab" component={TabNavigator}/>
        <stack.Screen name="Artist" component={ArtistScreen}/>
        <stack.Screen name="Album" component={AlbumScreen}/>
        <stack.Screen name="Search" component={SearchScreen}/>

     
        
      </stack.Navigator> 
    

 

 
    </NavigationContainer>
    </AudioPlayerProvider>
  );
};

export default App;


