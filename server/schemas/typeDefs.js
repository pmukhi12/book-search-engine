const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: Array
  }
  type Book {
    bookId: String
    authors: Array
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
      token: String
      user: User
  }
  type Query {
    getMe: [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: Array!, description: String!, bookId: Integer!,  image: String!, link: String!): User
    removeBook(bookId: Integer!): User
  }
`;

module.exports = typeDefs;

