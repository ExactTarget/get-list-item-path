//use this for Heroku

var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 9001));
app.use(express.static(path.join(__dirname, '../')));

app.listen(app.get('port'), function () {
	console.log("Node app is running at http://localhost:" + app.get('port') + '/tests/');
});