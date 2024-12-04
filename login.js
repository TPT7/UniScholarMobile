import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './usercontext';
import styles from './styles';


const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:8081/login', { username, password });
      if (response.status === 200) {
        setUser(response.data.user);
        alert('Login successful');
        await AsyncStorage.setItem('username', username);
        navigation.navigate('Home');
      } else {
        alert('Login failed: ' + response);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.loginContainer}>
        <Text style={styles.sectionHeader}>Uni Scholar Login  Form</Text>
        <TextInput
          style={styles.loginInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Text onPress={() => navigation.navigate('SignUp')}>
          Create your account here
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;
