'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
  res.send("<h1>I am listening!! Port 3000!!</h1>");
});

app.get('/blog', function(req, res) {
  res.send(posts);
});

app.listen(3000, function() {
  console.log("The FRONTEND server is listening on port 3000!!")
});
