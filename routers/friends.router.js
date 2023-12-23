const express = require('express');

const friendsController = require('../controllers/friends.controller.js');
const friendsRouter = express.Router();

// we can also use router specific middlewares
friendsRouter.use((req, res, next) => {
    console.log('ip address ', req.ip);
    next();
})

friendsRouter.get('/', (req, res) => friendsController.getFriends(req, res));
friendsRouter.get('/:id', (req, res) => friendsController.getFriend(req, res));
friendsRouter.post('/', (req, res) => friendsController.addFriend(req, res));

module.exports = friendsRouter;