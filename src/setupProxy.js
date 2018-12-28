const proxy = require('http-proxy-middleware');
// https://inchatbot.herokuapp.com/

module.exports = function(app) {
  app.use(proxy('/api/*',
    { target: 'http://localhost:5000/' }
  ));
}
