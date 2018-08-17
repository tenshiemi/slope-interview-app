const {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const createProject = require('./createProject');
const getModels = require('../models');

const mutations = function() {
  const models = getModels();

  return new GraphQLObjectType({
    name: 'ProjectBuilderMutations',
    description: 'The mutations available for the project builder',
    fields: () => ({
      createProject: {
        description: 'Create a project & its tasks',
        type: GraphQLBoolean,
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
          tasks: {
            description: "Tasks that belong to the project",
            type: new GraphQLList(models.TaskInput)
          }
        },
        resolve(parent, args) {
          return createProject(args);
        },
      },
    }),
  });
};

module.exports = mutations;
