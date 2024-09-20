// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const barrons = require('./routes/barrons')
const cors = require('cors');
// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
app.use(cors());
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// routes
app.use('/api/barrons',barrons);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
