const fs = require('fs');
const chalk = require('chalk');

const addTasks = function(name, description) {

    const tasks = loadAllTasks();
    const duplicatedTask = tasks.find((task) => task.name == name);

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
    const tasksToKeep = tasks.filter((task) => task.name !== name)

    saveTask(tasksToKeep);
    console.log(chalk.green.bold(`Task [${name}] has been removed!`));   
}

const findTask = function(name) {
    const tasks = loadAllTasks();
    const taskFound = tasks.find((task) => task.name === name)

    if (taskFound !== undefined){
        return taskFound;
    } else {
        return {};
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

const updateTask = function(name, status) {
    const tasks = loadAllTasks();

    tasks.find((task) => {
        if (task.name === name){
            task.status = status;
        }
    })

    saveTask(tasks);

    console.log(chalk.green.bold(`Task status with name ${name} has been updated!`));
}

module.exports = {
    addTasks,
    loadAllTasks,
    removeTask,
    findTask,
    updateTask
}