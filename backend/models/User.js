const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Hash password before saving the user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Skip if password hasn't changed
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash password
    next(); // Proceed to save the user
  } catch (error) {
    next(error); // Pass error to the next middleware
  }
});

// Create the User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
