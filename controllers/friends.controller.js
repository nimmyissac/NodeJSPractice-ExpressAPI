
const friends = require('../model/friends.model.js');

function getFriends(req, res) {
    return res.json(friends);
}

function getFriend(req, res) {
    let friend = req.params.id;
    return res.json(friends.filter(friend => {
        return friend["id"] === req.params.id
    }));
}

function addFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }

    let friendName = req.body.name;

    friends.push({ id: friends.length, name: friendName });
    return res.json(friends);
}



module.exports = { getFriends, getFriend, addFriend };