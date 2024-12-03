import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomePage = () => {
  const [question, setQuestion] = useState('');

  const handleQuestion = async () => {
    try {
      // Retrieve user_id from AsyncStorage (assuming it's stored there after login)
      const userId = await AsyncStorage.getItem('user_id'); // Get user_id from AsyncStorage

      // Check if userId exists in AsyncStorage
      if (!userId) {
        console.error('User not logged in!');
        return;
      }

      // Prepare the question data with user_id
      const questionData = {
        question,
        user_id: userId, // Attach the user_id from AsyncStorage
      };

      console.log('Sending question:', questionData);
      
      // Send the question along with the user_id to the backend
      const response = await axios.post('http://192.168.1.10:8081/questions', questionData);
      setQuestion(''); // Clear the question input
      console.log('Question saved, ID:', response.data.id);
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
      <View style={styles.section}>
        <Text style={styles.header}>Welcome to Uni Scholar</Text>
        <Text>This platform allows students to ask questions and share answers. Feel free to explore and contribute to the community.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Ask a Question</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder="Type your question here..."
          value={question}
          onChangeText={setQuestion}
        />
        <View style={styles.buttons}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  content: {
    marginLeft: 170, // Adjust left margin to accommodate the smaller sidebar
    padding: 20,
  },
  section: {
    width: '100%',
    maxWidth: 800,
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow effect
  },
  sectionHeader: {
    marginBottom: 10,
    color: 'black',
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10, // Adjust gap between buttons
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ced4da',
    borderWidth: 1,
    textAlignVertical: 'top', // For text alignment in multiline text input
    minHeight: 60, // Minimum height for TextInput
  },
  commentSection: {
    marginTop: 20,
    display: 'none', // Display property is not applicable in React Native
  },
  commentSectionHeader: {
    marginBottom: 10,
    color: 'black',
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold',
  },
  comment: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  iconButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontSize: 24, // Adjust font size as needed
    color: 'black',
  },
});

export default HomePage;
