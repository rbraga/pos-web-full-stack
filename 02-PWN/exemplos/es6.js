const name = 'Rafael';
const age = 34
const country = 'Brazil'

const pessoa = {
    name,
    idade: age,
    pais: country
}

// console.log(pessoa);

// const idade = pessoa.idade;
// const pais = pessoa.pais;

const { idade, pais, cidade = 'Campo Grande'} = pessoa;

// console.log(idade);
// console.log(pais);
// console.log(cidade);

const save = ({name, idade}) => {
    console.log(name);
    console.log(idade);
}

save(pessoa);