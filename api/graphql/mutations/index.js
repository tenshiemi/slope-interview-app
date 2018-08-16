// @flow
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from "graphql";

import getStorage from "../../storage";
import getModels from "../models";

import type { IProject } from "../../storage";

export default function() {
  const models = getModels();

  return new GraphQLObjectType({
    name: "ProjectBuilderMutations",
    description: "The mutations available for the project builder",
    fields: () => ({
      createProject: {
        description: "Create a project & its tasks",
        type: models.Project,
        args: {
          name: {
            description: "The name of the project to create",
            type: new GraphQLNonNull(GraphQLString)
          },
          description: {
            description: "The description of the project to create",
            type: new GraphQLNonNull(GraphQLString)
          },
          collectionId: {
            description: "The description of the project to create",
            type: new GraphQLNonNull(GraphQLString)
          },
          tasks: {
            description: "Tasks that belong to the project",
            type: new GraphQLList(models.TaskInput)
          }
        },
        resolve: (_, args: IProject) => getStorage().createProject(args)
      }
    })
  });
}
