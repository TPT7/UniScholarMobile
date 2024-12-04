import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './usercontext';
import styles from './styles';

const LoginPage = () => {
  const { setUser } = useContext(UserContext); // Get the setUser function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Send login request to backend
      const response = await axios.post('http://192.168.1.4:8081/login', { username, password });

      if (response.status === 200 && response.data.user) {
        // Assuming response contains a 'user' object with user info and a token
        const userData = response.data.user; // Structure based on what the backend returns
        setUser(userData); // Update context state

        // Store the user and token in AsyncStorage for persistence
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('userToken', userData.token); // Store token or other user data

        alert('Login successful');
        navigation.navigate('Home');
      } else {
        // Handle unsuccessful login
        alert('Login failed: Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.loginContainer}>
        <Text style={styles.sectionHeader}>Uni Scholar Login Form</Text>

        <TextInput
          style={styles.loginInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Text onPress={() => navigation.navigate('SignUp')}>Create your account here</Text>
      </View>
    </View>
  );
};

export default LoginPage;
