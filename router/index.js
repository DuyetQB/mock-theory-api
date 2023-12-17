const { startNewExam, answersExam, getUserExamProgress } = require("../controller/index");

const express = require("express");
const router = express.Router();

router.get("/api/v1/get", getUserExamProgress);
router.post("/api/v1/exam-sessions/:type", startNewExam);
router.post("/api/v1/answers", answersExam);

module.exports = router;
