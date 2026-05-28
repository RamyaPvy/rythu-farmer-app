const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Rythu Backend Server is Running! 🌾',
    timestamp: new Date()
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 Test it: http://localhost:${PORT}/api/health`);
});