const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controller/user');

router.post("/PostUser", userController.postUser)

router.get("/getUsers", userController.getUser)

router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;