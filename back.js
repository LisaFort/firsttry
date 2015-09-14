var app = require('express')();

var server = app.listen('7777');
console.log("It's on, m8!");

app.get('/', function(req, res) {
	res.send("Today is a sunny day! ");
})

//app.post('/', function(req, res) {
//	res.send
//})
