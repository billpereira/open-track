module.exports = {
  User: `
  type User {
    _id: ID!,
    nome: String!,
    foto: String!,
    senha: String!,
    email: String!,
  }
  `,
  UserInput: `
  input UserInput{
    nome: String!,
    foto: String,
    senha: String!,
    email: String!,
  }
  `,

};
