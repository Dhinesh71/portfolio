const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    req.session.isAuthenticated = true;
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
});

router.get('/check', (req, res) => {
  if (req.session.isAuthenticated) {
    res.status(200).json({ message: 'Authenticated' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

module.exports = router;
