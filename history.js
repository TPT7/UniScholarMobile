import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList} from 'react-native';
import axios from 'axios';
import styles from './styles';


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
        const response = await axios.get('http://192.168.1.6:8081/questions');
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
        const response = await axios.post('http://192.168.1.4:8081/comments', {
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
        <Text style={styles.sectionHeader}>Questions and Answers</Text>
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

export default HistoryPage;
