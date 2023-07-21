const express = require('express');
const characterRouter = express.Router();
const {getCharById} = require('../controllers/getCharById');


//index Character
characterRouter.get("/:id", getCharById);


module.exports = characterRouter;