import { ApolloServer, gql } from "apollo-server";

/**
 *
 * GraphQL applications consist of two primary components: a schema of type defini‐
 * tions and resolvers, which resolve the queries and mutations performed against the
 * data.
 *
 */

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  # This schema will describe a single Query named greeting that will return a string:
  type Query { # type (object)
    greeting: String # field: type
    age: Float
  }
`;

// Provide resolver functions for our schema fields
const resolvers = {
  // Query  object
  Query: {
    greeting: () => "hello graphQL world :)",
    age: () => 2.3445535,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 }).then((serverInfo) => {
  console.log(serverInfo.url);
});
