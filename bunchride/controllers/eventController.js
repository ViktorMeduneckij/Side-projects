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
  console.log(req.body);
  const event = new eventModel.event({
    title: req.body.title,
    start: req.body.startDate,
    end: req.body.endDate,
    allDay: false,
    type: req.body.type,
    city: req.body.city,
    level: req.body.level,
    speed: req.body.speed,
    start_location: req.body.startLocation,
    distance: req.body.distance,
    generalInfo: req.body.generalInfo,
    subscribers: [],
  });

  event.save(function(err) {
    if (err) {
      console.log(err);
      res.status(404).send();
      return;
    }
    else {
      res.send(200);
    }
  });
};

module.exports.getEvent = function(req, res) {
  eventModel.event.findById(req.params.id, function(err, event){
    if (err) return console.log(err);

    res.send(event);
  });
} 

function subscribeEvent(req, res, exists) {
  var subExists = exists;
  console.log('subExists value that im working with:', subExists);
  if (!subExists) {
    console.log('I am not waiting for subExists value.');
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

module.exports.checkIfSubscriberExists = function(req, res) {
  var exists = null;
  eventModel.event.findById(req.params.id)
    .then(result => {
      for (var i = 0; i < result.subscribers.length; i++) {
        if (result.subscribers[i].name == req.params.name) {
          console.log('This name exists in subscribers array.');
          exists = true;
        }
        else {
          console.log('There is no such name in subscribers array');
          exists = false;
        } 
      }
    })
    .then(() => {
      subscribeEvent(req, res, exists);
    })
}

module.exports.updateEvent = function(req, res, next) {
  eventModel.event.findById(req.params.id, function(err, event){
    if (err) console.log(err);
    res.render('forms/edit_event_form', {
      id: event._id,
      title: event.title,
      startDate: event.start,
      endDate: event.end,
      type: event.type,
      city: event.city,
      level: event.level,
      speed: event.speed,
      startLocation: event.start_location,
      distance: event.distance,
      generalInfo: event.generalInfo,
    });
  });
}

module.exports.submitEventEditForm = function(req, res, next) {
  console.log(req.body);
  eventModel.event.findByIdAndUpdate(req.params.id.trim(), { $set: { 
    title: req.body.title,
    start: req.body.startDate,
    end: req.body.endDate,
    type: req.body.type,
    city: req.body.city,
    level: req.body.level,
    speed: req.body.speed,
    start_location: req.body.startLocation, 
    distance: req.body.distance,
    generalInfo: req.body.generalInfo,
  }}, function(err, event) {
    if (err) {
      res.status(404).send();
      return;
    } 
    res.send(200);
  });
};