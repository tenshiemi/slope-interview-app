const db = require('../../../db');

function createProject({ collectionId, description, name, tasks }) {
  return db.run(
    `INSERT INTO Project('collectionId', 'description', 'name') VALUES ($collectionId, $description, $name)`,
    { $collectionId: collectionId, $description: description, $name: name },
    function(err) {
      tasks.forEach(task => {
        db.run(
          `INSERT INTO Task('description', 'dueDate', 'name', 'projectId', 'type') VALUES ($description, $dueDate, $name, $projectId, $type)`,
          {
            $description: task.description,
            $dueDate: task.dueDate,
            $name: task.name,
            $projectId: this.lastID,
            $type: task.type,
          },
        );
      });

      return true;
    },
  );
}

module.exports = createProject;
