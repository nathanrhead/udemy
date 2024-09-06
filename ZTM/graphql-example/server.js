const express = require('express');
// const { buildSchema } = require('graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', { extensions: ['graphql'] });
const resolversArray = loadFilesSync('**/*', { extensions: ['resolvers.js'] });

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

module.exports = {
  server: app,
  start: port => {
    if (!port) throw new Error('The port is missing.');
    app.listen(port, () => console.log('Running GraphQL Server.'));
  }
}
