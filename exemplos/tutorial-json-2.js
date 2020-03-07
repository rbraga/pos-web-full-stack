const fs = require('fs');

const carro = {
    name: 'HR-V',
    brand: 'Honda',
    color: 'White',
    year: 2020
}

const carroJSON = JSON.stringify(carro);

fs.writeFileSync('carro.json', carroJSON);

const carroContent = fs.readFileSync('carro.json');

const carroDeVoltaComoObjeto = JSON.parse(carroContent.toString());

carroDeVoltaComoObjeto.name = 'Civic';
carroDeVoltaComoObjeto.year = 2018;

carroJSONAlterado = JSON.stringify(carroDeVoltaComoObjeto);

fs.writeFileSync('carro.json', carroJSONAlterado);