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
    pizza: Pizza # field: type
    user: User
  }

  type Pizza {
    # id: ID! # unique required identifier
    title: String! # non-nulable
    priece: Float # nullable
  }

  type User {
    name: String
    age: Float
  }
`;

// Provide resolver functions for our schema fields
const resolvers = {
  // Query  object
  Query: {
    pizza: () => {
      return {
        title: "special pizza",
        priece: null, //
      };
    },
    user: () => {
      return {
        name: "mahdi",
      };
    },
  },

  // Pizza: {
  //   title: () => "pizza titaleeee",
  //   priece: () => 345,
  // },

  // User: {
  //   name: () => "mahdi",
  //   age: () => 27,
  // },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 }).then((serverInfo) => {
  console.log(serverInfo.url);
});
