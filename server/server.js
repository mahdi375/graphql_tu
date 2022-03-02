import fs from "fs";
import { ApolloServer, gql } from "apollo-server";
import resolvers from "./logics.js";

/**
 *
 * GraphQL applications consist of two primary components: a schema of type defini‐
 * tions and resolvers, which resolve the queries and mutations performed against the
 * data.
 *
 */

// Construct a schema, using GraphQL schema language
const typeDefs = gql(fs.readFileSync("./schema.graphql", { encoding: "utf8" }));

// Provide resolver functions for our schema fields

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 }).then((serverInfo) => {
  console.log(serverInfo.url);
});
