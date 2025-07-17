const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Route de login vulnérable
router.post('/login', (req, res) => {
  const { username } = req.body;

  // ⚠️ Aucune vérification du mot de passe, vulnérabilité ici
  const token = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
