const { ApolloServer, gql } = require("apollo-server");

// type definition (Schema)
const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello graphQL world :)",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 }).then((serverInfo) => {
  console.log(serverInfo.url);
});
