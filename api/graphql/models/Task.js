const { GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql');

const Task = new GraphQLObjectType({
  name: 'Task',
  description: 'A task that needs to be done in order to complete the project',
  fields: () => ({
    id: {
      description: 'The id of the task',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      description: 'The description of the task',
      type: GraphQLString,
    },
    dueDate: {
      description: 'The time that the task is due',
      type: GraphQLString,
    },
    name: {
      description: 'The name of the task',
      type: new GraphQLNonNull(GraphQLString),
    },
    projectId: {
      description: 'The id of the project this task is in',
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      description: 'The type of task this is',
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = Task;
