import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import UserContext from './usercontext';
import styles from './styles';

const LoginPage = () => {
  const { setUser } = useContext(UserContext); // Get the setUser function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:8082/login', { username, password });
      
      if (response.status === 200) {
        // Assuming response.data.user contains the user details
        const user = response.data.user;
  
        if (user) {
          // Save the user details in context
          setUser(user);
          alert('Login successful');
          navigation.navigate('Home');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed due to an error.');
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
        <View style={styles.buttons}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}>Create your account here</Text>
      </View>
    </View>
  );
};

export default LoginPage;
