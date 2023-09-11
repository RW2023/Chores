const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    kids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Kid' }]
});

module.exports = mongoose.model('User', userSchema);
