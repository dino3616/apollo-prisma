import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

const port = process.env.PORT || 3000;
server.listen(port).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Apollo Server ready at ${url} 🚀`);
});
