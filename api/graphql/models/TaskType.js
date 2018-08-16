const { GraphQLEnumType } = require('graphql');

const TaskType = new GraphQLEnumType({
  name: 'TaskType',
  description: 'Supported task types',
  values: {
    CONTENT: {
      value: 'content',
      description: 'A task for review & approval of content',
    },
    TODO: {
      value: 'todo',
      description: 'A non-content related task that needs to be completed',
    },
  },
});

module.exports = TaskType;
