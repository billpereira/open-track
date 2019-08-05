const User = require('../../models/users');

module.exports = {
  users: () => User.find(),
  user: (_, { id }) => User.findById(id),
  createUser: ({
    userInput,
  }) => User.create(userInput),
};
