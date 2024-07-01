// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/Home';
import DetailsScreen from '../Screen/Details';
// import HomeImage from '../Imagecomonents/tabbar';
import { StyleSheet, View } from 'react-native';
import PlayScreen from '../Screen/PlayScreen';
import { HomeIcon2, HomeIcone, PlayerIcon, PlayerIcon2, UserMusicIcon, UserMusicIcon2 } from '../Imagecomonents/tabbar';
import { Colors } from 'react-native/Libraries/NewAppScreen';






// Define the type for the tab navigator's parameters
export type RootTabParamList = {
  Home: undefined;
  Details: undefined;
  Player: undefined;
};

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator<RootTabParamList>();

// TabNavigator component which contains all your tabs
const TabNavigator: React.FC = () => {
  return (    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#000',
        borderColor: '#000',
      },
      tabBarIcon: ({focused}) => {
        let iconSource;
        if (route.name === 'Home') {
          iconSource = focused ? <HomeIcon2/> : <HomeIcone/>;
        }
        if (route.name === 'Player') {
          
          iconSource = focused ? <PlayerIcon2/> : <PlayerIcon/>;
        }
        if (route.name === 'Details') {
          iconSource = focused ? <UserMusicIcon2/> : <UserMusicIcon/>;
        }

        return iconSource;
      },
    })}
  >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Player" component={PlayScreen}/>
      <Tab.Screen name="Details" component={DetailsScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});