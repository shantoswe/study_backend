const mongoose = require('mongoose');

// Define the schema
const barronsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  value: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set the current date
  }
});

// Create the model
const Barrons = mongoose.model('Barrons', barronsSchema);

// Export the model
module.exports = Barrons;
