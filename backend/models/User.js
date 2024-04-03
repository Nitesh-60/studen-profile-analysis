const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any other user fields as needed
});

// Create and export the User model
export const User = mongoose.model('User', userSchema);