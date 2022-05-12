'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.listAllTasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) res.status(400).send(err);
    res.status(200).json(task);
  });
};

exports.createNewTask = function (req, res) {
  const newTask = new Task(req.body);
  newTask.save(function (err, task) {
    if (err) console.log(res.status(400).send(err));
    res.status(200).json(task);
  });
};

exports.readTaskById = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.status(400).json({
        message: 'Task not found'
      }),
        send(err);
    res.status(200).json(task);
  });
};

exports.updateTaskById = function (req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.status(400).send(err);
      res.status(200).json(task);
    }
  );
};

exports.deleteTaskById = function (req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function (err, task) {
      if (err) res.status(400).send(err);
      res.status(200).json({ message: 'Task successfully deleted' });
    }
  );
};
