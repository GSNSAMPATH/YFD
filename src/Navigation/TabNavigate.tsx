// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/Home';
import DetailsScreen from '../Screen/Details';
// import HomeImage from '../Imagecomonents/tabbar';
import { View } from 'react-native';
import PlayScreen from '../Screen/PlayScreen';
import { HomeIcone } from '../Imagecomonents/Playicon';



// Define the type for the tab navigator's parameters
export type RootTabParamList = {
  Home: undefined;
  Details: undefined;
};

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator<RootTabParamList>();

// TabNavigator component which contains all your tabs
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle : {backgroundColor: 'black'},}}  
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false ,           
      tabBarIcon: ({focused, color, size}) => {
            return (
              <View>
               <HomeIcone name="home" size={3} color="black" />
              </View>
            );
          }, }}/>
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Player" component={PlayScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;