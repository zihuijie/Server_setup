import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Link {
  id: ID!
  url: Sting!
  description: String!
}
`;

export default makeExecutableSchema({ typeDefs });