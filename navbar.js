import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [user_id, setUserid] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedUserId = await AsyncStorage.getItem('user_id');

        if (storedUsername && storedUserId) {
          setUsername(storedUsername);
          setUserid(parseInt(storedUserId)); // Parse user_id as integer
        } else {
          const response = await axios.get('http://192.168.1.10:8081/users');
          if (response.data.length > 0) {
            setUsername(response.data[0].username);
            setUserid(response.data[0].user_id);

            await AsyncStorage.setItem('username', response.data[0].username);
            await AsyncStorage.setItem('user_id', response.data[0].user_id.toString());
          }
        }
      } catch (err) {
        console.log('Error fetching users');
      }
    };

    getUserData();
  }, []);

  return (
    <View style={styles.navbar}>
      <View style={styles.navLinks}>
        {username ? (
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Welcome {username}</Text>
        ) : (
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Welcome</Text>
        )}
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Questions" onPress={() => navigation.navigate('History')} />
        <Button title="Users" onPress={() => navigation.navigate('Users')} />
      </View>
    </View>
  );
};

export default Navbar;
