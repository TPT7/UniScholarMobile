import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './usercontext';
import styles from './styles';


const SignUpPage = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [programme, setProgramme] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.1.10:8081/signup', { username, password, programme });
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


export default SignUpPage;
