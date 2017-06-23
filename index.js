var express = require('express');
var path = require('path');
var app = express();

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var port = 3000;
app.listen(port, function() {
  console.log("http://localhost:" + port);
});
