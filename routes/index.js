var checkAuth = require('middleware/checkAuth');
var loadVisit = require('middleware/loadVisit');
var loadTrainingWeek = require('middleware/loadTrainingWeek');

module.exports = function(app) {
	
	app.get('/', require('./frontpage').get);

	app.get('/personal', checkAuth, loadVisit, loadTrainingWeek, require('./personal').get);

	app.post('/visit', require('./personal').post);

	app.get('/login', require('./login').get);

	app.post('/login', require('./login').post);

	app.post('/logout', require('./logout').post);

	//app.get('/chat', checkAuth, require('./chat').get);
};