const mongoose = require('mongoose');

const kidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    chores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chore' }],
    rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }]
});

module.exports = mongoose.model('Kid', kidSchema);
