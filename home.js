import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const HomePage = () => {
  const [question, setQuestion] = useState('');
  const [showBanner, setShowBanner] = useState(false); // State for banner visibility

  const handleQuestion = async () => {
    try {
      const userId = await AsyncStorage.getItem('user_id'); 

      if (!userId) {
        console.error('User not logged in!');
        return;
      }

      const questionData = {
        question,
        user_id: userId, 
      };

      console.log('Sending question:', questionData);

      const response = await axios.post('http://192.168.1.4:8082/questions', questionData);//ipv4 address of local machine
      setQuestion(''); 
      console.log('Question saved, ID:', response.data.id);

      // Show success banner after question is sent
      setShowBanner(true);

      // Hide the banner after 3 seconds
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving question:', error);
    }
  };

  const handleSubmit = async () => {
    if (question) {
      await handleQuestion();
    }
  };

  return (
    <View style={styles.content}>
      {/* Display banner if question is sent */}
      {showBanner && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Question sent successfully</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Welcome to Uni Scholar</Text>
        <Text>This platform allows students to ask questions and share answers. Feel free to explore and contribute to the community.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Ask a Question</Text>
        <TextInput
          style={styles.questionItem}
          multiline
          numberOfLines={4}
          placeholder="Type your question here..."
          value={question}
          onChangeText={setQuestion}
        />
        <View style={styles.buttons}>
          <Button style={styles.buttonText} title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
