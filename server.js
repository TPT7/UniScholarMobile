const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'unischolarmobile',
    password: 'admin',
    port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

app.post('/questions', async (req, res) => {
    const { question } = req.body;

    try {
        await pool.query('INSERT INTO questions (question) VALUES ($1)', [question]);
        res.json({ success: true });
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.get('/questions', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM questions');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.post('/comments', async (req, res) => {
    const { comment } = req.body;

    try {
        await pool.query('INSERT INTO comments (comment) VALUES ($1)', [comment]);
        res.json({ success: true });
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.get('/comments', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM comments');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
