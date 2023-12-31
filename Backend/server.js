const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');


// Import routes
const authRoutes = require('./routes/auth');
const choreRoutes = require('./routes/chores');
const kidRoutes = require('./routes/kids');
const rewardRoutes = require('./routes/rewards');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// MongoDB URI from .env
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connecting to MongoDB...'.green);
        console.log(`The Data flows...`.green);
        console.log('Successfully connected to MongoDB'.green);
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Use imported routes
app.use('/api/auth', authRoutes);
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
    console.log(`Chores App Backend. Version ${process.env.npm_package_version}`.yellow)
    console.log(`Author:  ${process.env.CR}`.bgBlack.white);
    console.log(`Server is running on port ${PORT}`.green);
});
