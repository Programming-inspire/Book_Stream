const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to add a test user
router.post('/add', async (req, res) => {
  try {
    const { username,email, password } = req.body;
    const newUser = new User({ username,email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});


// Route to login a user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,  // Secret key from .env
        { expiresIn: '1h' }  // Token expires in 1 hour
      );

      // Login successful
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });



  router.get('/me', verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.userId).select('-password');  // Exclude password
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });


  // Logout route (Optional)
router.post('/logout', verifyToken, (req, res) => {
    // You can implement additional logic here if you maintain a blacklist.
    res.status(200).json({ message: 'Logout successful' });
  });


module.exports = router;
