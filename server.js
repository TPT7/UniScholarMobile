const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 8082;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'unischolarmobile',
  password: 'admin',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// User login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      res.status(200).json({ user: result.rows[0], message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Server error');
  }
});


app.post('/signup', async (req, res) => {
  const { username, password, programme } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (username, password, programme) VALUES ($1, $2, $3) RETURNING *', [username, password, programme]);
    res.status(201).json({ user: result.rows[0], message: 'Acoount created successful' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).send('Server error');
  }
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT user_id, programme, username FROM users');
    res.json(result.rows); // Send users data as response
  } catch (err) {
    console.error('Database query error:', err); // More specific error message
    res.status(500).send('Error fetching users');
  }
});


//Save question endpoint
app.post('/questions', async (req, res) => {
  const { question, user_id } = req.body;

  try {
    // Ensure user_id is provided
    if (!user_id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Log the received question and user_id for debugging
    console.log('Received question:', { question, user_id });

    // Insert the question along with user_id into the database
    const result = await pool.query(
      'INSERT INTO questions (question, user_id) VALUES ($1, $2) RETURNING question_id',
      [question, user_id]
    );

    // Log the saved question ID for debugging
    console.log('Question saved, ID:', result.rows[0].question_id);

    // Return the question_id as part of the response
    res.status(201).json({ id: result.rows[0].question_id });
  } catch (error) {
    // Log any errors for debugging
    console.error('Error inserting question:', error);

    // Return a server error status if something goes wrong
    res.status(500).send('Server error');
  }
});



app.post('/comments', async (req, res) => {
  const { question_id,comment } = req.body;

  // Validate the input
  if (!question_id || !comment) {
    return res.status(400).json({ error: 'question_id and comment are required' });
  }

  try {
    // Insert the comment into the database and get the newly created comment
    const result = await pool.query(
      'INSERT INTO comments (question_id, comment) VALUES ($1, $2) RETURNING question_id, comment, date',
      [question_id, comment] // Inserting the question_id, user_id, and comment
    );

    const newComment = result.rows[0]; // Extract the newly inserted comment

    console.log('Comment saved:', newComment);
    // Send back the new comment
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error inserting comment:', error);
    res.status(500).json({ error: 'Error saving comment' });
  }
});



// Fetch questions and comments for a specific user
app.get('/questions', async (req, res) => {
  try {
    // Query to select all questions
    const result = await pool.query('SELECT * FROM questions');
    res.status(200).json(result.rows); // Return all questions in the response
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Server error');
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});