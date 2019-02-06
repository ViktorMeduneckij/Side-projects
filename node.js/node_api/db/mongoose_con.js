var mongoose = require('mongoose');
var Event = require('../models/event.js');
mongoose.connect('mongodb://localhost/bunchride');

var db = mongoose.connection;

module.exports.db = db;
module.exports.event = Event;
