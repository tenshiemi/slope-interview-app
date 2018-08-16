const Collection = require('./Collection');
const Project = require('./Project');
const Task = require('./Task');
const TaskInput = require('./TaskInput');

const models = {};
function getModels() {
  if (!models.Collection) {
    models.Collection = Collection;
    models.Project = Project;
    models.Task = Task;
    models.TaskInput = TaskInput;
  }

  return models;
}

module.exports = getModels;
