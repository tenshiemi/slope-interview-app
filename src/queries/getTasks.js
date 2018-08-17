/**
 * Create the request body to retrieve all the tasks in a project
 * @param  {Object} args an object to pick arguments from
 * @return {Object}     the request body
 */
function getTasks(projectId) {
  return {
    query: [
      'query tasks($projectId: String!) {',
      '  tasks(projectId: $projectId) {',
      '    id',
      '    name',
      '    description',
      '    type',
      '    dueDate',
      '    projectId',
      '  }',
      '}',
    ].join(''),
    variables: { projectId: projectId },
  };
}

export default getTasks;
