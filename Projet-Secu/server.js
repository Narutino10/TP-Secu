require('dotenv').config();
const express = require('express');
const path = require('path');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fichiers statiques (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Routes backend
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Démarrage
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
