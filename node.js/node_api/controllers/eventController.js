var bodyParser = require('body-parser');
var eventModel = require('../models/event.js');
var errorHelper = require('mongoose-error-helper').errorHelper;


//Helper function to retreive all events.
module.exports.getAllEvents = function retreiveEvents(req, res) {
  eventModel.event.find(function(err, events){
    if (err) return console.log(err);

    res.send(events);
  });
}

//Helper function to initiate event creation form.
module.exports.createEventForm = function(req, res) {
  res.render('forms/create_event_form');
};

//Helper function to handle event form submit.
module.exports.submitEventForm = function(req, res, next) {

  const event = new eventModel.event({
    title: req.body.title,
    date: req.body.date,
    type: req.body.type,
    city: req.body.city,
    level: req.body.level,
    start_time: req.body.startTime,
    start_location: req.body.startLocation,
    distance: req.body.distance
  });

  event.save(function(err) {
    if (err) {
      res.render('forms/create_event_form', {errors: errorHelper(err, next)});
    } else {
      res.render('status/success');
    }
  });
};
