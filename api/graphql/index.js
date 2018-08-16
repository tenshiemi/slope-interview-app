// @flow
import { GraphQLSchema } from "graphql";
import getModels from "./models";
import getQueries from "./queries";
import getMutations from "./mutations";

/**
 * Get the schema for the project builder
 * @return {GraphQLSchema}  the schema for the project builder
 */
let schema;
export default function() {
  if (!schema) {
    getModels();

    schema = new GraphQLSchema({
      name: "ProjectBuilderSchema",
      description: "The resources available for use in the project builder",
      query: getQueries(),
      mutation: getMutations()
    });
  }

  return schema;
}
