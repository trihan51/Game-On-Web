module.exports = function(app) {
	var ServerMessage = require('../controllers/servermessage.server.controller');

	app.get('/api/servermessage', ServerMessage.returnMessage);
}