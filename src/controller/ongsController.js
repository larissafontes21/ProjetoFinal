const OngsModel = require("../models/ongsModel");

const findAllOngs = async (req, res) => {  //done - teste ok
  try {
    const allOngs = await OngsModel.find();
    res.status(200).json(allOngs);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

/*const findConsoleById = async (req, res) => {
  try {
    const findConsole = await ConsolesModel.findById(req.params.id);
    res.status(200).json(findConsole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
}; */

const addNewOng = async (req, res) => {  //done - teste ok
  try {
    const {
      nome,
      representante,
      email,
      senha,
      endereco,
      telefone,
      site,
      area,
      descricao,
    } = req.body;
    const newOng = new OngsModel({
        nome,
        representante,
        email,
        senha,
        endereco,
        telefone,
        site,
        area,
        descricao,
    });

    const savedOng = await newOng.save();

    res.status(201).json({ message: "Nova Ong cadastrada com sucesso!", savedOng });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  };
};

const updateOng = async (req, res) => { //done - teste ok 
  try {
    const {
        nome,
        representante,
        email,
        senha,
        endereco,
        telefone,
        area,
        descricao,
    } = req.body;
    const updateOng = await OngsModel.findByIdAndUpdate(req.params.id, {
        nome,
        representante,
        email,
        senha,
        endereco,
        telefone,
        area,
        descricao,
    });

    res.status(200).json({ message: "Ong atualizada com sucesso!" });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const deleteOng = async (req, res) => { //done - teste ok 
  try {
    const { id } = req.params;
    const deleteOng = await OngsModel.findByIdAndDelete(id);
    const message = `Ong com o id ${deleteOng.nome} foi deletada com sucesso`;
    res.status(200).json({ message });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
    findAllOngs,
    addNewOng,
    updateOng,
    deleteOng,
};