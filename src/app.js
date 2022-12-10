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

module.exports = app;