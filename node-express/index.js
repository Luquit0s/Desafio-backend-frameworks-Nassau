const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servido do Node ta rodando, GRAÇAS A DEUS!!!');
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});