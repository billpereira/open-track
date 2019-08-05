const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  foto: String,
  senha: String,
});

module.exports = mongoose.model('User', UserSchema);
