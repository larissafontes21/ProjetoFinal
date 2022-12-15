const controller = require('../controller/atividadesController');
const express = require('express');

const router = express.Router();

router.get("/all", controller.findAllAtividades);

router.post("/add", controller.addNewAtividade);

router.patch("/:id", controller.updateAtividade);

router.delete("/:id", controller.deleteAtividade);

module.exports = router