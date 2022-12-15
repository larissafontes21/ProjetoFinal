const controller = require("../controller/ongsController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllOngs);

router.get("/area", controller.findOngByArea);

router.post("/add", controller.addNewOng);

router.patch("/:id", controller.updateOng);

router.delete("/:id", controller.deleteOng);

module.exports = router;