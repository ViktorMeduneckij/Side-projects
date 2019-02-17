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
    start: req.body.start,
    end: req.body.end,
    allDay: false,
    type: req.body.type,
    city: req.body.city,
    level: req.body.level,
    start_time: req.body.startTime,
    start_location: req.body.startLocation,
    distance: req.body.distance,
    subscribers: [],
  });

  event.save(function(err) {
    if (err) {
      res.render('forms/create_event_form', {errors: errorHelper(err, next)});
    } else {
      res.render('status/success');
    }
  });
};

module.exports.getEvent = function(req, res) {
  eventModel.event.findById(req.params.id, function(err, event){
    if (err) return console.log(err);

    res.send(event);
  });
} 

module.exports.subscribeEvent = function(req, res, exists) {
  var subExists = exists;
  if (!subExists) {
    console.log('vapse nelaukiu bbd');
    eventModel.event.findByIdAndUpdate(
      req.params.id,
      {$push: {"subscribers": {name: req.params.name }}},
      {safe: true, upsert: true, new : true},
      function(err, model) {
          console.log(err);
      })
    }
  else {
    console.log('remove');
    eventModel.event.findByIdAndUpdate(
      req.params.id,
      {$pull: {"subscribers": {name: req.params.name }}},
      function(err, model) {
        console.log(err);
    })
  }
}

checkIfSubscriberExists = function(req, res) {
  var exists = false;
  eventModel.event.findById(req.params.id, function(err, result) {
    for (var i = 0; i < result.subscribers.length; i++) {
      if (result.subscribers[i].name == req.params.name) {
        console.log('baigiau helpinu');
        exists = true;
      }
      else {
        console.log('baigiau helpinu neegzistuoja');
        exists = false;
      } 
    }
  }, subscribeEvent(req, res, exists));
}