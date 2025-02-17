const Flashcard = require("../models/Flashcard");

// Add a new flashcard
exports.addFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newCard = new Flashcard({ question, answer });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: "Error adding flashcard" });
  }
};

// Get all flashcards
exports.getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: "Error fetching flashcards" });
  }
};

// Update flashcard level
exports.updateFlashcard = async (req, res) => {
  try {
    const { id } = req.params;
    const { correct } = req.body;
    const flashcard = await Flashcard.findById(id);

    if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

    if (correct) {
      // If correct, move to the next box
      flashcard.box += 1;
      flashcard.nextReviewDate = new Date(Date.now() + flashcard.box * 86400000);  // Adjust the review date
    } else {
      // If wrong, reset to Box 1
      flashcard.box = 1;
      flashcard.nextReviewDate = new Date();  // Reset the review date to today
    }

    await flashcard.save();
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: "Error updating flashcard" });
  }
};

// Delete flashcard
exports.deleteFlashcard = async (req, res) => {
  try {
    const { id } = req.params;
    await Flashcard.findByIdAndDelete(id);
    res.json({ message: "Flashcard deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting flashcard" });
  }
};
