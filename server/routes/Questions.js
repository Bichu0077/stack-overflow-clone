const express = require("express");

const {
  AskQuestion,
  getAllQuestions,
  deleteQuestion,
  voteQuestion,
} = require("../controllers/Questions");

const auth = require("../middleware/auth");

const router = express.Router();

router.post("/Ask", auth, AskQuestion);
router.get("/get", getAllQuestions);
router.delete("/delete/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQuestion);

module.exports = router;
