const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leaderboardRoutes = require('./routes/leaderboardRoutes'); 

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/leaderboard')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors()); 
app.use(express.json()); 
app.use('/api/leaderboard', leaderboardRoutes); // Leaderboard routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
