const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB;

/// Apollo Server
/// type defs : Graph QL type definition
/// Resolvers : how do we resolve queries

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connection Successful");
    return server.listen({ port: 8080 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
