/**
 * Create the request body to retrieve a collection
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getCollection(id) {
  return {
    query: [
      'query collection($id: String!) {',
      '  collection(id: $id) {',
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
    variables: { id: id },
  };
}

export default getCollection;
