const express = require('express');
const Chore = require('../models/Chore');
const router = express.Router();

// Fetch all chores
router.get('/', async (req, res) => {
    try {
        const chores = await Chore.find();
        res.json(chores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new chore
router.post('/', async (req, res) => {
    const chore = new Chore({
        name: req.body.name,
        description: req.body.description,
        points: req.body.points
    });

    try {
        const newChore = await chore.save();
        res.status(201).json(newChore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Fetch a single chore by ID
router.get('/:id', getChore, (req, res) => {
    res.json(res.chore);
});

// Update a chore by ID
router.put('/:id', getChore, async (req, res) => {
    if (req.body.name != null) {
        res.chore.name = req.body.name;
    }
    if (req.body.description != null) {
        res.chore.description = req.body.description;
    }
    if (req.body.points != null) {
        res.chore.points = req.body.points;
    }
    try {
        const updatedChore = await res.chore.save();
        res.json(updatedChore);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a chore by ID
router.delete('/:id', getChore, async (req, res) => {
    try {
        await res.chore.remove();
        res.json({ message: 'Deleted Chore' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware for getChore
async function getChore(req, res, next) {
    let chore;
    try {
        chore = await Chore.findById(req.params.id);
        if (chore == null) {
            return res.status(404).json({ message: 'Cannot find chore' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.chore = chore;
    next();
}

module.exports = router;
