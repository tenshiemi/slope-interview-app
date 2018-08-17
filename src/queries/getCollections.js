/**
 * Create the request body to retrieve all collections
 * @return {Object}      the request body
 */
function getCollections() {
  return {
    query: [
      'query collections {',
      '  collections {',
      '    id',
      '    name',
      '    description',
      '    projects {',
      '      id',
      '      name',
      '      description',
      '      collectionId',
      '      tasks {',
      '        id',
      '        name',
      '        description',
      '        type',
      '        dueDate',
      '        projectId',
      '      }',
      '    }',
      '  }',
      '}',
    ].join(''),
    variables: {},
  };
}

export default getCollections;
