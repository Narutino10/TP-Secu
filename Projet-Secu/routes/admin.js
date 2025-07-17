const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware vulnérable (pas encore dans un fichier séparé)
function fakeVerifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.decode(token); // ⚠️ decode au lieu de verify → vulnérable !
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ error: 'Token invalide' });
  }
}

// Route protégée
router.get('/', fakeVerifyToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Accès interdit' });
  }

  res.json({ message: `Bienvenue, ${req.user.username}. Accès admin autorisé.` });
});

module.exports = router;
