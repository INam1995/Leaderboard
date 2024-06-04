const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: String,
  email: String,
  age:Number
}) 

const Leaderboard = mongoose.model('users', leaderboardSchema);
module.exports = Leaderboard;