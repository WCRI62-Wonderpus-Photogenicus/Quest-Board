const express = require('express');

const questBoardController = require('../controllers/QuestBoardController');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json()
})


router.get(
  '/',
  /* questBoardController.addProject, */ questBoardController.addUser,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
