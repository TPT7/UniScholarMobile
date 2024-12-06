import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import styles from './styles';

const HistoryPage = () => {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState({}); 
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBanner, setShowBanner] = useState(false); // State for comment sent banner

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:8082/questions');
        console.log(response.data);  // Debugging line to check the structure of response
        setQuestions(response.data); 
        setLoading(false);
      } catch (err) {
        setError('Error fetching questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleCommentSubmit = async (question_id) => {
    if (comment.trim()) {
      try {
        const response = await axios.post('http://192.168.1.4:8082/comments', {//ipv4 address of local machine
          question_id,
          comment,
        });

        setComment(''); // Clear the comment input field

        const newComment = response.data;
        setComments((prevComments) => ({
          ...prevComments,
          [question_id]: [...(prevComments[question_id] || []), newComment.comment],
        }));

        console.log('Comment submitted');

        // Show success banner
        setShowBanner(true);

        // Hide the banner after 3 seconds
        setTimeout(() => {
          setShowBanner(false);
        }, 3000);

      } catch (err) {
        setError('Error submitting comment');
        console.error(err);
      }
    } else {
      console.log('Comment cannot be empty');
    }
  };

  const renderQuestion = ({ item, index }) => (
    <View key={`${item.question_id}-${index}`} style={styles.section}>
      <Text style={styles.sectionHeader}>Question: {item.question}</Text>
  
      {comments[item.question_id] && (
        <View>
          <Text style={styles.answersHeader}>Answers:</Text>
          {comments[item.question_id].map((cmt, idx) => (
            <Text key={idx}>{cmt}</Text>
          ))}
        </View>
      )}
  
      <TextInput
        style={styles.questionItem}
        value={comment}
        onChangeText={setComment}
        placeholder="Write your answer..."
        multiline
        numberOfLines={4}
      />
      <View style={styles.buttons}>
        <Button
          title="Submit Answer"
          onPress={() => handleCommentSubmit(item.question_id)}
        />
      </View>
    </View>
  );
  
  return (
    <View style={styles.content}>
      {/* Display banner if comment is sent */}
      {showBanner && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Comment sent successfully</Text>
        </View>
      )}

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
            keyExtractor={(item, index) => `${item.question_id}-${index}`}  // Combine `question_id` and `index`
          />
        )}
      </View>
    </View>
  );
};

export default HistoryPage;
