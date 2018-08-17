/**
 * Create the request body to retrieve a task
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getTask(id) {
  return {
    query: [
      'query task($id: String!) {',
      '  task(id: $id) {',
      '    id',
      '    name',
      '    description',
      '    type',
      '    dueDate',
      '    projectId',
      '  }',
      '}',
    ].join(''),
    variables: { id: id },
  };
}

export default getTask;
