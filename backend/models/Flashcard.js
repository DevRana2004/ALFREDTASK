// const mongoose = require("mongoose");

// const flashcardSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   answer: { type: String, required: true },
//   box: { type: Number, default: 1 },
//   nextReviewDate: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Flashcard", flashcardSchema);

// models/Flashcard.js
const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  box: {
    type: Number,
    default: 1,  // Start in Box 1
  },
  nextReviewDate: {
    type: Date,
    default: Date.now,  // Set initial review date as current date
  },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
