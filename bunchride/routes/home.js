var homeController = require('../controllers/homeController.js');

//Handle routes.
module.exports = function(app) {
  app.get('/', homeController.renderHome);
}