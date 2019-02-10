var mongoose = require('mongoose');
var Event = require('../models/event.js');
mongoose.connect('mongodb://localhost/bunchride', { useNewUrlParser: true });

var db = mongoose.connection;

module.exports.db = db;
module.exports.event = Event;
