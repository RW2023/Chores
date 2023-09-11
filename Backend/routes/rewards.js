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
    const reward = new Reward({
        name: req.body.name,
        description: req.body.description,
        points: req.body.points
    });

    try {
        const newReward = await reward.save();
        res.status(201).json(newReward);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @route GET /:id
 * @description Fetch a single reward by ID
 */
router.get('/:id', getReward, (req, res) => {
    res.json(res.reward);
});

/**
 * @route PUT /:id
 * @description Update a reward by ID
 */
router.put('/:id', getReward, async (req, res) => {
    if (req.body.name != null) {
        res.reward.name = req.body.name;
    }
    if (req.body.description != null) {
        res.reward.description = req.body.description;
    }
    if (req.body.points != null) {
        res.reward.points = req.body.points;
    }
    try {
        const updatedReward = await res.reward.save();
        res.json(updatedReward);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @route DELETE /:id
 * @description Delete a reward by ID
 */
router.delete('/:id', getReward, async (req, res) => {
    try {
        await res.reward.remove();
        res.json({ message: 'Deleted Reward' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @middleware getReward
 * @description Middleware to fetch a single reward by ID
 */
async function getReward(req, res, next) {
    let reward;
    try {
        reward = await Reward.findById(req.params.id);
        if (reward == null) {
            return res.status(404).json({ message: 'Cannot find reward' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.reward = reward;
    next();
}

module.exports = router;
