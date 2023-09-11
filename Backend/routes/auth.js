const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    // Your registration logic here
});

// User Login
router.post('/login', async (req, res) => {
    // Your login logic here
});

module.exports = router;
