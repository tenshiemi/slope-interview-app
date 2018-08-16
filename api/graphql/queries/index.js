const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const getModels = require('../models');
const db = require('../../../db');

const queries = function() {
  const models = getModels();

  return new GraphQLObjectType({
    name: 'ProjectBuilderQueries',
    description: 'The queries available for the project builder',
    fields: () => ({
      collection: {
        description: 'Get a single collection',
        type: models.Collection,
        args: {
          id: {
            description: 'The id of the collection to retrieve',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { id }) {
          return db.get(
            `
          SELECT * FROM Collection WHERE id = $id
          `,
            { $id: id },
          );
        },
      },
      collections: {
        description: 'Get all collections',
        type: new GraphQLList(models.Collection),
        args: {},
        resolve() {
          return db.all(`SELECT * FROM Collection`);
        },
      },
      project: {
        description: 'Get a single project',
        type: models.Project,
        args: {
          id: {
            description: 'The id of the project to retrieve',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { id }) {
          return db.get(
            `
          SELECT * FROM Project WHERE id = $id
          `,
            { $id: id },
          );
        },
      },
      projects: {
        description: 'Get all the projects in a collection',
        type: new GraphQLList(models.Project),
        args: {
          collectionId: {
            description: 'The id of the collection to retrieve projects for',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { collectionId }) {
          return db.all(
            `
          SELECT * FROM Project WHERE collectionId = $collectionId
          `,
            { $collectionId: collectionId },
          );
        },
      },
      task: {
        description: 'Get a single task',
        type: models.Task,
        args: {
          id: {
            description: 'The id of the task to retrieve',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { id }) {
          return db.get(
            `
          SELECT * FROM Task WHERE id = $id
          `,
            { $id: id },
          );
        },
      },
      tasks: {
        description: 'Get the tasks that are in a project',
        type: new GraphQLList(models.Task),
        args: {
          projectId: {
            description: 'The id of the project to retrieve tasks for',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve(parent, { projectId }) {
          return db.all(
            `
          SELECT * FROM Task WHERE projectId = $projectId
          `,
            { $projectId: projectId },
          );
        },
      },
    }),
  });
};

module.exports = queries;
