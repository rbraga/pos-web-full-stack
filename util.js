// criar uma função que recebe um parametro
// log.txt
// se o arquivo não existe deve-se criar o log.txt
// se o arquivo existe, deve=se adicionar o conteúdo enviado por par em uma nova linha
// adicionar no log a data e hora que foi gravado

// data -> conteúdo

const fs = require('fs');
const logFileName = 'log.txt';



const log = (content) => {
    const currentDate = new Date();
    fs.appendFileSync(logFileName, `${currentDate} -> ${content}\n`);
}

module.exports = log;