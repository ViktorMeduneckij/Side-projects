var eventController = require('../controllers/eventController.js');

//Handle routes.
module.exports = function(app) {
  app.get('/api/v.1.0/events', eventController.getAllEvents);
  app.get('/create-event', eventController.createEventForm);
  app.post('/submit-create-event', eventController.submitEventForm);
  app.get('/api/v.1.0/event/:id', eventController.getEvent);
  app.get('/api/v.1.0/event/update/:id/:name', eventController.subscribeEvent);
}
