const Koa = require('koa');
const mount = require('koa-mount');
const graphQLHttp = require('koa-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = new Koa();

mongoose.connect('mongodb://mongo:27017/open-track', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.use(mount('/graphql', graphQLHttp({
  schema,
  rootValue: resolvers,
  graphiql: true,
})));

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(5000);
