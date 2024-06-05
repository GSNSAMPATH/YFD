// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Navigation/TabNavigate';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Artists from './src/Screen/Artist';

const stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Tab" component={TabNavigator}/>
        <stack.Screen name="Artist" component={Artists}/>

     
        
      </stack.Navigator> 
     

 

 
    </NavigationContainer>
  );
};

export default App;


