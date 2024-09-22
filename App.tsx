import React, { useEffect } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import PlayerScreen from './src/pages/PlayerScreen';
import TrackPlayer from 'react-native-track-player';
import { RootStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

useEffect(() => {
  TrackPlayer.setupPlayer().then(() => {
    console.log('Track player initialized');
  });
}, []);

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Player' component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
