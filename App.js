import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [showComments, setShowComments] = useState(false);

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
        />
        <View style={styles.buttonContainer}>
          <Button title='Send' onPress={() => console.log('Send Button clicked')} />
          <View style={styles.gap} />
          <Button title='Comments' onPress={toggleComments} />
        </View>
        {showComments && (
          <View style={styles.commentsBox}>
            <Text style={styles.subTitle}>Comments</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your comment here..."
            />
            <View style={styles.addButtonContainer}>
              <Button title='Add Comment' onPress={() => console.log('Add Comment clicked')} />
            </View>
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
    width: '80%', // Reduced width for proper alignment
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
    height: 50,  // Increased height
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
    width: '15%',
  },
});
