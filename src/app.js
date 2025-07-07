const express = require('express');
const { sequelize } = require('./db/connect')

const app = express();
const PORT = process.env.DB_PORT;

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao tentar conexão com o banco: ', error);
  }
    res.status(200).send("SERVIDOR FUNCIONANDO")
})

app.listen(PORT, () => {
    console.log(`SERVIDOR NO AR NA PORTA ${PORT}`)
})
