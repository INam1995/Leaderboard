const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboardModel'); 

router.get('/', async (req, res) => {
  try {
    console.log("Fetching leaderboard data...");
    const leaderboard = await Leaderboard.find().sort({ age: -1 });
    console.log("Data fetched:", leaderboard.length, "entries");

    const updatedLeaderboard = leaderboard.map((index) => {
      let badge = '';
      switch(index) {
        case 0: 
          badge = 'Gold';
          break;
        case 1:
          badge = 'Silver';
          break;
        case 2:
          badge = 'Bronze';
          break;
        default:
          badge = ''; // No badge for other ranks
      }
      return { ...team.toObject(), badge }; 
    });

    if (updatedLeaderboard.length === 0) {
      console.log("No data found!");
      res.status(404).json({ message: "No leaderboard data found." });
    } else {
      res.json(updatedLeaderboard);
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).send({ message: "Error fetching leaderboard data", error: error.toString() });
  }
});

module.exports = router;