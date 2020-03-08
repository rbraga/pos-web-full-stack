const cotacao = require('./util/cotacao');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.0.0');

// cotacao('PETR4.SA', (data) => {
//     console.log(data);
// })

yargs.command({
    command: 'cotacao',
    describe: 'Obter cotação do dia da bolsa de valores',
    builder: {
        codigo: {
            describe: 'Código do Ativo a ser consultado',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        cotacao(argv.codigo, ({price_open, close_yesterday, day_high, day_low}) => {
            console.log(chalk.yellow.bold.inverse(`Cotação do dia [${argv.codigo}]:`));
            console.log(chalk.green.bold(`Abertura: R$ ${price_open}`));
            console.log(chalk.green.bold(`Fechamento: R$ ${close_yesterday}`));
            console.log(chalk.blue.bold(`Alta: R$ ${day_high}`));
            console.log(chalk.red.bold(`Baixa: R$ ${day_low}`));
        })
    }
})

yargs.parse();