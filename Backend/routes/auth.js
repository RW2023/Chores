const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    // Your registration logic here
    // ...
    // Assume savedUser is the user object returned upon registration
    const token = jwt.sign({ id: savedUser._id }, jwtSecret);
    // Send token back to client
    res.json({ token });
});

// User Login
router.post('/login', async (req, res) => {
    // Your login logic here
    // ...
    // Assume savedUser is the user object returned upon login
    const token = jwt.sign({ id: savedUser._id }, jwtSecret);
    // Send token back to client
    res.json({ token });
});

module.exports = router;
