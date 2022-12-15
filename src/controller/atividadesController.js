const AtividadesModel = require("../models/atividadesModel");
const OngsModel = require("../models/ongsModel");

const findAllAtividades = async (req, res) => { //done - test ok
  try {
    const allAtividades = await AtividadesModel.find().populate("ong");
    res.status(200).json(allAtividades);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const addNewAtividade = async (req, res) => {  //done - test ok
  try {
    const {
      ongId,
      atividade,
      area,
      atendimentoOnline,
      descricao,
      site,
    } = req.body;

    if (!ongId) {
      return res
        .status(400)
        .json({ message: "Required: Enter the Console id." });
    };

    const findOng = await OngsModel.findById(ongId);

    if (!findOng) {
      return res.status(404).json({ message: "Ong not found" });
    };

    const newAtividade = new AtividadesModel({
      ong: ongId,
      atividade,
      area,
      atendimentoOnline,
      descricao,
      site,
    });
    const savedAtividade = await newAtividade.save();
    res
      .status(200)
      .json({ message: "Nova atividade cadastrada com sucesso!", savedAtividade });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateAtividade = async (req, res) => {  //done / teste ok - erros não mostram msg
  try {
    const { id } = req.params;
    const {
     atividade,
    atendimentoOnline,
    descricao,
    site,
    } = req.body;
    const findAtividade = await AtividadesModel.findById(id);
    if (findAtividade == null) {
      res.status(404).json({ message: "Atividade não encontrada" });
    };

    findAtividade.atividade = atividade || findAtividade.atividade;
    findAtividade.atendimentoOnline = atendimentoOnline || findAtividade.atendimentoOnline;
    findAtividade.descricao = descricao || findAtividade.descricao;
    findAtividade.site = site || findAtividade.site;
    
    const savedAtividade = await findAtividade.save();
    res.status(200).json({ message: "Atividade atualizada com Sucesso", savedAtividade });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const deleteAtividade = async (req, res) => { //done / teste ok -
    try{
    const { id } = req.params;
    const findAtividades = await AtividadesModel.findById(id);

    if (findAtividades == null) {
      return res.status(404).json({ message: `Atividade com o id ${id} não encontrada` })
    };
    await findAtividades.remove();
    res.status(200).json({ message: `Atividade com o id ${id} foi excluída com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};


module.exports = {
findAllAtividades,
addNewAtividade,
updateAtividade,
deleteAtividade,
};