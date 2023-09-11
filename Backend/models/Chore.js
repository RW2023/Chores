const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    points: { type: Number, required: true },
    dueDate: Date,
    status: { type: String, enum: ['completed', 'pending', 'overdue'], default: 'pending' }
});

module.exports = mongoose.model('Chore', choreSchema);
