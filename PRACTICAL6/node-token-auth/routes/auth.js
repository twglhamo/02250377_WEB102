const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// In-memory user store
const users = [];

// POST /auth/register
router.post('/register', async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required.'
    });
  }

  // Check if user already exists
  const existingUser = users.find(
    u => u.email === email
  );

  if (existingUser) {
    return res.status(409).json({
      message: 'User already exists.'
    });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User registered successfully!'
  });

});

// POST /auth/login
router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required.'
    });
  }

  // Find user
  const user = users.find(
    u => u.email === email
  );

  if (!user) {
    return res.status(401).json({
      message: 'Invalid email or password.'
    });
  }

  // Compare password
  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    return res.status(401).json({
      message: 'Invalid email or password.'
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d'
    }
  );

  res.json({
    message: 'Login successful!',
    token
  });

});

router.get('/users', (req, res) => {

  const safeUsers = users.map(user => ({
    id: user.id,
    email: user.email
  }));

  res.json(safeUsers);

});

module.exports = router;