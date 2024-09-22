import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { PlayerScreenProps } from '../../types';

const PlayerScreen = ({ route }: PlayerScreenProps) => {
  const { track } = route.params;

  useEffect(() => {
    const playTrack = async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: track.id,
        url: track.url,  // The audio stream URL
        title: track.title,
        artist: track.artist,
        artwork: track.artwork,  // Optional album artwork
      });
      TrackPlayer.play();
    };
    playTrack();
  }, [track]);

  return (
    <View style={{ padding: 20 }}>
      <Text>{track.title}</Text>
      <Text>{track.artist}</Text>
      <Button title="Pause" onPress={() => TrackPlayer.pause()} />
      <Button title="Play" onPress={() => TrackPlayer.play()} />
    </View>
  );
};

export default PlayerScreen;
