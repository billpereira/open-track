const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  nomeDoEvento: String,
  local: String,
  descricao: String,
  trilhas: [{
    nome: String,
    slot: [{
      titulo: String,
      horario: String,
      descricao: String,
    }],
  }],
});

module.exports = mongoose.model('Evento', EventoSchema);
