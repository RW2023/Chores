const mongoose = require('mongoose');

const kidSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    schoolLevel: { type: String }, // Optional field for school level
    chores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chore' }],
    rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
    gender: { type: String,}

});


module.exports = mongoose.model('Kid', kidSchema);
