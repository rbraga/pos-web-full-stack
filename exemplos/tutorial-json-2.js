const fs = require('fs')

// objeto criado
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Braga',
    idade: 34
}

// converter o objeto JS em JSON
const pessoaJSON = JSON.stringify(pessoa);

// gravar em um arquivo o conteúdo
fs.writeFileSync('pessoa.json', pessoaJSON);

// recuperar o conteúdo do arquivo JSON
const pessoaContent = fs.readFileSync('pessoa.json');

console.log(pessoaContent.toString());

const pessoaDeVoltaComoObjeto = JSON.parse(pessoaContent.toString());

pessoaDeVoltaComoObjeto.nome = 'John';
console.log(pessoaDeVoltaComoObjeto);
console.log(pessoaDeVoltaComoObjeto.nome);