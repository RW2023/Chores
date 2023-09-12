const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

const router = express.Router();

// User Registration
router.post(
    '/register',
    [
        // Validate input
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),
        body('username').notEmpty() // <-- Add this line to validate username
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Destructure request
        const { email, password, username } = req.body;  // <-- Add username here

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password and save user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
            username  // <-- Add this line
        });
        const savedUser = await user.save();

        // Create JWT token
        const jwtSecret = process.env.JWT_SECRET;
        const token = jwt.sign({ id: savedUser._id }, jwtSecret, {
            expiresIn: '1h'
        });

        res.json({ token });
    }
);

module.exports = router;
