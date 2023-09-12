const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const jwtSecret = process.env.JWT_SECRET;

// Register
router.post(
    '/register',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password, username } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
            username,
        });

        const savedUser = await user.save();
        const token = jwt.sign({ id: savedUser._id }, jwtSecret, {
            expiresIn: 3600, // 1 hour
        });

        res.json({ token });
    }
);

// Login
router.post(
    '/login',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Invalid password').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, jwtSecret, {
            expiresIn: 3600, // 1 hour
        });

        res.json({ token });
    }
);

module.exports = router;
