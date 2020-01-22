const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Subscriber', subscriberSchema);