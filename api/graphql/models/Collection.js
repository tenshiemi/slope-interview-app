const {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const Project = require('./Project');

const Collection = new GraphQLObjectType({
  name: 'Collection',
  description:
    'A grouping of related projects. For example, all projects for the marketing departments',
  fields: () => ({
    id: {
      description: 'The id of the collection',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      description: 'The name of the collection',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      description: 'The description of the collection',
      type: GraphQLString,
    },
    projects: {
      description: 'The projects that belong to a collection',
      type: new GraphQLList(Project),
      resolve: collection => {
        return db.all(
          `
          SELECT * FROM Project WHERE collectionId = $collectionId
          `,
          { $collectionId: collection.id },
        );
      },
    },
  }),
});

module.exports = Collection;
