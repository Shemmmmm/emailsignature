// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
// Username
// derekwhittlle
// Password
// avDmRb21xnp1HZ4B
