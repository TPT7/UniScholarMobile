import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


const HistoryPage = () => {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState({}); // State to store comments for each question
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the question(s) from the backend API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://192.168.1.10:8081/questions');
        setQuestions(response.data); // Assuming it returns an array of questions
        setLoading(false);
      } catch (err) {
        setError('Error fetching questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Handle comment submission
  const handleCommentSubmit = async (question_id) => {
    if (comment.trim()) {
      try {
        // Send the comment to the server along with the question ID and user ID
        const response = await axios.post('http://localhost:5000/comments', {
          question_id,
          comment,
        });

        // Clear the comment input after submission
        setComment('');

        // Update the comments state to display the new comment
        const newComment = response.data;
        setComments((prevComments) => ({
          ...prevComments,
          [question_id]: [...(prevComments[question_id] || []), newComment.comment],
        }));

        console.log('Comment submitted');
      } catch (err) {
        setError('Error submitting comment');
        console.error(err);
      }
    } else {
      alert('Comment cannot be empty');
    }
  };

  const renderQuestion = ({ item }) => (
    <View key={item.question_id} style={styles.section}>
      <Text style={styles.question}>Question: {item.question}</Text>

      {/* Display the submitted comments if they exist */}
      {comments[item.question_id] && (
        <View>
          <Text style={styles.answersHeader}>Answers:</Text>
          {comments[item.question_id].map((cmt, idx) => (
            <Text key={idx}>{cmt}</Text>
          ))}
        </View>
      )}

      {/* Comment form */}
      <TextInput
        style={styles.textInput}
        value={comment}
        onChangeText={setComment} // Update comment state
        placeholder="Write your answer..."
        multiline
        numberOfLines={4}
      />
      <View style={styles.buttons}>
        <Button
          title="Submit Answer"
          onPress={() => handleCommentSubmit(item.question_id)} // Submit comment for the specific question
        />
      </View>
    </View>
  );

  return (
    <View style={styles.content}>
      <View style={styles.section}>
        <Text style={styles.header}>Questions and Answers</Text>
        <Text>You can view all the questions posted and add your comments here.</Text>
      </View>
      <View style={styles.section}>
        {loading ? (
          <Text>Loading questions...</Text>
        ) : error ? (
          <Text>{error}</Text>
        ) : questions.length === 0 ? (
          <Text>No questions available.</Text>
        ) : (
          <FlatList
            data={questions}
            renderItem={renderQuestion}
            keyExtractor={(item) => item.question_id.toString()}
          />
        )}
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

  questionItem: {
    marginBottom: 20,
    padding: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  commentTextarea: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top', // Ensures text starts from the top in multiline input
    minHeight: 60, // Minimum height for TextInput
  },
  submitComment: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  commentsSection: {
    marginTop: 15,
  },
  comment: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  iconButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontSize: 24,
    color: 'black',
  },
},

});


export default HistoryPage;
