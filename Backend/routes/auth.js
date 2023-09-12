const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

// Register
router.post('/register', async (req, res) => {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: savedUser._id }, jwtSecret, { expiresIn: '1h' });

    res.json({ token });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.json({ token });
});

module.exports = router;
