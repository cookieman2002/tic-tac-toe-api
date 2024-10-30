require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const gamesRoutes = require('./routes/games'); // Adjust path if needed

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Define routes
app.use('/api', gamesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
