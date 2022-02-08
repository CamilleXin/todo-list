
function routes(app) {
  app.use('/data', require('./api-list'));
}

module.exports = routes;
