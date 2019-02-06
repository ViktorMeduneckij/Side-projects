var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('./db/mongoose_con.js');
var eventRoute = require('./routes/event.js');

//Handle routes.
app.get('/api/v.1.0/events', eventRoute.getAllEvents)
app.get('/create-event', eventRoute.createEventForm);
app.post('/submit-create-event', eventRoute.submitEventForm)

app.listen(3000);