import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginScreenProps } from '../../types';

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-api-url.com/login', {
        email,
        password
      });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
