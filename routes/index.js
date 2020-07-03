var express = require('express');
var router = express.Router();
let Server = require('../controllers/Server');

router.get('/', function(req, res, next) {
    res.send('Home');
});

router.post('/createServer', function(req, res, next) {
    let server = req.body;
    let socketServer = new Server(server.name, server.image, server.endpoint, server.rooms);
    socketServer.createSocketIoNamespace();
});

module.exports = router;
