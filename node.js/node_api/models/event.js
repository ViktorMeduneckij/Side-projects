var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: String,
  date: String,
  type: String,
  city: String,
  level: String,
  start_time: String,
  start_location: String,
  distance: String
});

var Event = mongoose.model('Event', eventSchema);

module.exports.eventSchema = eventSchema;
module.exports.event = Event;
