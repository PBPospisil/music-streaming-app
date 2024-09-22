// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreenProps, Track } from '../../types';

interface renderTrackItemProps {
    item: Track
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get('http://your-api-url.com/tracks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTracks(response.data.tracks);
    };
    fetchTracks();
  }, []);

  const renderItem = ({ item }: renderTrackItemProps) => (
    <TouchableOpacity onPress={() => navigation.navigate('Player', { track: item })}>
      <Text>{item.title} - {item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={tracks}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
