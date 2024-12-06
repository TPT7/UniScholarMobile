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
  const [showBanner, setShowBanner] = useState(false); // State to manage banner visibility
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:8082/login', { username, password });//ipv4 address of local machine
      
      if (response.status === 200) {
        const user = response.data.user;
  
        if (user) {
          // Save the user details in context
          setUser(user);
          console.log('Login successful');
          
          // Show success banner
          setShowBanner(true);

          // Hide banner after 3 seconds
          setTimeout(() => {
            setShowBanner(false);
            navigation.navigate('Home');
          }, 3000);
        } else {
          console.log('Login failed. Please check your credentials.');
        }
      } else {
        console.log('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      console.log('Login failed due to an error.');
    }
  };

  return (
    <View style={styles.content}>
      {/* Display banner if login is successful */}
      {showBanner && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Logged in successfully</Text>
        </View>
      )}

      <View style={styles.loginContainer}>
        <Text style={styles.sectionHeader}>Login</Text>

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
