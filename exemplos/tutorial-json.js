const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Braga',
    idade: 34
}

console.log('Objeto JS');
console.log(pessoa);
console.log(pessoa.nome);

const pessoaJSON = JSON.stringify(pessoa);

console.log('JSON');
console.log(pessoaJSON);
console.log(pessoaJSON.nome);

const pessoaFromJSONToPessoa = JSON.parse(pessoaJSON);

console.log('Objeto JS de volta');
console.log(pessoaFromJSONToPessoa);
console.log(pessoaFromJSONToPessoa.nome);