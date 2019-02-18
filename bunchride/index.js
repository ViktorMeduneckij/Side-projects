var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('./db/mongoose_con.js');
var path = require('path');

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
require('./routes/event.js')(app);
require('./routes/home.js')(app);

//Additional libraries.
app.get('/airpickerjs', function(req, res) {
  res.sendFile(__dirname + '/node_modules/air-datepicker/dist/js/datepicker.min.js');
});
app.get('/airpickerlanguagejs', function(req, res) {
  res.sendFile(__dirname + '/node_modules/air-datepicker/dist/js/i18n/datepicker.en.js');
});
app.get('/airpickercss', function(req, res) {
  res.sendFile(__dirname + '/node_modules/air-datepicker/dist/css/datepicker.min.css');
});

app.listen(3001);