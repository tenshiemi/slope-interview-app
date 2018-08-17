/**
 * Create the request body to retrieve a project
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getProject(id) {
  return {
    query: [
      'query project($id: String!) {',
      '  project(id: $id) {',
      '    id',
      '    name',
      '    description',
      '    collectionId',
      '    tasks {',
      '      id',
      '      name',
      '      description',
      '      type',
      '      dueDate',
      '      projectId',
      '    }',
      '  }',
      '}',
    ].join(''),
    variables: { id: id },
  };
}

export default getProject;
