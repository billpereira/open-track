const { buildSchema } = require('graphql');
const { User, UserInput } = require('./users');
const {
  Slot,
  Trilha,
  Evento,
  EventoInput,
  SlotInput,
  TrilhaInput,
} = require('./eventos');

module.exports = buildSchema(`

  ${User}

  ${UserInput}

  ${Slot}

  ${Trilha}

  ${Evento}

  ${EventoInput}
  ${TrilhaInput}
  ${SlotInput}

  type RootQuery {
    users: [User]!
    eventos: [Evento]!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
    createEvent(eventInput: EventoInput): Evento
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

`);
