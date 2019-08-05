module.exports = {
  Slot: `
    type Slot {
    titulo: String!
    horario: String!
    descricao: String!
  }
`,
  SlotInput: `
    input SlotInput {
    titulo: String!
    horario: String!
    descricao: String!
  }
`,
  Trilha: `
    type Trilha {
    nome: String!
    slot: [Slot!]!
  }
`,
  TrilhaInput: `
    input TrilhaInput {
    nome: String!
    slot: [SlotInput!]!
  }
`,
  Evento: `
    type Evento {
    _id: ID!
    nomeDoEvento: String!
    local: String!
    descricao: String!
    trilhas: [Trilha!]!
  }
  `,
  EventoInput: `
    input EventoInput {
    nomeDoEvento: String!
    local: String!
    descricao: String!
    trilhas: [TrilhaInput!]!
    }
  `,
};
