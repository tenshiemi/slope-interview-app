const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const { graphql, GraphQLSchema } = require('graphql');

const queries = require('../api/graphql/queries')();
const mutations = require('../api/graphql/mutations')();

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const Schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});

app.use( '/api/graphql', graphqlHTTP((req, res, graphQLParams) => ({
    schema: Schema,
    graphiql: true,
  }))
);

app.listen(process.env.PORT || 8080);
