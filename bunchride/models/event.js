var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var eventSchema = new Schema({
  title: {type: String, required: true },
  start: {type: String, required: true },
  end: {type: String, required: true},
  allDay: {type: Boolean, required: true},
  type: {type: String, required: true },
  city: {type: String, validate: function(value) {
    return /^[a-zA-Z\s]*$/.test(value);
  }},
  level: {type: String, required: true },
  start_location: {type: String, required: true },
  distance: {type: Number, required: true, validate : {
    validator : Number.isInteger,
    message   : 'distance is not a number value'
  }},
  subscribers: Number

});

var Event = mongoose.model('Event', eventSchema);

module.exports.eventSchema = eventSchema;
module.exports.event = Event;
