// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/api/choices", function(request, response) {
  response.sendFile(__dirname + '/data/choices.json');
});

app.get("/api/options", function(request, response) {
  response.sendFile(__dirname + '/data/options.json');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
