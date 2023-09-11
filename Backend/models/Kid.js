const mongoose = require('mongoose');

const kidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    chores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chore' }],
    rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
    gender: { // <-- Add this new field
        type: String,
        required: true,  // make it required if you want
        enum: ['male', 'female', 'other']  // if you want to restrict the values
    },
});

module.exports = mongoose.model('Kid', kidSchema);
