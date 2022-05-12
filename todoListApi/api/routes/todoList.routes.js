'use strict';
module.exports = function (app) {
  const {
    listAllTasks,
    createNewTask,
    readTaskById,
    updateTaskById,
    deleteTaskById
  } = require('../controllers/todoList.controller');

  // todoList Routes
  app
    .route('/tasks')
    .get(listAllTasks)
    .post(createNewTask);

  app
    .route('/tasks/:taskId')
    .get(readTaskById)
    .put(updateTaskById)
    .delete(deleteTaskById);
};
