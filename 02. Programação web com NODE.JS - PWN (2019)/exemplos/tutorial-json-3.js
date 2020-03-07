const fs = require('fs');

const carro = {
    numeroDePortas: 5,
    brand: 'space car',
    modelo: '7.0 turbo XLTRWK',
    ano: 2019,
    cor: 'verde'
}

let carroJSON = JSON.stringify(carro);

console.log(carro);
console.log(carroJSON);

fs.writeFileSync('carro.json', carroJSON);

const carroContent = fs.readFileSync('carro.json');

const carroObject = JSON.parse(carroContent.toString());
console.log(carroObject);

carroObject.ano = 2050;
console.log(carroObject);
carroJSON = JSON.stringify(carroObject);
fs.writeFileSync('carro.json', carroJSON);