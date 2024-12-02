import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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
          const response = await axios.get('http://localhost:5000/api/users');
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

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute', // Use 'absolute' for a fixed position effect
      height: '100%',
      width: 120,
      backgroundColor: 'black',
      shadowColor: 'rgba(0, 0, 0, 0.1)', // Use shadowColor, shadowOffset, shadowOpacity, and shadowRadius for shadow
      shadowOffset: { width: 2, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      padding: 20,
    },
    navLinks: {
      flexDirection: 'column',
    },
    navLink: {
      textDecorationLine: 'none', // Use 'textDecorationLine' instead of 'text-decoration'
      color: 'white',
      paddingVertical: 10,
      paddingHorizontal: 0,
      marginVertical: 5,
      fontSize: 16,
    },
    navLinkHover: {
      backgroundColor: '#0056b3',
      borderRadius: 4,
      transform: [{ translateY: -5 }],
    },  
});

export default Navbar;
