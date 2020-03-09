const path = require('path')
const express = require('express');
const hbs = require('hbs')
const cotacoes = require('./util/cotacao')

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Cotações',
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
        title: 'Ajuda',
        author: 'Rafael Braga'
    });
})

app.get('/cotacoes', (req, res) => {
    if(!req.query.ativo) {
        const error = {
            message: 'O ativo deve ser informado'
        }
        return res.status(400).json(error);
    }

    const symbol = req.query.ativo.toUpperCase();

    cotacoes(symbol, (data,err) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        console.log(data);
        res.status(200).json(data);
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Não existe página depois de /help.',
        author: 'Rafael Braga'
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Página não encontrada.',
        author: 'Rafael Braga'
    });
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
});
