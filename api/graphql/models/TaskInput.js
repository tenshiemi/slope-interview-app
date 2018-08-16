const {
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLString,
} = require('graphql');

const TaskType = require('./TaskType');

const TaskInput = new GraphQLInputObjectType({
  name: 'TaskInput',
  description: 'The input to create a task',
  fields: () => ({
    name: {
      description: 'The name of the task',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      description: 'The description of the task',
      type: GraphQLString,
    },
    type: {
      description: 'The type of task this is',
      type: new GraphQLNonNull(TaskType),
    },
    dueDate: {
      description: 'The time that the task is due',
      type: GraphQLString,
    },
  }),
});

module.exports = TaskInput;
