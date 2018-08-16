const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const db = require('../../../db');
const Collection = require('./Collection');

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
    collection: {
      description: 'The collection that this project is in',
      type: new GraphQLNonNull(Collection),
      resolve: project => {
        return db.get(
          `
          SELECT * FROM Collection WHERE id = $collectionId
          `,
          { $collectionId: project.collectionId },
        );
      },
    },
    // tasks: {
    //   description: 'The tasks that are in this project',
    //   type: new GraphQLList(models.Task),
    //   resolve: (project) =>
    //     getStorage().findTasks(project.id),
    // },
  }),
});

module.exports = Project;
