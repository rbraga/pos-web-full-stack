const  chalk = require('chalk');
const yargs = require('yargs');

// alterando a versão do CLI
yargs.version('1.0.1');

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    handler: function() {
        console.log(chalk.green('Creating a new task'));
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    handler: function() {
        console.log(chalk.red('Removing a existing task'));
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: function() {
        console.log(chalk.blue('Listing out all tasks'));
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    handler: function() {
        console.log(chalk.yellow('Reading a task'));
    }
})

console.log(yargs.argv);