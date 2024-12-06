import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
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
  const [showBanner, setShowBanner] = useState(false); // State for the banner visibility
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:8082/signup', { username, password, programme });//ipv4 address of local machine
      if (response.status === 201) {
        setUser(response.data.user);
        console.log('Account created successfully');
        await AsyncStorage.setItem('username', username);
        setShowBanner(true); // Show the banner on successful signup
        setTimeout(() => {
          setShowBanner(false); // Hide the banner after 3 seconds
          navigation.navigate('Login');
        }, 3000);
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      console.log('Signup failed');
    }
  };

  return (
    <View style={styles.content}>
      {showBanner && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Account created successfully</Text>
        </View>
      )}

      <View style={styles.loginContainer}>
        <Text style={styles.sectionHeader}>Sign Up</Text>
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
        <TextInput
          style={styles.loginInput}
          placeholder="Programme"
          value={programme}
          onChangeText={setProgramme}
        />

        <View style={styles.buttons}>
          <Button style={styles.buttonText} title="Signup" onPress={handleSignup} />
        </View>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}>
          Login with your credentials
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;
