const path = require('path');


function addMessage(req, res) {
    return res.send('Updating messages');
}

function getMessages(req, res) {
    const filePath = path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg');
    return res.sendFile(filePath);
}


module.exports = { getMessages, addMessage }