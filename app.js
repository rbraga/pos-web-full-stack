const _ = require('lodash');
const  chalk = require('chalk');

const command = process.argv[2].toUpperCase();
const title = process.argv[3];

if (command === 'ADD') {
    console.log(chalk.green.inverse(`adding new task -> ${title}`));
} else if (command === 'REMOVE') {
    console.log(chalk.blue.inverse('removing a task'));
} else {
    console.log(chalk.red.inverse('command not found'));
}