'use strict';

var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send("Listening!! Port 3000!!");
});

app.listen(3000);
