const mongoose = require("mongoose");

const OngSchema = mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
      nome: {
        type: String,
        required: true,
        unique: true,
      },
      representante: {
        type: String,
        required: true,
      },
      email: {
          type: String,
          required: true,
      },
      senha: {
          type: String,
          required: true,
      },
      endereco: {
          type: String,
          required: true,
      },
      telefone: {
        type: String,
        required: true,
      },
      site: {
        type: String,
        required: true,
      },
      area: {
        type: [String],
        required: true,
      },
      descricao:String,
    },
    { timestamp: true } // o q é isso mesmo?
  );

const Model = mongoose.model("Ong", OngSchema);

module.exports = Model;