


var express = require('express');
var port = 3000;
var app = express();

app.get('/hello/:name', function(request, response) {
	response.send(`hello ${request.params.name}!`);
});

app.get('/applebes/beer', (request, response) => {
	response.send('beer');
});



app.listen(port, function () {
	console.log(`Example app listening on $(port)!`);
});


