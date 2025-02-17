const express = require("express");
const router = express.Router();
const {
    addFlashcard,
    getFlashcards,
    updateFlashcard,
    deleteFlashcard
} = require("../controllers/flashcardController");

router.post("/", addFlashcard);
router.get("/", getFlashcards);
router.put("/:id", updateFlashcard);
router.delete("/:id", deleteFlashcard);

module.exports = router;
