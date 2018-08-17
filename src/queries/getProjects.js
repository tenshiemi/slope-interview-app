/**
 * Create the request body to retrieve a collection
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getProjects(collectionId) {
  return {
    query: [
      'query projects($collectionId: String!) {',
      '  projects(collectionId: $collectionId) {',
      '    id',
      '    name',
      '    description',
      '      tasks {',
      '        id',
      '        name',
      '        description',
      '        type',
      '        dueDate',
      '        projectId',
      '      }',
      '  }',
      '}',
    ].join(''),
    variables: { collectionId: collectionId },
  };
}

export default getProjects;
