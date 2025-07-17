const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth'); // ✅ Middleware sécurisé

router.get('/', verifyToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Accès interdit' });
  }

  res.json({ message: `✅ Accès autorisé. Bonjour, ${req.user.username}` });
});

module.exports = router;
