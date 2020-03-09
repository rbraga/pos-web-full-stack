const yargs = require('yargs');
const chalk = require('chalk');
const cotacao = require('./util/cotacao');

yargs.version('1.0.0');

// cotacao('PETR4.SA', (data) => {
//     console.log(data);
// })

yargs.command({
    command: 'consulta',
    describe: 'Consulta um ativo na bolsa de valores',
    builder: {
        ativo: {
            describe: 'Ativo na bolsa de valores',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        cotacao(argv.ativo.toUpperCase(), ({price, price_open, day_high, day_low, symbol}) => {
            console.log(chalk.green.bold.inverse(`${symbol}`));
            console.log(chalk.blue.bold(`Abertura: R$ ${price_open}`));
            console.log(chalk.red.bold(`Menor valor do dia: R$ ${day_low}`));
            console.log(chalk.green.bold(`Maior valor do dia: R$ ${day_high}`));
            if(price_open > price) {
                console.log(chalk.red.bold(`Fechamento: ▼ R$ ${price}`));
            } else if (price_open === price) {
                console.log(chalk.yellow.bold(`Fechamento: R$ ${price}`));
            } else {
                console.log(chalk.green.bold(`Fechamento: ▲ R$ ${price}`));
            }
        })
    }
})

yargs.parse();