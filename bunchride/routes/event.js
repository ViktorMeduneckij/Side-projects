var eventController = require('../controllers/eventController.js');

//Handle routes.
module.exports = function(app) {
  app.get('/api/v.1.0/events', eventController.getAllEvents);
  app.get('/create-event', eventController.createEventForm);
  app.post('/submit-create-event', eventController.submitEventForm)
}
