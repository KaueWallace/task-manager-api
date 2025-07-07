const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).send("SERVIDOR FUNCIONANDO")
})

app.listen(PORT, () => {
    console.log(`SERVIDOR NO AR NA PORTA ${PORT}`)
})
