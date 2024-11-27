import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

export default function App() {
  const [showComments, setShowComments] = useState(false);
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchQuestions();
    fetchComments();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const sendQuestion = async () => {
    try {
      const response = await axios.post('http://localhost:3000/questions', { question });
      if (response.data.success) {
        fetchQuestions();
        setQuestion('');
      } else {
        alert('Failed to send question.');
      }
    } catch (error) {
      console.error('Error sending question:', error);
    }
  };

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:3000/comments', { comment });
      if (response.data.success) {
        fetchComments();
        setComment('');
      } else {
        alert('Failed to add comment.');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navItems}>
          <TouchableOpacity onPress={() => console.log('Home clicked')}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('History clicked')}>
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://example.com/profile.png' }} // Replace with your profile image URL
          style={styles.profileIcon}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Welcome to Uni Scholar</Text>
        <Text style={styles.description}>This platform allows students to ask questions and share answers. Feel free to explore and contribute to the community.</Text>
        <Text style={styles.subTitle}>Questions</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your question here..."
          value={question}
          onChangeText={setQuestion}
        />
        <View style={styles.buttonContainer}>
          <Button title='Send' onPress={sendQuestion} />
          <View style={styles.gap} />
          <Button title='Comments' onPress={toggleComments} />
        </View>
        <FlatList
          data={questions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.questionItem}>
              <Text>{item.question}</Text>
            </View>
          )}
        />
        {showComments && (
          <View style={styles.commentsBox}>
            <Text style={styles.subTitle}>Comments</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your comment here..."
              value={comment}
              onChangeText={setComment}
            />
            <View style={styles.addButtonContainer}>
              <Button title='Add Comment' onPress={addComment} />
            </View>
            <FlatList
              data={comments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.commentItem}>
                  <Text>{item.comment}</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333333',
    width: '100%',
  },
  navItems: {
    flexDirection: 'row',
  },
  navText: {
    color: '#fff',
    marginRight: 20,
    fontSize: 18,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  gap: {
    width: 10,
  },
  commentsBox: {
    marginTop: 20,
    width: '100%',
  },
  addButtonContainer: {
    marginTop: 10,
    width: '100%',
  },
});
