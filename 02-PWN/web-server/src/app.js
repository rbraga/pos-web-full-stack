const path = require('path')
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Bem vindo ao sistema de cotações',
        author: 'Rafael Braga'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre',
        author: 'Rafael Braga'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Ajuda'
    });
})

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
