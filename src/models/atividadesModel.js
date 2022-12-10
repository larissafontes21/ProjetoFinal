const mongoose = require("mongoose");

const AtividadeSchema = mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
      atividade: {
        type: String,
        required: true,
        unique: true,
      },
     /* area: {
        type: [String],
        required: true,
      },*/
      atendimentoOnline: {
        type: Boolean,
        required: true,
      },
      descricao: {
        type: String,
        required: true,
      },
      site: String,
  
      ong: { //Conectar os dois, pelo id da ong
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Ong",
      },
    },
    { timestamp: true }
  );

const Model = mongoose.model("Atividade", AtividadeSchema);

module.exports = Model;