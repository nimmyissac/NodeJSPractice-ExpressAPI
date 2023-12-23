const express = require('express');

const messagesRouter = express.Router();
const messagesController = require('../controllers/messages.controller.js')

messagesRouter.get('/', (req, res) => messagesController.getMessages(req, res))
messagesRouter.post('/', (req, res) => messagesController.addMessage(req, res))

module.exports = messagesRouter;