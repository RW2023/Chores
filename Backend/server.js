const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');  // Assuming you're using CORS middleware

// Import routes
const choreRoutes = require('./routes/chores');
const kidRoutes = require('./routes/kids');
const rewardRoutes = require('./routes/rewards');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());  // Enable CORS if you're using it

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

// Use imported routes
app.use('/api/chores', choreRoutes);
app.use('/api/kids', kidRoutes);
app.use('/api/rewards', rewardRoutes);

// Test Route
app.get('/', (req, res) => {
    res.json({ message: 'The Server is Up Son!' });
});

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
