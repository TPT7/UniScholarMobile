import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './usercontext';


const SignUpPage = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [programme, setProgramme] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { username, password, programme });
      if (response.status === 201) {
        setUser(response.data.user);
        alert('Account created successfully');
        await AsyncStorage.setItem('username', username);
        navigation.navigate('Login');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uni Scholar Sign Up Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Programme"
        value={programme}
        onChangeText={setProgramme}
      />
      <Button title="Signup" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Login with your credentials
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    margin: 0,
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // This is necessary for shadow on Android
    width: 300,
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
});

export default SignUpPage;
