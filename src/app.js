const express = require('express');
const { route} = require('./routes/usuario')
const { routeTarefa } = require('./routes/tarefa');
const { Tarefa } = require('./models/Tarefa');
const { sequelize } = require('./db/connect');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json(), route)

app.get("/", async (req, res) => {
    res.status(200).send("SERVIDOR FUNCIONANDO")
})

app.listen(PORT, () => {
    console.log(`SERVIDOR NO AR NA PORTA ${PORT}`)
})

module.exports = {
    app
}