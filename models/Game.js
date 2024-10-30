// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    winner: String,
    loser: String,
    tie: Boolean,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
