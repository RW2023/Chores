// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import routes
const choresRoutes = require('./routes/chores');
const kidsRoutes = require('./routes/kids');
const rewardsRoutes = require('./routes/rewards');

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

// Use imported routes as middleware
app.use('/api/chores', choresRoutes);
app.use('/api/kids', kidsRoutes);
app.use('/api/rewards', rewardsRoutes);

// Test Route
app.get('/', (req, res) => {
    res.json({ message: 'The Server is Up Son!' });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
