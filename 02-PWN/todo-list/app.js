const  chalk = require('chalk');
const yargs = require('yargs');
const task = require('./task');

// alterando a versão do CLI
yargs.version('1.0.1');

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder: {
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        }, 
        description: {
            describe: 'Task description',
            demandOption: true,
            type: 'string'
        }, 
        type: {
            describe: 'Task type',
            type: 'string',
            default: 'BACKLOG'
        }
    },
    handler: (argv) => {
        const info = chalk.green.bold.inverse('Creating a new task: ');
        console.log(info);
        task.addTasks(argv.name, argv.description);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    builder: {
        name: {
            describe: 'Task name to be removed',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(chalk.red.bold.inverse('Removing a existing task'));
        task.removeTask(argv.name)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all tasks',
    handler: () => {
        console.log(chalk.blue.bold.inverse('Listing out all tasks'));
        const tasks = task.loadAllTasks();
        const allTasksJSON = JSON.stringify(tasks, null, 2);
        console.log(allTasksJSON);
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a task from the ToDo list',
    builder: {
        name: {
            describe: 'Task to find',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(chalk.yellow.bold.inverse('Reading a task'));
        const taskFound  = task.findTask(argv.name);
        console.log(JSON.stringify(taskFound, null, 2));
    }
})

yargs.command({
    command: 'update',
    describe: 'Update a task',
    builder: {
        name: {
            describe: 'Task to find',
            type: 'string',
            demandOption: true
        }, 
        status: {
            describe: 'Status to update the task',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        console.log(chalk.white.bold.inverse('Updating a task'));
        task.updateTask(argv.name, argv.status);
    }
})

yargs.parse()