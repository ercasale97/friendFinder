// dependencies
var path = require('path');

// routing
module.exports = function(app){
    app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../../public/survey.html'));
	});

	// poor you. go home if there's no match :-(
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../../public/home.html'));
	});

}