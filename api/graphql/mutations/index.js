const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const getModels = require('../models');
const db = require('../../../db');

const mutations = function() {
  const models = getModels();

  return new GraphQLObjectType({
    name: 'ProjectBuilderMutations',
    description: 'The mutations available for the project builder',
    fields: () => ({
      createProject: {
        description: 'Create a project & its tasks',
        type: models.Project,
        args: {
          collectionId: {
            description: 'The description of the project to create',
            type: new GraphQLNonNull(GraphQLString),
          },
          description: {
            description: 'The description of the project to create',
            type: new GraphQLNonNull(GraphQLString),
          },
          name: {
            description: 'The name of the project to create',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { collectionId, description, name, tasks }) {
          return db.get(
            `
          INSERT INTO Project('collectionId', 'description', 'name') VALUES ($collectionId, $description, $name)
          `,
            { $collectionId: collectionId, $description: description, $name: name },
          );
        },
      },
    }),
  });
};

module.exports = mutations;
