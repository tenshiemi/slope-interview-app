const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const sqlite3 = require('sqlite3');
const { graphql, GraphQLSchema } = require('graphql');
const { promisify } = require('bluebird');

const db = require('../db');

const queries = require('../api/graphql/queries')();
const mutations = require('../api/graphql/mutations')();

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const Schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});

app.get('/ping', (req, res) => {
  return res.send('pong pong');
});

app.get('/api/collections', (req, res) => {
  return res.send('boo');
});

app.use( '/graphql', graphqlHTTP((req, res, graphQLParams) => ({
    // context: { db },
    schema: Schema,
    graphiql: true,
    // rootValue: { graphQLParams, db },
  }))
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
