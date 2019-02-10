var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('./db/mongoose_con.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
require('./routes/event.js')(app);


//Additional libraries.
app.get('/datepickerjs', function(req, res) {
  res.sendFile(__dirname + '/node_modules/js-datepicker/dist/datepicker.min.js');
});

app.get('/datepickercss', function(req, res) {
  res.sendFile(__dirname + '/node_modules/js-datepicker/dist/datepicker.min.css');
});

app.listen(3000);