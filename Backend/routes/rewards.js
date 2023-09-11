const express = require('express');
const Reward = require('../models/Reward');
const router = express.Router();

/**
 * @route GET /
 * @description Fetch all rewards
 */
router.get('/', async (req, res) => {
    try {
        const rewards = await Reward.find();
        res.json(rewards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @route POST /
 * @description Create a new reward
 */
router.post('/', async (req, res) => {
    try {
        const newReward = new Reward(req.body);
        const savedReward = await newReward.save();
        res.status(201).json(savedReward);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @route GET /:id
 * @description Fetch a single reward by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const reward = await Reward.findById(req.params.id);
        if (!reward) return res.status(404).json({ message: 'Reward not found' });
        res.json(reward);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @route PUT /:id
 * @description Update a reward by ID
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedReward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReward) return res.status(404).json({ message: 'Reward not found' });
        res.json(updatedReward);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @route DELETE /:id
 * @description Delete a reward by ID
 */
router.delete('/:id', async (req, res) => {
    try {
        const deletedReward = await Reward.findByIdAndDelete(req.params.id);
        if (!deletedReward) return res.status(404).json({ message: 'Reward not found' });
        res.json({ message: 'Reward deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
