'use strict';

module.exports = app => {
  app.head('/api/*', app.controller.api.head)
  app.options('/api/*', app.controller.api.options)
  app.get('/api/*', app.controller.api.get)
  app.put('/api/*', app.controller.api.put)
  app.post('/api/*', app.controller.api.post)
  app.patch('/api/*', app.controller.api.patch)
  app.del('/api/*', app.controller.api.del)
  app.get('/', app.controller.home.index)
};
