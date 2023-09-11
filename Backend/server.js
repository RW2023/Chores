// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB URI from .env
const MONGO_URI = process.env.MONGO_URI;


// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Test Route
app.get('/', (req, res) => {
    res.json({ message: 'The Server is Up Son!' });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
