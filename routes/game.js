// routes/games.js
const express = require('express');
const router = express.Router();
const Game = require('../models/Game'); // Adjust path if needed

// POST route to save game result
router.post('/games', async (req, res) => {
    try {
        const { winner, loser, tie } = req.body;
        const newGame = new Game({ winner, loser, tie });
        await newGame.save();
        res.status(201).json({ message: 'Game result saved!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save game result' });
    }
});

// GET route to fetch last 10 game results
router.get('/games', async (req, res) => {
    try {
        const games = await Game.find().sort({ date: -1 }).limit(10);
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve game results' });
    }
});

module.exports = router;
