const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/register', userController.addProject, userController.register, (req, res) => {return res.status(200).json(res.locals);});

router.post('/login', userController.login, (req, res) => {return res.status(200).json(res.locals)})

module.exports = router;
