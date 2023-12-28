const express = require('express');

const questBoardController = require('../controllers/QuestBoardController');

const router = express.Router();

router.get(
  '/',
  /* questBoardController.addProject, */ questBoardController.addUser,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
