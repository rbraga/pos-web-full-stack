const path = require('path')
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/cotacoes', (req, res) => {
    const cotacao = { 
        symbol: 'PETR4.SA',
        price_open: 10,
        price: 12,
        day_high: 13,
        day_low: 9
    };

    const cotacoes = new Array();
    cotacoes.push(cotacao);
    cotacoes.push(cotacao);

    res.send(cotacoes);
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});
