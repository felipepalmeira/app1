const express = require('express');
const app = express();

const port = 3001;

app.get('/', (req, resp) => {
    resp.send('Resposta da API 1');
})

app.listen(port, () => {
    console.log('API escutando a porta' + port);
})