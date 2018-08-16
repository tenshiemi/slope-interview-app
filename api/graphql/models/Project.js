const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const db = require('../../../db');

const Task = require('./Task');

const Project = new GraphQLObjectType({
  name: 'Project',
  description:
    'A grouping of related tasks. For example, all tasks required for a new social media campaign',
  fields: () => ({
    id: {
      description: 'The id of the project',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      description: 'The name of the project',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      description: 'The description of the project',
      type: new GraphQLNonNull(GraphQLString),
    },
    collectionId: {
      description: 'The id of the collection this project is in',
      type: new GraphQLNonNull(GraphQLString),
    },
    tasks: {
      description: 'The tasks that are in this project',
      type: new GraphQLList(Task),
      resolve: project => {
        return db.all(
          `
          SELECT * FROM Task WHERE projectId = $projectId
          `,
          { $projectId: project.id },
        );
      },
    },
  }),
});

module.exports = Project;
