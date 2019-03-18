const controllers = require('./controllers.js');

module.exports = app => {

  app
    .get('/api/tasks', controllers.getAllTasks)
    .get('/api/tasks/:id', controllers.getOneTask)
    .post('/api/tasks', controllers.createTask)
    .put('/api/tasks/update/:id', controllers.updateTask)
    .delete('/api/tasks/:id', controllers.deleteTask);
}
