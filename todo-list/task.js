const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

const addTasks = function(name, description) {
    const tasks = loadAllTasks();

    const duplicatedTask = tasks.find(function(task){
        return task.name === name;
    })

    if (!duplicatedTask){   
            const newTask = {
                name,
                description,
                status: 'BACKLOG'
            }
        
            tasks.push(newTask);
            saveTask(tasks);
            console.log(chalk.green.bold(`Task created!`));
    } else {
        console.log(chalk.red.bold(`Task with name [${name}] already taken!`));
    }
}

const removeTask = function(name) {
    const tasks = loadAllTasks();
    const task = findTask(tasks, task);

    if (task) {   
        _.remove(tasks, function(task) {
            return task.name === name;
        });
        saveTask(tasks);
        console.log(chalk.green.bold(`Task [${name}] removed!`));
    }
}

const listAllTasks = function() {
    const tasks = loadAllTasks();
    
    if (tasks.length > 0) {
        console.log(chalk.green.bold('List of tasks:'));

        tasks.forEach(task => {
            console.log(chalk.yellow(`- ${task.name} [${task.status}]`))
        });
    } else {
        console.log(chalk.red.bold('List of tasks is empty!'))
    }
}

const findTask = function(tasks, name) {
    const task = tasks.find(function(task){
        return task.name === name;
    })

    if (!task) {
        console.log(chalk.red.bold(`Task with name [${name}] not exists!`));
    } 

    return task;
}

const readTask = function(name) {
    const tasks = loadAllTasks();
    const task = findTask(tasks, name);

    if (task) {
        console.log(chalk.green.bold(`Name: ${task.name}`));
        console.log(chalk.green.bold(`Status: ${task.status}`));
        console.log(chalk.green(task.description));
    }
}

const loadAllTasks = function() {
    try {
        const tasksBuffer = fs.readFileSync('tasks.json');
        return JSON.parse(tasksBuffer.toString());
    } catch (error) {
        return []
    }
}

const saveTask = function(task){
    const taskJSON = JSON.stringify(task);
    fs.writeFileSync('tasks.json', taskJSON);
}

module.exports = {
    addTasks,
    listAllTasks,
    removeTask,
    readTask
}