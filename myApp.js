let express = require('express');
let app = express();

app.get('/', function(req, res) {
    console.log('"Hello World"');
    res.send('Hello World');
  });

console.log('"Hello World"');

module.exports = app;






























 module.exports = app;
