const swaggerUi = require('swagger-ui-express')
const swaggerFile = require("../swagger/swagger_output.json")

require("dotenv-safe").config(); //* Ver esse caminho
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const ongsRoutes = require("./routes/ongsRoute");
const atividadesRoutes = require("./routes/atividadesRoute");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/saibamulher/ongs",ongsRoutes);
app.use("/saibamulher/atividades",atividadesRoutes);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;